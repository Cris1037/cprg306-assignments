"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Copy and sort the items based on the sortBy state.
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      // For "group", we will handle grouping separately below.
      return 0;
    }
  });

  // Group items by category (for the extra challenge)
  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`${sortBy === "name" ? "bg-blue-500" : "bg-gray-500"} px-4 py-2 rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${sortBy === "category" ? "bg-blue-500" : "bg-gray-500"} px-4 py-2 rounded`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`${sortBy === "group" ? "bg-blue-500" : "bg-gray-500"} px-4 py-2 rounded`}
        >
          Group by Category
        </button>
      </div>

      {sortBy !== "group" ? (
        <ul className="grid gap-2">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      ) : (
        // Grouped view: items grouped and sorted alphabetically within each category.
        Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h2 className="text-2xl font-bold text-white capitalize mb-2">
              {category}
            </h2>
            <ul className="grid gap-2">
              {items.sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
