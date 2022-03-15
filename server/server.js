const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema} = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
        quoteOfTheDay: String
        random: Float
        rollThreeDice: [Int]
    }
`);

const root = {
    hello: () => 'Hello world.',
    quoteOfTheDay: () => Math.random() < .5 ? 'Take is easy' : 'Salvation lies',
    random: Math.random,
    rollThreeDice: () => [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6))
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000);

console.log('running on :4000')
