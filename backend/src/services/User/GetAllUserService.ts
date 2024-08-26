import prismaClient from "../../models/PrismaClient";

class GetAllUserService {
  async execute() {
    const allUsers = await prismaClient.user.findMany();

    return allUsers;
  }
}

export { GetAllUserService };