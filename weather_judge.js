// データ受け取り
var weather_judge = data.weather;

// 受け取れたか確認↓ 「確認後削除」
console.log(weather_judge);

// 動作確認↓ 「確認後削除」
// weather_judge = "clear sky";
// weather_judge ="few clouds";
// weather_judge ="scattered clouds";
// weather_judge = "broken clouds";
// weather_judge = "shower rain";
// weather_judge = "mist";
// weather_judge = "rain";
// weather_judge = "thunderstorm";
// weather_judge = "snow";

switch(weather_judge) {
    // 晴れ処理
    case ("clear sky"):
    case ("few clouds"):
    weather_judge = "img/weater/sun.png";
    break;

    // 曇り処理
    case ("scattered clouds"):
    case ("broken clouds"):
    weather_judge = "img/weater/cloud.png";
    break;
    
    // 小雨処理
    case ("shower rain"):
    case ("mist"):
    weather_judge = "img/weater/shower_rain.png";
    break;
    
    // 雨処理
    case ("rain"):
    weather_judge = "img/weater/rain.png";
    break;
    
    // 雷雨処理
    case ("thunderstorm"):
    weather_judge = "img/weater/thunderstorm.png";
    break;

    // 雪処理
    case ("snow"):
    weather_judge = "img/weater/snow.png";
    break;
}

// 変更できたか確認↓ 「確認後削除」
console.log(weather_judge);

// tab-1-contentの<img>srcを書き換え
$('tab-1-content').children('img').attr('src', weather_judge);