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
        <div className="flex justify-center text-center items-start h-screen">
            <div>
                <p>Quantity: {quantity}</p>
                <button 
                    className={`bg-blue-500 text-white py-2 px-4 rounded w-12 ${quantity === 1 ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-700'} p-3`} 
                    onClick={decrement} 
                    disabled={quantity === 1}
                >
                    -
                </button>
                <button 
                    className={`bg-blue-500 text-white py-2 px-4 rounded w-12 ${quantity === 20 ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-700'} ml-1`} 
                    onClick={increment} 
                    disabled={quantity === 20}
                >
                    +
                </button>
            </div>
        </div>
    );
}