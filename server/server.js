const fs = require('fs');
const path = require('path');
const { ApolloServer, PubSub } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const { getUserId } = require('./utils');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Subscription = require('./resolvers/Subscriptions');
const Vote = require('./resolvers/Vote');


// 2
const resolvers = {
    Query,
    Mutation,
    User,
    Link,
    Subscription,
    Vote
};

// 3
const prisma = new PrismaClient();
const pubsub = new PubSub();
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: ({ req })  => {
        return {
            ...req,
            prisma,
            pubsub,
            userId: req && req.headers.authorization
                ? getUserId(req)
                : null
        }
    }
});

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );