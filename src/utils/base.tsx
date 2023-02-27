import { DataStore } from "aws-amplify"
import { CreateAddressInput } from "../API";
import { Address, Order, Review, Store, Trip, User } from "../models"

const getUserById = async (userId: string) => {
    const userData = await DataStore.query(User, userId);
    if (userData) {
        const { id, first_name, last_name, fbUsername, email, userAddressId } = userData;
        return { id, first_name, last_name, fbUsername, email, userAddressId };
    }
}

const getStoreById = async (storeId: string) => {
    const storeData = await DataStore.query(Store, storeId);
    if (storeData) {
        const { id, name, city, district, storeInventoryId, updatedAt } = storeData;
        return { id, name, city, district, storeInventoryId, updatedAt };
    }
}

const getAddressById = async (addressId: string) => {
    const addressData = await DataStore.query(Address, addressId);
    if (addressData) {
        const { address, address2, district, city, postal_code } = addressData;
        return { address, address2, district, city, postal_code };
    }

    return { address: '', address2: '', district: '', city: '', postal_code: '' };
}

const createAddress = async (addressData: CreateAddressInput) => {
    const { address, address2, city, district, postal_code } = addressData;
    const newAddress = await DataStore.save(new Address({ address, address2, city, district, postal_code }));
    return newAddress.id;
}

const getTripsForUser = async (userId: string) => {
    const trips = await DataStore.query(Trip, (t) => t.tripShipperId.eq(userId));
    return trips;
}

const getOrdersForUser = async (userId: string) => {
    const orders = await DataStore.query(Order, (o) => o.orderBuyerId.eq(userId));
    return orders;
}

const getOrderById = (orderId: string) => {
    const order = DataStore.query(Order, orderId);
    return order;
}

const getReviewsByOrderId = (orderId: string) => {
    const reviews = DataStore.query(Review, (r) => r.reviewOrderId.eq(orderId));
    return reviews;
}

export {
    createAddress,
    getAddressById,
    getOrderById,
    getOrdersForUser,
    getReviewsByOrderId,
    getStoreById,
    getTripsForUser,
    getUserById
}