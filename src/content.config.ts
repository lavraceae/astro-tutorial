// Importa el cargador glob
import { glob } from "astro/loaders";
// Importa utilidades de `astro:content`
import { z, defineCollection } from "astro:content";
// Define un `loader` y un `schema` para cada colección
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    ordinal: z.string(),
    tags: z.array(z.string())
  })
});
// Exporta un solo objeto `collections` para registrar tus colecciones
export const collections = { blog };