// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Address, Store, Inventory, Lego, Trip, Order, OrderItem, Comment, Review } = initSchema(schema);

export {
  User,
  Address,
  Store,
  Inventory,
  Lego,
  Trip,
  Order,
  OrderItem,
  Comment,
  Review
};