"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  }

  const sortItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    } 
    else if (sortBy === "category") {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
    }
    else {
      return 0;
    }
  });

  // Copy and sort the items based on the sortBy state.
  

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
          onClick={() => handleSortBy("name")}
          className={`${sortBy === "name" ? "bg-blue-500" : "bg-gray-500"} px-4 py-2 rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortBy("category")}
          className={`${sortBy === "category" ? "bg-blue-500" : "bg-gray-500"} px-4 py-2 rounded`}
        >
          Sort by Category
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
