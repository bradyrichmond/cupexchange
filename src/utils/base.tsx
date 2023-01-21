import { DataStore } from "aws-amplify"
import { Store, User } from "../models"

const getUserById = async (userId: string) => {
    const userData = await DataStore.query(User, userId);
    if (userData) {
        const { id, first_name, last_name, fbUsername, email } = userData;
        return { id, first_name, last_name, fbUsername, email };
    }
}

const getStoreById = async (storeId: string) => {
    const storeData = await DataStore.query(Store, storeId);
    if (storeData) {
        const { id, name, city, district, storeInventoryId, updatedAt } = storeData;
        return { id, name, city, district, storeInventoryId, updatedAt };
    }
}

export {
    getUserById,
    getStoreById
}