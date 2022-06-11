const { PrismaClient } = require('@prisma/client');
const fixtures = require('./fixtures');

const prisma = new PrismaClient();

const main = async () => {
  for await (const [name, data] of Object.entries(fixtures)) {
    console.log('- seeding', name);
    await prisma[name].createMany({ data });
    console.log('done');
  };
};

main()
  .catch((e) => { console.error(e); process.exit(); })
  .finally(async () => { await prisma.$disconnect(); });