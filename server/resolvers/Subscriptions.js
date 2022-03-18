function newLinkSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_LINK")
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => payload
};

module.exports = {
    newLink
}