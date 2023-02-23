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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
export const onCreateLego = /* GraphQL */ `
  subscription OnCreateLego($filter: ModelSubscriptionLegoFilterInput) {
    onCreateLego(filter: $filter) {
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
export const onUpdateLego = /* GraphQL */ `
  subscription OnUpdateLego($filter: ModelSubscriptionLegoFilterInput) {
    onUpdateLego(filter: $filter) {
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
export const onDeleteLego = /* GraphQL */ `
  subscription OnDeleteLego($filter: ModelSubscriptionLegoFilterInput) {
    onDeleteLego(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
    onCreateReview(filter: $filter) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
    onUpdateReview(filter: $filter) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
    onDeleteReview(filter: $filter) {
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
