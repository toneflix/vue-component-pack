/**
 * Publish every workspace package that is not already on the registry.
 *
 * Run from the repo root, after `lerna version` has bumped and committed.
 *
 * Why this exists
 * ---------------
 * The release used to run `lerna exec -- pnpm publish ...`, which publishes every
 * package unconditionally and bails on the first non-zero exit. That makes a
 * partially-completed release unrecoverable: once the registry is ahead of the
 * repo for even one package, every retry hits
 *
 *     403 You cannot publish over the previously published versions
 *
 * on that package, `lerna exec` aborts, and every package *after* it is never
 * published. That is exactly how @toneflix/vue-auth@1.20.0 was skipped — the
 * release died on @toneflix/vue-shared@0.1.14, which a previous run had already
 * pushed to npm.
 *
 * So this script does two things differently:
 *
 *   1. Skips versions already live on the registry, making the release re-runnable.
 *   2. Attempts every package and reports failures at the end, so one broken
 *      package cannot silently block the others.
 */
import { execFileSync, spawnSync } from 'node:child_process'
import process from 'node:process'

const packages = JSON.parse(
  execFileSync('npx', ['lerna', 'ls', '--json', '--toposort'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit']
  })
)

/**
 * @returns true if this exact version is already on the registry.
 */
const isPublished = (name, version) => {
  try {
    const out = execFileSync('npm', ['view', `${name}@${version}`, 'version'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    })
    return out.trim() === version
  } catch (error) {
    const stderr = String(error.stderr ?? '')

    // A 404 is the normal path for a new release: the version is not out yet.
    if (/E404|404 Not Found|is not in this registry/i.test(stderr)) {
      return false
    }

    // Anything else — auth, network, a registry outage — must not be read as
    // "needs publishing", or we would attempt a duplicate publish and fail on
    // something that had nothing to do with this package.
    throw new Error(`could not query the registry for ${name}@${version}\n${stderr.trim()}`)
  }
}

const published = []
const skipped = []
const failed = []

for (const pkg of packages) {
  const { name, version, location, private: isPrivate } = pkg

  if (isPrivate) {
    skipped.push(`${name} (private)`)
    continue
  }

  try {
    if (isPublished(name, version)) {
      console.log(`- ${name}@${version} already published, skipping`)
      skipped.push(`${name}@${version}`)
      continue
    }
  } catch (error) {
    console.error(`! ${error.message}`)
    failed.push(`${name}@${version}`)
    continue
  }

  console.log(`> publishing ${name}@${version}`)

  const result = spawnSync(
    'pnpm',
    ['publish', '--provenance', '--access', 'public', '--tag', 'latest'],
    { cwd: location, stdio: 'inherit' }
  )

  if (result.status === 0) {
    published.push(`${name}@${version}`)
  } else {
    console.error(`! ${name}@${version} failed to publish`)
    failed.push(`${name}@${version}`)
  }
}

console.log('\n--- publish summary ---')
console.log(`  published: ${published.length ? published.join(', ') : 'none'}`)
console.log(`  skipped:   ${skipped.length ? skipped.join(', ') : 'none'}`)
console.log(`  failed:    ${failed.length ? failed.join(', ') : 'none'}`)

process.exit(failed.length ? 1 : 0)
