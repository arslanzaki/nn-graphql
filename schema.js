export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
    } 

`

// In GraphQL, there are 5 basic scalar types that we can use
// -- INT
// -- FLOAT
// -- STRING
// -- BOOLEAN
// -- ID -> graphql uses as a key for data objects