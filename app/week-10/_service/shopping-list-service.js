import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";



export const getUserItems = async (userId) => {
    const items = [];
    try {
        // Reference to the user's items subcollection
        const itemsRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsRef);

        // Iterate through each document in the subcollection
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
        // Reference to the user's items subcollection
        const itemsRef = collection(db, "users", userId, "items");

        // Add the new item to the subcollection
        const docRef = await addDoc(itemsRef, item);

        // Return the ID of the newly created document
        return docRef.id;
    } catch (error) {
        console.error("Error adding user item:", error);
        throw error;
    }
};