"use client";

import { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || []; // Return an empty array if meals is null
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return []; // Return an empty array in case of an error
        }
    };

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        } else {
            setMeals([]); // Clear the meals list if no ingredient is selected
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className='text-white'>Meal Ideas</h1>
            {meals.length === 0 ? (
                <p className='text-gray-400'>No meal ideas available.</p>
            ) : (
                <ul className='text-white'>
                    {meals.map(meal => (
                        <li key={meal.idMeal}>
                            <h2>{meal.strMeal}</h2>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MealIdeas;