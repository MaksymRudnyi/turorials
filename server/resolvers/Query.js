async function feed(parent, args, context) {
    const where = args.filter
        ? {
            OR: [
                { description: { contains: args.filter}},
                { url: { contains: args.filter }}
            ]
        }
        : {};

    const links = await context.prisma.link.findMany({
        where,
        skip: args.skip,
        take: args.take
    });

    return links;
}

module.exports = {
    feed
};
