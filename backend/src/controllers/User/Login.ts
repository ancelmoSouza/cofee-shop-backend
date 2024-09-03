import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import prismaClient from "../../models/PrismaClient";
import { verifyPassword } from "../../utils/hash";


class Login {
  async hundler(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as { email: string, password: string };
    const { serialize, parse } = require('@fastify/cookie');

    const user = await prismaClient.user.findUnique({
      where: {
        email: email
      }
    });

    const isMatch = user && (verifyPassword({
      candidatePassword: password,
      salt: user.salt,
      hash: user.password
    }))

    if (!user || !isMatch) {
      return reply.code(401).send({
        message: 'Invalid Email or Password'
      })
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name
    };

    const tokenJWT = await reply.jwtSign({ payload });

    reply.setCookie('access_token', tokenJWT, {
      path: '/',
      httpOnly: true,
      secure: false
    });

    return { accessToken: tokenJWT }
  }
}


export { Login };