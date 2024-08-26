import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify';
import { CreateUserController } from '../controllers/User/CreateUsercontroller';
import { GetAllUserController } from '../controllers/User/GetAllUsercontroller';
import { DeleteUserController } from '../controllers/User/DeleteUserController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserController().hundler(request, reply);
  })

  fastify.get('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetAllUserController().hundler(request, reply);
  })

  fastify.delete('/user/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteUserController().hundler(request, reply);
  })
}