// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Address, Store } = initSchema(schema);

export {
  User,
  Address,
  Store
};