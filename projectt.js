let a = document.querySelector('button#search');
a.addEventListener('click', result);

function result() {
  let s = document.querySelector('select#cty');
  let num = s.selectedIndex;
  let k;
  switch(num) {
    case 0: k = 360630;
    break;
    case 1: k = 524901;
    break;
    case 2: k = 993800;
    break;
    case 3: k = 1816670;
    break;
    case 4: k = 1850147;
    break;
    case 5: k = 1880252;
    break;
    case 6: k = 2147714;
    break;
    case 7: k = 2643743;
    break;
    case 8: k = 2968815;
    break;
    case 9: k = 3451189;
    break;
    case 10: k = 5128581;
    break;
    case 11: k = 5368361;
    break;
    default: k = 0;
  }


  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + k + '.json';
  axios.get(url)
        .then(showResult)
        .catch(showErrow)
        .then(finish);
}

function showResult(resp) {
    let data = resp.data;
    if(typeof data === 'string') {
        data = JSON.parse(data);
    }
    let t = document.querySelector('t1');
    t.textContent = '検索結果';
    let d1 = document.querySelector('t2#name');
    d1.textContent = data.name;
    if(data.name === 'Paris') {
        d1.textContent = 'パリ';
    } else if(data.name === 'State of Rio de Janeiro') {
        d1.textContent = 'リオデジャネイロ';
    }
    let d2 = document.querySelector('p#temp_max');
    d2.textContent = '最高気温:' + data.main.temp_max;
    let d3 = document.querySelector('p#temp_min');
    d3.textContent = '最低気温:' + data.main.temp_min;
    let d4 = document.querySelector('p#weather_description');
    for(let x of data.weather) {
    d4.textContent = '天気:' + x.description;
    }
    let d5 = document.querySelector('p#coord_lon');
    d5.textContent =  '緯度:' + data.coord.lon;
    let d6 = document.querySelector('p#coord_lat');
    d6.textContent = '経度:' + data.coord.lat;
    let d7 = document.querySelector('p#wind_speed');
    d7.textContent = '風速:' + data.wind.speed;
    let d8 = document.querySelector('p#wind_deg');
    d8.textContent = '風向き:' + data.wind.deg;
    let d9 = document.querySelector('p#main_humidity');
    d9.textContent = '湿度:' + data.main.humidity;
    console.log('通信が成功しました');
}

function showErrow(err) {
    console.log(err);
}

function finish() {
    console.log('Ajax 通信が終わりました');
}
