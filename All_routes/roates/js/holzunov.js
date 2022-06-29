// json
let points = '{"points":[';
let p0 = '{ "coordinates1":51.525539, "coordinates2":46.004693, "balloonContentHeader": "images/holzunov/table2.JPG", "balloonContentBody": "<div>Мемориальная табличка <br> на ул. имени Хользунова А.И., 19 к3</div>", "hintContent": "Мемориальная табличка" },';
let p1 = '{ "coordinates1":51.527735, "coordinates2":46.008753, "balloonContentHeader": "images/holzunov/home.JPG", "balloonContentBody": "<div>Дом А.И. Хользунова <br> (ул. Хользунова, 46)</div>", "hintContent": "Дом А.И. Хользунова" },';
let p2 = '{ "coordinates1":51.529755, "coordinates2": 46.010500, "balloonContentHeader": "images/holzunov/school.JPG", "balloonContentBody": "<div>Мемориальные плиты Героев Советского Союза, <br> учившихся в школе №2 <br> (улица имени Мичурина, 16)</div>", "hintContent": "Школа №2" },';
let p3 = '{ "coordinates1":51.529528, "coordinates2": 46.011844, "balloonContentHeader": "images/holzunov/table.JPG", "balloonContentBody": "<div>Памятная стела на улице <br> имени Хользунова А.И. </div>", "hintContent": "Памятная стелла" },';
let p4 = '{ "coordinates1":51.529455, "coordinates2": 46.005685, "balloonContentHeader": "images/holzunov/manument.JPG", "balloonContentBody": "<div>Памятник Алексею Ивановичу Хользунов <br> у в Саратове на заводе «Серп и Молот».</div>", "hintContent": "Памятник А.И. Хользунову" }';
points += p0 + p1 + p2 + p3 + p4 + "]}";
console.log(points);
let point = JSON.parse(points);
