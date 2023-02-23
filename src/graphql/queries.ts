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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
            labels
            comments {
              nextToken
              startedAt
            }
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
        createdBy {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        inventoryCreatedById
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
              labels
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
          createdBy {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          inventoryCreatedById
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeLastUpdateById
        storeInventoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStores = /* GraphQL */ `
  query SyncStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
              labels
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
          createdBy {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          inventoryCreatedById
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeLastUpdateById
        storeInventoryId
      }
      nextToken
      startedAt
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
          labels
          comments {
            items {
              id
              parent
              comment
              createdAt
              edited
              updatedAt
              _version
              _deleted
              _lastChangedAt
              legoCommentsId
              commentCreatedById
              owner
            }
            nextToken
            startedAt
          }
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
      createdBy {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      inventoryCreatedById
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
            labels
            comments {
              nextToken
              startedAt
            }
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
        createdBy {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        inventoryCreatedById
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInventories = /* GraphQL */ `
  query SyncInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        items {
          items {
            id
            imageKey
            labels
            comments {
              nextToken
              startedAt
            }
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
        createdBy {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        inventoryCreatedById
      }
      nextToken
      startedAt
    }
  }
`;
export const getLego = /* GraphQL */ `
  query GetLego($id: ID!) {
    getLego(id: $id) {
      id
      imageKey
      labels
      comments {
        items {
          id
          createdBy {
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
          parent
          comment
          createdAt
          edited
          updatedAt
          _version
          _deleted
          _lastChangedAt
          legoCommentsId
          commentCreatedById
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        labels
        comments {
          items {
            id
            createdBy {
              id
              fbUsername
              first_name
              last_name
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
            parent
            comment
            createdAt
            edited
            updatedAt
            _version
            _deleted
            _lastChangedAt
            legoCommentsId
            commentCreatedById
            owner
          }
          nextToken
          startedAt
        }
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
  }
`;
export const syncLegos = /* GraphQL */ `
  query SyncLegos(
    $filter: ModelLegoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLegos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        imageKey
        labels
        comments {
          items {
            id
            createdBy {
              id
              fbUsername
              first_name
              last_name
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
            parent
            comment
            createdAt
            edited
            updatedAt
            _version
            _deleted
            _lastChangedAt
            legoCommentsId
            commentCreatedById
            owner
          }
          nextToken
          startedAt
        }
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
              labels
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
          createdBy {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          inventoryCreatedById
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
            createdBy {
              id
              fbUsername
              first_name
              last_name
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryCreatedById
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrips = /* GraphQL */ `
  query SyncTrips(
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            createdBy {
              id
              fbUsername
              first_name
              last_name
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryCreatedById
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
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
            labels
            comments {
              nextToken
              startedAt
            }
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
            createdBy {
              id
              fbUsername
              first_name
              last_name
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            inventoryCreatedById
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
              labels
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              inventoryCreatedById
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
              labels
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              inventoryCreatedById
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      item {
        id
        imageKey
        labels
        comments {
          items {
            id
            createdBy {
              id
              fbUsername
              first_name
              last_name
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
            parent
            comment
            createdAt
            edited
            updatedAt
            _version
            _deleted
            _lastChangedAt
            legoCommentsId
            commentCreatedById
            owner
          }
          nextToken
          startedAt
        }
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
          labels
          comments {
            items {
              id
              parent
              comment
              createdAt
              edited
              updatedAt
              _version
              _deleted
              _lastChangedAt
              legoCommentsId
              commentCreatedById
              owner
            }
            nextToken
            startedAt
          }
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
  }
`;
export const syncOrderItems = /* GraphQL */ `
  query SyncOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        item {
          id
          imageKey
          labels
          comments {
            items {
              id
              parent
              comment
              createdAt
              edited
              updatedAt
              _version
              _deleted
              _lastChangedAt
              legoCommentsId
              commentCreatedById
              owner
            }
            nextToken
            startedAt
          }
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
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      createdBy {
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
      parent
      comment
      createdAt
      edited
      updatedAt
      _version
      _deleted
      _lastChangedAt
      legoCommentsId
      commentCreatedById
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdBy {
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
        parent
        comment
        createdAt
        edited
        updatedAt
        _version
        _deleted
        _lastChangedAt
        legoCommentsId
        commentCreatedById
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdBy {
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
        parent
        comment
        createdAt
        edited
        updatedAt
        _version
        _deleted
        _lastChangedAt
        legoCommentsId
        commentCreatedById
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      comment {
        id
        createdBy {
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
        parent
        comment
        createdAt
        edited
        updatedAt
        _version
        _deleted
        _lastChangedAt
        legoCommentsId
        commentCreatedById
        owner
      }
      positive
      reviewOf {
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
      reviewBy {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reviewCommentId
      reviewReviewOfId
      reviewReviewById
      owner
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment {
          id
          createdBy {
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
          parent
          comment
          createdAt
          edited
          updatedAt
          _version
          _deleted
          _lastChangedAt
          legoCommentsId
          commentCreatedById
          owner
        }
        positive
        reviewOf {
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
        reviewBy {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        reviewCommentId
        reviewReviewOfId
        reviewReviewById
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        comment {
          id
          createdBy {
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
          parent
          comment
          createdAt
          edited
          updatedAt
          _version
          _deleted
          _lastChangedAt
          legoCommentsId
          commentCreatedById
          owner
        }
        positive
        reviewOf {
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
        reviewBy {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        reviewCommentId
        reviewReviewOfId
        reviewReviewById
        owner
      }
      nextToken
      startedAt
    }
  }
`;
