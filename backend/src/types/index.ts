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

export {
  CreateUserInput,
  VerifyPasswordInput,
  DeleteInput
}