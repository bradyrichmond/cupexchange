// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Address } = initSchema(schema);

export {
  User,
  Address
};