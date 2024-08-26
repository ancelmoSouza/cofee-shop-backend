import { FastifyRequest, FastifyReply } from 'fastify';
import { GetAllUserService } from '../../services/User/GetAllUserService';

class GetAllUserController {
  async hundler(reqeust: FastifyRequest, reply: FastifyReply) {
    const userService = new GetAllUserService();

    const allUsers = await userService.execute();

    if (!allUsers || allUsers.length === 0) throw new Error('Registers not found');

    reply.status(200).send(allUsers);
  }
}

export { GetAllUserController };