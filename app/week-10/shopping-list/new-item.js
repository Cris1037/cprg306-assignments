"use client";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            id: uuidv4(),
            name: name,
            quantity: quantity,
            category: category,
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
    };

    return (
        <div className="flex justify-start text-center items-start m-10">
            <div className="flex flex-col">
                <input className="border-2 border-black mb-4" type='text' value={name} onChange={(e) => setName(e.target.value)} required ></input>
                <div className="flex">
                    <div className="mr-10">
                        <div className="my-4">
                            <p className="text-2xl text-white">Quantity: {quantity}</p>
                            <button 
                                className={`bg-blue-500 text-white py-2 rounded w-12 ${quantity === 1 ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-700'} `} 
                                onClick={decrement} 
                                disabled={quantity === 1}
                            >
                                -
                            </button>
                            <button 
                                className={`bg-blue-500 text-white py-2 rounded w-12 ${quantity === 20 ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-700'} m-1`} 
                                onClick={increment} 
                                disabled={quantity === 20}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <select className="m-1" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded m-1" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}