import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '8l1g8jxm',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = imageUrlBuilder(client);

console.log('client',  builder)
export const urlFor = (source) => builder.image(source);