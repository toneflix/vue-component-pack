import type { PublicProps } from 'vue'

export interface Place {
  [key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
  id: number
  iso2: string
  name: string
}

export type Type = 'country' | 'state' | 'city'
export type TypeP = 'countries' | 'states' | 'cities'
export type Params = { [P in TypeP]?: string | number | null | undefined }

export interface BaseProps {
  apiKey?: string | undefined
  baseUrl?: string | undefined
  params?: Params | undefined
  busKey?: string | undefined
  type?: Type | undefined
  optionValue?: string | undefined
}

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type GlobalComponentConstructor<Props = {}, Slots = {}> = new () => {
  $props: PublicProps & Props
  $slots: Slots
}
