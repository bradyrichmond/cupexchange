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
        _version
        _deleted
        _lastChangedAt
      }
      email
      banned
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      email
      banned
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      email
      banned
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userAddressId
        owner
      }
      inventory {
        id
        items {
          items {
            id
            imageKey
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryItemsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userAddressId
        owner
      }
      inventory {
        id
        items {
          items {
            id
            imageKey
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryItemsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userAddressId
        owner
      }
      inventory {
        id
        items {
          items {
            id
            imageKey
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryItemsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          inventoryItemsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          inventoryItemsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          inventoryItemsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          address {
            id
            address
            address2
            district
            city
            postal_code
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          email
          banned
          deleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userAddressId
          owner
        }
        inventory {
          id
          items {
            items {
              id
              imageKey
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              inventoryItemsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          address {
            id
            address
            address2
            district
            city
            postal_code
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          email
          banned
          deleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userAddressId
          owner
        }
        inventory {
          id
          items {
            items {
              id
              imageKey
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              inventoryItemsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          address {
            id
            address
            address2
            district
            city
            postal_code
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          email
          banned
          deleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userAddressId
          owner
        }
        inventory {
          id
          items {
            items {
              id
              imageKey
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              inventoryItemsId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userAddressId
        owner
      }
      tracking
      numberOfCups
      orders {
        items {
          item {
            id
            imageKey
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryItemsId
          }
          count
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderOrdersId
          orderItemItemId
        }
        nextToken
        startedAt
      }
      trip {
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
            address {
              id
              address
              address2
              district
              city
              postal_code
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            email
            banned
            deleted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userAddressId
            owner
          }
          inventory {
            id
            items {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
          }
          email
          banned
          deleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        tripStoreId
        tripShipperId
        owner
      }
      total
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userAddressId
        owner
      }
      tracking
      numberOfCups
      orders {
        items {
          item {
            id
            imageKey
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryItemsId
          }
          count
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderOrdersId
          orderItemItemId
        }
        nextToken
        startedAt
      }
      trip {
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
            address {
              id
              address
              address2
              district
              city
              postal_code
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            email
            banned
            deleted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userAddressId
            owner
          }
          inventory {
            id
            items {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
          }
          email
          banned
          deleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        tripStoreId
        tripShipperId
        owner
      }
      total
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        email
        banned
        deleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userAddressId
        owner
      }
      tracking
      numberOfCups
      orders {
        items {
          item {
            id
            imageKey
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryItemsId
          }
          count
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderOrdersId
          orderItemItemId
        }
        nextToken
        startedAt
      }
      trip {
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
            address {
              id
              address
              address2
              district
              city
              postal_code
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            email
            banned
            deleted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userAddressId
            owner
          }
          inventory {
            id
            items {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
          }
          email
          banned
          deleted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        tripStoreId
        tripShipperId
        owner
      }
      total
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderBuyerId
      orderShipperId
      orderTripId
      owner
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      item {
        id
        imageKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        inventoryItemsId
      }
      count
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrdersId
      orderItemItemId
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      item {
        id
        imageKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        inventoryItemsId
      }
      count
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrdersId
      orderItemItemId
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      item {
        id
        imageKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        inventoryItemsId
      }
      count
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrdersId
      orderItemItemId
    }
  }
`;
