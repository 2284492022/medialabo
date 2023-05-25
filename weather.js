let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let a = document.querySelector('button#search');
a.addEventListener('click', result);

function result() {
  let s = document.querySelector('select#cty');
  let num = s.selectedIndex;
  let os = s.querySelectedAll('option');
  let o = os.item(num);
}
let d1 = document.querySelector('t2#name');
d1.textContent = data.name;
let d2 = document.querySelector('p#temp_max');
d2.textContent = '最高気温' + data.main.temp_max;
let d3 = document.querySelector('p#temp_min');
d3.textContent = '最低気温' + data.main.temp_min;
/*let d4 = document.querySelector('p#weather.description');
d4.textContent = data.weather.description;
let d5 = document.querySelector('p#coord.lon');
d5.textContent = data.coord.lon;
let d6 = document.querySelector('p#coord.lat');
d6.textContent = data.coord.lat;
let d7 = document.querySelector('p#wind.speed');
d7.textContent = data.wind.speed;
let d8 = document.querySelector('p#wind.deg');
d8.textContent = data.wind.deg;
let d9 = document.querySelector('p#main.humidity');
d9.textContent = data.main.humidity;
*/