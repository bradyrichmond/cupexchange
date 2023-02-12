// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Address, Store, Inventory, Lego, Comment, Trip, Order, OrderItem, Review } = initSchema(schema);

export {
  User,
  Address,
  Store,
  Inventory,
  Lego,
  Comment,
  Trip,
  Order,
  OrderItem,
  Review
};