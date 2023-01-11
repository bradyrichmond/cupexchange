/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
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
export const createLego = /* GraphQL */ `
  mutation CreateLego(
    $input: CreateLegoInput!
    $condition: ModelLegoConditionInput
  ) {
    createLego(input: $input, condition: $condition) {
      id
      imageKey
      createdAt
      updatedAt
      inventoryItemsId
    }
  }
`;
export const updateLego = /* GraphQL */ `
  mutation UpdateLego(
    $input: UpdateLegoInput!
    $condition: ModelLegoConditionInput
  ) {
    updateLego(input: $input, condition: $condition) {
      id
      imageKey
      createdAt
      updatedAt
      inventoryItemsId
    }
  }
`;
export const deleteLego = /* GraphQL */ `
  mutation DeleteLego(
    $input: DeleteLegoInput!
    $condition: ModelLegoConditionInput
  ) {
    deleteLego(input: $input, condition: $condition) {
      id
      imageKey
      createdAt
      updatedAt
      inventoryItemsId
    }
  }
`;
export const createTrip = /* GraphQL */ `
  mutation CreateTrip(
    $input: CreateTripInput!
    $condition: ModelTripConditionInput
  ) {
    createTrip(input: $input, condition: $condition) {
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
export const updateTrip = /* GraphQL */ `
  mutation UpdateTrip(
    $input: UpdateTripInput!
    $condition: ModelTripConditionInput
  ) {
    updateTrip(input: $input, condition: $condition) {
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
export const deleteTrip = /* GraphQL */ `
  mutation DeleteTrip(
    $input: DeleteTripInput!
    $condition: ModelTripConditionInput
  ) {
    deleteTrip(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
