
"use client";
import { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import ProtectedRoute from '../_utils/protected-route';
import { getUserItems, addUserItem } from '../_service/shopping-list-service';




export default function Page() {    
    
    
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const loadItems = async (user) => {
        if (!user || !user.uid) return;
        try {
            const userItems = await getUserItems(user.uid);
            setItems(userItems);
        } catch (error) {
            console.error('Failed to load items:', error);
        }
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.split(',')[0].trim().replace(/[^a-zA-Z\s]/g, '');
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

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