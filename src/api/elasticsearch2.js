import axios from "axios";
const baseESUrl = "http://localhost:9200/recipes/recipes/";

export const fetchRecipeById = async (id) => {
    return await fetch(baseESUrl + `_doc/${id}`, {method: 'GET'});
};

export const fetchRecipeByIngredients = async (ingredients) => {
    return await axios.get('http://localhost:9200/recipes/_search', {
        params: {
            source: JSON.stringify({
                query: {
                    term: { ingredients: "flour" }
                }
            }),
            source_content_type: 'application/json'
        }
        }).then((res) => {
            console.log('res', res);
        });
}