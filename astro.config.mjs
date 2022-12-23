import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import addClases from "rehype-add-classes";

export default defineConfig({
  site: "https://www.info.carreras.unjfsc.edu.pe",
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClases,
        {
          h1: "mb-4 text-3xl font-bold font-mvoll dark:text-orange-400",
          h2: "text-2xl font-bold font-mvoll dark:text-orange-300",
          h3: "text-xl font-bold font-mvoll dark:text-orange-500",
          h4: "text-lg font-bold font-mvoll",
          h5: "text-bold font-mvoll",
          h6: "text-bold font-mvoll",
          p: "my-4",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          ul: "my-4 px-4 italic space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400",
          blockquote:
            "p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 text-base italic leading-relaxed text-gray-900 dark:text-white",
        },
      ],
    ],
  },
});
