import { FastifyRequest, FastifyReply } from "fastify";

export async function auth(request: FastifyRequest, reply: FastifyReply) {
  const apiKey = request.headers['x-api-key'];
  const knownKey = process.env.API_KEY;

  if (!apiKey || apiKey !== knownKey) {
    return reply.status(401).send({ error: "Unauthorized" });
  }
};