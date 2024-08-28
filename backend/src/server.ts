import Fastify, { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import cors from '@fastify/cors'
import { routes } from './routes/routes';
import { auth } from './middlewares/auth/auth';

const app: FastifyInstance = Fastify({
  logger: true
});


app.addHook("preHandler", auth);

const start = async () => {

  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 })

  } catch (error) {
    process.exit(1);
  }
}

start();