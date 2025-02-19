import { PrismaClient } from "@prisma/client";
import users from './mocks/users';
import events from './mocks/events';
import attachments from './mocks/attachments';

const prisma = new PrismaClient();

// Add mock data to the database
// Because it is hard to work without data...
async function seedData() {
    console.log('Seeding DB data for testing...');
    
    // Creating users
    console.log(`Creating users...`)
    const usersCreated = await prisma.user.createMany({ data: users });

    // Creating events
    console.log(`Creating events...`)
    const eventsCreated = await prisma.event.createMany({ data: events });

    // Creating attachments
    console.log(`Creating attachments...`)
    const attachmentsCreated = await prisma.attachment.createMany({ data: attachments });

    console.log('Seeding Done.')
}

// Finally...
seedData()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });