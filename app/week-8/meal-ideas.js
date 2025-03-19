"use client";

import { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    };

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;