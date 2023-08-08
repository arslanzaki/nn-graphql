import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Types
import { typeDefs } from "./schema.js";

// db
import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

// Server Setup
const server = new ApolloServer({
  // typeDefs -> short for type definitions. These are basically descriptions of our datatypes and the relationship they have with other datatypes
  typeDefs,
  resolvers
  // resolvers -> a bunch of resolver functions that determine how we respond to queries for the different data on the graph
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});
console.log("Server Ready At Port", 4000);
