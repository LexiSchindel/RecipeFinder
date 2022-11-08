import Chip from '@material-ui/core/Chip';
import React, { useEffect, useState } from 'react';
import IngredientChip from '../../components/IngredientChip/IngredientChip';
import PageSection from '../../components/PageSection/PageSection';
import SearchBar from '../../components/SearchBar/SearchBar';
import './style.css';

const ingredientSearchClasses = {
    container: 'ingredient-search-container',
    textField: 'ingredient-search-text',
    submitButton: 'ingredient-search-buttons',
    clearButton: 'ingredient-search-buttons',
    buttonContainer: 'ingredient-search-button-container'
}

const RecipeResults = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const addIngredient = (newIngredient: string) => {
        if (!newIngredient) return;
        if (ingredients.includes(newIngredient)){
            // show snack
            return;
        };
        setIngredients([...ingredients, newIngredient])
    };

    const clearAllIngredients = () => {
        setIngredients([]);
    };

    const deleteIngredient = (deleteIng: string) => {
        const updated = ingredients.filter((val) => val !== deleteIng);
        setIngredients(updated);
    }

    return (
        <>
            <h1>
                Recipe Search Engine
            </h1>
            <div className={'ingredient-recipe-container'}>
                <PageSection>
                    <h2>Ingredients</h2>
                    <SearchBar onSubmit={addIngredient} clearAll={clearAllIngredients} classNames={ingredientSearchClasses}/>
                    <div className={'ingredient-chip-container'}>
                        {ingredients.map((ing) => (
                            <Chip label={ing} onDelete={() => deleteIngredient(ing)} />
                        ))}
                    </div>
                </PageSection>
                <PageSection>
                    <h2>Recipe Results</h2>
                </PageSection>
            </div>
        </>
    );
};

export default RecipeResults;