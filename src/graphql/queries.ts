/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        address2
        district
        city
        postal_code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
      createdAt
      updatedAt
      storeLastUpdateById
      storeInventoryId
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        storeLastUpdateById
        storeInventoryId
      }
      nextToken
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
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
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLego = /* GraphQL */ `
  query GetLego($id: ID!) {
    getLego(id: $id) {
      id
      imageKey
      createdAt
      updatedAt
      inventoryItemsId
    }
  }
`;
export const listLegos = /* GraphQL */ `
  query ListLegos(
    $filter: ModelLegoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLegos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageKey
        createdAt
        updatedAt
        inventoryItemsId
      }
      nextToken
    }
  }
`;
export const getTrip = /* GraphQL */ `
  query GetTrip($id: ID!) {
    getTrip(id: $id) {
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
export const listTrips = /* GraphQL */ `
  query ListTrips(
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
        nextToken
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
      total
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
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
        total
        id
        createdAt
        updatedAt
        orderBuyerId
        orderShipperId
        orderTripId
        owner
      }
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
