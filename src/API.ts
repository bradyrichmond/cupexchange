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
  _version?: number | null,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  fbUsername?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  banned?: boolean | null,
  deleted?: boolean | null,
  _version?: number | null,
  userAddressId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateAddressInput = {
  id?: string | null,
  address: string,
  address2?: string | null,
  district: string,
  city: string,
  postal_code: string,
  _version?: number | null,
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
  _version?: number | null,
};

export type DeleteAddressInput = {
  id: string,
  _version?: number | null,
};

export type CreateStoreInput = {
  id?: string | null,
  name: string,
  district: string,
  city: string,
  inventoryId?: string | null,
  _version?: number | null,
};

export type ModelStoreConditionInput = {
  name?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  inventoryId?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  name: string,
  district: string,
  city: string,
  lastUpdateBy: User,
  inventoryId?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateStoreInput = {
  id: string,
  name?: string | null,
  district?: string | null,
  city?: string | null,
  inventoryId?: string | null,
  _version?: number | null,
};

export type DeleteStoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateInventoryInput = {
  id?: string | null,
  items: Array< string >,
  _version?: number | null,
};

export type ModelInventoryConditionInput = {
  items?: ModelStringInput | null,
  and?: Array< ModelInventoryConditionInput | null > | null,
  or?: Array< ModelInventoryConditionInput | null > | null,
  not?: ModelInventoryConditionInput | null,
};

export type Inventory = {
  __typename: "Inventory",
  id: string,
  items: Array< string >,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateInventoryInput = {
  id: string,
  items?: Array< string > | null,
  _version?: number | null,
};

export type DeleteInventoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateLegoInput = {
  id?: string | null,
  imageKey: string,
  _version?: number | null,
};

export type ModelLegoConditionInput = {
  imageKey?: ModelStringInput | null,
  and?: Array< ModelLegoConditionInput | null > | null,
  or?: Array< ModelLegoConditionInput | null > | null,
  not?: ModelLegoConditionInput | null,
};

export type Lego = {
  __typename: "Lego",
  id: string,
  imageKey: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateLegoInput = {
  id: string,
  imageKey?: string | null,
  _version?: number | null,
};

export type DeleteLegoInput = {
  id: string,
  _version?: number | null,
};

export type CreateTripInput = {
  store: string,
  shipper: string,
  cupPrice: string,
  shippingPrice: string,
  orderExpiration: number,
  id?: string | null,
  _version?: number | null,
};

export type ModelTripConditionInput = {
  store?: ModelStringInput | null,
  shipper?: ModelStringInput | null,
  cupPrice?: ModelStringInput | null,
  shippingPrice?: ModelStringInput | null,
  orderExpiration?: ModelIntInput | null,
  and?: Array< ModelTripConditionInput | null > | null,
  or?: Array< ModelTripConditionInput | null > | null,
  not?: ModelTripConditionInput | null,
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
  store: string,
  shipper: string,
  cupPrice: string,
  shippingPrice: string,
  orderExpiration: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateTripInput = {
  store?: string | null,
  shipper?: string | null,
  cupPrice?: string | null,
  shippingPrice?: string | null,
  orderExpiration?: number | null,
  id: string,
  _version?: number | null,
};

export type DeleteTripInput = {
  id: string,
  _version?: number | null,
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
  startedAt?: number | null,
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
  startedAt?: number | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  district?: ModelStringInput | null,
  city?: ModelStringInput | null,
  inventoryId?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelInventoryFilterInput = {
  id?: ModelIDInput | null,
  items?: ModelStringInput | null,
  and?: Array< ModelInventoryFilterInput | null > | null,
  or?: Array< ModelInventoryFilterInput | null > | null,
  not?: ModelInventoryFilterInput | null,
};

export type ModelInventoryConnection = {
  __typename: "ModelInventoryConnection",
  items:  Array<Inventory | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLegoFilterInput = {
  id?: ModelIDInput | null,
  imageKey?: ModelStringInput | null,
  and?: Array< ModelLegoFilterInput | null > | null,
  or?: Array< ModelLegoFilterInput | null > | null,
  not?: ModelLegoFilterInput | null,
};

export type ModelLegoConnection = {
  __typename: "ModelLegoConnection",
  items:  Array<Lego | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTripFilterInput = {
  store?: ModelStringInput | null,
  shipper?: ModelStringInput | null,
  cupPrice?: ModelStringInput | null,
  shippingPrice?: ModelStringInput | null,
  orderExpiration?: ModelIntInput | null,
  and?: Array< ModelTripFilterInput | null > | null,
  or?: Array< ModelTripFilterInput | null > | null,
  not?: ModelTripFilterInput | null,
};

export type ModelTripConnection = {
  __typename: "ModelTripConnection",
  items:  Array<Trip | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  inventoryId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
};

export type ModelSubscriptionInventoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  items?: ModelSubscriptionStringInput | null,
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
  store?: ModelSubscriptionStringInput | null,
  shipper?: ModelSubscriptionStringInput | null,
  cupPrice?: ModelSubscriptionStringInput | null,
  shippingPrice?: ModelSubscriptionStringInput | null,
  orderExpiration?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTripFilterInput | null > | null,
  or?: Array< ModelSubscriptionTripFilterInput | null > | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventoryId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventoryId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventoryId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    items: Array< string >,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    items: Array< string >,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    items: Array< string >,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTripMutationVariables = {
  input: CreateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type CreateTripMutation = {
  createTrip?:  {
    __typename: "Trip",
    store: string,
    shipper: string,
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    store: string,
    shipper: string,
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    store: string,
    shipper: string,
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAddressesQuery = {
  syncAddresses?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventoryId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventoryId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStoresQuery = {
  syncStores?:  {
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userAddressId?: string | null,
        owner?: string | null,
      },
      inventoryId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetInventoryQueryVariables = {
  id: string,
};

export type GetInventoryQuery = {
  getInventory?:  {
    __typename: "Inventory",
    id: string,
    items: Array< string >,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      items: Array< string >,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncInventoriesQueryVariables = {
  filter?: ModelInventoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncInventoriesQuery = {
  syncInventories?:  {
    __typename: "ModelInventoryConnection",
    items:  Array< {
      __typename: "Inventory",
      id: string,
      items: Array< string >,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLegosQueryVariables = {
  filter?: ModelLegoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLegosQuery = {
  syncLegos?:  {
    __typename: "ModelLegoConnection",
    items:  Array< {
      __typename: "Lego",
      id: string,
      imageKey: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTripQueryVariables = {
  id: string,
};

export type GetTripQuery = {
  getTrip?:  {
    __typename: "Trip",
    store: string,
    shipper: string,
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      store: string,
      shipper: string,
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTripsQueryVariables = {
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTripsQuery = {
  syncTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      store: string,
      shipper: string,
      cupPrice: string,
      shippingPrice: string,
      orderExpiration: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    email: string,
    banned?: boolean | null,
    deleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventoryId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventoryId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      email: string,
      banned?: boolean | null,
      deleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAddressId?: string | null,
      owner?: string | null,
    },
    inventoryId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null,
};

export type OnCreateInventorySubscription = {
  onCreateInventory?:  {
    __typename: "Inventory",
    id: string,
    items: Array< string >,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null,
};

export type OnUpdateInventorySubscription = {
  onUpdateInventory?:  {
    __typename: "Inventory",
    id: string,
    items: Array< string >,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteInventorySubscriptionVariables = {
  filter?: ModelSubscriptionInventoryFilterInput | null,
};

export type OnDeleteInventorySubscription = {
  onDeleteInventory?:  {
    __typename: "Inventory",
    id: string,
    items: Array< string >,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnCreateTripSubscription = {
  onCreateTrip?:  {
    __typename: "Trip",
    store: string,
    shipper: string,
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnUpdateTripSubscription = {
  onUpdateTrip?:  {
    __typename: "Trip",
    store: string,
    shipper: string,
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnDeleteTripSubscription = {
  onDeleteTrip?:  {
    __typename: "Trip",
    store: string,
    shipper: string,
    cupPrice: string,
    shippingPrice: string,
    orderExpiration: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
