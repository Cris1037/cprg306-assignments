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

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
    }

    return (
        <div className="flex justify-center text-center items-start h-screen m-10">
            <div>
                <input className="border-2 border-black" type='text' value={name} onChange={(e) => setName(e.target.value)} required ></input>

                <p className="text-2xl">Quantity: {quantity}</p>
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
                <button className="bg-blue-500 text-white p-2 rounded m-1" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}