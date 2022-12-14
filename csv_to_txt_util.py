# convert csv to txt file for upload to elasticsearch
import csv
import json
import requests

inputFile = "clean_recipes.csv"

with open('clean_recipes.txt', 'w') as f:
    with open (inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=';', quotechar="\"")

        headers = None
        uploadGuide = {"index":{"_index":"recipes","_type":"recipes"}}
        for index, item in enumerate(csv_reader):
            if index == 0:
                headers = item
            else:
                obj = {}
                for hInd, h in enumerate(headers):
                    val = item[hInd]
                    if hInd == 1:
                        if val[-1] == 'k':
                            val = int(val[:-1].strip()) * 1000
                        else:
                            obj[h] = int(val)
                    else:
                        obj[h] = val
                f.write(json.dumps(uploadGuide) + "\n")
                f.write(json.dumps(obj) + "\n")