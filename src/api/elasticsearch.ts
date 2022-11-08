

const baseESUrl = "localhost:9200/recipe-list/";

const addBaseData = () => {
    const index = {"index":{"_index":"recipes","_type":"recipes"}};
};

export const fetchRecipeById = async (id: string) => {
    return await fetch(baseESUrl + `_doc?${id}`, {method: 'GET'});
};