# import dependencies
import geojson
from geomet import wkt
import json
import uuid
import pandas as pd
import os
import codecs
import datetime

# set paths
dir_path = os.path.dirname(os.path.realpath(__file__))
file_in = dir_path.replace("\\py","\\csv") + "\\" + "LimesCoordinates_towns.csv"
file_out = dir_path.replace("\\py","\\geojson") + "\\" + "LimesCoordinates_towns.geojson"

# read csv file
data = pd.read_csv(
    file_in, # relative python path to subdirectory
    encoding='utf-8',
    sep='\t', # deliminiter
    quotechar="'",  # single quote allowed as quote character
    usecols=['lat','long','site'], # only load the  columns specified
    skiprows=0, # skip X rows of the file
    na_values=['.', '??'] # take any '.' or '??' values as NA
)

features = []
for index, row in data.iterrows():
    properties = {}
    properties['site'] = row['site']
    #print(properties)
    point = "POINT("+str(float(row['long']))+" "+str(float(row['lat']))+")"
    #print(point)
    feature = { 'type': 'Feature', 'properties': properties, 'geometry': wkt.loads(point) }
    print(feature)
    features.append(feature)

geojson = {'type': 'FeatureCollection', 'features': features }

print(json.dumps(geojson, sort_keys=True, indent=4))

with open(file_out, 'w') as f:
    json.dump(geojson, f)
