const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema} = require('graphql');

const schema = buildSchema(`
    type RandomDie {
        roll(numRolls: Int!): [Int]
        numSides: Int
        rollOnce: Int
        counter: Int
        increment: Int
    }
    
    type Query {
        hello: String
        quoteOfTheDay: String
        random: Float
        rollThreeDice: [Int]
        rollDice(numDice: Int!, numSides: Int): [Int]
        getDie(numSides: Int): RandomDie
    }
`);

class RandomDie {
    static counter;
    constructor(numSides = 6) {
        this.numSides = numSides;
        // this.counter = 0;
    }

    increment() {
        return ++RandomDie.counter
    }

    rollOnce() {
        return 1 + Math.floor(Math.random() * this.numSides);
    }

    roll({ numRolls }) {
        var output = [];
        for (var i = 0; i < numRolls; i++) {
            output.push(this.rollOnce());
        }
        return output;
    }
}

const root = {
    hello: () => 'Hello world.',
    quoteOfTheDay: () => Math.random() < .5 ? 'Take is easy' : 'Salvation lies',
    random: Math.random,
    rollThreeDice: () => [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6)),
    rollDice: ({ numDice, numSides = 6 }) => {
        const output = [];

        for (let i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * numSides))
        }

        return output
    },
    getDie: ({ numSides }) => new RandomDie(numSides)
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000);

console.log('running on :4000')
