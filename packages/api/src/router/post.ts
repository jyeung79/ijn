import { z } from "zod";

// import { desc, eq, schema } from "@ijn/db";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .mutation((opts) => {
      const { input } = opts;
    }),
    list: publicProcedure.query(() => {
      return [];
    }),
});
