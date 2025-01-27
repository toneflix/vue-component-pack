import { Type, TypeP } from '../types'

export const patterns: Record<Type, string> = {
  country: '/countries',
  state: '/countries/:country/states',
  city: '/countries/:country/states/:state/cities',
  ngcity: '/states/:state/cities',
  lga: '/states/:state/lgas',
  ward: '/states/:state/lgas/:lga/wards'
}

export const typeMaps: Record<Type, TypeP> = {
  country: 'countries',
  state: 'states',
  city: 'cities',
  ngcity: 'ngcities',
  lga: 'lgas',
  ward: 'wards'
}

export const typePMaps: Record<TypeP, Type> = {
  countries: 'country',
  states: 'state',
  cities: 'city',
  ngcities: 'ngcity',
  lgas: 'lga',
  wards: 'ward'
}
