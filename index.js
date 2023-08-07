import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Server Setup
const server = new ApolloServer({
  // typeDefs -> short for type definitions. These are basically descriptions of our datatypes and the relationship they have with other datatypes
  // resolvers -> a bunch of resolver functions that determine how we respond to queries for the different data on the graph
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});
console.log("Server Ready At Port", 4000);
