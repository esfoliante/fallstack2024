import { PrismaClient, Role, Tier } from "@prisma/client";

import { hashPassword } from "../src/services/authService";
import generateRandomCode from "../src/utils/GenerateCode";

const prisma = new PrismaClient();

async function seedInterests() {
  const interests = await prisma.interest.findMany();
  if (interests.length > 0) {
    console.log("Interests already seeded");
    return;
  }

  await prisma.interest.createMany({
    data: [
      { name: "Artificial Intelligence" },
      { name: "Data Science" },
      { name: "Mobile Development" },
      { name: "Web Development" },
      { name: "Devops" },
      { name: "Cyber Security" },
      { name: "Game Development" },
      { name: "Cloud Computing" },
      { name: "Machine Learning" },
      { name: "Blockchain" },
      { name: "Internet of Things" },
      { name: "Quantum Computing" },
      { name: "Augmented Reality" },
      { name: "Virtual Reality" },
      { name: "Big Data" },
      { name: "Robotics" },
      { name: "Networking" },
      { name: "Database Management" },
      { name: "Software Development" },
    ],
  });
}

async function seedUser() {
  const email = process.env.ADMIN_EMAIL as string;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    console.log("User already seeded");
    return user;
  }

  const password = await hashPassword(process.env.ADMIN_PASSWORD as string);

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
      role: Role.COMPANY,
    },
  });

  return newUser;
}

async function seedCompanies(userId: number) {
  const companies = await prisma.company.findMany();
  if (companies.length > 0) {
    console.log("Companies already seeded");
    return companies[0];
  }

  const company = await prisma.company.create({
    data: {
      name: "Company 1",
      userId: userId,
      tier: Tier.DIAMOND,
    },
  });

  return company;
}

async function seedTalks(companyId: number) {
  const talks = await prisma.talk.findMany();
  if (talks.length > 0) {
    console.log("Talks already seeded");
    return;
  }

  await prisma.talk.create({
    data: {
      startTime: new Date(),
      code: generateRandomCode().slice(3),
      companyId: companyId,
    },
  });
}

async function main() {
  await seedInterests();
  const user = await seedUser();
  const company = await seedCompanies(user.id);
  seedTalks(company.id);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
