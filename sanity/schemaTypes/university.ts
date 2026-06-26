import {defineField, defineType} from 'sanity'

export const universityType = defineType({
  name: 'university',
  title: 'University',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'University Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'fees',
      title: 'Annual Fees',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
  ],
})