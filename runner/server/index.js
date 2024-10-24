import { Factory, Model, Response, createServer } from "miragejs"
import { testUser, userFactory } from "./factories";

export function makeServer ({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    factories: {
      user: userFactory,
    },

    seeds (server) {
      server.create("user", testUser)
      server.createList("user", 10)
    },

    routes () {
      this.urlPrefix = 'http://example.com';

      this.namespace = "api/v1"

      this.get("users", (schema) => {
        return schema.users.all()
      })

      this.post("login", (schema, request) => {
        const params = JSON.parse(request.requestBody)

        const data = schema.findBy('user', { email: params.email, password: params.password })

        if (!data) return new Response(422, {}, { errors: { email: 'User Not Found' } })

        return {
          data,
          token: data.token,
        }
      })

      this.post("register", (schema, request) => {
        const params = JSON.parse(request.requestBody)
        const errors = {}

        if (!params.email) errors.email = 'Email address is required'
        if (!params.name) errors.name = 'Name is required'

        const user = schema.findBy('user', { email: params.email })
        if (user) errors.email = 'Email has been taken'

        if (Object.entries(errors).length > 0) return new Response(422, {}, { errors, message: 'Error Occured' })

        const data = schema.create('user', params)

        return {
          data,
          token: data.token,
        }
      })


      this.post("logout", (schema, request) => {
        const params = request.requestHeaders

        const data = schema.findBy('user', { token: (params?.Authorization || '').replace('Bearer ', '') })

        if (!data) return new Response(401, {}, { message: 'Unauthorized' })

        return new Response(202, {}, { data: {}, message: 'Accepted' })
      })

      this.get("profile", (schema, request) => {
        const params = request.requestHeaders

        const data = schema.findBy('user', { token: (params?.Authorization || '').replace('Bearer ', '') })

        if (!data) return new Response(401, {}, { message: 'Unauthorized' })

        return {
          data,
        }
      })

      this.passthrough()
    },
  })

  return server
}
