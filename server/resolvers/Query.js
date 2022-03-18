function feed(parent, args, context) {
    return context.prisma.link.findMany()
}

module.exports = {
    feed
};
