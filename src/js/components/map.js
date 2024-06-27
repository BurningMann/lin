(() => {
  if (document.querySelector('#contact-map')) {
    ymaps.ready(initMap);
    function initMap() {
      const controls = [];
      const coordinates = [
        {
          description: ``,
          coords: [55.843106, 37.491126],
        },
      ];

      const map = new ymaps.Map('contact-map', {
        center: coordinates[0],
        zoom: 16,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
      });

      map.behaviors.disable('scrollZoom');

      coordinates.forEach((el) => {
        const mapMarker = new ymaps.Placemark(
          el.coords,
          {
            hintContent: '',
            balloonContent: el.description,
          },
          {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.svg',
            iconImageSize: [64, 76],
            iconImageOffset: [-32, -76],
          }
        );

        map.geoObjects.add(mapMarker);
      });

      map.setBounds(map.geoObjects.getBounds(), { checkZoomRange: true }).then(function () {
        if (map.getZoom() > 10) map.setZoom(16);
      });
    }
  }
})();

(() => {
  if (document.querySelector('#locations-map')) {
    ymaps.ready(initMap);
    function initMap() {
      const controls = [];
      const coordinates = [
        {
          description: `Фирменный островок glo™ space в ТРЦ Dana Mall <br> г. Минск, ул. Мстиславца, д. 11`,
          coords: [53.933687, 27.651873],
          type: 1,
        },
        {
          description: `Фирменный островок glo™ space в ТРЦ «Секрет» 
          <br> г. Гомель, ул. Гагарина, д. 65
          `,
          coords: [52.42398853237362, 30.997798745800985],
          type: 2,
        },
        {
          description: `Фирменный островок glo™ space в ТРК TRINITI 
          <br> г. Гродно, пр. Янки Купалы, д. 87
          `,
          coords: [53.6497462, 23.8539608],
        },
        {
          description: `Фирменный островок glo™ space в ТРЦ Galileo 
          <br> г. Минск, ул. Бобруйская, д. 6
          `,
          coords: [53.88985684370826, 27.555422458242152],
          type: 1,
        },
        {
          description: `Фирменный островок glo™ space в ТЦ «Евроопт» 
          <br> г. Брест, ш. Варшавское, д. 11
          `,
          coords: [52.07495972162934, 23.717925242638405],
        },
        {
          description: `Фирменный островок glo™ space в ТРЦ «ТриО» 
          <br> г. Витебск, пр. Строителей, д. 15Г
          `,
          coords: [55.170265852248235, 30.22039357710804],
          type: 1,
        },
        {
          description: `Фирменный островок glo™ space в ТЦ «Парк Сити» 
          <br> г. Могилев, Минское шоссе, д. 31
          `,
          coords: [53.935638, 30.257639],
        },
        {
          description: `Магазин glo™ space в ТРЦ Galleria Minsk 
          <br> г. Минск, пр. Победителей, д. 9
          `,
          coords: [53.90857, 27.548608],
          type: 1,
        },
        {
          description: `Фирменный островок glo™ space в ТРЦ «Манеж» 
          <br> г. Полоцк, ш. Вильнюсское, д. 1
          `,
          coords: [55.472071, 28.749539],
        },
        {
          description: `Фирменный островок glo™ space в ТЦ «Бобровский» 
          <br> г. Мозырь, ул. Рыжкова, д. 94
          `,
          coords: [52.0363967, 29.2189605],
          type: 1,
        },
        {
          description: `Фирменный островок glo™ space в ТЦ «Спутник-2» 
          <br> г. Молодечно, ул. Великий Гостинец, 67А/1
          `,
          coords: [54.30844, 26.819005],
        },
        {
          description: `Фирменный островок glo™ space ТРЦ «Мандарин» 
          <br> г. Борисов, ул. Гагарина, д. 62
          `,
          coords: [54.208503, 28.484214],
          type: 1,
        },
        {
          description: `Фирменный островок glo™ space в ТРЦ N3 PLAZA 
          <br> г. Солигорск, ул. Кольцевая, д. 4
          `,
          coords: [52.79256, 27.51687],
        },
        {
          description: `Фирменный островок glo™ space в «Евроопт Hyper» 
          <br> г. Жлобин, 20-ый микрорайон, д. 30/3
          `,
          coords: [52.904777, 30.033501],
          type: 1,
        },
        {
          description: `Фирменный островок glo™ space в ТЦ «Абсолют» 
          <br> г. Бобруйск, ул. Минская, д. 133
          `,
          coords: [53.167989, 29.204922],
        },
        {
          description: `Фирменный островок glo™ space ТЦ «Центральный» 
          <br> г. Барановичи, ул. Советская, д. 74А
          `,
          coords: [53.133611, 26.015166],
          type: 1,
        },
      ];

      const map = new ymaps.Map('locations-map', {
        center: coordinates[0],
        zoom: 12,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
      });

      map.behaviors.disable('scrollZoom');

      coordinates.forEach((el) => {
        const mapMarker = new ymaps.Placemark(
          el.coords,
          {
            hintContent: '',
            balloonContent: el.description,
          },
          {
            iconLayout: 'default#image',
            iconImageHref: el.type === 1 ? './img/map-marker-2.svg' : './img/map-marker-small.svg',
            iconImageSize: [24, 31],
            iconImageOffset: [-12, -31],
          }
        );

        map.geoObjects.add(mapMarker);
      });

      map.setBounds(map.geoObjects.getBounds());
    }
  }
})();
