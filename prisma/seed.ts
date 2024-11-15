import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
