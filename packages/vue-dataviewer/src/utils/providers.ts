import { MainProps, type SlotName } from "../types"

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

export const slotNames: SlotName[] = [
  'form-prepend', 'form-append', 'list-item', 'list-prepend', 'list-append', 'list-after', 'image', 'loader'
]

export const casts = {
  listItem: <X> (props: X) => {
    return <{ label: string; value: string; field: string }>props
  },
  castFormPos: <X> (props: X) => {
    return <{
      form?: undefined
      data?: MainProps['data']
      errors?: MainProps['errors']
    }>props
  },
  list: <X> (props: X) => {
    return <{
      data: MainProps['data']
    }>props
  },
  image: <X> (props: X) => {
    return <{ close: () => void; src?: string | undefined }>props
  },
  loader: <X> (props: X) => {
    return <{ loading: boolean }>props
  },
  form: <X> (props: X) => {
    return <{
      form?: undefined
      data?: MainProps['data']
      errors?: MainProps['errors']
    }>props
  }
}

export const propsCast = <X> (props: X, slot: SlotName) => {
  if (slot === 'form-append' || slot === 'form-prepend') {
    return <{
      form?: undefined
      data?: MainProps['data']
      errors?: MainProps['errors']
    }>props
  } else if (slot === 'list-prepend' || slot === 'list-append' || slot === 'list-after') {
    return <{
      data: MainProps['data']
    }>props
  } else if (slot === 'list-item') {
    return <{ label: string; value: string; field: string }>props
  }
} 
