import Fastify, { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import cors from '@fastify/cors'
import { routes } from './routes/routes';
import { auth } from './middlewares/auth/auth';
import type { FastifyCookieOptions } from "@fastify/cookie";
import jwt from '@fastify/jwt';
import cookie from '@fastify/cookie';

//import jwt by authentication


const app: FastifyInstance = Fastify({
  logger: true
});

app.register(jwt, {
  secret: 'super-secret',
  cookie: {
    cookieName: 'access_token',
    signed: false
  }
});

app.register(cookie, {
  secret: 'super-secret',
  parseOptions: {}
} as FastifyCookieOptions)

app.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.cookies;
  console.log("TOKEN:", token)

  if (!token) {
    return reply.status(401).send({ message: 'Authentication required' })
  }

  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err)
  }


  // const decoded = app.jwt.verify(token)
  // request.user = decoded;
})

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