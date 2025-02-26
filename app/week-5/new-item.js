"use client";
import { useState } from 'react';

export default function NewItem(){

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

        const item =
        {
            name: name,
            quantity: quantity,
            category: category,

        }

        console.log(item);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: new`);
        setName("");
        setQuantity(1);
    }

    return (
        <div className="flex justify-center text-center items-start h-screen m-10">
            <div>
                <input className="border-2 border-black" type='text' value={name} onChange={(e) => setName(e.target.value)} required ></input>

                <p className="text-2xl">Quantity: {quantity}</p>
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
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}