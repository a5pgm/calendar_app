import http.client
import json

connection = http.client.HTTPConnection('api.football-data.org')
headers = { 'X-Auth-Token': '57726296ccf440b899ef218bea2b5a9a' }
connection.request('GET', '/v4/competitions/PD/matches?season=2022', None, headers )
response = json.loads(connection.getresponse().read().decode())


# print (response["matches"]["awayTeam"])j
# json_open = open('../../database/data/games.json','r')
# data_set = json.load(json_open)

count = response["count"]
matches = response["matches"]

data_set = []

for n in range(count):
    id = matches[n]["id"]
    game_id = matches[n]["id"]
    winner = matches[n]["score"]["winner"]
    full_home = matches[n]["score"]["fullTime"]["homeTeam"]
    full_away = matches[n]["score"]["fullTime"]["awayTeam"]
    half_home = matches[n]["score"]["halfTime"]["homeTeam"]
    half_away = matches[n]["score"]["halfTime"]["awayTeam"]

    data_set.append({"id"       : id ,      "game_id"      : game_id,
                    "winner"    :winner,    "full_home"    :full_home ,
                    "full_away" :full_away, "half_home" : half_home,
                    "half_away" :half_away
    })

connection.request('GET', '/v4/competitions/PD/matches?season=2021', None, headers )
response = json.loads(connection.getresponse().read().decode())


# print (response["matches"]["awayTeam"])j
# json_open = open('../../database/data/games.json','r')
# data_set = json.load(json_open)

count = response["count"]
matches = response["matches"]


for n in range(count):
    id = matches[n]["id"]
    game_id = matches[n]["id"]
    winner = matches[n]["score"]["winner"]
    full_home = matches[n]["score"]["fullTime"]["homeTeam"]
    full_away = matches[n]["score"]["fullTime"]["awayTeam"]
    half_home = matches[n]["score"]["halfTime"]["homeTeam"]
    half_away = matches[n]["score"]["halfTime"]["awayTeam"]

    data_set.append({"id"       : id ,      "game_id"      : game_id,
                    "winner"    :winner,    "full_home"    :full_home ,
                    "full_away" :full_away, "half_home" : half_home,
                    "half_away" :half_away
    })

        

with open('database/data/scores.json','w') as f:
    json.dump(data_set,f,ensure_ascii=False,indent = 4)
        
# for data in data_set:
#     print("{}".format(json.dumps(data_set[1],indent=4)))
    
