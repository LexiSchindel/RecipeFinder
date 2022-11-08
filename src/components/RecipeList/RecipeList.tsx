import React from 'react';
import { RecipeObject } from '../../pages/RecipeResults';
import Skeleton from 'react-loading-skeleton'

type Props = {
    ingredients: string[];
    recipes: RecipeObject[] | [];
}

function RecipeList({ ingredients, recipes }: Props) {
    if (ingredients.length === 0){
        return (
            <>Start adding ingredients to see recipes...</>
        )
    }

    return (
        <>
            {recipes.map((rec) => (
                <>blarg</>
            ))}
        </>
    )
}

export default RecipeList;