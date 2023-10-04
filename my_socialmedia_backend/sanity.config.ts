import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'my_social',

  projectId: 'q8sqvnf5',
  dataset: 'my_socialmedia',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
