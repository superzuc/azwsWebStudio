import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanityClient';

const builder = imageUrlBuilder(client);

export function urlFor(source: {_ref: string, _type: string}) {
  return builder.image(source).url();
}


export function getAssetUrl(assetRef: string) {
  const [fileId, extension] = assetRef.replace('file-', '').split('-');
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${fileId}.${extension}`;
}