var ken = '';
$('[name=cityName]').change(function () {
    ken = $('[name=cityName] option:selected').val();
    console.log(`ken: ${ken}`);
    var txt = $('[name=cityName] option:selected').text();
    $('p').text(txt);

    $.ajax({
        // url: `http://10.17.3.228:3001/${ken}`,
        // url: `http://10.17.4.86:3001/${ken}`,
        // url:"http://192.168.0.5:3001/yokohama",
        url: `http://35.200.31.11:3001/${ken}`,
        type: "get",
        success: function (data) {
            console.log(`data:${data}`);
            console.log(data);

            //今日の変数
            var humi = data.humidity;
            var max2 = Math.floor(data.temp_max);
            var main = Math.floor(data.main);
            var min2 = Math.floor(data.temp_min);
            var tdy_temp_max0_js = Math.floor(data.tdy_temp_max0);
            var tdy_temp_max1_js = Math.floor(data.tdy_temp_max1);
            var tdy_temp_max2_js = Math.floor(data.tdy_temp_max2);
            var tdy_temp_max3_js = Math.floor(data.tdy_temp_max3);
            var tdy_temp_max4_js = Math.floor(data.tdy_temp_max4);
            var tdy_temp_max5_js = Math.floor(data.tdy_temp_max5);
            var tdy_temp_max6_js = Math.floor(data.tdy_temp_max6);
            var tdy_temp_max7_js = Math.floor(data.tdy_temp_max7);
            $(document).ready(function () {
                //今日の変数の挿入
                $(".humidity").html("Humidity" + humi + "%");
                $(".max").html("MAX" + "<br/>" + max2 + "°");
                $(".now").html("NOW" + "<br/>" + main + "°");
                $(".min").html("MIN" + "<br/>" + min2 + "°");
                $(".tdy_0oc_max").html(tdy_temp_max0_js + "°");
                $(".tdy_3oc_max").html(tdy_temp_max1_js + "°");
                $(".tdy_6oc_max").html(tdy_temp_max2_js + "°");
                $(".tdy_9oc_max").html(tdy_temp_max3_js + "°");
                $(".tdy_12oc_max").html(tdy_temp_max4_js + "°");
                $(".tdy_15oc_max").html(tdy_temp_max5_js + "°");
                $(".tdy_18oc_max").html(tdy_temp_max6_js + "°");
                $(".tdy_21oc_max").html(tdy_temp_max7_js + "°");
            });
            // データ受け取り

            var weather_judge = data.weather;
            var weather_judge2 = "";

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

            switch (weather_judge) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    weather_judge = "img/weather/sun.png";
                    weather_judge2 = "img/bgimage/hare.jpg";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    weather_judge = "img/weather/cloud.png";
                    weather_judge2 = "img/bgimage/hare.jpg";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    weather_judge = "img/weather/shower_rain.png";
                    weather_judge2 = "img/bgimage/ame.jpg";
                    break;

                    // 雨処理
                case ("Rain"):
                    weather_judge = "img/weather/rain.png";
                    weather_judge2 = "img/bgimage/ame.jpg";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    weather_judge = "img/weather/thunderstorm.png";
                    weather_judge2 = "img/bgimage/kaminari.jpg";
                    break;

                    // 雪処理
                case ("Snow"):
                    weather_judge = "img/weather/snow.png";
                    weather_judge2 = "img/bgimage/yuki.jpg";
                    break;
            }

            // 変更できたか確認↓ 「確認後削除」
            console.log(weather_judge);

            // tab-1-contentの<img>srcを書き換え
            $('.tab-1-content').children('img').attr('src', weather_judge);
            $('#main_frame').css("background-image",`url(${weather_judge2})`);

            //今日の天気判定処理    
            //今日の0時
            var tdy_weather0_js = data.tdy_weather0;
            switch (tdy_weather0_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather0_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather0_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather0_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather0_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather0_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather0_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_0').children('img').attr('src', tdy_weather0_js);

            //今日の3時
            var tdy_weather1_js = data.tdy_weather1;
            switch (tdy_weather1_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather1_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather1_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather1_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather1_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather1_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather1_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_1').children('img').attr('src', tdy_weather1_js);

            //今日の6時
            var tdy_weather2_js = data.tdy_weather2;
            switch (tdy_weather2_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather2_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather2_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather2_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather2_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather2_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather2_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_2').children('img').attr('src', tdy_weather2_js);

            //今日の9時
            var tdy_weather3_js = data.tdy_weather3;
            switch (tdy_weather3_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather3_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather3_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather3_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather3_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather3_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather3_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_3').children('img').attr('src', tdy_weather3_js);

            //今日の12時
            var tdy_weather4_js = data.tdy_weather4;
            switch (tdy_weather4_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather4_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather4_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather4_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather4_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather4_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather4_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_4').children('img').attr('src', tdy_weather4_js);

            //今日の15時
            var tdy_weather5_js = data.tdy_weather5;
            switch (tdy_weather5_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather5_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather5_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather5_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather5_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather5_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather5_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_5').children('img').attr('src', tdy_weather5_js);

            //今日の18時
            var tdy_weather6_js = data.tdy_weather6;
            switch (tdy_weather6_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather6_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather6_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather6_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather6_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather6_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather6_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_6').children('img').attr('src', tdy_weather6_js);

            //今日の21時
            var tdy_weather7_js = data.tdy_weather7;
            switch (tdy_weather7_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tdy_weather7_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tdy_weather7_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tdy_weather7_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tdy_weather7_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tdy_weather7_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tdy_weather7_js = "img/weather/snow.png";
                    break;
            }
            $('.tdy_weat_7').children('img').attr('src', tdy_weather7_js);

            //明日の気温
            var tmr_temp_max0_js = Math.floor(data.tmr_temp_max0);
            var tmr_temp_max1_js = Math.floor(data.tmr_temp_max1);
            var tmr_temp_max2_js = Math.floor(data.tmr_temp_max2);
            var tmr_temp_max3_js = Math.floor(data.tmr_temp_max3);
            var tmr_temp_max4_js = Math.floor(data.tmr_temp_max4);
            var tmr_temp_max5_js = Math.floor(data.tmr_temp_max5);
            var tmr_temp_max6_js = Math.floor(data.tmr_temp_max6);
            var tmr_temp_max7_js = Math.floor(data.tmr_temp_max7);
            $(document).ready(function () {
                //明日の変数の挿入

                $(".tmr_weat_0oc_max").html(tdy_temp_max0_js + "°");
                $(".tmr_weat_3oc_max").html(tdy_temp_max1_js + "°");
                $(".tmr_weat_6oc_max").html(tdy_temp_max2_js + "°");
                $(".tmr_weat_9oc_max").html(tdy_temp_max3_js + "°");
                $(".tmr_weat_12oc_max").html(tdy_temp_max4_js + "°");
                $(".tmr_weat_15oc_max").html(tdy_temp_max5_js + "°");
                $(".tmr_weat_18oc_max").html(tdy_temp_max6_js + "°");
                $(".tmr_weat_21oc_max").html(tdy_temp_max7_js + "°");
            });

            //明日の天気判定
            //明日の0時           
            var tmr_weather0_js = data.tmr_weather0;
            switch (tmr_weather0_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather0_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather0_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather0_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather0_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather0_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather0_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_0oc_img').children('img').attr('src', tmr_weather0_js);

            //明日の3時
            var tmr_weather1_js = data.tmr_weather1;
            switch (tmr_weather1_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather1_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather1_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather1_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather1_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather1_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather1_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_3oc_img').children('img').attr('src', tmr_weather1_js);

            //明日の6時
            var tmr_weather2_js = data.tmr_weather2;
            switch (tmr_weather2_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather2_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather2_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather2_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather2_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather2_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather2_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_6oc_img').children('img').attr('src', tmr_weather2_js);

            //明日の9時
            var tmr_weather3_js = data.tmr_weather3;
            switch (tmr_weather3_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather3_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather3_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather3_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather3_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather3_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather3_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_9oc_img').children('img').attr('src', tmr_weather3_js);

            //明日の12時
            var tmr_weather4_js = data.tmr_weather4;
            switch (tmr_weather4_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather4_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather4_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather4_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather4_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather4_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather4_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_12oc_img').children('img').attr('src', tmr_weather4_js);

            //明日の15時
            var tmr_weather5_js = data.tmr_weather5;
            switch (tmr_weather5_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather5_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather5_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather5_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather5_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather5_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather5_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_15oc_img').children('img').attr('src', tmr_weather5_js);

            //明日の18時
            var tmr_weather6_js = data.tmr_weather6;
            switch (tmr_weather6_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather6_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather6_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather6_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather6_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather6_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather6_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_18oc_img').children('img').attr('src', tmr_weather6_js);

            //明日の21時
            var tmr_weather7_js = data.tmr_weather7;
            switch (tmr_weather7_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    tmr_weather7_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    tmr_weather7_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    tmr_weather7_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    tmr_weather7_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    tmr_weather7_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    tmr_weather7_js = "img/weather/snow.png";
                    break;
            }
            $('.tmr_weat_21oc_img').children('img').attr('src', tmr_weather7_js);

            //明後日の気温
            var dat_temp_max0_js = Math.floor(data.tmr_temp_max0);
            var dat_temp_max1_js = Math.floor(data.tmr_temp_max1);
            var dat_temp_max2_js = Math.floor(data.tmr_temp_max2);
            var dat_temp_max3_js = Math.floor(data.tmr_temp_max3);
            var dat_temp_max4_js = Math.floor(data.tmr_temp_max4);
            var dat_temp_max5_js = Math.floor(data.tmr_temp_max5);
            var dat_temp_max6_js = Math.floor(data.tmr_temp_max6);
            var dat_temp_max7_js = Math.floor(data.tmr_temp_max7);
            $(document).ready(function () {
                //明日の変数の挿入

                $(".dat_weat_0oc_max").html(tdy_temp_max0_js + "°");
                $(".dat_weat_3oc_max").html(tdy_temp_max1_js + "°");
                $(".dat_weat_6oc_max").html(tdy_temp_max2_js + "°");
                $(".dat_weat_9oc_max").html(tdy_temp_max3_js + "°");
                $(".dat_weat_12oc_max").html(tdy_temp_max4_js + "°");
                $(".dat_weat_15oc_max").html(tdy_temp_max5_js + "°");
                $(".dat_weat_18oc_max").html(tdy_temp_max6_js + "°");
                $(".dat_weat_21oc_max").html(tdy_temp_max7_js + "°");
            });
            //明後日の天気判定
            //明後日の0時
            var dat_weather0_js = data.dat_weather0;
            switch (dat_weather0_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather0_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather0_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather0_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather0_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather0_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather0_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_0oc_img').children('img').attr('src', dat_weather0_js);

            //明後日の3時
            var dat_weather1_js = data.dat_weather1;
            switch (dat_weather1_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather1_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather1_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather1_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather1_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather1_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather1_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_3oc_img').children('img').attr('src', dat_weather1_js);

            //明後日の6時
            var dat_weather2_js = data.dat_weather2;
            switch (dat_weather2_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather2_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather2_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather2_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather2_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather2_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather2_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_6oc_img').children('img').attr('src', dat_weather2_js);

            //明後日の9時
            var dat_weather3_js = data.dat_weather3;
            switch (dat_weather3_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather3_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather3_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather3_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather3_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather3_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather3_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_9oc_img').children('img').attr('src', dat_weather3_js);

            //明後日の12時
            var dat_weather4_js = data.dat_weather4;
            switch (dat_weather4_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather4_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather4_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather4_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather4_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather4_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather4_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_12oc_img').children('img').attr('src', dat_weather4_js);

            //明後日の15時
            var dat_weather5_js = data.dat_weather5;
            switch (dat_weather5_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather5_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather5_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather5_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather5_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather5_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather5_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_15oc_img').children('img').attr('src', dat_weather5_js);

            //明後日の18時
            var dat_weather6_js = data.dat_weather6;
            switch (dat_weather6_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather6_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather6_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather6_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather6_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather6_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather6_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_18oc_img').children('img').attr('src', dat_weather6_js);

            //明後日の21時
            var dat_weather7_js = data.dat_weather7;
            switch (dat_weather7_js) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    dat_weather7_js = "img/weather/sun.png";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    dat_weather7_js = "img/weather/cloud.png";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    dat_weather7_js = "img/weather/shower_rain.png";
                    break;

                    // 雨処理
                case ("Rain"):
                    dat_weather7_js = "img/weather/rain.png";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    dat_weather7_js = "img/weather/thunderstorm.png";
                    break;

                    // 雪処理
                case ("Snow"):
                    dat_weather7_js = "img/weather/snow.png";
                    break;
            }
            $('.dat_weat_21oc_img').children('img').attr('src', dat_weather7_js);
        },
        error: function (err) {
            console.error(err);
        }
    });
});