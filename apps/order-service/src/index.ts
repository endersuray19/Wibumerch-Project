import Clerk  from '@clerk/fastify';
import Fastify from 'fastify';

const fastify = Fastify();

fastify.register(Clerk.clerkPlugin)

fastify.get('/',(request,reply)=>{
  return reply.send('Hello from Order Service!')
})
fastify.get('/test',(request,reply)=>{
  const userId = Clerk.getAuth(request);
  if (!userId.userId) {
      return reply.status(401).send({ message: 'You Are not Login' });
  }
  return reply.send({message:'Hello from Order Service! and you are logged in.'})
})
fastify.get('/health', (request,reply) => {
    return reply.status(200).send({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now()

    })
});
const start = async () => {
  try {
    await fastify.listen({ port: 8001 })
    console.log('Order Service is running on port 8001');
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();