import React from 'react';
import RecipeCard, { Recipe } from '../RecipeCard/RecipeCard';
import './styles.css';

type Props = {
    ingredients: string[];
    recipes: RecipeObject[] | [];
}

export type RecipeObject = {
    _source: Recipe
}

function RecipeList({ ingredients, recipes }: Props) {
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