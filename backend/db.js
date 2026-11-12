const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

// Singleton PrismaClient instance to prevent connection pool exhaustion
let prisma;
if (!global.__prismaInstance) {
    const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/saarthiai';
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    global.__prismaInstance = new PrismaClient({ adapter });
}
prisma = global.__prismaInstance;

module.exports = prisma;
