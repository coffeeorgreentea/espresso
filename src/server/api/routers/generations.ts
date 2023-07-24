import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { Prisma } from "@prisma/client";

export const generationsRouter = createTRPCRouter({
  getGenerations: protectedProcedure.query(async ({ ctx }) => {
    const generations = await ctx.prisma.userGenerations.findMany({
      where: { userId: ctx.session.user.id },
    });
    return generations;
  }),
});
