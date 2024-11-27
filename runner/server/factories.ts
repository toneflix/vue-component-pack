import { Factory } from 'miragejs'
import { faker } from '@faker-js/faker'

export const userFactory = Factory.extend({
  name: () => faker.person.fullName(),
  email: () => faker.internet.email(),
  token: () => faker.string.uuid(),
  password: () => 'password',
  username: () => faker.internet.username(),
  resetToken: () => String(Math.floor(Math.random() * 9999)),
  roles: 'user',
  perms: <string[]>[]
})

export const testUser = {
  name: faker.person.fullName(),
  email: 'test@example.com',
  token: '4136cd0b-d90b-4af7-b485-5d1ded8db252',
  password: 'password',
  username: 'example_user',
  resetToken: '0000',
  roles: 'admin',
  perms: ['create', 'delete']
}
