import { PrismaClient } from "@prisma/client";

// When using NextJS, it is important to use the Singleton pattern
// to avoid multiple instances in different cases like hot reloading for example
const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare const globalThis: { prismaGlobal: ReturnType<typeof prismaClientSingleton>; } & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
