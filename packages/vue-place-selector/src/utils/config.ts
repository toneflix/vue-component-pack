import { Type, TypeP } from '../types'

export const patterns: Record<Type, string> = {
  country: '/countries',
  state: '/countries/:country/states',
  city: '/countries/:country/states/:state/cities'
}

export const typeMaps: Record<Type, TypeP> = {
  country: 'countries',
  state: 'states',
  city: 'cities'
}

export const typePMaps: Record<TypeP, Type> = {
  countries: 'country',
  states: 'state',
  cities: 'city'
}
