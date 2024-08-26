import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from "../../services/User/DeleteUserService";

class DeleteUserController {
  async hundler(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    const userService = new DeleteUserService();

    const deletedUser = await userService.execute({ id });

    reply.status(200).send(deletedUser);
  }
}


export { DeleteUserController }