const { PrismaClient } = require('@prisma/client');
const fixtures = require('./fixtures');

const prisma = new PrismaClient();


const main = async () => {
  Object.entries(fixtures).forEach(async ([name, data]) => {
    console.log('- seeding', name);
    await prisma[name].createMany({ data });
  });
};


main()
  .catch((e) => { console.error(e); process.exit() })
  .finally(async () => { await prisma.$disconnect(); });