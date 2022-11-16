import React from 'react';
import './styles.css';

export type Recipe = {
    author: string;
    cook_time: string;
    directions: string;
    ingredients: string;
    prepare_time: string;
    recipe_id: string;
    recipe_name: string;
    recipe_photo: string;
    review_count: string;
    total_time: string;
}

type Props = {
    recipe: Recipe;
}

function RecipeCard({recipe}: Props) {
    return (
        <div className='recipe-card'>
            <div style={{height: '50%'}}>
                <img
                    src={recipe.recipe_photo}
                />
            </div>
            <h3>{recipe.recipe_name}</h3>
            <h5>{recipe.author}</h5>
            <div className='ingredient-text'>
                {recipe.ingredients}
            </div>
        </div>
    );
}

export default RecipeCard;