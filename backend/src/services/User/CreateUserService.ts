import { CreateUserInput } from "../../types";
import prismaClient from "../../models/PrismaClient";
import { hashPassword } from "../../utils/hash";

class CreateUserService {
  async execute({ name, email, password }: CreateUserInput) {
    if (!email || !password) {
      throw new Error("Invalid Request");
    }
    const { hash, salt } = hashPassword(password);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hash,
        salt
      }
    })

    return user;
  }
}

export { CreateUserService };