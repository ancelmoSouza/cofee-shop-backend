import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserService } from '../../services/User/CreateUserService';
import { CreateUserInput } from '../../types';

class CreateUserController {
  async hundler(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = request.body as { name: string, email: string, password: string };
    const userService = new CreateUserService();

    const user = await userService.execute({ name, email, password });

    reply.status(200).send(user);
  }
}

export { CreateUserController }