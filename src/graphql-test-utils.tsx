import getUuid from 'uuid-by-string';
import { OrderType } from './features/Orders/OrderSlice';
import { LegoType } from './features/Stores/InventorySlice';
import { StoreType } from './features/Stores/StoresSlice';
import { TripType } from './features/Trips/TripsSlice';
import { UserType } from './features/User/UserSlice';

export const generateUserName = (seed?: string) => {
    return getUuid(seed ?? (Math.random()*1000000).toString());
}

export const generateUserState = (seed?: string, isModerator?: boolean, isAdmin?: boolean) => {
    let userGroups = ['default'];
    const userName = generateUserName(seed);

    if (isModerator) {
        userGroups.push('moderators');
    }

    if (isAdmin) {
        userGroups.push('moderators');
    }

    return {
        id: getUuid(`testid_${seed}`),
        fbUsername: `facebook_${userName}`,
        isLoggedIn: true,
        userGroups,
        userName,
        loading: false,
        addressId: getUuid((Math.random() * 1000000).toString()),
        userData:  generateUser(seed),
        users: generateUsers(10),
        userById: undefined
    }
}
export const generateUsers = (count: number, seed?: string): UserType[] => {
    const userName = generateUserName(seed);
    const users = [];

    for (let i = 0; i < count; i++) {
        users.push(generateUser())
    }

    return users;
}

export const generateUser = (seed?: string): UserType => {
    const userName = generateUserName(seed);

    return {
        id: getUuid('testid'),
        fbUsername: `facebook_${userName}`,
        first_name: getUuid(`first_name_${seed ?? (Math.random()*1000000).toString()}`),
        last_name: getUuid(`last_name_${seed ?? (Math.random()*1000000).toString()}`),
        email: `${getUuid(seed ?? (Math.random()*1000000).toString())}@cupexchange.com`,
        paypalMeURL: 'https://paypal.me/test'
    }
}

export const generateOrderState = (seed?: string) => {
    return {
        incomingOrders: generateOrders(10),
        outgoingOrders: generateOrders(10),
        loading: false
    }
}

export const generateOrders = (count: number, seed?: string): OrderType[] => {
    const orders = [];

    for (let i = 0; i < count; i++) {
        orders.push(generateOrder())
    }

    return orders;

}

export const generateOrder = (seed?: string): OrderType => {
    const numberOfCups = Math.ceil(Math.random() * 10);
    const shippingPrice = 10;
    const cupPrice = 18;

    return {
        id: getUuid(`${numberOfCups}0_${(Math.random() * 1000000).toString()}`),
        total: (numberOfCups * cupPrice) + shippingPrice,
        orderBuyerId: getUuid(seed ?? (Math.random() * 1000000).toString()),
        orderShipperId: getUuid(seed ?? (Math.random() * 1000000).toString()),
        tracking: [],
        orderTripId: getUuid(seed ?? (Math.random() * 1000000).toString()),
        buyer: Promise.resolve(generateUser()),
        shipper: Promise.resolve(generateUser()),
        trip: Promise.resolve(generateTrip()),
        createdAt: Date.now().toString(),
    }
}

export const generateTripState = (seed?: string) => {
    return {
        trips: generateTrips(10),
        currentTrip: generateTrip(),
        loading: false
    }
}

export const generateTrips = (count: number, seed?: string): TripType[] => {
    const trips:TripType[] = [];

    for (let i = 0; i < count; i++) {
        trips.push(generateTrip())
    }

    return trips;
}

export const generateTrip = (seed?: string): TripType => {
    return {
        id: getUuid(`tripId_0_${(Math.random() * 1000000).toString()}`),
        cupPrice: '18',
        shippingPrice: '10',
        orderExpiration: Date.now(),
        tripStoreId: getUuid(seed ?? (Math.random() * 1000000).toString()),
        tripShipperId: getUuid(seed ?? (Math.random() * 1000000).toString())
    }
}

export const generateStoreState = (seed?: string) => {
    return {
        storeData: generateStores(10),
        loading: false,
        currentStoreData: generateStore('current_store')
    }
}

export const generateStores = (count: number, seed?: string): StoreType[] => {
    let stores: StoreType[] = [];

    for (let i = 0; i < count; i++) {
        stores.push(generateStore())
    }

    return stores;
}

export const generateStore = (seed?: string): StoreType => {
    return {
        id: getUuid((Math.random() * 1000000).toString()),
        name: 'Test_Store',
        district: 'Test_District',
        city: 'Test_City',
        storeInventoryId: getUuid((seed ?? Math.random() * 1000000).toString()),
    }
}

export const createInventoryState = (seed?: string) => {
    return {
        loading: false,
        currentInventory: createLego(10)
    }
}

export const createLego = (count: number): LegoType[] => {
    const lego: LegoType[] = [];

    for (let i = 0; i < count; i++) {
        lego.push({
            id: getUuid((Math.random() * 1000000).toString()),
            imageKey: getUuid((Math.random() * 1000000).toString()),
            comments: generateComments(2)
        })
    }

    return lego;
    
}

export const generateCartItem = (count: number) => {
    let cartItems = [];

    for (let i = 0; i < count; i++) {
        cartItems.push({
            itemId: getUuid((Math.random() * 1000000).toString()),
            count: 1
        })
    }

    return cartItems;
}

export const generateComment = () => {
    return {
        id: getUuid((Math.random() * 1000000).toString()),
        createdBy: generateUser(),
        parent: getUuid((Math.random() * 1000000).toString()),
        comment: 'This is a comment',
        createdAt: Date.now().toString(),
        edited: false
    }
}

export const generateComments = (count: number) => {
    const comments = [];
    for (let i = 0; i < count; i++) {
        comments.push(generateComment());
    }

    return comments;
}

export const generateReview = () => {
    return {
        id: getUuid((Math.random() * 1000000).toString()),
        comment: generateComment(),
        positive: true,
        reviewOf: generateUser(),
        reviewBy: generateUser()
    }
}

export const generateReviews = (count: number) => {
    const reviews = [];

    for (let i = 0; i < count; i++) {
        reviews.push(generateReview());
    }
}

export const generateCartState = () => {
    return {
        loading: false,
        cartItems: generateCartItem(3)
    }
}

export const generateFullState = () => {
    return {
        inventory: createInventoryState(),
        orders: generateOrderState(),
        trips: generateTripState(),
        user: generateUserState(),
        store: generateStoreState()
    }
}