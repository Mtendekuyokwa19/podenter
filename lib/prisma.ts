import { PrismaClient } from "../generated/prisma";
export let prisma = new PrismaClient();

async function newUser() {
  await prisma.user.create({
    data: {
      name: "Marcus",
      email: "marcus@gmail.com",
      Membership: {
        create: {
          subscribedWeeks: 4,
          totalUsedHours: 8,
          totalAssignedWeekHours: 9,
          usedUpHours: false,
          insideUnipod: false,
        },
      },
    },
  });
}
