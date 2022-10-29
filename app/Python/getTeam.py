import http.client
import json

connection = http.client.HTTPConnection('api.football-data.org')
headers = { 'X-Auth-Token': '57726296ccf440b899ef218bea2b5a9a' }
connection.request('GET', '/v2/competitions/PD/teams', None, headers )
response = json.loads(connection.getresponse().read().decode())


# print (response["matches"]["awayTeam"])j
json_open = open('database/data/teams.json','r')
data_set = json.load(json_open)


count = response["count"]
teams = response["teams"]

# data_set = []

for n in range(count):
    flg = 0
    id = teams[n]["id"]
    league_id = teams[n]["area"]["id"]
    name = teams[n]["name"]
    short_name = teams[n]["shortName"]
    tla = teams[n]["tla"]
    venue = teams[n]["venue"]
    # title = home + " vs " + away
    # start = j[m]["utcDate"]
    for data in (data_set):
        if(data["id"] == id):
            flg = 1 
            #responseで受け取ったチームがまだjsonファイルにのっていないなら追加するためのフラッグ
    if(flg == 0):
            data_set.append({"id"  : id , "league_id"  : league_id,
                    "name" :name, "short_name" : short_name,
                    "tla"  :tla,  "venue"      :venue
            })
    
    
# ここからがjson形式で書き出す文
with open('database/data/teams.json','w') as f:
    json.dump(data_set,f,ensure_ascii=False,indent = 4)
        
# for data in data_set:
#     print("{}".format(json.dumps(data,indent=4)))
    
    

# print("{}".format(json.dumps(j,indent=4)))
# print("{}".format(json.dumps(response["matches"][9]["awayTeam"],indent=4)))
# print(j[9]["awayTeam"]["name"])