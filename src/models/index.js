// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Address, Store, Inventory, Lego, Trip, Order, OrderItem } = initSchema(schema);

export {
  User,
  Address,
  Store,
  Inventory,
  Lego,
  Trip,
  Order,
  OrderItem
};