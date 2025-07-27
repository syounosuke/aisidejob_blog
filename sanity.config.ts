import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {jaJPLocale} from '@sanity/locale-ja-jp'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Aisidejob Blog',

  projectId: 'li8wy5y0',
  dataset: 'production',

  plugins: [
    structureTool({
      title: 'コンテンツ',
    }),
    visionTool({
      title: 'GROQ',
    }),
    jaJPLocale()
  ],

  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
})