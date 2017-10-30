(function () {
  var GATEKEEPER_KEY = '60a96cf015063fa0f0e2708bc3c61775';

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
      // },
      // reverse: {
      //   direction: 'reverse',
      //   // TODO uri encode
      //   url: function (input) {
      //     return '//api.phila.gov/ais/v1/reverse_geocode/' + input;
      //   },
      //   params: {
      //     gatekeeperKey: GATEKEEPER_KEY,
      //     include_units: true
      //   }
      // }
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
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/ParcleTile/MapServer',
          zIndex: '2',
        },
        fullMarathon: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/Full_Marathon/MapServer',
          zIndex: '3',
          pane: 'marathon',
          attribution: 'overwrite',
        },
        halfMarathon: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/Half_Marathon/MapServer',
          zIndex: '3',
          pane: 'marathon',
          attribution: 'overwrite',
        },
      },
      dynamicMapLayers: {
        // stormwater: {
        //   url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data/MapServer',
        //   opacity: 1.0
        // },
        // zoning: {
        //   url: '//gis.phila.gov/arcgis/rest/services/PhilaGov/ZoningMap/MapServer',
        //   opacity: 1.0
        // },
        // regmaps: {
        //   url: '//gis.phila.gov/arcgis/rest/services/DOR_ParcelExplorer/rtt_basemap/MapServer/',
        //   opacity: 0.5
        // },
        // 311: {
        //   url: '//192.168.103.144:6080/arcgis/rest/services/GSG/GIS311_365_nosym/MapServer/',
        //   opacity: 1.0
        // },
      },
      featureLayers: {
        // dorParcels: {
        //   url: '//gis.phila.gov/arcgis/rest/services/DOR_ParcelExplorer/rtt_basemap/MapServer/24',
        // },
        // pwdParcels: {
        //   url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data_geodb2/MapServer/0',
        // },
        // marathon: {
        //   url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/FullMarathon/FeatureServer/0',
        //   color: 'orange',
        //   fillColor: 'orange',
        //   fillOpacity: 0.5,
        //   weight: 1,
        //   minZoom: 16
        // },
        // vacantBuilding: {
        //   url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Vacant_Indicators_Bldg/FeatureServer/0',
        //   color: 'purple',
        //   fillColor: 'purple',
        //   fillOpacity: 0.5,
        //   weight: 1,
        //   minZoom: 16
        // }
      },
      tools: {
        buffer: {
          url: '//192.168.103.143:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer/buffer'
        },
        distance: {
          url: '//192.168.103.143:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer/distance'
        }
      }
    },
    cyclomedia: {
      host: '10.8.101.67',
      username: 'PhillyMarathon',
      // there's no way to initialize the streetsmart api without sending this to the client, so it has to be in here.
      password: 'run26.2',
      apiKey: 'SzAVCX4Baj0ZiHwRGDMxWrQ1GTAtGbMFu3UF-jEZST4BKjg5G_EB-Xo9WH0liHAt ',
      // apiKey: 'GfElS3oRuroNivgtibsZqDkpCvItyPUNuv0NmXglen8puXoJanEVarsZyns9ynkJ',
      // this has to be https
      recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs'
    },
  };
})();
