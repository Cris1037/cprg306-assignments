import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getUserItems = async (userId) => {
    const items = [];
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsRef);
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error fetching user items:", error);
    }
    return items;
};

export const addUserItem = async (userId, item) => {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding user item:", error);
        throw error;
    }
};