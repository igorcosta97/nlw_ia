import { fastify } from 'fastify'
import { getAllPromptsRoutes } from './routes/get-all-prompts'

const app = fastify()

app.register(getAllPromptsRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running 🚀 on port 3333!')
  })
