import 'fastify';
import { JWT } from '@fastify/jwt';

declare module 'fastify' {
  interface FastifyInstance {
    jwt: JWT
  }
}
interface User {
  email: string;
  password: string;
};

interface CreateUserInput {
  name?: string;
  email: string;
  password: string;
};

interface DeleteInput {
  id: string;
}

interface VerifyPasswordInput {
  candidatePassword: string;
  salt: string;
  hash: string;
}

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: any
  }
}

export {
  CreateUserInput,
  VerifyPasswordInput,
  DeleteInput,
}