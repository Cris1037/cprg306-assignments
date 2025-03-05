"use client";

import { useState } from 'react';

export default function DogForm(){
    const [dog, setDog] = useState({name: "", age: 0});

    const handleNameChange = (event) => {
        setDog({...dog, name: event.target.value});
    };
    const handleAgeChange = (event) => {
        setDog({...dog, age: parseInt(event.target.value)});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dog);
        setDog({name: "", age: 0});
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add a Dog</h2>
            <label>Name: 
                <input type="text" value={dog.name} onChange={handleNameChange} required />
            </label>
            <label>Age: 
                <input type="number" value={dog.age} onChange={handleAgeChange} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}