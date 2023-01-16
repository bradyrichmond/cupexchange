import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fbUsername: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly address?: Address | null;
  readonly email: string;
  readonly banned?: boolean | null;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAddressId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fbUsername: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly address: AsyncItem<Address | undefined>;
  readonly email: string;
  readonly banned?: boolean | null;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAddressId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address: string;
  readonly address2?: string | null;
  readonly district: string;
  readonly city: string;
  readonly postal_code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address: string;
  readonly address2?: string | null;
  readonly district: string;
  readonly city: string;
  readonly postal_code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly district: string;
  readonly city: string;
  readonly lastUpdateBy: User;
  readonly inventory?: Inventory | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeLastUpdateById: string;
  readonly storeInventoryId?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly district: string;
  readonly city: string;
  readonly lastUpdateBy: AsyncItem<User>;
  readonly inventory: AsyncItem<Inventory | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeLastUpdateById: string;
  readonly storeInventoryId?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}

type EagerInventory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Inventory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly items: Lego[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInventory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Inventory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly items: AsyncCollection<Lego>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Inventory = LazyLoading extends LazyLoadingDisabled ? EagerInventory : LazyInventory

export declare const Inventory: (new (init: ModelInit<Inventory>) => Inventory) & {
  copyOf(source: Inventory, mutator: (draft: MutableModel<Inventory>) => MutableModel<Inventory> | void): Inventory;
}

type EagerLego = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lego, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imageKey: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly inventoryItemsId?: string | null;
}

type LazyLego = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lego, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imageKey: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly inventoryItemsId?: string | null;
}

export declare type Lego = LazyLoading extends LazyLoadingDisabled ? EagerLego : LazyLego

export declare const Lego: (new (init: ModelInit<Lego>) => Lego) & {
  copyOf(source: Lego, mutator: (draft: MutableModel<Lego>) => MutableModel<Lego> | void): Lego;
}

type EagerTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly store: Store;
  readonly shipper: User;
  readonly cupPrice: string;
  readonly shippingPrice: string;
  readonly orderExpiration: number;
  readonly maximumCups?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tripStoreId: string;
  readonly tripShipperId: string;
}

type LazyTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly store: AsyncItem<Store>;
  readonly shipper: AsyncItem<User>;
  readonly cupPrice: string;
  readonly shippingPrice: string;
  readonly orderExpiration: number;
  readonly maximumCups?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tripStoreId: string;
  readonly tripShipperId: string;
}

export declare type Trip = LazyLoading extends LazyLoadingDisabled ? EagerTrip : LazyTrip

export declare const Trip: (new (init: ModelInit<Trip>) => Trip) & {
  copyOf(source: Trip, mutator: (draft: MutableModel<Trip>) => MutableModel<Trip> | void): Trip;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buyer: User;
  readonly shipper: User;
  readonly tracking: (string | null)[];
  readonly numberOfCups: number;
  readonly orders: OrderItem[];
  readonly trip: Trip;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderBuyerId: string;
  readonly orderShipperId: string;
  readonly orderTripId: string;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buyer: AsyncItem<User>;
  readonly shipper: AsyncItem<User>;
  readonly tracking: (string | null)[];
  readonly numberOfCups: number;
  readonly orders: AsyncCollection<OrderItem>;
  readonly trip: AsyncItem<Trip>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderBuyerId: string;
  readonly orderShipperId: string;
  readonly orderTripId: string;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerOrderItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item: Lego;
  readonly count: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderOrdersId?: string | null;
  readonly orderItemItemId: string;
}

type LazyOrderItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly item: AsyncItem<Lego>;
  readonly count: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderOrdersId?: string | null;
  readonly orderItemItemId: string;
}

export declare type OrderItem = LazyLoading extends LazyLoadingDisabled ? EagerOrderItem : LazyOrderItem

export declare const OrderItem: (new (init: ModelInit<OrderItem>) => OrderItem) & {
  copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem>) => MutableModel<OrderItem> | void): OrderItem;
}