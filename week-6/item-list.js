// /app/week-3/item-list.js
import { useState } from 'react';
import Item from './item';
import { Item } from './items';


export default function ItemList() {
  return (
    <ul className="grid gap-2">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}