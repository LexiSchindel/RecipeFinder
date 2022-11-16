import Chip from '@material-ui/core/Chip';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchRecipeByIngredients } from '../../api/elasticsearch';
import FilterDropdown, { FilterOption } from '../../components/FilterDropdown/FilterDropdown';
import { Recipe } from '../../components/RecipeCard/RecipeCard';
import RecipeList, { RecipeObject } from '../../components/RecipeList/RecipeList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useRecipeContext } from './RecipeContext';
import './style.css';

const ingredientSearchClasses = {
    container: 'ingredient-search-container',
    textField: 'ingredient-search-text',
    submitButton: 'ingredient-search-buttons',
    clearButton: 'ingredient-search-buttons',
    buttonContainer: 'ingredient-search-button-container'
}

const RecipeResults = () => {
    const [{ingredients, recipes, loading, filter}, {addFilter, addIngredient, clearAllIngredients, deleteIngredient}] = useRecipeContext();

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
                    {ingredients.length !== 0 && <FilterDropdown 
                        filterChoice={filter}
                        handleChange={addFilter}
                    />}
                    <div className={'recipe-list-container'}>
                        {loading && <Skeleton height={'100%'} width={'100%'} />}
                        {!loading && <RecipeList />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeResults;