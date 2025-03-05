import { useState } from 'react';
import Item from './item'; // The Item component
import itemsData from './items.json'; // Import the items from the JSON file

function ItemList() {
  // Initialize the state variable "sortBy" with an initial value of "name"
  const [sortBy, setSortBy] = useState('name');

  // Create a sorted copy of the items based on the "sortBy" state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } 
    else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        {/* Create sort buttons with conditional styling based on the current sort preference */}
        <button
          onClick={() => setSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'grey' }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'grey' }}
        >
          Sort by Category
        </button>
      </div>
      {/* Render the sorted items using the map function */}
      <ul className="grid gap-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}  // Assumes each item has a unique "id" property
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList; 