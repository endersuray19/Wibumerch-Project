import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('payment service is running')
})
app.get('/health', (c)  => {
    return c.json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now()

    })
});
const start = async () => {
 try {
  serve({
  fetch: app.fetch,
  port: 8002
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
 } 
  catch (error) {
  console.error('Error starting server:', error)
  process.exit(1)
  }
}

start()