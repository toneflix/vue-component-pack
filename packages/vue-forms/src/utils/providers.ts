import { SlotName } from '../types'

export const titleCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase()
    })
}

export const slotNames: SlotName[] = ['input', 'select', 'checkbox', 'radio', 'switch', 'textarea']
