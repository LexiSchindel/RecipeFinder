import React, { createContext, useContext, useState, useEffect } from 'react';
import { RecipeObject } from '../../components/RecipeList/RecipeList';
import { FilterOption } from '../../components/FilterDropdown/FilterDropdown';
import { fetchRecipeByIngredients } from '../../api/elasticsearch';
  
  type RecipeState = {
    recipes: RecipeObject[] | [];
    loading: boolean;
    filter: FilterOption | null;
    ingredients: string[];
  };
  
  export type RecipeContextActions = {
    addFilter: (filter: FilterOption) => void;
    addIngredient: (ingredient: string) => void;
    clearAllIngredients: () => void;
    deleteIngredient: ( deleteIng: string) => void;
  };
  
  interface RecipeContextType extends RecipeContextActions {
    recipes: RecipeObject[] | never[];
    loading: boolean;
    filter: FilterOption | null;
    ingredients: string[] | never[];
  }
  
  const RecipeContext = createContext<RecipeContextType | null>(null);
  
  const RecipeProvider = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<RecipeObject[] | []>([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<FilterOption | null>(null);

    const fetchRecipe = (ingredients: string[], filter: FilterOption | null) => {
        fetchRecipeByIngredients(ingredients, filter).then((res: any) => {
            const resp = res?.data?.hits?.hits;
            if (resp && resp.length > 0){
                setRecipes(resp as RecipeObject[]);
            }
            setLoading(false);
        }).catch((err) => {
            console.error('there was an error', err);
            setLoading(false);
        });
    };

    const addFilter = (filter: FilterOption) => {
        setFilter(filter);
        setLoading(true);
        fetchRecipe(ingredients, filter)
    }

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
        fetchRecipe(updatedIngredients, filter);
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
        
        fetchRecipe(updated, filter);
        setLoading(false);
    }
  
    return (
      <RecipeContext.Provider
        value={{
            recipes,
            loading,
            filter,
            ingredients,
            addFilter,
            addIngredient,
            clearAllIngredients,
            deleteIngredient
        }}
      >
        {children}
      </RecipeContext.Provider>
    );
  };
  
  const useRecipeContext = (): [RecipeState, RecipeContextActions] => {
    const context = useContext(RecipeContext);
    if (!context) {
      throw new Error('useRecipeContext must be used within a ToursProvider');
    }
  
    const {
      recipes,
      loading,
      filter,
      ingredients,
      addFilter,
      addIngredient,
      clearAllIngredients,
      deleteIngredient
    } = context;
  
    return [
      {
        recipes,
        loading,
        filter,
        ingredients,
      },
      {
        addFilter,
        addIngredient,
        clearAllIngredients,
        deleteIngredient
      }
    ];
  };
  
  export { useRecipeContext, RecipeProvider };
  