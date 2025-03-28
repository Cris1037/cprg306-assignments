"use client";
import { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import ProtectedRoute from '../_utils/protected-route';
import { useUserAuth } from '../_utils/auth-context';
import { getUserItems, addUserItem } from '../_service/shopping-list-service';

export default function Page() {    
    const { user } = useUserAuth();
const [items, setItems] = useState([]);
const [selectedItemName, setSelectedItemName] = useState('');

const loadItems = async () => {
    if (!user || !user.uid) return;
    try {
        const userItems = await getUserItems(user.uid);
        setItems(userItems);
    } catch (error) {
        console.error('Failed to load items:', error);
    }
};

const handleAddItem = async (item) => {
    try {
        if (!user || !user.uid) return;
        const newItem = { ...item, userId: user.uid };
        const addedItemId = await addUserItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { ...item, id: addedItemId }]);
    } catch (error) {
        console.error('Failed to add item:', error);
    }
};

const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(',')[0].trim().replace(/[^a-zA-Z\s]/g, '');
    setSelectedItemName(cleanedItemName);
};

useEffect(() => {
    if (user?.uid) {
        loadItems();
    }
}, [user?.uid]);

    return (
        <ProtectedRoute>
            <main className="min-h-screen bg-slate-950 p-8 flex flex-col items-center gap-8">
                <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col gap-4">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </main>
        </ProtectedRoute>
    );
}