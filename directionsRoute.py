from flask import Flask, request
import requests
from flask_cors import CORS
from flask_socketio import SocketIO
app = Flask(__name__)
CORS(app)

socketio = SocketIO(app, cors_allowed_origins="*")
connected_clients = set()

@socketio.on('connect')
def handle_connect():
    connected_clients.add(request.sid)

@socketio.on('disconnect')
def handle_disconnect():
    connected_clients.remove(request.sid)

@socketio.on('message')
def messaging(message, methods=['GET', 'POST']):
    for client in connected_clients:
        if client != request.sid:
            message['from'] = 'other'
            socketio.emit('message', message, room=client)


baseUrl = 'https://api.mapbox.com/directions/v5/mapbox/'
params = 'cycling'
coordonates = '-84.518641,39.134270;-84.512023,39.102779?geometries='
geometries = 'geojson'
accessToken = 'pk.eyJ1Ijoib21heW9zIiwiYSI6ImNsZWZ1OWduMTAwZzkzeXBwM3JuOGt3NHYifQ.S-lEPoSClHUW39vDNBaQgA'


@app.route('/directions/<mode>', methods=['GET'])
def get_directions(mode):
    response = requests.get(baseUrl+mode+'/'+coordonates +
                            geometries+'&access_token='+accessToken)
    if (response.status_code == 200):
        return response.json()


url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=stationnement-en-ouvrage&q=&refine.gratuit=0&refine.tarif_pmr=tarif_special"
@app.route('/parkingLots', methods=['GET'])
def get_parkingLots():
    response = requests.get(url)
    if (response.status_code == 200):
        return response.json()

