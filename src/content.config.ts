import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const games = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/games"
  }),

  schema: z.object({

    title: z.string(),

    description: z.string(),

    engine: z.enum([
      "connections",
      "sequence",
      "matching"
    ]),

    difficulty: z.enum([
      "easy",
      "medium",
      "hard"
    ]),

    nextPuzzle: z.string().optional(),

    categories: z.array(
      z.string()
    ),

    puzzles: z.array(

      z.object({

        title: z.string(),

        fragment: z.string().optional(),

        scripture: z.object({

          reference: z.string(),

          verse: z.string()

        }),

        /*
         CONNECTIONS
        */
        groups: z.array(

          z.object({

            category: z.string(),

            items: z.array(
              z.string()
            )

          })

        ).optional(),

        /*
         SEQUENCE
        */
        sequence: z.array(
          z.string()
        ).optional(),

        hints: z.array(
          z.string()
        ).optional(),

        /*
         MATCHING
        */
        pairs: z.array(

          z.object({

            left: z.string(),

            right: z.string()

          })

        ).optional()

      })

    )

  })

});

export const collections = {
  games
};
