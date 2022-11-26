import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.info.carreras.unjfsc.edu.pe",
  integrations: [sitemap(), react(), image(), tailwind()],
});
