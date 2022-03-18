const { PrismaClient } = require("@prisma/client")

// 2
const prisma = new PrismaClient()

async function main() {
    const newLink = await prisma.link.create({
        data: {
            description: 'Fillstack tutorial',
            url: 'https://howto.com'
        }
    });

    const allLinks = await prisma.link.findMany();

    console.log(allLinks);
}

main()
    .catch(e => {
        throw e;
    })
.finally(async () => {
    await prisma.$disconnect()
});