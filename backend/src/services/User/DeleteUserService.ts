import prismaClient from "../../models/PrismaClient";
import { DeleteInput } from "../../types";


class DeleteUserService {
  async execute(input: DeleteInput) {
    const { id } = input;

    const findedUser = prismaClient.user.findUnique({
      where: {
        id: id
      }
    });

    if (!findedUser) {
      throw new Error("User not found");
    }
    console.log(id, findedUser)
    const deletedUser = await prismaClient.user.delete({
      where: {
        id: id
      }
    });



    return { message: "Register deleted success" }

  }

}

export { DeleteUserService };