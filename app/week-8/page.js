// "use client";
// import { useState } from 'react';
// import NewItem from './new-item';
// import ItemList from './item-list';
// import itemsData from './items.json';
// import MealIdeas from './meal-ideas';
// export default function Page() {
//     const [items, setItems] = useState(itemsData);

//     const [selectedItemName, setSelectedItemName] = useState('');

//     const handleItemSelect = (itemName) => {
//         const cleanedItemName = itemName.split(',')[0].trim().replace(/[^a-zA-Z\s]/g, '');
//         setSelectedItemName(cleanedItemName);
//     };

//     const handleAddItem = (item) => {
//         setItems((prevItems) => [...prevItems, item]);
//     };

//     return (
//         <main className="min-h-screen bg-slate-950 p-8 flex flex-col items-center gap-8">
//             <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
//             <div className="flex flex-row gap-8">
//                 <div className="flex flex-col gap-4">
//                     <NewItem onAddItem={handleAddItem} />
//                     <ItemList items={items} />
//                 </div>
//                 <MealIdeas onSelect={handleItemSelect} />
//             </div>
//         </main>
//     );
// }
"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.split(',')[0].trim().replace(/[^a-zA-Z\s]/g, '');
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    return (
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
    );
}