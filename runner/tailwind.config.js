// import forms from "@tailwindcss/forms"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './Pages/**/*.{vue,js,ts,jsx,tsx}',
    '../packages/vue-forms/src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    // forms,
  ]
}
