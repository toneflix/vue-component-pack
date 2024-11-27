import { FormSlotName, MainProps, SlotName } from '../types'
import { slotNames as xFormSlotNames } from '@toneflix/vue-forms/src/utils/providers'

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
  return slug(str)
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase()
    })
}

export const formSlotNames: FormSlotName[] = xFormSlotNames.map((e) => <FormSlotName>('form-' + e))

export const slotNames: SlotName[] = [
  'list-item',
  'list-prepend',
  'list-append',
  'list-after',
  'image-viewer',
  'loader',
  'footer',
  'form-prepend',
  'form-append',
  'form-actions'
]

export const casts = {
  image: <X> (props: X) => {
    return <{ src?: string | undefined }>props
  },
  loader: <X> (props: X) => {
    return <{ loading: boolean }>props
  },
  listItem: <X> (props: X) => {
    return <{ label: string; value: string; field: string }>props
  },
  imgListItem: <X> (props: X) => {
    return <{ label: string; value: string; field: string; toggle: () => void }>props
  },
  imageViewer: <X> (props: X) => {
    return <{ close: () => void; src?: string | undefined }>props
  },
  castFormPos: <X> (props: X) => {
    return <
      {
        form?: undefined
        data?: MainProps['data']
        errors?: MainProps['errors']
      }
      >props
  },
  list: <X> (props: X) => {
    return <
      {
        data: MainProps['data']
        mode?: MainProps['mode'] | undefined
        toggle: (mode: MainProps['mode']) => void
      }
      >props
  },
  footer: <X> (props: X) => {
    return <
      {
        data: MainProps['data']
        mode?: MainProps['mode'] | undefined
        loading: boolean;
        submit: () => void;
        cancel: () => void;
        toggle: (mode: MainProps['mode']) => void
      }
      >props
  },
  form: <X> (props: X) => {
    return <
      {
        form?: undefined
        data?: MainProps['data']
        errors?: MainProps['errors']
        toggle: (mode: MainProps['mode']) => void
      }
      >props
  },
  formActions: <X> (props: X) => {
    return <{ loading: boolean; submit: () => void; cancel: () => void }>props
  }
}

export const propsCast = <X> (props: X, slot: SlotName) => {
  if (slot === 'form-append' || slot === 'form-prepend') {
    return <
      {
        form?: undefined
        data?: MainProps['data']
        errors?: MainProps['errors']
      }
      >props
  } else if (slot === 'list-prepend' || slot === 'list-append' || slot === 'list-after') {
    return <
      {
        data: MainProps['data']
      }
      >props
  } else if (slot === 'list-item') {
    return <{ label: string; value: string; field: string }>props
  }
}
