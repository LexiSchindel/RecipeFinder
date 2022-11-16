# Recipe Finder
A personal project to explore using ElasticSearch.
You have ingredients in your fridge and pantry you need to use up but you don't have a recipe on hand that uses them. In comes Recipe Finder. 
A user can input the ingredients they have on hand and, using ElasticSearch, Recipe Finder will return a selection of recipes that use those ingredients. 

## To Run
- Set up docker and get it running with `docker-compose up -d`
- Add the data to ElasticSearch once running locally with `curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/recipes/doc/\_bulk?pretty' --data-binary @clean_recipes.txt`
- Start up localhost `yarn start`
