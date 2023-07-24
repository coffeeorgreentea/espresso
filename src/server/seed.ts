// prisma/seed.js
const { PrismaClient, GenerationType } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Specify the user ID
  const userId = "clkgjc3l20000u9jsfi8mlim8";

  // Array of generation data
  const generations = [
    {
      cost: 10,
      type: GenerationType.chat,
      prompt: "What's your favorite color?",
    },
    {
      cost: 20,
      type: GenerationType.image,
      prompt: "Draw a picture of a cat.",
    },
    { cost: 30, type: GenerationType.audio, prompt: "Sing a song." },
  ];

  // Insert each generation into the database
  for (const generation of generations) {
    await prisma.userGenerations.create({
      data: {
        ...generation,
        userId,
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
