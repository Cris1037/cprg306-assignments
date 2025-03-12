"use client";

import {useState, useEffect} from 'react';

async function fetchRandomDog(breed){
    const response = breed ? await fetch(`https://dog.ceo/api/breed/${breed}/image/random`)
    :await fetch ("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message; //url of img
}

async function getBreeds(){
    const response = await fetch (" https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message);
    return breeds;
}

export default function Page(){
    const [randomDogURL, setRandomDogURL] = useState(null);
    const [breeds, setBreeds] = useState([]);
    
    const loadRandomDog = async () => {
        const newDog = await fetchRandomDog();
        setRandomDogURL(newDog);
    };

    const loadBreeds = async () => {
        const breeds = await getBreeds();
        setBreeds(breeds);
    };

    const handleBreedChange = async (event) => {
        const breed = event.target.value;
        const newDog = await fetchRandomDog(breed);
        setRandomDogURL(newDog);
    };

    useEffect(() => {
        loadRandomDog();
        loadBreeds();
    }, []);

    return (
        <div>
            <h1>Random Dog</h1>
            <select onChange={handleBreedChange}>
                {breeds.map(breed => (
                    <option key={breed} value={breed}>{breed}</option>
                ))}
            </select>
            <img src={randomDogURL} alt="Random Dog" />
        </div>
    );
}