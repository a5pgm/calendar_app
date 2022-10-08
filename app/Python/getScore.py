# import http.client
# import json

# connection = http.client.HTTPConnection('api.football-data.org')
# headers = { 'X-Auth-Token': '57726296ccf440b899ef218bea2b5a9a' }
# connection.request('GET', '/v2/competitions/PD/matches?season=2022', None, headers )
# response = json.loads(connection.getresponse().read().decode())


# # print (response["matches"]["awayTeam"])j
# json_open = open('../../database/data/games.json','r')
# data_set = json.load(json_open)

# count = response["count"]
# matches = response["matches"]
# scores = response["matches"]["scores"]

# # data_set = []

# for n in range(count):
#     flg = 0
#     id = matches[n]["id"]
#     game_id = matches[n]["status"]
#     winner = scores[n]["winner"]
#     full_home = scores[n]["fullTime"]["homeTeam"]
#     full_away = scores[n]["fullTime"]["awayTeam"]
#     half_home = scores[n]["halfTime"]["homeTeam"]
#     hald_away = scores[n]["haldTime"]["awayTeam"]

#     for data in (data_set):
#         if(data["id"] == id ):
#             flg = 1

#     if(flg == 0):
#         data_set.append({"id"         : id ,        "status"      : status,
#                         "utc_date"    :utc_date,    "match_day"    : matchday,
#                         "home_team_id" :hometeam_id, "away_team_id" : awayteam_id,
#                         "season_id" :season_id
#         })
#         print(id);

        
        
# # # ここからがjson形式で書き出す文
# with open('../../database/data/games.json','w') as f:
#     json.dump(data_set,f,ensure_ascii=False,indent = 4)
        
# # for data in data_set:
# #     print("{}".format(json.dumps(data_set[1],indent=4)))
    
    

# # print("{}".format(json.dumps(j,indent=4)))
# # print("{}".format(json.dumps(response["matches"][9]["awayTeam"],indent=4)))
# # print(j[9]["awayTeam"]["name"])

import http.client
import json

connection = http.client.HTTPConnection('api.football-data.org')
headers = { 'X-Auth-Token': '57726296ccf440b899ef218bea2b5a9a' }
connection.request('GET', '/v2/competitions/CL/matches?season=2021', None, headers )
response = json.loads(connection.getresponse().read().decode())


# print (response["matches"]["awayTeam"])j
# json_open = open('../../database/data/games.json','r')
# data_set = json.load(json_open)

count = response["count"]
matches = response["matches"]

for n in range(count):
    if(matches[n]["matchday"] == 1):
        print("{}".format(json.dumps(matches[n],indent=4)))
# data_set = []

# for n in range(count):
#     flg = 0
#     id = matches[n]["id"]
#     status = matches[n]["status"]
#     utc_date = matches[n]["utcDate"]
#     utc_date = utc_date.replace("T"," ")
#     utc_date = utc_date.replace("Z","")
#     matchday = matches[n]["matchday"]
#     hometeam_id = matches[n]["homeTeam"]["id"]
#     awayteam_id = matches[n]["awayTeam"]["id"]
#     season_id   = matches[n]["season"]["id"]

#     for data in (data_set):
#         if(data["id"] == id ):
#             flg = 1

#     if(flg == 0):
#         data_set.append({"id"         : id ,        "status"      : status,
#                         "utc_date"    :utc_date,    "match_day"    : matchday,
#                         "home_team_id" :hometeam_id, "away_team_id" : awayteam_id,
#                         "season_id" :season_id
#         })
#         print(id);

        
        
# # # ここからがjson形式で書き出す文
# with open('../../database/data/games.json','w') as f:
#     json.dump(data_set,f,ensure_ascii=False,indent = 4)
        
# for data in data_set:
#     print("{}".format(json.dumps(data_set[1],indent=4)))
    
    

# print("{}".format(json.dumps(j,indent=4)))
# print("{}".format(json.dumps(response["matches"][9]["awayTeam"],indent=4)))
# print(j[9]["awayTeam"]["name"])