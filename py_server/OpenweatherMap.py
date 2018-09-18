import requests
import json

apikey = "15f84a85eafc4d84daef224a808ff0e4"
cities = ["Tokyo,JP", "Kanagawa", "Yokohama"]
api = "http://api.openweathermap.org/data/2.5/weather?q={city}&APPID={key)"

k2c = lambda k: k - 273.15

for name in cities:
    url = api.format(city=name, key=apikey)
    r = requests.get(url)
    data = json.loads(r.text)
    print("+ 都市=", data["name"])
    print("| 天気=", data["weather"][0]["description"])
    print("| 最低気温=", k2c(data["main"]["temp_min"]))
    print("| 現在気温=", k2c(data["main"]["temp"]))
    print("| 最高気温=", k2c(data["main"]["temp_max"]))
    print("| 湿度=", data["main"]["humidity"])
    print("")