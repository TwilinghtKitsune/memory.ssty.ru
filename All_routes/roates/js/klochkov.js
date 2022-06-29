// json
let points = '{"points":[';
let p0 = '{ "coordinates1":51.526946, "coordinates2":45.970917, "balloonContentHeader": "images/holzunov/table2.JPG",  "balloonContentBody": "<div>Школа № 97.<br>На территории школы установлен памятник Клочкову В.Г.</div>", "hintContent": "Школа №97" },';
let p1 = '{ "coordinates1":51.524978, "coordinates2":45.974458, "balloonContentHeader": "images/holzunov/table2.JPG",  "balloonContentBody": "<div>Стела Героя Советского Союза <br> Клочкова В. Г.</div>", "hintContent": "Стела им.Клочкова В.Г." },';

points += p0 + p1 + "]}";
console.log(points);
let point = JSON.parse(points);
