/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      fbUsername
      first_name
      last_name
      address {
        id
        address
        address2
        district
        city
        postal_code
        createdAt
        updatedAt
      }
      email
      banned
      deleted
      createdAt
      updatedAt
      userAddressId
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      fbUsername
      first_name
      last_name
      address {
        id
        address
        address2
        district
        city
        postal_code
        createdAt
        updatedAt
      }
      email
      banned
      deleted
      createdAt
      updatedAt
      userAddressId
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      fbUsername
      first_name
      last_name
      address {
        id
        address
        address2
        district
        city
        postal_code
        createdAt
        updatedAt
      }
      email
      banned
      deleted
      createdAt
      updatedAt
      userAddressId
      owner
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
      id
      address
      address2
      district
      city
      postal_code
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
      id
      address
      address2
      district
      city
      postal_code
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
      id
      address
      address2
      district
      city
      postal_code
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
      id
      name
      district
      city
      lastUpdateBy {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      inventory {
        id
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      storeLastUpdateById
      storeInventoryId
    }
  }
`;
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
      id
      name
      district
      city
      lastUpdateBy {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      inventory {
        id
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      storeLastUpdateById
      storeInventoryId
    }
  }
`;
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
      id
      name
      district
      city
      lastUpdateBy {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      inventory {
        id
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      storeLastUpdateById
      storeInventoryId
    }
  }
`;
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onCreateInventory(filter: $filter) {
      id
      items {
        items {
          id
          imageKey
          createdAt
          updatedAt
          inventoryItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onUpdateInventory(filter: $filter) {
      id
      items {
        items {
          id
          imageKey
          createdAt
          updatedAt
          inventoryItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onDeleteInventory(filter: $filter) {
      id
      items {
        items {
          id
          imageKey
          createdAt
          updatedAt
          inventoryItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLego = /* GraphQL */ `
  subscription OnCreateLego($filter: ModelSubscriptionLegoFilterInput) {
    onCreateLego(filter: $filter) {
      id
      imageKey
      createdAt
      updatedAt
      inventoryItemsId
    }
  }
`;
export const onUpdateLego = /* GraphQL */ `
  subscription OnUpdateLego($filter: ModelSubscriptionLegoFilterInput) {
    onUpdateLego(filter: $filter) {
      id
      imageKey
      createdAt
      updatedAt
      inventoryItemsId
    }
  }
`;
export const onDeleteLego = /* GraphQL */ `
  subscription OnDeleteLego($filter: ModelSubscriptionLegoFilterInput) {
    onDeleteLego(filter: $filter) {
      id
      imageKey
      createdAt
      updatedAt
      inventoryItemsId
    }
  }
`;
export const onCreateTrip = /* GraphQL */ `
  subscription OnCreateTrip($filter: ModelSubscriptionTripFilterInput) {
    onCreateTrip(filter: $filter) {
      store {
        id
        name
        district
        city
        lastUpdateBy {
          id
          fbUsername
          first_name
          last_name
          email
          banned
          deleted
          createdAt
          updatedAt
          userAddressId
          owner
        }
        inventory {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        storeLastUpdateById
        storeInventoryId
      }
      shipper {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      cupPrice
      shippingPrice
      orderExpiration
      maximumCups
      id
      createdAt
      updatedAt
      tripStoreId
      tripShipperId
      owner
    }
  }
`;
export const onUpdateTrip = /* GraphQL */ `
  subscription OnUpdateTrip($filter: ModelSubscriptionTripFilterInput) {
    onUpdateTrip(filter: $filter) {
      store {
        id
        name
        district
        city
        lastUpdateBy {
          id
          fbUsername
          first_name
          last_name
          email
          banned
          deleted
          createdAt
          updatedAt
          userAddressId
          owner
        }
        inventory {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        storeLastUpdateById
        storeInventoryId
      }
      shipper {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      cupPrice
      shippingPrice
      orderExpiration
      maximumCups
      id
      createdAt
      updatedAt
      tripStoreId
      tripShipperId
      owner
    }
  }
`;
export const onDeleteTrip = /* GraphQL */ `
  subscription OnDeleteTrip($filter: ModelSubscriptionTripFilterInput) {
    onDeleteTrip(filter: $filter) {
      store {
        id
        name
        district
        city
        lastUpdateBy {
          id
          fbUsername
          first_name
          last_name
          email
          banned
          deleted
          createdAt
          updatedAt
          userAddressId
          owner
        }
        inventory {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        storeLastUpdateById
        storeInventoryId
      }
      shipper {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      cupPrice
      shippingPrice
      orderExpiration
      maximumCups
      id
      createdAt
      updatedAt
      tripStoreId
      tripShipperId
      owner
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      buyer {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      shipper {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      tracking
      numberOfCups
      orders {
        items {
          count
          id
          createdAt
          updatedAt
          orderOrdersId
          orderItemItemId
        }
        nextToken
      }
      trip {
        store {
          id
          name
          district
          city
          createdAt
          updatedAt
          storeLastUpdateById
          storeInventoryId
        }
        shipper {
          id
          fbUsername
          first_name
          last_name
          email
          banned
          deleted
          createdAt
          updatedAt
          userAddressId
          owner
        }
        cupPrice
        shippingPrice
        orderExpiration
        maximumCups
        id
        createdAt
        updatedAt
        tripStoreId
        tripShipperId
        owner
      }
      id
      createdAt
      updatedAt
      orderBuyerId
      orderShipperId
      orderTripId
      owner
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      buyer {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      shipper {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      tracking
      numberOfCups
      orders {
        items {
          count
          id
          createdAt
          updatedAt
          orderOrdersId
          orderItemItemId
        }
        nextToken
      }
      trip {
        store {
          id
          name
          district
          city
          createdAt
          updatedAt
          storeLastUpdateById
          storeInventoryId
        }
        shipper {
          id
          fbUsername
          first_name
          last_name
          email
          banned
          deleted
          createdAt
          updatedAt
          userAddressId
          owner
        }
        cupPrice
        shippingPrice
        orderExpiration
        maximumCups
        id
        createdAt
        updatedAt
        tripStoreId
        tripShipperId
        owner
      }
      id
      createdAt
      updatedAt
      orderBuyerId
      orderShipperId
      orderTripId
      owner
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      buyer {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      shipper {
        id
        fbUsername
        first_name
        last_name
        address {
          id
          address
          address2
          district
          city
          postal_code
          createdAt
          updatedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        userAddressId
        owner
      }
      tracking
      numberOfCups
      orders {
        items {
          count
          id
          createdAt
          updatedAt
          orderOrdersId
          orderItemItemId
        }
        nextToken
      }
      trip {
        store {
          id
          name
          district
          city
          createdAt
          updatedAt
          storeLastUpdateById
          storeInventoryId
        }
        shipper {
          id
          fbUsername
          first_name
          last_name
          email
          banned
          deleted
          createdAt
          updatedAt
          userAddressId
          owner
        }
        cupPrice
        shippingPrice
        orderExpiration
        maximumCups
        id
        createdAt
        updatedAt
        tripStoreId
        tripShipperId
        owner
      }
      id
      createdAt
      updatedAt
      orderBuyerId
      orderShipperId
      orderTripId
      owner
    }
  }
`;
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
      item {
        id
        imageKey
        createdAt
        updatedAt
        inventoryItemsId
      }
      count
      id
      createdAt
      updatedAt
      orderOrdersId
      orderItemItemId
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
      item {
        id
        imageKey
        createdAt
        updatedAt
        inventoryItemsId
      }
      count
      id
      createdAt
      updatedAt
      orderOrdersId
      orderItemItemId
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
      item {
        id
        imageKey
        createdAt
        updatedAt
        inventoryItemsId
      }
      count
      id
      createdAt
      updatedAt
      orderOrdersId
      orderItemItemId
    }
  }
`;
