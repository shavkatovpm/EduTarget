import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default('EduTarget jamoasi'),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.number(),

    // AEO: 2-4 jumla, sahifa tepasida ko'rinadi va LLM'lar javob sifatida ishlatadi
    tldr: z.string().optional(),

    // AEO: maqolaning asosiy targetlangan so'rovi (Google Search Console uchun ham)
    targetKeyword: z.string().optional(),

    // AEO: 3-6 ta tezkor xulosa nuqtalari — Featured Snippet va LLM iqtibos uchun
    keyTakeaways: z.array(z.string()).optional(),

    // CTA strategiyasi: maqola qaysi maqsadga yo'naltirilgan
    // 'darslinker'  -> o'quvchini Darslinker.uz ga olib boradi (kurs tanlash mavzulari)
    // 'seo-service' -> kurs egasini bizning SEO xizmatimizga sotadi (marketing mavzulari)
    // 'both'        -> ikkalasi ham (universal mavzular)
    ctaTarget: z.enum(['darslinker', 'seo-service', 'both']).default('seo-service'),

    // E-E-A-T: tashqi manbalar/iqtiboslar (LLM va Google ishonchni oshiradi)
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
    })).optional(),

    // AEO: Schema.org HowTo uchun (qadamlar-ketma-ketligi maqolalari)
    howTo: z.object({
      name: z.string(),
      steps: z.array(z.object({
        name: z.string(),
        text: z.string(),
      })),
    }).optional(),

    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
