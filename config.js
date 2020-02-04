(function () {
  return function (opts) {
    return {
      geocoder: {
        url: function (input) {
          var inputEncoded = encodeURIComponent(input);
          return '//api.phila.gov/ais/v1/search/' + inputEncoded;
        },
        params: {
          gatekeeperKey: GATEKEEPER_KEY,
          include_units: true
        }
      },
      map: {
        center: [39.982649, -75.188560],
        minZoom: 11,
        maxZoom: 22,
        zoom: 13,
        scales: {
          20: 1128.497220,
          19: 2256.994440,
          18: 4513.988880,
          17: 9027.977761,
          16: 18055.955520,
          15: 36111.911040,
          14: 72223.822090,
          13: 144447.644200,
          12: 288895.288400,
          11: 577790.576700,
          10: 1155581.153000,
          9: 2311162.307000,
          8: 4622324.614000,
          7: 9244649.227000,
          6: 18489298.450000,
          5: 36978596.910000,
          4: 73957193.820000,
          3: 147914387.600000,
          2: 295828775.300000,
          1: 591657550.500000,
        },
        basemaps: {
          pwd: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
            tiledLayers: [
              'cityBasemapLabels'
            ],
            type: 'featuremap'
          },
          imagery2017: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2017_3in/MapServer',
            label: '2017',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2017,
            attribution: 'Imagery 2017'
          },
        },
        imageryTypes: {
          imagery: {
            label: 'Imagery'
          },
          historic: {
            label: 'Historic'
          }
        },
        tiledLayers: {
          cityBasemapLabels: {
            // type: 'labels',
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
            zIndex: '3',
          },
          imageryBasemapLabels: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer',
            zIndex: '3',
            attribution: 'overwrite',
            // attribution: ' ',
          },
          parcels: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PWDParcel_ImageryOverlay/MapServer/',
            zIndex: '2',
          },
          fullMarathon: {
            // url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/Full_Marathon/MapServer',
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/Full_Marathon_2019/MapServer',
            zIndex: '1000',
            pane: 'marathon',
            attribution: 'overwrite',
          },
          halfMarathon: {
            // url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/Half_Marathon/MapServer',
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/Half_Marathon_2019/MapServer',
            zIndex: '1000',
            pane: 'marathon',
            attribution: 'overwrite',
          },
        },
      },
    };
  }
})();
