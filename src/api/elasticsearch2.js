// const { Client } = require('@elastic/elasticsearch')

const baseESUrl = "http://localhost:9200/recipes/recipes/";

// const client = new Client({
//     host: 'http://localhost:9200/',
//     log: 'trace'
//   });

export const fetchRecipeById = async (id) => {
    return await fetch(baseESUrl + `_doc/${id}`, {method: 'GET'});
};

export const fetchRecipeByIngredients = async (ingredients) => {
    // return client
    // .search({
    //   index: 'recipes',
    //   type: 'recipes',
    //   query: {
    //     term: { ingredients: ingredients }
    //   }
    // });
    return 'blarg';
}