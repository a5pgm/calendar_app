import http.client
import json

connection = http.client.HTTPConnection('api.football-data.org')
headers = { 'X-Auth-Token': '57726296ccf440b899ef218bea2b5a9a' }
connection.request('GET', '/v2/competitions/PD/matches', None, headers )
response = json.loads(connection.getresponse().read().decode())


# print (response["matches"]["awayTeam"])j

count = response["count"]
matches = response["matches"]

print(matches[1])
data_set = []

for n in range(count):
    id = matches[n]["id"]
    status = matches[n]["status"]
    utc_date = matches[n]["utcDate"]
    matchday = matches[n]["matchday"]
    hometeam_id = matches[n]["homeTeam"]["id"]
    awayteam_id = matches[n]["awayTeam"]["id"]
    # title = home + " vs " + away
    # start = j[m]["utcDate"]
    data_set.append({"id"         : id ,        "status"      : status,
                    "utc_date"    :utc_date,    "matchday"    : matchday,
                    "hometeam_id" :hometeam_id, "awayteam_id" : awayteam_id
    })

        
        
# # ここからがjson形式で書き出す文
with open('../../database/data/2022_matches.json','w') as f:
    json.dump(data_set,f,ensure_ascii=False,indent = 4)
        
for data in data_set:
    print("{}".format(json.dumps(data,indent=4)))
    
    

# print("{}".format(json.dumps(j,indent=4)))
# print("{}".format(json.dumps(response["matches"][9]["awayTeam"],indent=4)))
# print(j[9]["awayTeam"]["name"])