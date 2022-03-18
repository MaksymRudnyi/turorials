function newLinkSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_LINK")
}

function newVoteSubscriber(parent, args, context) {
    return context.pubsub.asyncIterator("NEW_VOTE")
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => payload
};

const newVote = {
    subscribe: newVoteSubscriber,
    resolve: payload => payload
}

module.exports = {
    newLink,
    newVote
}