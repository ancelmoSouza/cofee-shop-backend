import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify';
import { CreateUserController } from '../controllers/User/CreateUsercontroller';
import { GetAllUserController } from '../controllers/User//GetAllUsercontroller';
import { DeleteUserController } from '../controllers/User/DeleteUserController';
import { Login } from '../controllers/User/Login';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {


  fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserController().hundler(request, reply);
  })

  fastify.get('/user', { onRequest: [fastify.authenticate] }, async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetAllUserController().hundler(request, reply);
  })

  fastify.delete('/user/:id', { onRequest: [fastify.authenticate] }, async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteUserController().hundler(request, reply);
  })

  fastify.post('/login', { onRequest: [fastify.authenticate] }, async (request: FastifyRequest, reply: FastifyReply) => {
    return new Login().hundler(request, reply);
  });
}