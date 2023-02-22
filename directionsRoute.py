from flask import Flask
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

baseUrl = 'https://api.mapbox.com/directions/v5/mapbox/'
params = 'cycling'
coordonates= '-84.518641,39.134270;-84.512023,39.102779?geometries='
geometries='geojson'
accessToken = 'pk.eyJ1Ijoib21heW9zIiwiYSI6ImNsZWZxM3hvZjB0aDgzbm1qa3N6dGgzYXUifQ.prbsrFiXJaieC98tp9x7jQ'

@app.route('/directions/<mode>', methods=['GET'])
def get_directions(mode):
    response = requests.get(baseUrl+mode+'/'+coordonates+geometries+'&access_token='+accessToken)
    if(response.status_code == 200):
        return response.json()

