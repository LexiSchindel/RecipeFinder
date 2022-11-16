import React from 'react';
import { useRecipeContext } from '../../pages/RecipeResults/RecipeContext';
import RecipeCard, { Recipe } from '../RecipeCard/RecipeCard';
import './styles.css';

export type RecipeObject = {
    _source: Recipe
}

function RecipeList() {
    const [{ingredients, recipes}, {}] = useRecipeContext();

    if (ingredients.length === 0){
        return (
            <>Start adding ingredients to see recipes...</>
        )
    }

    return (
        <div className='recipe-list'>
            {recipes.map((rec) => (
                <RecipeCard
                    recipe={rec._source}
                />
            ))}
        </div>
    )
}

export default RecipeList;