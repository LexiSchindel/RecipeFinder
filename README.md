docker-compose up -d

curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/recipes/doc/\_bulk?pretty' --data-binary @clean_recipes.txt

yarn start
