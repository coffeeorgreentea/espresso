import { createTRPCRouter } from "~/server/api/trpc";
import { generationsRouter } from "./routers/generations";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  generations: generationsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
