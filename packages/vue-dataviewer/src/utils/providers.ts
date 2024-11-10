export const slug = (str: string, separator: string = '_') => {
  const splitCaps = (string: string) =>
    string
      .replace(/([a-z])([A-Z]+)/g, (m: string, s1: string, s2: string) => s1 + ' ' + s2)
      .replace(
        /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/,
        (m: string, s1: string, s2: string, s3: string) => s1 + s2.toLowerCase() + s3
      )
      .replace(
        /([A-Z]+)([A-Z][a-z])/g,
        (m: string, s1: string, s2: string) => s1.toLowerCase() + ' ' + s2
      )

  return splitCaps(str)
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word: string) => word.toLowerCase())
    .join(separator)
}

export const titleCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase()
    })
}
