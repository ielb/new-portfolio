// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Stack, Project, SocialItem } = initSchema(schema);

export {
  Message,
  Stack,
  Project,
  SocialItem
};