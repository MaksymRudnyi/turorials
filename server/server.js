const { graphql, buildSchema} = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => 'Hello world.'
};

graphql({
    schema,
    source: `{ hello }`,
    rootValue: root
}).then((response) => {
    console.log(response)
})