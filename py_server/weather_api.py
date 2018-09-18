# 必要なモジュールの読み込み
import json

import requests
from flask import Flask, jsonify, make_response
from flask_cors import CORS


apikey = "15f84a85eafc4d84daef224a808ff0e4"
cityName = "Yokohama"
apiUrl = "http://api.openweathermap.org/data/2.5/weather?q={city}&APPID={key}&cnt=14"

k2c = lambda k: k - 273.15

# Flaskクラスのインスタンスを作成
# __name__は現在のファイルのモジュール名
api = Flask(__name__)
CORS(api)

# GETの実装
@api.route('/<cityName>', methods=['GET'])
def get(cityName):
    url = apiUrl.format(city=cityName, key=apikey)
    r = requests.get(url)
    data = json.loads(r.text)
    # print("+ 都市=", data["name"])
    # print("| 天気=", data["weather"][0]["description"])
    # print("| 最低気温=", k2c(data["main"]["temp_min"]))
    # print("| 現在気温=", k2c(data["main"]["temp"]))
    # print("| 最高気温=", k2c(data["main"]["temp_max"]))
    # print("| 湿度=", data["main"]["humidity"])
    # print("")
    result = {
        "cityName" : data["name"],
        "weather" : data["weather"][0]["description"],
        "temp_min" : k2c(data["main"]["temp_min"]),
        "main" : k2c(data["main"]["temp"]),
        "temp_max" : k2c(data["main"]["temp_max"]),
        "humidity" : data["main"]["humidity"],
    }

    return make_response(jsonify(result))

# エラーハンドリング
@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

# ファイルをスクリプトとして実行した際に
# ホスト0.0.0.0, ポート3001番でサーバーを起動
if __name__ == '__main__':
    api.run(host='0.0.0.0', port=3001)