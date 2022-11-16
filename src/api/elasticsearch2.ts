import axios from "axios";
const baseESUrl = "http://localhost:9200/recipes";

export const fetchRecipeById = async (id: number | string) => {
    return await fetch(baseESUrl + `/_doc/${id}`, {method: 'GET'});
};

export const fetchRecipeByIngredients = (ingredients: string[]) => (
    axios.get(`${baseESUrl}/_search`, {
        params: {
          source: JSON.stringify({"query": {
            "query_string": {
                "default_field": "ingredients",
                "query": ingredients.join(' OR ')
            }
        }}),
          source_content_type: 'application/json'
        }
      })
)