/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  fbUsername: string,
  first_name: string,
  last_name: string,
  email: string,
  banned?: boolean | null,
  deleted?: boolean | null,
  userAddressId?: string | null,
};

export type ModelUserConditionInput = {
  fbUsername?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  banned?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userAddressId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  fbUsername: string,
  first_name: string,
  last_name: string,
  address?: Address | null,
  email: string,
  banned?: boolean | null,
  deleted?: boolean | null,
  createdAt: string,
  updatedAt: string,
  userAddressId?: string | null,
  owner?: string | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  address: string,
  address2?: string | null,
  district: string,
  city: string,
  postal_code: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  fbUsername?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  banned?: boolean | null,
  deleted?: boolean | null,
  userAddressId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAddressInput = {
  id?: string | null,
  address: string,
  address2?: string | null,
  district: string,
  city: string,
  postal_code: string,
};

export type ModelAddressConditionInput = {
  address?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type UpdateAddressInput = {
  id: string,
  address?: string | null,
  address2?: string | null,
  district?: string | null,
  city?: string | null,
  postal_code?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type CreateStoreInput = {
  id?: string | null,
  name: string,
  district: string,
  city: string,
  storeLastUpdateById: string,
  storeInventoryId?: string | null,
};

export type ModelStoreConditionInput = {
  name?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
  storeLastUpdateById?: ModelIDInput | null,
  storeInventoryId?: ModelIDInput | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  name: string,
  district: string,
  city: string,
  lastUpdateBy: User,
  inventory?: Inventory | null,
  createdAt: string,
  updatedAt: string,
  storeLastUpdateById: string,
  storeInventoryId?: string | null,
};

export type Inventory = {
  __typename: "Inventory",
  id: string,
  items?: ModelLegoConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLegoConnection = {
  __typename: "ModelLegoConnection",
  items:  Array<Lego | null >,
  nextToken?: string | null,
};

export type Lego = {
  __typename: "Lego",
  id: string,
  imageKey: string,
  createdAt: string,
  updatedAt: string,
  inventoryItemsId: string,
};

export type UpdateStoreInput = {
  id: string,
  name?: string | null,
  district?: string | null,
  city?: string | null,
  storeLastUpdateById: string,
  storeInventoryId?: string | null,
};

export type DeleteStoreInput = {
  id: string,
};

export type CreateInventoryInput = {
  id?: string | null,
};

export type ModelInventoryConditionInput = {
  and?: Array< ModelInventoryConditionInput | null > | null,
  or?: Array< ModelInventoryConditionInput | null > | null,
  not?: ModelInventoryConditionInput | null,
};

export type UpdateInventoryInput = {
  id: string,
};

export type DeleteInventoryInput = {
  id: string,
};

export type CreateLegoInput = {
  id?: string | null,
  imageKey: string,
  inventoryItemsId: string,
};

export type ModelLegoConditionInput = {
  imageKey?: ModelStringInput | null,
  and?: Array< ModelLegoConditionInput | null > | null,
  or?: Array< ModelLegoConditionInput | null > | null,
  not?: ModelLegoConditionInput | null,
  inventoryItemsId?: ModelIDInput | null,
};

export type UpdateLegoInput = {
  id: string,
  imageKey?: string | null,
  inventoryItemsId: string,
};

export type DeleteLegoInput = {
  id: string,
};

export type CreateTripInput = {
  cupPrice: string,
  shippingPrice: string,
  orderExpiration: number,
  maximumCups?: number | null,
  id?: string | null,
  tripStoreId: string,
  tripShipperId: string,
};

export type ModelTripConditionInput = {
  cupPrice?: ModelStringInput | null,
  shippingPrice?: ModelStringInput | null,
  orderExpiration?: ModelFloatInput | null,
  maximumCups?: ModelIntInput | null,
  and?: Array< ModelTripConditionInput | null > | null,
  or?: Array< ModelTripConditionInput | null > | null,
  not?: ModelTripConditionInput | null,
  tripStoreId?: ModelIDInput | null,
  tripShipperId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Trip = {
  __typename: "Trip",
  store: Store,
  shipper: User,
  cupPrice: string,
  shippingPrice: string,
  orderExpiration: number,
  maximumCups?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  tripStoreId: string,
  tripShipperId: string,
  owner?: string | null,
};

export type UpdateTripInput = {
  cupPrice?: string | null,
  shippingPrice?: string | null,
  orderExpiration?: number | null,
  maximumCups?: number | null,
  id: string,
  tripStoreId: string,
  tripShipperId: string,
};

export type DeleteTripInput = {
  id: string,
};

export type CreateOrderInput = {
  tracking: Array< string | null >,
  numberOfCups: number,
  id?: string | null,
  orderBuyerId: string,
  orderShipperId: string,
  orderTripId: string,
};

export type ModelOrderConditionInput = {
  tracking?: ModelStringInput | null,
  numberOfCups?: ModelIntInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  orderBuyerId?: ModelIDInput | null,
  orderShipperId?: ModelIDInput | null,
  orderTripId?: ModelIDInput | null,
};

export type Order = {
  __typename: "Order",
  buyer: User,
  shipper: User,
  tracking: Array< string | null >,
  numberOfCups: number,
  trip: Trip,
  id: string,
  createdAt: string,
  updatedAt: string,
  orderBuyerId: string,
  orderShipperId: string,
  orderTripId: string,
  owner?: string | null,
};

export type UpdateOrderInput = {
  tracking?: Array< string | null > | null,
  numberOfCups?: number | null,
  id: string,
  orderBuyerId: string,
  orderShipperId: string,
  orderTripId: string,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  fbUsername?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  banned?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userAddressId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
  storeLastUpdateById?: ModelIDInput | null,
  storeInventoryId?: ModelIDInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
};

export type ModelInventoryFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelInventoryFilterInput | null > | null,
  or?: Array< ModelInventoryFilterInput | null > | null,
  not?: ModelInventoryFilterInput | null,
};

export type ModelInventoryConnection = {
  __typename: "ModelInventoryConnection",
  items:  Array<Inventory | null >,
  nextToken?: string | null,
};

export type ModelLegoFilterInput = {
  id?: ModelIDInput | null,
  imageKey?: ModelStringInput | null,
  and?: Array< ModelLegoFilterInput | null > | null,
  or?: Array< ModelLegoFilterInput | null > | null,
  not?: ModelLegoFilterInput | null,
  inventoryItemsId?: ModelIDInput | null,
};

export type ModelTripFilterInput = {
  cupPrice?: ModelStringInput | null,
  shippingPrice?: ModelStringInput | null,
  orderExpiration?: ModelFloatInput | null,
  maximumCups?: ModelIntInput | null,
  and?: Array< ModelTripFilterInput | null > | null,
  or?: Array< ModelTripFilterInput | null > | null,
  not?: ModelTripFilterInput | null,
  tripStoreId?: ModelIDInput | null,
  tripShipperId?: ModelIDInput | null,
};

export type ModelTripConnection = {
  __typename: "ModelTripConnection",
  items:  Array<Trip | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  tracking?: ModelStringInput | null,
  numberOfCups?: ModelIntInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  orderBuyerId?: ModelIDInput | null,
  orderShipperId?: ModelIDInput | null,
  orderTripId?: ModelIDInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fbUsername?: ModelSubscriptionStringInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  banned?: ModelSubscriptionBooleanInput | null,
  deleted?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  address?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  district?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  district?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
};

export type ModelSubscriptionInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionInventoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionInventoryFilterInput | null > | null,
};

export type ModelSubscriptionLegoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLegoFilterInput | null > | null,
  or?: Array< ModelSubscriptionLegoFilterInput | null > | null,
};

export type ModelSubscriptionTripFilterInput = {
  cupPrice?: ModelSubscriptionStringInput | null,
  shippingPrice?: ModelSubscriptionStringInput | null,
  orderExpiration?: ModelSubscriptionFloatInput | null,
  maximumCups?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTripFilterInput | null > | null,
  or?: Array< ModelSubscriptionTripFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  tracking?: ModelSubscriptionStringInput | null,
  numberOfCups?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    fbUsername: string,
    first_name: string,
    last_name: string,
    address?:  {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userAddressId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    fbUsername: string,
    first_name: string,
    last_name: string,
    address?:  {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userAddressId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    fbUsername: string,
    first_name: string,
    last_name: string,
    address?:  {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userAddressId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    address: string,
    address2?: string | null,
    district: string,
    city: string,
    postal_code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    address: string,
    address2?: string | null,
    district: string,
    city: string,
    postal_code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    address: string,
    address2?: string | null,
    district: string,
    city: string,
    postal_code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    district: string,
    city: string,
    lastUpdateBy:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventory?:  {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storeLastUpdateById: string,
    storeInventoryId?: string | null,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    district: string,
    city: string,
    lastUpdateBy:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventory?:  {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storeLastUpdateById: string,
    storeInventoryId?: string | null,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    district: string,
    city: string,
    lastUpdateBy:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventory?:  {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storeLastUpdateById: string,
    storeInventoryId?: string | null,
  } | null,
};

export type CreateInventoryMutationVariables = {
  input: CreateInventoryInput,
  condition?: ModelInventoryConditionInput | null,
};

export type CreateInventoryMutation = {
  createInventory?:  {
    __typename: "Inventory",
    id: string,
    items?:  {
      __typename: "ModelLegoConnection",
      items:  Array< {
        __typename: "Lego",
        id: string,
        imageKey: string,
        createdAt: string,
        updatedAt: string,
        inventoryItemsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInventoryMutationVariables = {
  input: UpdateInventoryInput,
  condition?: ModelInventoryConditionInput | null,
};

export type UpdateInventoryMutation = {
  updateInventory?:  {
    __typename: "Inventory",
    id: string,
    items?:  {
      __typename: "ModelLegoConnection",
      items:  Array< {
        __typename: "Lego",
        id: string,
        imageKey: string,
        createdAt: string,
        updatedAt: string,
        inventoryItemsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInventoryMutationVariables = {
  input: DeleteInventoryInput,
  condition?: ModelInventoryConditionInput | null,
};

export type DeleteInventoryMutation = {
  deleteInventory?:  {
    __typename: "Inventory",
    id: string,
    items?:  {
      __typename: "ModelLegoConnection",
      items:  Array< {
        __typename: "Lego",
        id: string,
        imageKey: string,
        createdAt: string,
        updatedAt: string,
        inventoryItemsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLegoMutationVariables = {
  input: CreateLegoInput,
  condition?: ModelLegoConditionInput | null,
};

export type CreateLegoMutation = {
  createLego?:  {
    __typename: "Lego",
    id: string,
    imageKey: string,
    createdAt: string,
    updatedAt: string,
    inventoryItemsId: string,
  } | null,
};

export type UpdateLegoMutationVariables = {
  input: UpdateLegoInput,
  condition?: ModelLegoConditionInput | null,
};

export type UpdateLegoMutation = {
  updateLego?:  {
    __typename: "Lego",
    id: string,
    imageKey: string,
    createdAt: string,
    updatedAt: string,
    inventoryItemsId: string,
  } | null,
};

export type DeleteLegoMutationVariables = {
  input: DeleteLegoInput,
  condition?: ModelLegoConditionInput | null,
};

export type DeleteLegoMutation = {
  deleteLego?:  {
    __typename: "Lego",
    id: string,
    imageKey: string,
    createdAt: string,
    updatedAt: string,
    inventoryItemsId: string,
  } | null,
};

export type CreateTripMutationVariables = {
  input: CreateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type CreateTripMutation = {
  createTrip?:  {
    __typename: "Trip",
    store:  {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    maximumCups?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    tripStoreId: string,
    tripShipperId: string,
    owner?: string | null,
  } | null,
};

export type UpdateTripMutationVariables = {
  input: UpdateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type UpdateTripMutation = {
  updateTrip?:  {
    __typename: "Trip",
    store:  {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    maximumCups?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    tripStoreId: string,
    tripShipperId: string,
    owner?: string | null,
  } | null,
};

export type DeleteTripMutationVariables = {
  input: DeleteTripInput,
  condition?: ModelTripConditionInput | null,
};

export type DeleteTripMutation = {
  deleteTrip?:  {
    __typename: "Trip",
    store:  {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    maximumCups?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    tripStoreId: string,
    tripShipperId: string,
    owner?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    buyer:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    tracking: Array< string | null >,
    numberOfCups: number,
    trip:  {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    orderBuyerId: string,
    orderShipperId: string,
    orderTripId: string,
    owner?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    buyer:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    tracking: Array< string | null >,
    numberOfCups: number,
    trip:  {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    orderBuyerId: string,
    orderShipperId: string,
    orderTripId: string,
    owner?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    buyer:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    tracking: Array< string | null >,
    numberOfCups: number,
    trip:  {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    orderBuyerId: string,
    orderShipperId: string,
    orderTripId: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    fbUsername: string,
    first_name: string,
    last_name: string,
    address?:  {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userAddressId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    address: string,
    address2?: string | null,
    district: string,
    city: string,
    postal_code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    district: string,
    city: string,
    lastUpdateBy:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventory?:  {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storeLastUpdateById: string,
    storeInventoryId?: string | null,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInventoryQueryVariables = {
  id: string,
};

export type GetInventoryQuery = {
  getInventory?:  {
    __typename: "Inventory",
    id: string,
    items?:  {
      __typename: "ModelLegoConnection",
      items:  Array< {
        __typename: "Lego",
        id: string,
        imageKey: string,
        createdAt: string,
        updatedAt: string,
        inventoryItemsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInventoriesQueryVariables = {
  filter?: ModelInventoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInventoriesQuery = {
  listInventories?:  {
    __typename: "ModelInventoryConnection",
    items:  Array< {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLegoQueryVariables = {
  id: string,
};

export type GetLegoQuery = {
  getLego?:  {
    __typename: "Lego",
    id: string,
    imageKey: string,
    createdAt: string,
    updatedAt: string,
    inventoryItemsId: string,
  } | null,
};

export type ListLegosQueryVariables = {
  filter?: ModelLegoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLegosQuery = {
  listLegos?:  {
    __typename: "ModelLegoConnection",
    items:  Array< {
      __typename: "Lego",
      id: string,
      imageKey: string,
      createdAt: string,
      updatedAt: string,
      inventoryItemsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTripQueryVariables = {
  id: string,
};

export type GetTripQuery = {
  getTrip?:  {
    __typename: "Trip",
    store:  {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    maximumCups?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    tripStoreId: string,
    tripShipperId: string,
    owner?: string | null,
  } | null,
};

export type ListTripsQueryVariables = {
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTripsQuery = {
  listTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    buyer:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    tracking: Array< string | null >,
    numberOfCups: number,
    trip:  {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    orderBuyerId: string,
    orderShipperId: string,
    orderTripId: string,
    owner?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      buyer:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      tracking: Array< string | null >,
      numberOfCups: number,
      trip:  {
        __typename: "Trip",
        cupPrice: string,
        shippingPrice: string,
        orderExpiration: number,
        maximumCups?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        tripStoreId: string,
        tripShipperId: string,
        owner?: string | null,
      },
      id: string,
      createdAt: string,
      updatedAt: string,
      orderBuyerId: string,
      orderShipperId: string,
      orderTripId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    fbUsername: string,
    first_name: string,
    last_name: string,
    address?:  {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userAddressId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    fbUsername: string,
    first_name: string,
    last_name: string,
    address?:  {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userAddressId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    fbUsername: string,
    first_name: string,
    last_name: string,
    address?:  {
      __typename: "Address",
      id: string,
      address: string,
      address2?: string | null,
      district: string,
      city: string,
      postal_code: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    userAddressId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    address: string,
    address2?: string | null,
    district: string,
    city: string,
    postal_code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    address: string,
    address2?: string | null,
    district: string,
    city: string,
    postal_code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    address: string,
    address2?: string | null,
    district: string,
    city: string,
    postal_code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    district: string,
    city: string,
    lastUpdateBy:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventory?:  {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storeLastUpdateById: string,
    storeInventoryId?: string | null,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    district: string,
    city: string,
    lastUpdateBy:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventory?:  {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storeLastUpdateById: string,
    storeInventoryId?: string | null,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    district: string,
    city: string,
    lastUpdateBy:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventory?:  {
      __typename: "Inventory",
      id: string,
      items?:  {
        __typename: "ModelLegoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    storeLastUpdateById: string,
    storeInventoryId?: string | null,
  } | null,
};

export type OnCreateInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null,
};

export type OnCreateInventorySubscription = {
  onCreateInventory?:  {
    __typename: "Inventory",
    id: string,
    items?:  {
      __typename: "ModelLegoConnection",
      items:  Array< {
        __typename: "Lego",
        id: string,
        imageKey: string,
        createdAt: string,
        updatedAt: string,
        inventoryItemsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null,
};

export type OnUpdateInventorySubscription = {
  onUpdateInventory?:  {
    __typename: "Inventory",
    id: string,
    items?:  {
      __typename: "ModelLegoConnection",
      items:  Array< {
        __typename: "Lego",
        id: string,
        imageKey: string,
        createdAt: string,
        updatedAt: string,
        inventoryItemsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null,
};

export type OnDeleteInventorySubscription = {
  onDeleteInventory?:  {
    __typename: "Inventory",
    id: string,
    items?:  {
      __typename: "ModelLegoConnection",
      items:  Array< {
        __typename: "Lego",
        id: string,
        imageKey: string,
        createdAt: string,
        updatedAt: string,
        inventoryItemsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLegoSubscriptionVariables = {
  filter?: ModelSubscriptionLegoFilterInput | null,
};

export type OnCreateLegoSubscription = {
  onCreateLego?:  {
    __typename: "Lego",
    id: string,
    imageKey: string,
    createdAt: string,
    updatedAt: string,
    inventoryItemsId: string,
  } | null,
};

export type OnUpdateLegoSubscriptionVariables = {
  filter?: ModelSubscriptionLegoFilterInput | null,
};

export type OnUpdateLegoSubscription = {
  onUpdateLego?:  {
    __typename: "Lego",
    id: string,
    imageKey: string,
    createdAt: string,
    updatedAt: string,
    inventoryItemsId: string,
  } | null,
};

export type OnDeleteLegoSubscriptionVariables = {
  filter?: ModelSubscriptionLegoFilterInput | null,
};

export type OnDeleteLegoSubscription = {
  onDeleteLego?:  {
    __typename: "Lego",
    id: string,
    imageKey: string,
    createdAt: string,
    updatedAt: string,
    inventoryItemsId: string,
  } | null,
};

export type OnCreateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnCreateTripSubscription = {
  onCreateTrip?:  {
    __typename: "Trip",
    store:  {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    maximumCups?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    tripStoreId: string,
    tripShipperId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnUpdateTripSubscription = {
  onUpdateTrip?:  {
    __typename: "Trip",
    store:  {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    maximumCups?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    tripStoreId: string,
    tripShipperId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnDeleteTripSubscription = {
  onDeleteTrip?:  {
    __typename: "Trip",
    store:  {
      __typename: "Store",
      id: string,
      name: string,
      district: string,
      city: string,
      lastUpdateBy:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventory?:  {
        __typename: "Inventory",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      storeLastUpdateById: string,
      storeInventoryId?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    maximumCups?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    tripStoreId: string,
    tripShipperId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    buyer:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    tracking: Array< string | null >,
    numberOfCups: number,
    trip:  {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    orderBuyerId: string,
    orderShipperId: string,
    orderTripId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    buyer:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    tracking: Array< string | null >,
    numberOfCups: number,
    trip:  {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    orderBuyerId: string,
    orderShipperId: string,
    orderTripId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    buyer:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    shipper:  {
      __typename: "User",
      id: string,
      fbUsername: string,
      first_name: string,
      last_name: string,
      address?:  {
        __typename: "Address",
        id: string,
        address: string,
        address2?: string | null,
        district: string,
        city: string,
        postal_code: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userAddressId?: string | null,
      owner?: string | null,
    },
    tracking: Array< string | null >,
    numberOfCups: number,
    trip:  {
      __typename: "Trip",
      store:  {
        __typename: "Store",
        id: string,
        name: string,
        district: string,
        city: string,
        createdAt: string,
        updatedAt: string,
        storeLastUpdateById: string,
        storeInventoryId?: string | null,
      },
      shipper:  {
        __typename: "User",
        id: string,
        fbUsername: string,
        first_name: string,
        last_name: string,
        email: string,
        banned?: boolean | null,
        deleted?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userAddressId?: string | null,
        owner?: string | null,
      },
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      maximumCups?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      tripStoreId: string,
      tripShipperId: string,
      owner?: string | null,
    },
    id: string,
    createdAt: string,
    updatedAt: string,
    orderBuyerId: string,
    orderShipperId: string,
    orderTripId: string,
    owner?: string | null,
  } | null,
};
