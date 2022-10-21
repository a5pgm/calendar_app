import http.client
import json
import pandas as pd
from datetime import datetime
from pytz import timezone
from dateutil import parser

# json_open = open('../../database/data/games.json','r')
# data_set = json.load(json_open)
    
connection = http.client.HTTPConnection('api.football-data.org')
headers = { 'X-Auth-Token': '57726296ccf440b899ef218bea2b5a9a' }
connection.request('GET', '/v2/competitions/PD/matches?season=2022', None, headers )
response = json.loads(connection.getresponse().read().decode())

count = response["count"]
matches = response["matches"]

data_set = []

for n in range(count):
    flg = 0
    id = matches[n]["id"]
    status = matches[n]["status"]
    utc_date = matches[n]["utcDate"] #データの取得
    utc_date = str(pd.Timestamp(utc_date, tz="Asia/Tokyo")) #日本時間に直す
    utc_date = utc_date.replace(utc_date[19:26],"") #+以降を削除
    matchday = matches[n]["matchday"]
    hometeam_id = matches[n]["homeTeam"]["id"]
    awayteam_id = matches[n]["awayTeam"]["id"]
    season_id   = matches[n]["season"]["id"]
    
    data_set.append({"id"         : id ,        "status"      : status,
                    "utc_date"    :utc_date,    "match_day"    : matchday,
                    "home_team_id" :hometeam_id, "away_team_id" : awayteam_id,
                    "season_id" :season_id
    })
    
connection.request('GET', '/v2/competitions/PD/matches?season=2021', None, headers )
response = json.loads(connection.getresponse().read().decode())

count = response["count"]
matches = response["matches"]

for n in range(count):
    flg = 0
    id = matches[n]["id"]
    status = matches[n]["status"]
    utc_date = matches[n]["utcDate"] #データの取得
    utc_date = str(pd.Timestamp(utc_date, tz="Asia/Tokyo")) #日本時間に直す
    utc_date = utc_date.replace(utc_date[19:26],"") #+以降を削除
    matchday = matches[n]["matchday"]
    hometeam_id = matches[n]["homeTeam"]["id"]
    awayteam_id = matches[n]["awayTeam"]["id"]
    season_id   = matches[n]["season"]["id"]
    
    data_set.append({"id"         : id ,        "status"      : status,
                    "utc_date"    :utc_date,    "match_day"    : matchday,
                    "home_team_id" :hometeam_id, "away_team_id" : awayteam_id,
                    "season_id" :season_id
    })


        
        
# # ここからがjson形式で書き出す文
with open('../../database/data/games.json','w') as f:
    json.dump(data_set,f,ensure_ascii=False,indent = 4)
        
# for data in data_set:
#     print("{}".format(json.dumps(data,indent=4)))
    
    

# print("{}".format(json.dumps(j,indent=4)))
# print("{}".format(json.dumps(response["matches"][9]["awayTeam"],indent=4)))
# print(j[9]["awayTeam"]["name"])

