import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





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
  readonly inventoryId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly inventoryId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly items: string[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInventory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Inventory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly items: string[];
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
}

export declare type Lego = LazyLoading extends LazyLoadingDisabled ? EagerLego : LazyLego

export declare const Lego: (new (init: ModelInit<Lego>) => Lego) & {
  copyOf(source: Lego, mutator: (draft: MutableModel<Lego>) => MutableModel<Lego> | void): Lego;
}