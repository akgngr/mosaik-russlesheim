/* empty css                                */
import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2022-03-07","projectId":"qgied0pb","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
