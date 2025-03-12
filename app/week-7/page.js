"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    return (
    <main className="min-h-screen bg-slate-950 p-8 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
            <div className="mb-0">
                <NewItem onAddItem={handleAddItem} />
            </div>
            <div className="mt-0">
                <ItemList items={items} />
            </div>
        </main>
    );
}