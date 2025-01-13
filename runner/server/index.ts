import { Model, Response, createServer } from 'miragejs'
import { testUser, userFactory } from './factories'

export const makeServer = ({ environment = 'development' } = {}) => {
  const server = createServer({
    environment,

    models: {
      user: Model
    },

    factories: {
      user: userFactory
    },

    seeds(server) {
      server.create('user', testUser)
      server.createList('user', 10)
    },

    routes() {
      this.urlPrefix = 'http://example.com'

      this.namespace = 'api/v1'

      this.get('users', (schema) => {
        return schema.all('user')
      })

      this.post('login', (schema, request) => {
        const params = JSON.parse(request.requestBody)

        const data = schema.findBy('user', { email: params.email, password: params.password })

        if (!data)
          return new Response(422, {}, { errors: { email: 'Invalid password or user not found' } })

        return new Response(202, {}, { data, token: data.token, message: 'Accepted' })
      })

      this.post('register', (schema, request) => {
        const params = JSON.parse(request.requestBody)
        const errors: { email?: string; name?: string } = {}

        if (!params.email) errors.email = 'Email address is required'
        if (!params.name) errors.name = 'Name is required'

        const user = schema.findBy('user', { email: params.email })
        if (user) errors.email = 'Email has been taken'

        if (Object.entries(errors).length > 0)
          return new Response(422, {}, { errors, message: 'Error Occured' })

        const data = schema.create('user', params)

        return new Response(201, {}, { data, token: data.token, message: 'Created' })
      })

      this.post('forgot', () => {
        return new Response(201, {}, { timeout: 30000, message: 'Created' })
      })

      this.post('reset', (schema, request) => {
        const params = JSON.parse(request.requestBody)
        const errors: { token?: string; password?: string; password_confirmation?: string } = {}

        const data = schema.findBy('user', { resetToken: params.token })

        if (!data) errors.token = 'Invalid reset token'
        if (!params.password) errors.password = 'Password is required'
        if (!params.password_confirmation)
          errors.password_confirmation = 'Password Confirmation is required'
        if (params.password !== params.password_confirmation)
          errors.password = 'Password does not match Confirmation'

        if (Object.entries(errors).length > 0)
          return new Response(422, {}, { errors, message: 'Error Occured' })

        if (!data)
          return new Response(
            422,
            { token: 'Invalid reset token' },
            { errors, message: 'Error Occured' }
          )

        data.password = params.password
        data.save()

        return new Response(202, {}, { data, message: 'Password Reset Successfull' })
      })

      this.post('logout', (schema, request) => {
        const params = request.requestHeaders

        const data = schema.findBy('user', {
          token: (params?.Authorization || '').replace('Bearer ', '')
        })

        if (!data) return new Response(401, {}, { message: 'Unauthorized' })

        return new Response(202, {}, { data: {}, message: 'Accepted' })
      })

      this.get('profile', (schema, request) => {
        const params = request.requestHeaders

        const data = schema.findBy('user', {
          token: (params?.Authorization || '').replace('Bearer ', '')
        })

        if (!data) return new Response(401, {}, { message: 'Unauthorized' })

        return new Response(200, {}, { data, message: 'OK' })
      }) //, { timing: 3000 })

      this.passthrough()
      this.passthrough('https://naija-places.toneflix.com.ng/**')
    }
  })

  return server
}
