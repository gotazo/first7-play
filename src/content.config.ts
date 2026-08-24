import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
|--------------------------------------------------------------------------
| GAMES COLLECTION
|--------------------------------------------------------------------------
|
| Content location:
|   src/content/games/
|
| Supported game engines:
|   - connections
|   - sequence
|   - matching
|
| Each game can contain one or more puzzles.
|
*/

const games = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/games"
  }),

  schema: z.object({

    /*
    |--------------------------------------------------------------------------
    | GAME METADATA
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | GAME PUZZLES
    |--------------------------------------------------------------------------
    |
    | A game may contain multiple puzzle rounds.
    |
    */

    puzzles: z.array(

      z.object({

        title: z.string(),

        /*
        | Optional fragment recovered from this puzzle.
        */

        fragment: z.string().optional(),

        /*
        |--------------------------------------------------------------------------
        | SCRIPTURE
        |--------------------------------------------------------------------------
        */

        scripture: z.object({

          reference: z.string(),

          verse: z.string()

        }),

        /*
        |--------------------------------------------------------------------------
        | CONNECTIONS ENGINE
        |--------------------------------------------------------------------------
        |
        | Four groups of connected items.
        |
        */

          groups: z.array(

          z.object({

            category: z.string(),

        /*
        | Hints revealed when the player
        | needs help discovering this connection.
        */

        hints: z.array(
        z.string()
        ).optional(),

        /*
      | Scripture revealed when this
      | individual connection is solved.
      */

      scripture: z.object({

      reference: z.string(),

      verse: z.string()

     }).optional(),

       items: z.array(
      z.string()
      )

      })

    ).optional(),

        /*
        |--------------------------------------------------------------------------
        | SEQUENCE ENGINE
        |--------------------------------------------------------------------------
        |
        | Items that must be placed in the correct biblical order.
        |
        */

        sequence: z.array(
          z.string()
        ).optional(),

        /*
        | Optional hints used by Sequence puzzles.
        */

        hints: z.array(
          z.string()
        ).optional(),

        /*
        |--------------------------------------------------------------------------
        | MATCHING ENGINE
        |--------------------------------------------------------------------------
        |
        | Pairs of related biblical concepts.
        |
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


/*
|--------------------------------------------------------------------------
| INVESTIGATIONS COLLECTION
|--------------------------------------------------------------------------
|
| Content location:
|   src/content/investigations/
|
| Investigations are visual, interactive Scripture investigations.
|
| The content file provides:
|   - investigation information
|   - visual scene
|   - archive notes
|   - Scripture hints
|   - interactive nodes
|   - solution sequence
|
| The actual visual scene is handled by components in:
|
|   src/components/mysteries/scenes/
|
| Current scenes:
|   - temple
|   - wilderness
|   - dream
|   - scroll
|   - ark
|   - jericho
|
*/

const investigations = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/investigations"
  }),

  schema: z.object({

    /*
    |--------------------------------------------------------------------------
    | INVESTIGATION METADATA
    |--------------------------------------------------------------------------
    */

    title: z.string(),

    description: z.string(),

    /*
    | Fragment recovered after solving the investigation.
    */

    fragment: z.string(),

    /*
    |--------------------------------------------------------------------------
    | VISUAL SCENE
    |--------------------------------------------------------------------------
    |
    | IMPORTANT:
    | The value here must correspond to a scene supported by the
    | investigation page/component system.
    |
    | When adding a new scene:
    |
    | 1. Create the scene component.
    | 2. Add its name here.
    | 3. Add the scene mapping in the investigation page.
    |
    */

    scene: z.enum([

      // Existing investigation scenes
      "temple",
      "wilderness",
      "dream",
      "scroll",

      // New investigation scene
      "ark",
      "jericho"

    ]).optional(),

    difficulty: z.enum([
      "easy",
      "medium",
      "hard"
    ]),

    /*
    |--------------------------------------------------------------------------
    | ARCHIVE NOTES
    |--------------------------------------------------------------------------
    |
    | Notes revealed or displayed as part of the investigation archive.
    |
    */

    archiveNotes: z.array(
      z.string()
    ),

    /*
    |--------------------------------------------------------------------------
    | SCRIPTURE HINTS
    |--------------------------------------------------------------------------
    |
    | Scripture references that help the player investigate the scene.
    |
    */

    scriptureHints: z.array(
      z.string()
    ),

    /*
    |--------------------------------------------------------------------------
    | INVESTIGATION NODES
    |--------------------------------------------------------------------------
    |
    | Interactive objects inside the SVG investigation scene.
    |
    | The "id" must match the data-node value used by the scene component.
    |
    */

    nodes: z.array(

      z.object({

        id: z.string(),

        label: z.string(),

        scripture: z.string(),

        note: z.string()

      })

    ),

    /*
    |--------------------------------------------------------------------------
    | SOLUTION
    |--------------------------------------------------------------------------
    |
    | Ordered list of node IDs required to solve the investigation.
    |
    */

    solution: z.array(
      z.string()
    )

  })

});


/*
|--------------------------------------------------------------------------
| QUIZ COLLECTION
|--------------------------------------------------------------------------
|
| Content location:
|   src/content/quiz/
|
| Quiz structure:
|
|   src/content/quiz/
|     category/
|       quiz-name/
|         index.md
|
| Example:
|
|   src/content/quiz/genesis/genesis-journey/index.md
|
| Quizzes are static content. The interactive quiz engine runs in:
|
|   src/pages/quiz/[...slug].astro
|
*/

const quizCollection = defineCollection({

  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/quiz"
  }),

  schema: z.object({

    /*
    |--------------------------------------------------------------------------
    | QUIZ METADATA
    |--------------------------------------------------------------------------
    */

    title: z.string(),

    description: z.string(),

    difficulty: z.enum([
      "easy",
      "medium",
      "hard"
    ]),

    /*
    | Biblical book or subject covered by the quiz.
    */

    book: z.string(),

    /*
    |--------------------------------------------------------------------------
    | QUIZ QUESTIONS
    |--------------------------------------------------------------------------
    */

    questions: z.array(

      z.object({

        question: z.string(),

        /*
        | Multiple-choice answers.
        */

        choices: z.array(
          z.string()
        ),

        /*
        | Must exactly match one of the choices.
        */

        answer: z.string(),

        /*
        | Scripture reference supporting the answer.
        */

        scripture: z.object({

          reference: z.string()

        }),

        /*
        | Educational explanation shown after answering correctly.
        */

        explanation: z.string()

      })

    )

  })

});


/*
|--------------------------------------------------------------------------
| EXPORTED COLLECTIONS
|--------------------------------------------------------------------------
|
| These names are used throughout Astro with:
|
|   getCollection("games")
|   getCollection("investigations")
|   getCollection("quiz")
|
*/

export const collections = {

  games,

  investigations,

  quiz: quizCollection

};