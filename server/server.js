const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema} = require('graphql');

const schema = buildSchema(`
    type Mutation {
        setMessage(message: String): String
    }
    
    type Query {
        getMessage: String
    }
`);

const fakeDatabase = {};

const root = {
    setMessage: ({ message }) => {
        fakeDatabase.message = message;

        return message
    },

    getMessage: () => fakeDatabase.message
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000);

console.log('running on :4000')
