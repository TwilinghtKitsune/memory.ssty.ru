let myMap = null;
ymaps.ready(init);
function init(){
    myMap = new ymaps.Map("map__wrapper", {
        center: [51.527735, 46.008753],
        zoom: 17,
        controls: ['zoomControl']
    },{suppressMapOpenBlock: true});
    let marks = [];
    // point берется из файла соответствующей экскурсии (для каждой будет свой - holzunov.js и т.д.)
    for(let i = 0; i < point.points.length; i++){
        marks[i] = new ymaps.Placemark([point.points[i].coordinates1, point.points[i].coordinates2], {
            balloonContent: '<div class = "wrapper">' +
                            "<div class = 'content-image'> <img type='image2' src= " + point.points[i].balloonContentHeader + " alt=' ' width='250px'> </div>" +
                            `<div class = 'content-body'> ${point.points[i].balloonContentBody} </div>` +
                            '</div>',
            hintContent: point.points[i].hintContent
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icon.png', // нужно заменить на другую, пока взяла первую попавшуюся
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -20]
        });
    }
    let clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'images/cluster.png', // тоже поменять иконку кластера. А может он вообще не нужен
                size: [42, 42],
                offset: [-20, -20]
            }],

        showInAlphabeticalOrder: true,
        clusterDisableClickZoom: true,
    });
    clusterer.add(marks);
    myMap.geoObjects.add(clusterer);

    // далее нужно эти метки соединить, чтобы получился маршрут.
}
