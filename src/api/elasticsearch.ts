import axios from "axios";
import { FilterOption } from "../components/FilterDropdown/FilterDropdown";
const baseESUrl = "http://localhost:9200/recipes";

export const fetchRecipeById = async (id: number | string) => {
    return await fetch(baseESUrl + `/_doc/${id}`, {method: 'GET'});
};

export const fetchRecipeByIngredients = (ingredients: string[], filter: null | FilterOption) => {
    ingredients = ingredients.map(i => i + '~');
    const query = {
        "query": {
            "bool": {
                "must": {
                    "query_string": {
                        "default_field": "ingredients",
                        "query": ingredients.join(' OR '),
                        "fuzziness": 5
                    }
                },
                ...(filter && {"filter": { "range": {"review_count": {[filter.key]: filter?.value}}}})
            }
        }
    }

    return axios.get(`${baseESUrl}/_search`, {
        params: {
          source: JSON.stringify(query),
          source_content_type: 'application/json'
        }
      })
}