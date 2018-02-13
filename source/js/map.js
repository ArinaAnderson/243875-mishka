 ymaps.ready(init);

 function init() {
    var map = new ymaps.Map('map', {
        center: [59.93863106, 30.32305450],
        zoom: 17,
        controls: ['zoomControl'],
        behaviors: ['drag'],
    });
/*
    var placemark = new ymaps.Placemark([59.938727, 30.323135], {
        hintContent: '<div class="map-hint">191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</div>',
        /*balloonContent: [
        '<div class="map-balloon">',
        '<img src="../img/slide-2.png" alt="" width="50" height="25">',
        'Мы — маленькая, но гордая дизайн-студия из Краснодара',
        '</div>',
        ].join(''),
    },
    /*balloonContent:.addEventListener("keydown", function(evt) {
    if(evt.keyCode===27) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-none");
    }
  });*/
   /* {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-60, -190],
    });

    map.geoObjects.add(placemark);
 }

//55.75399400, 37.62209300   59.938727, 30.323135  [184, 190],

  

