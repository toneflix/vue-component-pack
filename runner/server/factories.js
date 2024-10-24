import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export const userFactory = Factory.extend({
  name: () => faker.person.fullName(),
  email: () => faker.internet.email(),
  token: () => faker.string.uuid(),
  password: () => 'password',
  username: () => faker.internet.userName(),
})

export const testUser = {
  name: faker.person.fullName(),
  email: 'test@example.com',
  token: '4136cd0b-d90b-4af7-b485-5d1ded8db252',
  password: 'password',
  username: 'example_user',
}
