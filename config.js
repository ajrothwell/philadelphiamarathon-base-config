(function () {
  var GATEKEEPER_KEY = '35ae5b7bf8f0ff2613134935ce6b4c1e';

  return {
    geocoder: {
      // forward: {
        // direction: 'forward',
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
      center: [39.953338, -75.163471],
      minZoom: 11,
      maxZoom: 20,
      zoom: 12,
      basemaps: {
        pwd: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
          tiledLayers: [
            'cityBasemapLabels'
          ],
          type: 'featuremap'
        },
        dor: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap/MapServer',
          tiledLayers: [
            'dorBasemapLabels'
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
        imagery2016: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2016_3in/MapServer',
          label: '2016',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2016,
          attribution: 'Imagery 2016'
        },
        imagery2015: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2015_3in/MapServer',
          label: '2015',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2015,
          attribution: 'Imagery 2015'
        },
        imagery2012: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2012_3in/MapServer',
          label: '2012',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2012,
          attribution: 'Imagery 2012'
        },
        imagery2010: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2010_3in/MapServer',
          label: '2010',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2010,
          attribution: 'Imagery 2010'
        },
        imagery2008: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2008_3in/MapServer',
          label: '2008',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2008,
          attribution: 'Imagery 2008'
        },
        imagery2004: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2004_6in/MapServer',
          label: '2004',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2004,
          attribution: 'Imagery 2004'
        },
        imagery1996: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_1996_6in/MapServer',
          label: '1996',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 1996,
          attribution: 'Imagery 1996'
        },
        historic1962: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1962/MapServer',
          label: '1962',
          tiledLayers: [],
          type: 'historic',
          year: 1962,
          attribution: 'Historic Land Use 1962'
        },
        historic1942: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1942/MapServer',
          label: '1942',
          tiledLayers: [],
          type: 'historic',
          year: 1942,
          attribution: 'Historic Land Use 1942'
        },
        historic1910: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1910/MapServer',
          label: '1910',
          tiledLayers: [],
          type: 'historic',
          year: 1910,
          attribution: 'Historic Bromley Atlas 1910'
        },
        historic1895: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1895/MapServer',
          label: '1895',
          tiledLayers: [],
          type: 'historic',
          year: 1895,
          attribution: 'Historic Bromley Atlas 1895'
        },
        historic1875: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricGMHopkinsAtlas_1875/MapServer',
          label: '1875',
          tiledLayers: [],
          type: 'historic',
          year: 1875,
          attribution: 'Historic G.M. Hopkins Atlas 1875'
        },
        historic1860: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricHexamerLocherAtlas_1860/MapServer',
          label: '1860',
          tiledLayers: [],
          type: 'historic',
          year: 1860,
          attribution: 'Historic Hexamer Locher Atlas 1860'
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
        dorBasemapLabels: {
          // type: 'labels',
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap_Labels_Test2/MapServer',
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
      },
      dynamicMapLayers: {
        stormwater: {
          url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data/MapServer',
          opacity: 1.0
        },
        zoning: {
          url: '//gis.phila.gov/arcgis/rest/services/PhilaGov/ZoningMap/MapServer',
          opacity: 1.0
        },
        regmaps: {
          url: '//gis.phila.gov/arcgis/rest/services/DOR_ParcelExplorer/rtt_basemap/MapServer/',
          opacity: 0.5
        },
        311: {
          url: '//192.168.103.144:6080/arcgis/rest/services/GSG/GIS311_365_nosym/MapServer/',
          opacity: 1.0
        },
      },
      featureLayers: {
        dorParcels: {
          url: '//gis.phila.gov/arcgis/rest/services/DOR_ParcelExplorer/rtt_basemap/MapServer/24',
        },
        pwdParcels: {
          url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data_geodb2/MapServer/0',
        },
        vacantLand: {
          url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Vacant_Indicators_Land/FeatureServer/0',
          color: 'orange',
          fillColor: 'orange',
          fillOpacity: 0.5,
          weight: 1,
          minZoom: 16
        },
        vacantBuilding: {
          url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Vacant_Indicators_Bldg/FeatureServer/0',
          color: 'purple',
          fillColor: 'purple',
          fillOpacity: 0.5,
          weight: 1,
          minZoom: 16
        }
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
      username: 'maps@phila.gov',
      // there's no way to initialize the streetsmart api without sending this to the client, so it has to be in here.
      password: 'mapscyc01',
      apiKey: 'GfElS3oRuroNivgtibsZqDkpCvItyPUNuv0NmXglen8puXoJanEVarsZyns9ynkJ',
      // this has to be https
      recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs'
    },
    pictometry: {
      host: 'atlas.phila.gov',
      apiKey: 'B8A0CA65484E649E1FD92880E8F3DF29',
      // again, this is necessary to start the pictometry ipa viewer.
      secretKey: '3E9764B6E2F443FC9EBA7FEC4114AAA84FA9013E914A53F389B753C52AFD404ED0A11E1001C6F663B5D0AC451517C593D600607517CB937CEA5A5C5E9ABEAB5A6D1C31717D2BA16E35E3682F2F9C1186AF570588EAC80DDFB8D04B1C4D938F76C9D3704B557A240A5BC7393D55B6E044889C1E6EB87D19B969F6E416F574CEF7',
      iframeId: 'pictometry-ipa'
    },
    carto: {
      baseUrl: '//phl.carto.com/api/v2/sql',
    },
    // pictometry: {
    //   host: 'atlas-dev.phila.gov',
    //   apiKey: 'D33AB30CEC52FC1B2EB1F4BED47C47A1',
    //   // again, this is necessary to start the pictometry ipa viewer.
    //   secretKey: 'E82CC81FCC6427E5D48882CC2F53690DDCE4CD789A2304FAE92F7906FBEDFD48469E002DCAF34A6F88DFFF8A194F50AD03FE5C25458B9C023F9EBA90F7B42B7B50344EA10BE2492476187AC190CA3795322F399CFCF7B085C453AF61F9C21E83CE307703B496BAFE76198A9E710E08AA720CBC60627E0022F6D42C4461605B83',
    //   iframeId: 'pictometry-ipa'
    // },
    // carto: {
    //   baseUrl: '//phl.carto.com/api/v2/sql',
    // },
    // pictometry: {
    //   host: '10.8.101.67',
    //   apiKey: 'FC263F1985BF2DBDADBEB3B5BAA74EAE',
    //   // again, this is necessary to start the pictometry ipa viewer.
    //   secretKey: '132968F728EAB2957EB9689A9CC5B4B55BA4347E4E3A43FC782C7B154321EEC109612716E13858136CBE83769FDC64BA17BFC26B831F925816E1BF4AA8B25FD01414550B0CE4BFAC751C57EC81C8F5096D0092AE12F953B90CD6CDC7C2CCFC7A80BF2C41EE5C85578A1075B6DD4571EFF95ADE0FFBC169EA24718AEBC056CB10',
    //   iframeId: 'pictometry-ipa'
    // },
    // carto: {
    //   baseUrl: '//phl.carto.com/api/v2/sql',
    // },
  };
})();
