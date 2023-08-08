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
    review(parent, args, context) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(parent, args, context) {
      return db.games.find((game) => game.id === args.id);
    },
    author(parent, args, context) {
      return db.authors.find((author) => author.id === args.id);
    },
  },

  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },

  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },

  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
};

// Server Setup
const server = new ApolloServer({
  // typeDefs -> short for type definitions. These are basically descriptions of our datatypes and the relationship they have with other datatypes
  typeDefs,
  resolvers,
  // resolvers -> a bunch of resolver functions that determine how we respond to queries for the different data on the graph
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});
console.log("Server Ready At", url);
