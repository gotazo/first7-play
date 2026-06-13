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

    featured: z.boolean().optional(),

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

const investigations = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/investigations"
  }),

  schema: z.object({

    title: z.string(),

    description: z.string(),

    fragment: z.string(),

    scene: z.enum([
      "temple",
      "wilderness",
      "dream",
      "scroll"
    ]).optional(),

    difficulty: z.enum([
      "easy",
      "medium",
      "hard"
    ]),

    archiveNotes: z.array(
  z.string()
),

scriptureHints: z.array(
  z.string()
),

    nodes: z.array(

      z.object({

        id: z.string(),

        label: z.string(),

        scripture: z.string(),

        note: z.string()

      })

    ),

    solution: z.array(
      z.string()
    )

  })

});

const quizCollection = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/quiz"
  }),

  schema: z.object({

    title: z.string(),

    description: z.string(),

    difficulty: z.enum([
      "easy",
      "medium",
      "hard"
    ]),

    book: z.string(),

    questions: z.array(

      z.object({

        question: z.string(),

        choices: z.array(
          z.string()
        ),

        answer: z.string(),

        scripture: z.object({

          reference:
            z.string()

        }),

        explanation:
          z.string()

      })

    )

  })

});

export const collections = {
  games,
  investigations,

quiz:
    quizCollection

};
