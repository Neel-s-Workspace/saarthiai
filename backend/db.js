const { PrismaClient } = require('@prisma/client');

// Singleton PrismaClient instance to prevent connection pool exhaustion
let prisma;
if (!global.__prismaInstance) {
    global.__prismaInstance = new PrismaClient({});
}
prisma = global.__prismaInstance;

module.exports = prisma;
