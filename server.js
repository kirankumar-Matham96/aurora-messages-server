import { resolvers } from "./resolver.js";
import Fastify from "fastify";
import mercurius from "mercurius";
import { schema } from "./schema.js";

const port = 3000;

const app = Fastify();

app.register(mercurius, {
  schema,
  graphiql: true,
  resolvers,
});

app.get("/", async function (req, reply) {
  return reply.send("Hello World");
});

app.listen({ port: port }, () =>
  console.log(`app is running at http://localhost:${port}`)
);
