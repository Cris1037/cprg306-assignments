"use client";
import { useState } from 'react';

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button onClick={decrement} disabled={quantity === 1}>Decrement</button>
            <button onClick={increment} disabled={quantity === 20}>Increment</button>
        </div>
    );
}