const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');


let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

// 2
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links
    },

    Mutation: {
        post: (parent, args) => {
            let idCount = links.length;
            const link = {
                id: `link-${idCount}`,
                description: args.description,
                url: args.url
            };

            links.push(link);
            return link
        }
    }
}

// 3
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
});

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );