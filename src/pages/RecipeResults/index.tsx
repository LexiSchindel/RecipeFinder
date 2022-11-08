import Chip from '@material-ui/core/Chip';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import IngredientChip from '../../components/IngredientChip/IngredientChip';
import PageSection from '../../components/PageSection/PageSection';
import RecipeList from '../../components/RecipeList/RecipeList';
import SearchBar from '../../components/SearchBar/SearchBar';
import './style.css';

const ingredientSearchClasses = {
    container: 'ingredient-search-container',
    textField: 'ingredient-search-text',
    submitButton: 'ingredient-search-buttons',
    clearButton: 'ingredient-search-buttons',
    buttonContainer: 'ingredient-search-button-container'
}

export type RecipeObject = {

}

const RecipeResults = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<RecipeObject[] | []>([]);
    const [loading, setLoading] = useState(false);

    const addIngredient = (newIngredient: string) => {
        if (!newIngredient) return;
        if (ingredients.includes(newIngredient)){
            // show snack
            return;
        };
        const updatedIngredients = [...ingredients, newIngredient];
        setIngredients(updatedIngredients);

        // elastic search call and set recipes
        setLoading(true);
        
        // setLoading(false);
    };

    const clearAllIngredients = () => {
        setIngredients([]);
        setRecipes([]);
    };

    const deleteIngredient = (deleteIng: string) => {
        const updated = ingredients.filter((val) => val !== deleteIng);
        setIngredients(updated);

        // elastic search call for updated recipes
        setLoading(true);
        
        const result: RecipeObject[] = [];
        setRecipes(result.length > 0 ? result : []);
        setLoading(false);
    }

    return (
        <>
            <h1>
                Recipe Search Engine
            </h1>
            <div className={'ingredient-recipe-container'}>
                <div className={'third-page'}>
                    <h2>Ingredients</h2>
                    <SearchBar onSubmit={addIngredient} clearAll={clearAllIngredients} classNames={ingredientSearchClasses}/>
                    <div className={'ingredient-chip-container'}>
                        {ingredients.map((ing) => (
                            <Chip key={`ing-chip-${ing}`} label={ing} onDelete={() => deleteIngredient(ing)} />
                        ))}
                    </div>
                </div>
                <div className={'two-third-page'}>
                    <h2>Recipe Results</h2>
                    <div className={'recipe-list-container'}>
                        {loading && <Skeleton height={'100%'} width={'100%'} />}
                        {!loading && <RecipeList ingredients={ingredients} recipes={recipes} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeResults;