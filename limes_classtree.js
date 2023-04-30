var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/ObergermanischRaetischerLimesFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Obergermanisch R\u00e4tischer Limes Features (ObergermanischRaetischerLimesFeatures)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/MilitaryCamp_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "MilitaryCamp Instances Collection (MilitaryCamp_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/Kleinkastell_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Kleinkastell Instances Collection (Kleinkastell_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/Watchtower_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Watchtower Instances Collection (Watchtower_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "FeatureCollection (gsp:FeatureCollection) [13]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 1030,
              "http://archaeoinformatics.link/ontology#Watchtower": 1022
            }
          },
          "from": {}
        },
        "instancecount": 1033
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "collectionclass",
        "text": "SpatialObjectCollection (gsp:SpatialObjectCollection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/ObergermanischRaetischerLimesGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Obergermanisch R\u00e4tischer Limes Geometries (ObergermanischRaetischerLimesGeometries)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/Point_collection",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Point Instances Collection (Point_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "GeometryCollection (gsp:GeometryCollection) [7]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 200,
              "http://www.opengis.net/ont/sf#Point": 200
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 203
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 1 (limes_1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_10",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 10 (limes_10)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_11",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 11 (limes_11)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_12",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 12 (limes_12)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_13",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 13 (limes_13)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_14",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 14 (limes_14)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_15",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 15 (limes_15)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_16",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 16 (limes_16)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_17",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 17 (limes_17)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_18",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 18 (limes_18)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_19",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 19 (limes_19)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Heftrich (limes_2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_20",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Buch (limes_20)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_21",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 21 (limes_21)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_22",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Dambach | Dennenlohe (limes_22)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_23",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 23 (limes_23)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_24",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 24 (limes_24)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_25",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 25 (limes_25)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_26",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 26 (limes_26)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_27",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 27 (limes_27)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_28",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "B\u00f6hming (limes_28)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_29",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 29 (limes_29)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 3 (limes_3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_30",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Eining (limes_30)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_31",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Eining (limes_31)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_32",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Heddesdorf (limes_32)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_33",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 33 (limes_33)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_34",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 34 (limes_34)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_35",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 35 (limes_35)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_36",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 36 (limes_36)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_37",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 37 (limes_37)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_38",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 38 (limes_38)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_39",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 39 (limes_39)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 4 (limes_4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_40",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kemel (limes_40)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_41",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_41)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_42",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 42 (limes_42)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_43",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 43 (limes_43)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_44",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 44 (limes_44)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_45",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Inheiden (limes_45)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_46",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 46 (limes_46)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_47",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 47 (limes_47)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_48",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 48 (limes_48)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_49",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 49 (limes_49)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_5",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 5 (limes_5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_50",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 50 (limes_50)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_51",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 51 (limes_51)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_52",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 52 (limes_52)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_53",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 53 (limes_53)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_54",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 54 (limes_54)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_55",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 55 (limes_55)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_56",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 56 (limes_56)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_57",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Frankenhofen | Weiltingen (limes_57)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_58",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 58 (limes_58)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_59",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 59 (limes_59)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_6",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 6 (limes_6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_60",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 60 (limes_60)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_61",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 61 (limes_61)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_62",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 62 (limes_62)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 7 (limes_7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_8",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 8 (limes_8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_9",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Limes Part 9 (limes_9)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "MilitaryCamp [194]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#limesobject": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#limestown": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Feature",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Feature (gsp:Feature)",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 0,
              "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell": 68
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_100",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Altdorf (limes_100)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_101",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Altdorf (limes_101)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_102",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 102 (limes_102)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_103",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 103 (limes_103)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_104",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 104 (limes_104)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_105",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 105 (limes_105)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_106",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 106 (limes_106)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_107",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Kemel (limes_107)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_108",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Kemel (limes_108)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_109",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Adolfseck (limes_109)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_110",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Heftrich (limes_110)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_111",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Heftrich (limes_111)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_112",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 112 (limes_112)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_113",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_113)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_114",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Bettenhausen (limes_114)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_115",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Bingenheim (limes_115)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_116",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Bisses (limes_116)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_117",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Inheiden (limes_117)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_118",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Inheiden (limes_118)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_119",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 119 (limes_119)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_120",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 120 (limes_120)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_121",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 121 (limes_121)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_122",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 122 (limes_122)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_123",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 123 (limes_123)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_124",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Langendiebach (limes_124)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_125",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Hettingen (limes_125)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_126",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 126 (limes_126)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_127",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 127 (limes_127)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_128",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 128 (limes_128)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_129",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 129 (limes_129)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_130",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 130 (limes_130)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_63",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_63)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_64",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 64 (limes_64)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_65",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 65 (limes_65)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_66",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 66 (limes_66)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_67",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Laufenselden (limes_67)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_68",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Lenzhahn/Dasbach (limes_68)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_69",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 69 (limes_69)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_70",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 70 (limes_70)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_71",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 71 (limes_71)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_72",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 72 (limes_72)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_73",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 73 (limes_73)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_74",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "K\u00f6ppern (limes_74)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_75",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 75 (limes_75)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_76",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 76 (limes_76)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_77",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 77 (limes_77)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_78",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 78 (limes_78)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_79",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_79)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_80",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 80 (limes_80)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_81",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 81 (limes_81)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_82",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Gambach (limes_82)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_83",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Gambach (limes_83)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_84",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Holzheim (limes_84)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_85",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Inheiden (limes_85)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_86",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "H\u00f6chst (limes_86)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_87",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 87 (limes_87)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_88",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 88 (limes_88)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_89",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Hettingen (limes_89)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_90",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 90 (limes_90)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_91",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 91 (limes_91)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_92",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 92 (limes_92)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_93",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 93 (limes_93)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_94",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Gro\u00dfdeinbach (limes_94)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_95",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 95 (limes_95)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_96",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 96 (limes_96)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_97",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 97 (limes_97)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_98",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Limes Part 98 (limes_98)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_99",
        "parent": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "type": "geoinstance",
        "text": "Kaldorf (limes_99)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/Kleinkastell",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "Kleinkastell [68]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#limesobject": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#limestown": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1000",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1000 (limes_1000)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1001",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1001 (limes_1001)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1002",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1002 (limes_1002)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1003",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6ttingen | Fiegenstall (limes_1003)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1004",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1004 (limes_1004)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1005",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1005 (limes_1005)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1006",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1006 (limes_1006)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1007",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1007 (limes_1007)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1008",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1008 (limes_1008)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1009",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "D\u00fchren (limes_1009)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1010",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1010 (limes_1010)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1011",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1011 (limes_1011)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1012",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_1012)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1013",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1013 (limes_1013)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1014",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "D\u00fchren (limes_1014)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1015",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kleinlellenfeld (limes_1015)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1016",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1016 (limes_1016)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1017",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hagenhill i Tettenwang a (limes_1017)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1018",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hagenhill (limes_1018)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1019",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1019 (limes_1019)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1020",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1020 (limes_1020)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1021",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dennenlohe (limes_1021)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1022",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dambach (limes_1022)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1023",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dambach (limes_1023)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1024",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1024 (limes_1024)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1025",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dambach (limes_1025)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1026",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1026 (limes_1026)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1027",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1027 (limes_1027)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1028",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1028 (limes_1028)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1029",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1029 (limes_1029)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1030",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1030 (limes_1030)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1031",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kleinlellenfeld (limes_1031)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1032",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1032 (limes_1032)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1033",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1033 (limes_1033)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1034",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1034 (limes_1034)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1035",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1035 (limes_1035)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1036",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1036 (limes_1036)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1037",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1037 (limes_1037)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1038",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1038 (limes_1038)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1039",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1039 (limes_1039)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1040",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1040 (limes_1040)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1041",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1041 (limes_1041)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1042",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1042 (limes_1042)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1043",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1043 (limes_1043)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1044",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1044 (limes_1044)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1045",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1045 (limes_1045)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1046",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hirnstetten (limes_1046)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1047",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1047 (limes_1047)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1048",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1048 (limes_1048)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1049",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1049 (limes_1049)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1050",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6ttingen | Fiegenstall (limes_1050)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1051",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1051 (limes_1051)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1052",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6ttingen (Ottmarsfeld) (limes_1052)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1053",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1053 (limes_1053)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1054",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6ttingen (Ottmarsfeld) (limes_1054)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1055",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6ttingen | Fiegenstall (limes_1055)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1056",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hundsdorf (limes_1056)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1057",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1057 (limes_1057)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1058",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1058 (limes_1058)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1059",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1059 (limes_1059)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1060",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1060 (limes_1060)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1061",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1061 (limes_1061)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1062",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1062 (limes_1062)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1063",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hagenhill (limes_1063)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1064",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1064 (limes_1064)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1065",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1065 (limes_1065)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1066",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1066 (limes_1066)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1067",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1067 (limes_1067)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1068",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1068 (limes_1068)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1069",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gelbelsee (limes_1069)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1070",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1070 (limes_1070)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1071",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1071 (limes_1071)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1072",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1072 (limes_1072)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1073",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1073 (limes_1073)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1074",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1074 (limes_1074)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1075",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1075 (limes_1075)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1076",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1076 (limes_1076)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1077",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1077 (limes_1077)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1078",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laimerstadt (limes_1078)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1079",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "D\u00fchren (limes_1079)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1080",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1080 (limes_1080)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1081",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Erkertshofen (limes_1081)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1082",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Erkertshofen (limes_1082)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1083",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1083 (limes_1083)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1084",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1084 (limes_1084)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1085",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1085 (limes_1085)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1086",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laimerstadt (limes_1086)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1087",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laimerstadt (limes_1087)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1088",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_1088)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1089",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "D\u00fchren (limes_1089)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1090",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1090 (limes_1090)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1091",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "D\u00fchren (limes_1091)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1092",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1092 (limes_1092)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1093",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kleinlellenfeld (limes_1093)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1094",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dflellenfeld (limes_1094)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1095",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1095 (limes_1095)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1096",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1096 (limes_1096)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1097",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1097 (limes_1097)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1098",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1098 (limes_1098)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1099",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1099 (limes_1099)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1100",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1100 (limes_1100)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1101",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1101 (limes_1101)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1102",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1102 (limes_1102)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1103",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kleinlellenfeld (limes_1103)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1104",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1104 (limes_1104)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1105",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1105 (limes_1105)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1106",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1106 (limes_1106)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1107",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1107 (limes_1107)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1108",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1108 (limes_1108)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1109",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1109 (limes_1109)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1110",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kaldorf (limes_1110)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1111",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1111 (limes_1111)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1112",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1112 (limes_1112)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1113",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1113 (limes_1113)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1114",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Frickenfelden (limes_1114)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1115",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1115 (limes_1115)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1116",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1116 (limes_1116)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1117",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1117 (limes_1117)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1118",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1118 (limes_1118)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1119",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dorsbrunn | Thannhausen (limes_1119)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1120",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1120 (limes_1120)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1121",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1121 (limes_1121)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1122",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1122 (limes_1122)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1123",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1123 (limes_1123)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1124",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1124 (limes_1124)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1125",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6ttingen | Fiegenstall (limes_1125)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1126",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1126 (limes_1126)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1127",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dorsbrunn (limes_1127)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1128",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dorsbrunn (limes_1128)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1129",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1129 (limes_1129)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1130",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1130 (limes_1130)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1131",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1131 (limes_1131)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1132",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hundsdorf (limes_1132)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1133",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1133 (limes_1133)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1134",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6ttingen (Ottmarsfeld) (limes_1134)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1135",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1135 (limes_1135)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1136",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1136 (limes_1136)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1137",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1137 (limes_1137)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1138",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Erkertshofen (limes_1138)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1139",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hagenhill (limes_1139)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1140",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1140 (limes_1140)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1141",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1141 (limes_1141)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1142",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1142 (limes_1142)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1143",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laimerstadt (limes_1143)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1144",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1144 (limes_1144)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1145",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1145 (limes_1145)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1146",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1146 (limes_1146)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1147",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hirnstetten (limes_1147)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1148",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Cronheim (limes_1148)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1149",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "D\u00fchren (limes_1149)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1150",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1150 (limes_1150)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1151",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1151 (limes_1151)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1152",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 1152 (limes_1152)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_131",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_131)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_132",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hettingen (limes_132)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_133",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen (limes_133)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_134",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen (limes_134)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_135",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen (limes_135)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_136",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 136 (limes_136)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_137",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 137 (limes_137)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_138",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hettingen (limes_138)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_139",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6tzingen (limes_139)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_140",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hettingen (limes_140)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_141",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6tzingen (limes_141)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_142",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_142)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_143",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_143)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_144",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 144 (limes_144)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_145",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 145 (limes_145)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_146",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 146 (limes_146)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_147",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 147 (limes_147)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_148",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 148 (limes_148)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_149",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 149 (limes_149)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_150",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 150 (limes_150)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_151",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 151 (limes_151)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_152",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 152 (limes_152)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_153",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 153 (limes_153)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_154",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "B\u00fcttelborn (limes_154)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_155",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 155 (limes_155)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_156",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 156 (limes_156)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_157",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 157 (limes_157)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_158",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gei\u00dfelhardt (limes_158)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_159",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 159 (limes_159)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_160",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 160 (limes_160)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_161",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gei\u00dfelhardt (limes_161)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_162",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 162 (limes_162)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_163",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gei\u00dfelhardt (limes_163)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_164",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fctten (limes_164)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_165",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fctten (limes_165)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_166",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fctten (limes_166)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_167",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grab (limes_167)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_168",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 168 (limes_168)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_169",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 169 (limes_169)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_170",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 170 (limes_170)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_171",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 171 (limes_171)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_172",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 172 (limes_172)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_173",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 173 (limes_173)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_174",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fornsbach (limes_174)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_175",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 175 (limes_175)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_176",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 176 (limes_176)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_177",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 177 (limes_177)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_178",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gerolzahn (limes_178)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_179",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 179 (limes_179)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_180",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 180 (limes_180)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_181",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 181 (limes_181)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_182",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 182 (limes_182)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_183",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 183 (limes_183)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_184",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 184 (limes_184)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_185",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 185 (limes_185)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_186",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 186 (limes_186)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_187",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dfdeinbach (limes_187)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_188",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 188 (limes_188)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_189",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 189 (limes_189)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_190",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 190 (limes_190)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_191",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 191 (limes_191)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_192",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fornsbach (limes_192)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_193",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 193 (limes_193)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_194",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 194 (limes_194)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_195",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 195 (limes_195)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_196",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 196 (limes_196)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_197",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dfauheim (limes_197)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_198",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 198 (limes_198)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_199",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 199 (limes_199)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_200",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 200 (limes_200)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_201",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 201 (limes_201)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_202",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 202 (limes_202)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_203",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 203 (limes_203)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_204",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Eschenhahn (limes_204)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_205",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 205 (limes_205)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_206",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 206 (limes_206)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_207",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 207 (limes_207)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_208",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 208 (limes_208)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_209",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 209 (limes_209)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_210",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 210 (limes_210)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_211",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 211 (limes_211)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_212",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 212 (limes_212)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_213",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 213 (limes_213)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_214",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 214 (limes_214)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_215",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 215 (limes_215)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_216",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 216 (limes_216)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_217",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 217 (limes_217)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_218",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 218 (limes_218)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_219",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 219 (limes_219)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_220",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 220 (limes_220)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_221",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 221 (limes_221)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_222",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 222 (limes_222)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_223",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 223 (limes_223)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_224",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 224 (limes_224)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_225",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 225 (limes_225)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_226",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 226 (limes_226)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_227",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 227 (limes_227)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_228",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 228 (limes_228)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_229",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 229 (limes_229)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_230",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 230 (limes_230)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_231",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Altwied (limes_231)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_232",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 232 (limes_232)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_233",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 233 (limes_233)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_234",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 234 (limes_234)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_235",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 235 (limes_235)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_236",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 236 (limes_236)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_237",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 237 (limes_237)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_238",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 238 (limes_238)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_239",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 239 (limes_239)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_240",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 240 (limes_240)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_241",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 241 (limes_241)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_242",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 242 (limes_242)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_243",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 243 (limes_243)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_244",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 244 (limes_244)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_245",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 245 (limes_245)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_246",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 246 (limes_246)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_247",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 247 (limes_247)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_248",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 248 (limes_248)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_249",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 249 (limes_249)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_250",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 250 (limes_250)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_251",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 251 (limes_251)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_252",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gladbach (limes_252)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_253",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_253)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_254",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 254 (limes_254)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_255",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_255)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_256",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_256)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_257",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 257 (limes_257)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_258",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_258)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_259",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_259)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_260",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_260)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_261",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 261 (limes_261)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_262",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 262 (limes_262)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_263",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 263 (limes_263)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_264",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_264)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_265",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 265 (limes_265)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_266",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 266 (limes_266)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_267",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 267 (limes_267)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_268",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_268)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_269",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 269 (limes_269)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_270",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 270 (limes_270)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_271",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 271 (limes_271)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_272",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 272 (limes_272)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_273",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6nnersdorf (limes_273)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_274",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fcllenberg (limes_274)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_275",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 275 (limes_275)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_276",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_276)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_277",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gladbach (limes_277)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_278",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_278)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_279",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gladbach (limes_279)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_280",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_280)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_281",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_281)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_282",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_282)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_283",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_283)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_284",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_284)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_285",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_285)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_286",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_286)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_287",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_287)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_288",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 288 (limes_288)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_289",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heftrich (limes_289)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_290",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 290 (limes_290)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_291",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langen-Bergheim (limes_291)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_292",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_292)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_293",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Huppert (limes_293)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_294",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 294 (limes_294)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_295",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_295)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_296",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_296)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_297",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_297)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_298",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_298)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_299",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_299)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_300",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 300 (limes_300)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_301",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 301 (limes_301)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_302",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kemel (limes_302)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_303",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Born (limes_303)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_304",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_304)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_305",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 305 (limes_305)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_306",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Born (limes_306)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_307",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Born (limes_307)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_308",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 308 (limes_308)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_309",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 309 (limes_309)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_310",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 310 (limes_310)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_311",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 311 (limes_311)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_312",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Eschenhahn (limes_312)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_313",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 313 (limes_313)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_314",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 314 (limes_314)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_315",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_315)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_316",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heftrich (limes_316)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_317",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 317 (limes_317)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_318",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 318 (limes_318)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_319",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Eschenhahn (limes_319)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_320",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 320 (limes_320)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_321",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dasbach/Idstein (limes_321)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_322",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heftrich (limes_322)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_323",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 323 (limes_323)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_324",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 324 (limes_324)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_325",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 325 (limes_325)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_326",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_326)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_327",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 327 (limes_327)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_328",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 328 (limes_328)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_329",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 329 (limes_329)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_330",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_330)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_331",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_331)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_332",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_332)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_333",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_333)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_334",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_334)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_335",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_335)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_336",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00fcningen (limes_336)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_337",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_337)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_338",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_338)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_339",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 339 (limes_339)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_340",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_340)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_341",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 341 (limes_341)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_342",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 342 (limes_342)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_343",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 343 (limes_343)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_344",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 344 (limes_344)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_345",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Himbach (limes_345)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_346",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 346 (limes_346)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_347",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 347 (limes_347)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_348",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 348 (limes_348)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_349",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langen-Bergheim (limes_349)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_350",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dillingen (limes_350)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_351",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 351 (limes_351)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_352",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_352)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_353",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Holzheim (limes_353)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_354",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Griedel (limes_354)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_355",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_355)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_356",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_356)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_357",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_357)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_358",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_358)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_359",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Griedel (limes_359)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_360",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 360 (limes_360)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_361",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "K\u00f6ppern (limes_361)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_362",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 362 (limes_362)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_363",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Holzheim (limes_363)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_364",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 364 (limes_364)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_365",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Holzheim (limes_365)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_366",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 366 (limes_366)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_367",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 367 (limes_367)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_368",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 368 (limes_368)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_369",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dillingen (limes_369)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_370",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 370 (limes_370)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_371",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 371 (limes_371)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_372",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 372 (limes_372)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_373",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 373 (limes_373)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_374",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 374 (limes_374)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_375",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dillingen (limes_375)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_376",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 376 (limes_376)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_377",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 377 (limes_377)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_378",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dillingen (limes_378)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_379",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "K\u00f6ppern (limes_379)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_380",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 380 (limes_380)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_381",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 381 (limes_381)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_382",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 382 (limes_382)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_383",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 383 (limes_383)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_384",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 384 (limes_384)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_385",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 385 (limes_385)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_386",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 386 (limes_386)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_387",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 387 (limes_387)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_388",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 388 (limes_388)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_389",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 389 (limes_389)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_390",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 390 (limes_390)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_391",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 391 (limes_391)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_392",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 392 (limes_392)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_393",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 393 (limes_393)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_394",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_394)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_395",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 395 (limes_395)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_396",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 396 (limes_396)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_397",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 397 (limes_397)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_398",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 398 (limes_398)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_399",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 399 (limes_399)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_400",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Himbach (limes_400)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_401",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_401)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_402",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 402 (limes_402)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_403",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 403 (limes_403)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_404",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 404 (limes_404)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_405",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 405 (limes_405)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_406",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 406 (limes_406)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_407",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 407 (limes_407)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_408",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 408 (limes_408)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_409",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 409 (limes_409)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_410",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 410 (limes_410)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_411",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_411)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_412",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 412 (limes_412)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_413",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_413)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_414",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 414 (limes_414)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_415",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_415)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_416",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Holzheim (limes_416)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_417",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_417)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_418",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_418)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_419",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 419 (limes_419)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_420",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hundsdorf (limes_420)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_421",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 421 (limes_421)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_422",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 422 (limes_422)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_423",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 423 (limes_423)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_424",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 424 (limes_424)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_425",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 425 (limes_425)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_426",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dorsbrunn (limes_426)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_427",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dennenlohe (limes_427)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_428",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 428 (limes_428)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_429",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 429 (limes_429)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_430",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 430 (limes_430)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_431",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 431 (limes_431)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_432",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 432 (limes_432)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_433",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 433 (limes_433)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_434",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 434 (limes_434)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_435",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 435 (limes_435)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_436",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 436 (limes_436)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_437",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 437 (limes_437)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_438",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "D\u00fchren (limes_438)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_439",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dennenlohe (limes_439)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_440",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 440 (limes_440)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_441",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 441 (limes_441)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_442",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 442 (limes_442)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_443",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 443 (limes_443)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_444",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 444 (limes_444)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_445",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 445 (limes_445)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_446",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 446 (limes_446)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_447",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 447 (limes_447)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_448",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 448 (limes_448)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_449",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 449 (limes_449)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_450",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 450 (limes_450)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_451",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 451 (limes_451)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_452",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 452 (limes_452)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_453",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 453 (limes_453)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_454",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 454 (limes_454)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_455",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 455 (limes_455)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_456",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 456 (limes_456)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_457",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 457 (limes_457)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_458",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 458 (limes_458)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_459",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 459 (limes_459)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_460",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 460 (limes_460)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_461",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hirnstetten (limes_461)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_462",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 462 (limes_462)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_463",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 463 (limes_463)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_464",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 464 (limes_464)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_465",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 465 (limes_465)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_466",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Altdorf (limes_466)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_467",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 467 (limes_467)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_468",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 468 (limes_468)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_469",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dorsbrunn (limes_469)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_470",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 470 (limes_470)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_471",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dorsbrunn (limes_471)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_472",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 472 (limes_472)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_473",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 473 (limes_473)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_474",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 474 (limes_474)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_475",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 475 (limes_475)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_476",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 476 (limes_476)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_477",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 477 (limes_477)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_478",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Emsing (limes_478)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_479",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 479 (limes_479)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_480",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gelbelsee (limes_480)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_481",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 481 (limes_481)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_482",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 482 (limes_482)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_483",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 483 (limes_483)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_484",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Emsing (limes_484)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_485",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Emsing (limes_485)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_486",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gelbelsee (limes_486)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_487",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hirnstetten (limes_487)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_488",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_488)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_489",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Emsing (limes_489)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_490",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 490 (limes_490)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_491",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 491 (limes_491)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_492",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 492 (limes_492)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_493",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 493 (limes_493)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_494",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_494)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_495",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 495 (limes_495)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_496",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_496)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_497",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_497)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_498",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_498)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_499",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hienheim (limes_499)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_500",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 500 (limes_500)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_501",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 501 (limes_501)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_502",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 502 (limes_502)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_503",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gottersdorf (limes_503)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_504",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 504 (limes_504)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_505",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 505 (limes_505)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_506",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 506 (limes_506)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_507",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 507 (limes_507)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_508",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 508 (limes_508)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_509",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 509 (limes_509)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_510",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 510 (limes_510)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_511",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen (limes_511)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_512",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen (limes_512)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_513",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen-Neusa\u00df (limes_513)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_514",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen (limes_514)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_515",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Glashofen (limes_515)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_516",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 516 (limes_516)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_517",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 517 (limes_517)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_518",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 518 (limes_518)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_519",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 519 (limes_519)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_520",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 520 (limes_520)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_521",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 521 (limes_521)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_522",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 522 (limes_522)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_523",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 523 (limes_523)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_524",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 524 (limes_524)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_525",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 525 (limes_525)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_526",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 526 (limes_526)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_527",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 527 (limes_527)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_528",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_528)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_529",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 529 (limes_529)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_530",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 530 (limes_530)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_531",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 531 (limes_531)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_532",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 532 (limes_532)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_533",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 533 (limes_533)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_534",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 534 (limes_534)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_535",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6tzingen (limes_535)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_536",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6tzingen (limes_536)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_537",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6tzingen (limes_537)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_538",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6tzingen (limes_538)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_539",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "G\u00f6tzingen (limes_539)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_540",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_540)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_541",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 541 (limes_541)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_542",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_542)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_543",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_543)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_544",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_544)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_545",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_545)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_546",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 546 (limes_546)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_547",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 547 (limes_547)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_548",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 548 (limes_548)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_549",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 549 (limes_549)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_550",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Leibenstadt (limes_550)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_551",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 551 (limes_551)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_552",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 552 (limes_552)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_553",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 553 (limes_553)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_554",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 554 (limes_554)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_555",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 555 (limes_555)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_556",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 556 (limes_556)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_557",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 557 (limes_557)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_558",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 558 (limes_558)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_559",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 559 (limes_559)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_560",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 560 (limes_560)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_561",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 561 (limes_561)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_562",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 562 (limes_562)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_563",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 563 (limes_563)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_564",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 564 (limes_564)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_565",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 565 (limes_565)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_566",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 566 (limes_566)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_567",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 567 (limes_567)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_568",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 568 (limes_568)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_569",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 569 (limes_569)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_570",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 570 (limes_570)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_571",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 571 (limes_571)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_572",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 572 (limes_572)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_573",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 573 (limes_573)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_574",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 574 (limes_574)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_575",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 575 (limes_575)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_576",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 576 (limes_576)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_577",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "B\u00fcttelborn (limes_577)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_578",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 578 (limes_578)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_579",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 579 (limes_579)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_580",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 580 (limes_580)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_581",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 581 (limes_581)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_582",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "B\u00fcttelborn (limes_582)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_583",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "B\u00fcttelborn (limes_583)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_584",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "B\u00fcttelborn (limes_584)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_585",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 585 (limes_585)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_586",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "B\u00fcttelborn (limes_586)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_587",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 587 (limes_587)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_588",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 588 (limes_588)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_589",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 589 (limes_589)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_590",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 590 (limes_590)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_591",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_591)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_592",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_592)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_593",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 593 (limes_593)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_594",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 594 (limes_594)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_595",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 595 (limes_595)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_596",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_596)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_597",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_597)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_598",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_598)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_599",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_599)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_600",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_600)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_601",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Harsberg (limes_601)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_602",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 602 (limes_602)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_603",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 603 (limes_603)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_604",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 604 (limes_604)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_605",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fctten (limes_605)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_606",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gei\u00dfelhardt (limes_606)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_607",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gei\u00dfelhardt (limes_607)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_608",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gei\u00dfelhardt (limes_608)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_609",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gei\u00dfelhardt (limes_609)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_610",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 610 (limes_610)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_611",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 611 (limes_611)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_612",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 612 (limes_612)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_613",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 613 (limes_613)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_614",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 614 (limes_614)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_615",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fctten (limes_615)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_616",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 616 (limes_616)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_617",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fctten (limes_617)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_618",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 618 (limes_618)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_619",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fctten (limes_619)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_620",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grab (limes_620)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_621",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grab (limes_621)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_622",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grab (limes_622)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_623",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grab (limes_623)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_624",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grab (limes_624)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_625",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grab (limes_625)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_626",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 626 (limes_626)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_627",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 627 (limes_627)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_628",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 628 (limes_628)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_629",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 629 (limes_629)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_630",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 630 (limes_630)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_631",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fornsbach (limes_631)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_632",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 632 (limes_632)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_633",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fornsbach (limes_633)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_634",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 634 (limes_634)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_635",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 635 (limes_635)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_636",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bofsheim (limes_636)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_637",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 637 (limes_637)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_638",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 638 (limes_638)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_639",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 639 (limes_639)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_640",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 640 (limes_640)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_641",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 641 (limes_641)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_642",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 642 (limes_642)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_643",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 643 (limes_643)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_644",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 644 (limes_644)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_645",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 645 (limes_645)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_646",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 646 (limes_646)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_647",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 647 (limes_647)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_648",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 648 (limes_648)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_649",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 649 (limes_649)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_650",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 650 (limes_650)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_651",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gerolzahn (limes_651)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_652",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gerolzahn/Glashofen (limes_652)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_653",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 653 (limes_653)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_654",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 654 (limes_654)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_655",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 655 (limes_655)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_656",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 656 (limes_656)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_657",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 657 (limes_657)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_658",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 658 (limes_658)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_659",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 659 (limes_659)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_660",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 660 (limes_660)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_661",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 661 (limes_661)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_662",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 662 (limes_662)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_663",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 663 (limes_663)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_664",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 664 (limes_664)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_665",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 665 (limes_665)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_666",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 666 (limes_666)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_667",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 667 (limes_667)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_668",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 668 (limes_668)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_669",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 669 (limes_669)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_670",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 670 (limes_670)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_671",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 671 (limes_671)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_672",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 672 (limes_672)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_673",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 673 (limes_673)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_674",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Herlikofen (limes_674)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_675",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 675 (limes_675)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_676",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dalkingen (limes_676)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_677",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 677 (limes_677)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_678",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 678 (limes_678)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_679",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dalkingen (limes_679)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_680",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 680 (limes_680)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_681",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dalkingen (limes_681)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_682",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 682 (limes_682)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_683",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 683 (limes_683)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_684",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 684 (limes_684)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_685",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 685 (limes_685)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_686",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 686 (limes_686)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_687",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 687 (limes_687)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_688",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 688 (limes_688)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_689",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 689 (limes_689)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_690",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 690 (limes_690)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_691",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 691 (limes_691)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_692",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 692 (limes_692)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_693",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 693 (limes_693)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_694",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 694 (limes_694)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_695",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 695 (limes_695)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_696",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 696 (limes_696)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_697",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 697 (limes_697)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_698",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dfdeinbach (limes_698)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_699",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dfdeinbach (limes_699)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_700",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 700 (limes_700)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_701",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 701 (limes_701)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_702",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 702 (limes_702)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_703",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 703 (limes_703)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_704",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 704 (limes_704)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_705",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 705 (limes_705)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_706",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 706 (limes_706)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_707",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 707 (limes_707)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_708",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 708 (limes_708)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_709",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Herlikofen (limes_709)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_710",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 710 (limes_710)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_711",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 711 (limes_711)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_712",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Herlikofen (limes_712)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_713",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 713 (limes_713)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_714",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dewangen (limes_714)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_715",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 715 (limes_715)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_716",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 716 (limes_716)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_717",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 717 (limes_717)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_718",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dalkingen (limes_718)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_719",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 719 (limes_719)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_720",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 720 (limes_720)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_721",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 721 (limes_721)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_722",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 722 (limes_722)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_723",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 723 (limes_723)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_724",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 724 (limes_724)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_725",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 725 (limes_725)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_726",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 726 (limes_726)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_727",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 727 (limes_727)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_728",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 728 (limes_728)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_729",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 729 (limes_729)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_730",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 730 (limes_730)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_731",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00fcttlingen/Schwabsberg (limes_731)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_732",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dalkingen (limes_732)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_733",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 733 (limes_733)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_734",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 734 (limes_734)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_735",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 735 (limes_735)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_736",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 736 (limes_736)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_737",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 737 (limes_737)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_738",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 738 (limes_738)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_739",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 739 (limes_739)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_740",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 740 (limes_740)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_741",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 741 (limes_741)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_742",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 742 (limes_742)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_743",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 743 (limes_743)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_744",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dfdeinbach (limes_744)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_745",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 745 (limes_745)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_746",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 746 (limes_746)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_747",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dewangen (limes_747)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_748",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Herlikofen (limes_748)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_749",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 749 (limes_749)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_750",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 750 (limes_750)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_751",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 751 (limes_751)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_752",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 752 (limes_752)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_753",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 753 (limes_753)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_754",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 754 (limes_754)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_755",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 755 (limes_755)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_756",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 756 (limes_756)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_757",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 757 (limes_757)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_758",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 758 (limes_758)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_759",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 759 (limes_759)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_760",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 760 (limes_760)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_761",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 761 (limes_761)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_762",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 762 (limes_762)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_763",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 763 (limes_763)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_764",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 764 (limes_764)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_765",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 765 (limes_765)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_766",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 766 (limes_766)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_767",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 767 (limes_767)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_768",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 768 (limes_768)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_769",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 769 (limes_769)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_770",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 770 (limes_770)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_771",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 771 (limes_771)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_772",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fornsbach (limes_772)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_773",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 773 (limes_773)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_774",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hettingen (limes_774)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_775",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 775 (limes_775)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_776",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 776 (limes_776)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_777",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 777 (limes_777)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_778",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 778 (limes_778)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_779",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 779 (limes_779)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_780",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dewangen (limes_780)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_781",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 781 (limes_781)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_782",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 782 (limes_782)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_783",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 783 (limes_783)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_784",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 784 (limes_784)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_785",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dfauheim (limes_785)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_786",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 786 (limes_786)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_787",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Eschenhahn (limes_787)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_788",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 788 (limes_788)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_789",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 789 (limes_789)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_790",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 790 (limes_790)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_791",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 791 (limes_791)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_792",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 792 (limes_792)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_793",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 793 (limes_793)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_794",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 794 (limes_794)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_795",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 795 (limes_795)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_796",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 796 (limes_796)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_797",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 797 (limes_797)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_798",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 798 (limes_798)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_799",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 799 (limes_799)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_800",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 800 (limes_800)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_801",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 801 (limes_801)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_802",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 802 (limes_802)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_803",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 803 (limes_803)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_804",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 804 (limes_804)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_805",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 805 (limes_805)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_806",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 806 (limes_806)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_807",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 807 (limes_807)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_808",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 808 (limes_808)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_809",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 809 (limes_809)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_810",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 810 (limes_810)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_811",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 811 (limes_811)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_812",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 812 (limes_812)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_813",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 813 (limes_813)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_814",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 814 (limes_814)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_815",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 815 (limes_815)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_816",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arienheller (limes_816)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_817",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 817 (limes_817)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_818",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 818 (limes_818)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_819",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Altwied (limes_819)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_820",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 820 (limes_820)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_821",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 821 (limes_821)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_822",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 822 (limes_822)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_823",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 823 (limes_823)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_824",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 824 (limes_824)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_825",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_825)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_826",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 826 (limes_826)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_827",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 827 (limes_827)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_828",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 828 (limes_828)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_829",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 829 (limes_829)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_830",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 830 (limes_830)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_831",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 831 (limes_831)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_832",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 832 (limes_832)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_833",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 833 (limes_833)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_834",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 834 (limes_834)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_835",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 835 (limes_835)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_836",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 836 (limes_836)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_837",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 837 (limes_837)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_838",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 838 (limes_838)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_839",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 839 (limes_839)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_840",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 840 (limes_840)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_841",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 841 (limes_841)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_842",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 842 (limes_842)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_843",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 843 (limes_843)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_844",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 844 (limes_844)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_845",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 845 (limes_845)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_846",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 846 (limes_846)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_847",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 847 (limes_847)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_848",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 848 (limes_848)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_849",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 849 (limes_849)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_850",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 850 (limes_850)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_851",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 851 (limes_851)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_852",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 852 (limes_852)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_853",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_853)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_854",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_854)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_855",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 855 (limes_855)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_856",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 856 (limes_856)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_857",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heimbach-Weis (limes_857)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_858",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 858 (limes_858)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_859",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Altwied (limes_859)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_860",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 860 (limes_860)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_861",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dasbach (limes_861)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_862",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 862 (limes_862)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_863",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6hr (limes_863)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_864",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 864 (limes_864)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_865",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 865 (limes_865)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_866",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 866 (limes_866)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_867",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 867 (limes_867)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_868",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 868 (limes_868)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_869",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 869 (limes_869)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_870",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6hr (limes_870)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_871",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 871 (limes_871)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_872",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 872 (limes_872)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_873",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bendorf (limes_873)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_874",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 874 (limes_874)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_875",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kemel (limes_875)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_876",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Birklar (limes_876)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_877",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 877 (limes_877)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_878",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Adolfseck (limes_878)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_879",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Laufenselden (limes_879)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_880",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Huppert (limes_880)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_881",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Huppert (limes_881)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_882",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 882 (limes_882)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_883",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 883 (limes_883)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_884",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kemel (limes_884)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_885",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 885 (limes_885)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_886",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 886 (limes_886)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_887",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Adolfseck (limes_887)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_888",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dasbach (limes_888)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_889",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langen-Bergheim (limes_889)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_890",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 890 (limes_890)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_891",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 891 (limes_891)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_892",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bisses (limes_892)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_893",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 893 (limes_893)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_894",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 894 (limes_894)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_895",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 895 (limes_895)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_896",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_896)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_897",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 897 (limes_897)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_898",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bingenheim (limes_898)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_899",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 899 (limes_899)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_900",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 900 (limes_900)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_901",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 901 (limes_901)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_902",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bisses (limes_902)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_903",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bisses (limes_903)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_904",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 904 (limes_904)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_905",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 905 (limes_905)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_906",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 906 (limes_906)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_907",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 907 (limes_907)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_908",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_908)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_909",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fauerbach v. d. H. (limes_909)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_910",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 910 (limes_910)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_911",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_911)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_912",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 912 (limes_912)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_913",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dasbach (limes_913)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_914",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Adolfseck (limes_914)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_915",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bettenhausen (limes_915)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_916",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langen-Bergheim (limes_916)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_917",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 917 (limes_917)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_918",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Kemel (limes_918)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_919",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 919 (limes_919)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_920",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Huppert (limes_920)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_921",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heftrich (limes_921)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_922",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 922 (limes_922)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_923",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 923 (limes_923)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_924",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dasbach (limes_924)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_925",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heftrich (limes_925)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_926",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 926 (limes_926)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_927",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_927)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_928",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 928 (limes_928)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_929",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 929 (limes_929)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_930",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Heftrich (limes_930)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_931",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bettenhausen (limes_931)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_932",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 932 (limes_932)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_933",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 933 (limes_933)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_934",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 934 (limes_934)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_935",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bettenhausen (limes_935)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_936",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_936)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_937",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gr\u00fcningen (limes_937)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_938",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_938)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_939",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grund-Schwalheim (limes_939)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_940",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 940 (limes_940)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_941",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 941 (limes_941)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_942",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Arnsburg (limes_942)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_943",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grund-Schwalheim (limes_943)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_944",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Grund-Schwalheim (limes_944)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_945",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hof Gra\u00df (limes_945)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_946",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bingenheim (limes_946)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_947",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Leidhecken (limes_947)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_948",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 948 (limes_948)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_949",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Bingenheim (limes_949)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_950",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Leidhecken (limes_950)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_951",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 951 (limes_951)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_952",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 952 (limes_952)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_953",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 953 (limes_953)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_954",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 954 (limes_954)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_955",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 955 (limes_955)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_956",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 956 (limes_956)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_957",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 957 (limes_957)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_958",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 958 (limes_958)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_959",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Himbach/Langen-Bergheim (limes_959)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_960",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gambach (limes_960)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_961",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 961 (limes_961)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_962",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Holzheim (limes_962)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_963",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 963 (limes_963)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_964",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 964 (limes_964)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_965",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 965 (limes_965)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_966",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fauerbach v. d. H. (limes_966)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_967",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dillingen (limes_967)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_968",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hoch-Weisel (limes_968)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_969",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 969 (limes_969)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_970",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hoch-Weisel (limes_970)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_971",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_971)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_972",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 972 (limes_972)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_973",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_973)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_974",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 974 (limes_974)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_975",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hausen-Oes (limes_975)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_976",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_976)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_977",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Fauerbach v. d. H. (limes_977)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_978",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 978 (limes_978)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_979",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langenhain-Ziegenberg (limes_979)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_980",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Hoch-Weisel (limes_980)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_981",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 981 (limes_981)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_982",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Altdorf (limes_982)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_983",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Dambach (limes_983)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_984",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 984 (limes_984)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_985",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6chst (limes_985)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_986",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Leidhecken (limes_986)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_987",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 987 (limes_987)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_988",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 988 (limes_988)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_989",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 989 (limes_989)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_990",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 990 (limes_990)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_991",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "H\u00f6chst (limes_991)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_992",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 992 (limes_992)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_993",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 993 (limes_993)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_994",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 994 (limes_994)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_995",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langendiebach (limes_995)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_996",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Langendiebach (limes_996)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_997",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 997 (limes_997)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_998",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Limes Part 998 (limes_998)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_999",
        "parent": "http://archaeoinformatics.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Gro\u00dfauheim (limes_999)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Watchtower",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "Watchtower [1022]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#limestown": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1000_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1000 Geometry (limes_1000_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1001_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1001 Geometry (limes_1001_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1002_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1002 Geometry (limes_1002_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1003_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1003 Geometry (limes_1003_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1004_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1004 Geometry (limes_1004_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1005_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1005 Geometry (limes_1005_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1006_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1006 Geometry (limes_1006_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1007_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1007 Geometry (limes_1007_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1008_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1008 Geometry (limes_1008_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1009_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1009 Geometry (limes_1009_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_100_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 100 Geometry (limes_100_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1010_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1010 Geometry (limes_1010_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1011_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1011 Geometry (limes_1011_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1012_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1012 Geometry (limes_1012_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1013_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1013 Geometry (limes_1013_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1014_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1014 Geometry (limes_1014_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1015_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1015 Geometry (limes_1015_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1016_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1016 Geometry (limes_1016_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1017_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1017 Geometry (limes_1017_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1018_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1018 Geometry (limes_1018_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1019_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1019 Geometry (limes_1019_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_101_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 101 Geometry (limes_101_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1020_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1020 Geometry (limes_1020_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1021_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1021 Geometry (limes_1021_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1022_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1022 Geometry (limes_1022_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1023_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1023 Geometry (limes_1023_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1024_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1024 Geometry (limes_1024_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1025_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1025 Geometry (limes_1025_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1026_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1026 Geometry (limes_1026_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1027_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1027 Geometry (limes_1027_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1028_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1028 Geometry (limes_1028_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1029_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1029 Geometry (limes_1029_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_102_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 102 Geometry (limes_102_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1030_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1030 Geometry (limes_1030_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1031_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1031 Geometry (limes_1031_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1032_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1032 Geometry (limes_1032_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1033_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1033 Geometry (limes_1033_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1034_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1034 Geometry (limes_1034_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1035_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1035 Geometry (limes_1035_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1036_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1036 Geometry (limes_1036_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1037_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1037 Geometry (limes_1037_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1038_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1038 Geometry (limes_1038_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1039_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1039 Geometry (limes_1039_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_103_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 103 Geometry (limes_103_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1040_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1040 Geometry (limes_1040_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1041_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1041 Geometry (limes_1041_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1042_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1042 Geometry (limes_1042_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1043_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1043 Geometry (limes_1043_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1044_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1044 Geometry (limes_1044_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1045_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1045 Geometry (limes_1045_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1046_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1046 Geometry (limes_1046_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1047_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1047 Geometry (limes_1047_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1048_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1048 Geometry (limes_1048_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1049_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1049 Geometry (limes_1049_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_104_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 104 Geometry (limes_104_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1050_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1050 Geometry (limes_1050_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1051_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1051 Geometry (limes_1051_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1052_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1052 Geometry (limes_1052_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1053_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1053 Geometry (limes_1053_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1054_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1054 Geometry (limes_1054_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1055_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1055 Geometry (limes_1055_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1056_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1056 Geometry (limes_1056_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1057_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1057 Geometry (limes_1057_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1058_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1058 Geometry (limes_1058_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1059_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1059 Geometry (limes_1059_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_105_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 105 Geometry (limes_105_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1060_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1060 Geometry (limes_1060_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1061_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1061 Geometry (limes_1061_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1062_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1062 Geometry (limes_1062_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1063_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1063 Geometry (limes_1063_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1064_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1064 Geometry (limes_1064_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1065_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1065 Geometry (limes_1065_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1066_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1066 Geometry (limes_1066_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1067_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1067 Geometry (limes_1067_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1068_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1068 Geometry (limes_1068_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1069_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1069 Geometry (limes_1069_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_106_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 106 Geometry (limes_106_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1070_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1070 Geometry (limes_1070_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1071_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1071 Geometry (limes_1071_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1072_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1072 Geometry (limes_1072_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1073_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1073 Geometry (limes_1073_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1074_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1074 Geometry (limes_1074_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1075_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1075 Geometry (limes_1075_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1076_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1076 Geometry (limes_1076_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1077_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1077 Geometry (limes_1077_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1078_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1078 Geometry (limes_1078_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1079_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1079 Geometry (limes_1079_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_107_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 107 Geometry (limes_107_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1080_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1080 Geometry (limes_1080_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1081_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1081 Geometry (limes_1081_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1082_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1082 Geometry (limes_1082_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1083_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1083 Geometry (limes_1083_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1084_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1084 Geometry (limes_1084_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1085_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1085 Geometry (limes_1085_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1086_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1086 Geometry (limes_1086_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1087_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1087 Geometry (limes_1087_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1088_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1088 Geometry (limes_1088_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1089_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1089 Geometry (limes_1089_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_108_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 108 Geometry (limes_108_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1090_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1090 Geometry (limes_1090_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1091_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1091 Geometry (limes_1091_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1092_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1092 Geometry (limes_1092_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1093_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1093 Geometry (limes_1093_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1094_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1094 Geometry (limes_1094_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1095_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1095 Geometry (limes_1095_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1096_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1096 Geometry (limes_1096_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1097_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1097 Geometry (limes_1097_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1098_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1098 Geometry (limes_1098_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1099_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1099 Geometry (limes_1099_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_109_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 109 Geometry (limes_109_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_10_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 10 Geometry (limes_10_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1100_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1100 Geometry (limes_1100_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1101_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1101 Geometry (limes_1101_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1102_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1102 Geometry (limes_1102_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1103_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1103 Geometry (limes_1103_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1104_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1104 Geometry (limes_1104_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1105_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1105 Geometry (limes_1105_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1106_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1106 Geometry (limes_1106_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1107_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1107 Geometry (limes_1107_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1108_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1108 Geometry (limes_1108_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1109_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1109 Geometry (limes_1109_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_110_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 110 Geometry (limes_110_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1110_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1110 Geometry (limes_1110_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1111_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1111 Geometry (limes_1111_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1112_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1112 Geometry (limes_1112_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1113_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1113 Geometry (limes_1113_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1114_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1114 Geometry (limes_1114_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1115_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1115 Geometry (limes_1115_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1116_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1116 Geometry (limes_1116_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1117_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1117 Geometry (limes_1117_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1118_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1118 Geometry (limes_1118_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1119_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1119 Geometry (limes_1119_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_111_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 111 Geometry (limes_111_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1120_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1120 Geometry (limes_1120_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1121_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1121 Geometry (limes_1121_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1122_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1122 Geometry (limes_1122_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1123_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1123 Geometry (limes_1123_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1124_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1124 Geometry (limes_1124_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1125_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1125 Geometry (limes_1125_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1126_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1126 Geometry (limes_1126_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1127_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1127 Geometry (limes_1127_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1128_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1128 Geometry (limes_1128_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1129_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1129 Geometry (limes_1129_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_112_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 112 Geometry (limes_112_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1130_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1130 Geometry (limes_1130_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1131_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1131 Geometry (limes_1131_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1132_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1132 Geometry (limes_1132_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1133_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1133 Geometry (limes_1133_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1134_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1134 Geometry (limes_1134_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1135_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1135 Geometry (limes_1135_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1136_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1136 Geometry (limes_1136_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1137_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1137 Geometry (limes_1137_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1138_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1138 Geometry (limes_1138_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1139_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1139 Geometry (limes_1139_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_113_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 113 Geometry (limes_113_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1140_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1140 Geometry (limes_1140_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1141_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1141 Geometry (limes_1141_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1142_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1142 Geometry (limes_1142_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1143_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1143 Geometry (limes_1143_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1144_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1144 Geometry (limes_1144_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1145_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1145 Geometry (limes_1145_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1146_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1146 Geometry (limes_1146_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1147_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1147 Geometry (limes_1147_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1148_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1148 Geometry (limes_1148_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1149_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1149 Geometry (limes_1149_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_114_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 114 Geometry (limes_114_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1150_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1150 Geometry (limes_1150_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1151_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1151 Geometry (limes_1151_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1152_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1152 Geometry (limes_1152_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_115_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 115 Geometry (limes_115_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_116_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 116 Geometry (limes_116_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_117_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 117 Geometry (limes_117_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_118_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 118 Geometry (limes_118_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_119_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 119 Geometry (limes_119_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_11_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 11 Geometry (limes_11_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_120_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 120 Geometry (limes_120_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_121_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 121 Geometry (limes_121_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_122_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 122 Geometry (limes_122_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_123_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 123 Geometry (limes_123_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_124_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 124 Geometry (limes_124_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_125_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 125 Geometry (limes_125_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_126_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 126 Geometry (limes_126_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_127_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 127 Geometry (limes_127_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_128_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 128 Geometry (limes_128_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_129_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 129 Geometry (limes_129_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_12_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 12 Geometry (limes_12_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_130_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 130 Geometry (limes_130_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_131_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 131 Geometry (limes_131_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_132_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 132 Geometry (limes_132_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_133_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 133 Geometry (limes_133_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_134_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 134 Geometry (limes_134_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_135_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 135 Geometry (limes_135_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_136_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 136 Geometry (limes_136_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_137_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 137 Geometry (limes_137_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_138_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 138 Geometry (limes_138_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_139_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 139 Geometry (limes_139_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_13_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 13 Geometry (limes_13_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_140_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 140 Geometry (limes_140_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_141_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 141 Geometry (limes_141_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_142_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 142 Geometry (limes_142_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_143_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 143 Geometry (limes_143_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_144_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 144 Geometry (limes_144_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_145_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 145 Geometry (limes_145_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_146_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 146 Geometry (limes_146_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_147_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 147 Geometry (limes_147_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_148_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 148 Geometry (limes_148_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_149_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 149 Geometry (limes_149_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_14_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 14 Geometry (limes_14_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_150_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 150 Geometry (limes_150_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_151_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 151 Geometry (limes_151_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_152_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 152 Geometry (limes_152_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_153_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 153 Geometry (limes_153_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_154_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 154 Geometry (limes_154_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_155_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 155 Geometry (limes_155_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_156_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 156 Geometry (limes_156_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_157_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 157 Geometry (limes_157_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_158_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 158 Geometry (limes_158_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_159_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 159 Geometry (limes_159_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_15_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 15 Geometry (limes_15_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_160_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 160 Geometry (limes_160_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_161_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 161 Geometry (limes_161_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_162_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 162 Geometry (limes_162_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_163_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 163 Geometry (limes_163_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_164_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 164 Geometry (limes_164_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_165_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 165 Geometry (limes_165_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_166_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 166 Geometry (limes_166_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_167_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 167 Geometry (limes_167_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_168_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 168 Geometry (limes_168_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_169_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 169 Geometry (limes_169_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_16_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 16 Geometry (limes_16_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_170_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 170 Geometry (limes_170_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_171_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 171 Geometry (limes_171_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_172_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 172 Geometry (limes_172_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_173_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 173 Geometry (limes_173_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_174_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 174 Geometry (limes_174_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_175_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 175 Geometry (limes_175_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_176_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 176 Geometry (limes_176_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_177_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 177 Geometry (limes_177_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_178_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 178 Geometry (limes_178_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_179_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 179 Geometry (limes_179_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_17_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 17 Geometry (limes_17_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_180_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 180 Geometry (limes_180_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_181_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 181 Geometry (limes_181_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_182_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 182 Geometry (limes_182_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_183_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 183 Geometry (limes_183_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_184_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 184 Geometry (limes_184_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_185_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 185 Geometry (limes_185_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_186_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 186 Geometry (limes_186_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_187_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 187 Geometry (limes_187_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_188_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 188 Geometry (limes_188_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_189_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 189 Geometry (limes_189_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_18_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 18 Geometry (limes_18_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_190_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 190 Geometry (limes_190_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_191_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 191 Geometry (limes_191_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_192_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 192 Geometry (limes_192_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_193_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 193 Geometry (limes_193_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_194_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 194 Geometry (limes_194_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_195_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 195 Geometry (limes_195_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_196_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 196 Geometry (limes_196_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_197_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 197 Geometry (limes_197_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_198_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 198 Geometry (limes_198_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_199_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 199 Geometry (limes_199_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_19_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 19 Geometry (limes_19_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 1 Geometry (limes_1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_200_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 200 Geometry (limes_200_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_201_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 201 Geometry (limes_201_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_202_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 202 Geometry (limes_202_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_203_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 203 Geometry (limes_203_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_204_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 204 Geometry (limes_204_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_205_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 205 Geometry (limes_205_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_206_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 206 Geometry (limes_206_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_207_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 207 Geometry (limes_207_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_208_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 208 Geometry (limes_208_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_209_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 209 Geometry (limes_209_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_20_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 20 Geometry (limes_20_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_210_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 210 Geometry (limes_210_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_211_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 211 Geometry (limes_211_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_212_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 212 Geometry (limes_212_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_213_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 213 Geometry (limes_213_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_214_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 214 Geometry (limes_214_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_215_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 215 Geometry (limes_215_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_216_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 216 Geometry (limes_216_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_217_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 217 Geometry (limes_217_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_218_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 218 Geometry (limes_218_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_219_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 219 Geometry (limes_219_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_21_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 21 Geometry (limes_21_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_220_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 220 Geometry (limes_220_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_221_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 221 Geometry (limes_221_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_222_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 222 Geometry (limes_222_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_223_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 223 Geometry (limes_223_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_224_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 224 Geometry (limes_224_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_225_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 225 Geometry (limes_225_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_226_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 226 Geometry (limes_226_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_227_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 227 Geometry (limes_227_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_228_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 228 Geometry (limes_228_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_229_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 229 Geometry (limes_229_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_22_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 22 Geometry (limes_22_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_230_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 230 Geometry (limes_230_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_231_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 231 Geometry (limes_231_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_232_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 232 Geometry (limes_232_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_233_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 233 Geometry (limes_233_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_234_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 234 Geometry (limes_234_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_235_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 235 Geometry (limes_235_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_236_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 236 Geometry (limes_236_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_237_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 237 Geometry (limes_237_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_238_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 238 Geometry (limes_238_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_239_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 239 Geometry (limes_239_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_23_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 23 Geometry (limes_23_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_240_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 240 Geometry (limes_240_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_241_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 241 Geometry (limes_241_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_242_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 242 Geometry (limes_242_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_243_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 243 Geometry (limes_243_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_244_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 244 Geometry (limes_244_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_245_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 245 Geometry (limes_245_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_246_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 246 Geometry (limes_246_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_247_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 247 Geometry (limes_247_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_248_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 248 Geometry (limes_248_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_249_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 249 Geometry (limes_249_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_24_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 24 Geometry (limes_24_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_250_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 250 Geometry (limes_250_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_251_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 251 Geometry (limes_251_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_252_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 252 Geometry (limes_252_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_253_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 253 Geometry (limes_253_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_254_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 254 Geometry (limes_254_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_255_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 255 Geometry (limes_255_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_256_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 256 Geometry (limes_256_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_257_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 257 Geometry (limes_257_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_258_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 258 Geometry (limes_258_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_259_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 259 Geometry (limes_259_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_25_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 25 Geometry (limes_25_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_260_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 260 Geometry (limes_260_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_261_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 261 Geometry (limes_261_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_262_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 262 Geometry (limes_262_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_263_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 263 Geometry (limes_263_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_264_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 264 Geometry (limes_264_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_265_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 265 Geometry (limes_265_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_266_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 266 Geometry (limes_266_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_267_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 267 Geometry (limes_267_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_268_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 268 Geometry (limes_268_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_269_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 269 Geometry (limes_269_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_26_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 26 Geometry (limes_26_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_270_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 270 Geometry (limes_270_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_271_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 271 Geometry (limes_271_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_272_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 272 Geometry (limes_272_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_273_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 273 Geometry (limes_273_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_274_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 274 Geometry (limes_274_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_275_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 275 Geometry (limes_275_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_276_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 276 Geometry (limes_276_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_277_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 277 Geometry (limes_277_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_278_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 278 Geometry (limes_278_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_279_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 279 Geometry (limes_279_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_27_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 27 Geometry (limes_27_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_280_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 280 Geometry (limes_280_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_281_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 281 Geometry (limes_281_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_282_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 282 Geometry (limes_282_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_283_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 283 Geometry (limes_283_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_284_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 284 Geometry (limes_284_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_285_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 285 Geometry (limes_285_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_286_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 286 Geometry (limes_286_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_287_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 287 Geometry (limes_287_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_288_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 288 Geometry (limes_288_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_289_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 289 Geometry (limes_289_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_28_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 28 Geometry (limes_28_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_290_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 290 Geometry (limes_290_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_291_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 291 Geometry (limes_291_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_292_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 292 Geometry (limes_292_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_293_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 293 Geometry (limes_293_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_294_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 294 Geometry (limes_294_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_295_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 295 Geometry (limes_295_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_296_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 296 Geometry (limes_296_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_297_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 297 Geometry (limes_297_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_298_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 298 Geometry (limes_298_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_299_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 299 Geometry (limes_299_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_29_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 29 Geometry (limes_29_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 2 Geometry (limes_2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_300_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 300 Geometry (limes_300_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_301_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 301 Geometry (limes_301_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_302_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 302 Geometry (limes_302_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_303_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 303 Geometry (limes_303_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_304_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 304 Geometry (limes_304_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_305_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 305 Geometry (limes_305_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_306_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 306 Geometry (limes_306_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_307_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 307 Geometry (limes_307_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_308_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 308 Geometry (limes_308_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_309_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 309 Geometry (limes_309_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_30_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 30 Geometry (limes_30_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_310_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 310 Geometry (limes_310_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_311_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 311 Geometry (limes_311_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_312_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 312 Geometry (limes_312_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_313_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 313 Geometry (limes_313_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_314_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 314 Geometry (limes_314_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_315_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 315 Geometry (limes_315_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_316_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 316 Geometry (limes_316_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_317_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 317 Geometry (limes_317_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_318_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 318 Geometry (limes_318_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_319_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 319 Geometry (limes_319_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_31_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 31 Geometry (limes_31_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_320_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 320 Geometry (limes_320_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_321_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 321 Geometry (limes_321_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_322_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 322 Geometry (limes_322_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_323_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 323 Geometry (limes_323_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_324_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 324 Geometry (limes_324_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_325_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 325 Geometry (limes_325_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_326_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 326 Geometry (limes_326_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_327_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 327 Geometry (limes_327_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_328_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 328 Geometry (limes_328_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_329_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 329 Geometry (limes_329_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_32_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 32 Geometry (limes_32_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_330_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 330 Geometry (limes_330_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_331_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 331 Geometry (limes_331_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_332_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 332 Geometry (limes_332_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_333_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 333 Geometry (limes_333_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_334_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 334 Geometry (limes_334_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_335_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 335 Geometry (limes_335_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_336_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 336 Geometry (limes_336_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_337_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 337 Geometry (limes_337_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_338_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 338 Geometry (limes_338_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_339_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 339 Geometry (limes_339_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_33_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 33 Geometry (limes_33_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_340_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 340 Geometry (limes_340_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_341_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 341 Geometry (limes_341_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_342_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 342 Geometry (limes_342_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_343_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 343 Geometry (limes_343_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_344_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 344 Geometry (limes_344_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_345_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 345 Geometry (limes_345_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_346_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 346 Geometry (limes_346_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_347_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 347 Geometry (limes_347_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_348_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 348 Geometry (limes_348_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_349_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 349 Geometry (limes_349_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_34_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 34 Geometry (limes_34_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_350_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 350 Geometry (limes_350_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_351_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 351 Geometry (limes_351_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_352_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 352 Geometry (limes_352_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_353_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 353 Geometry (limes_353_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_354_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 354 Geometry (limes_354_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_355_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 355 Geometry (limes_355_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_356_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 356 Geometry (limes_356_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_357_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 357 Geometry (limes_357_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_358_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 358 Geometry (limes_358_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_359_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 359 Geometry (limes_359_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_35_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 35 Geometry (limes_35_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_360_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 360 Geometry (limes_360_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_361_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 361 Geometry (limes_361_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_362_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 362 Geometry (limes_362_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_363_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 363 Geometry (limes_363_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_364_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 364 Geometry (limes_364_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_365_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 365 Geometry (limes_365_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_366_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 366 Geometry (limes_366_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_367_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 367 Geometry (limes_367_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_368_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 368 Geometry (limes_368_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_369_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 369 Geometry (limes_369_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_36_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 36 Geometry (limes_36_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_370_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 370 Geometry (limes_370_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_371_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 371 Geometry (limes_371_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_372_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 372 Geometry (limes_372_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_373_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 373 Geometry (limes_373_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_374_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 374 Geometry (limes_374_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_375_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 375 Geometry (limes_375_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_376_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 376 Geometry (limes_376_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_377_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 377 Geometry (limes_377_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_378_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 378 Geometry (limes_378_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_379_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 379 Geometry (limes_379_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_37_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 37 Geometry (limes_37_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_380_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 380 Geometry (limes_380_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_381_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 381 Geometry (limes_381_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_382_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 382 Geometry (limes_382_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_383_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 383 Geometry (limes_383_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_384_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 384 Geometry (limes_384_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_385_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 385 Geometry (limes_385_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_386_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 386 Geometry (limes_386_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_387_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 387 Geometry (limes_387_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_388_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 388 Geometry (limes_388_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_389_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 389 Geometry (limes_389_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_38_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 38 Geometry (limes_38_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_390_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 390 Geometry (limes_390_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_391_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 391 Geometry (limes_391_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_392_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 392 Geometry (limes_392_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_393_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 393 Geometry (limes_393_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_394_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 394 Geometry (limes_394_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_395_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 395 Geometry (limes_395_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_396_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 396 Geometry (limes_396_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_397_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 397 Geometry (limes_397_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_398_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 398 Geometry (limes_398_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_399_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 399 Geometry (limes_399_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_39_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 39 Geometry (limes_39_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 3 Geometry (limes_3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_400_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 400 Geometry (limes_400_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_401_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 401 Geometry (limes_401_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_402_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 402 Geometry (limes_402_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_403_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 403 Geometry (limes_403_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_404_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 404 Geometry (limes_404_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_405_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 405 Geometry (limes_405_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_406_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 406 Geometry (limes_406_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_407_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 407 Geometry (limes_407_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_408_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 408 Geometry (limes_408_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_409_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 409 Geometry (limes_409_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_40_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 40 Geometry (limes_40_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_410_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 410 Geometry (limes_410_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_411_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 411 Geometry (limes_411_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_412_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 412 Geometry (limes_412_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_413_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 413 Geometry (limes_413_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_414_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 414 Geometry (limes_414_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_415_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 415 Geometry (limes_415_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_416_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 416 Geometry (limes_416_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_417_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 417 Geometry (limes_417_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_418_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 418 Geometry (limes_418_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_419_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 419 Geometry (limes_419_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_41_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 41 Geometry (limes_41_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_420_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 420 Geometry (limes_420_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_421_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 421 Geometry (limes_421_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_422_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 422 Geometry (limes_422_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_423_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 423 Geometry (limes_423_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_424_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 424 Geometry (limes_424_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_425_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 425 Geometry (limes_425_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_426_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 426 Geometry (limes_426_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_427_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 427 Geometry (limes_427_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_428_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 428 Geometry (limes_428_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_429_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 429 Geometry (limes_429_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_42_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 42 Geometry (limes_42_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_430_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 430 Geometry (limes_430_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_431_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 431 Geometry (limes_431_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_432_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 432 Geometry (limes_432_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_433_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 433 Geometry (limes_433_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_434_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 434 Geometry (limes_434_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_435_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 435 Geometry (limes_435_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_436_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 436 Geometry (limes_436_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_437_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 437 Geometry (limes_437_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_438_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 438 Geometry (limes_438_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_439_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 439 Geometry (limes_439_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_43_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 43 Geometry (limes_43_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_440_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 440 Geometry (limes_440_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_441_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 441 Geometry (limes_441_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_442_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 442 Geometry (limes_442_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_443_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 443 Geometry (limes_443_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_444_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 444 Geometry (limes_444_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_445_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 445 Geometry (limes_445_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_446_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 446 Geometry (limes_446_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_447_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 447 Geometry (limes_447_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_448_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 448 Geometry (limes_448_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_449_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 449 Geometry (limes_449_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_44_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 44 Geometry (limes_44_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_450_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 450 Geometry (limes_450_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_451_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 451 Geometry (limes_451_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_452_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 452 Geometry (limes_452_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_453_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 453 Geometry (limes_453_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_454_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 454 Geometry (limes_454_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_455_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 455 Geometry (limes_455_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_456_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 456 Geometry (limes_456_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_457_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 457 Geometry (limes_457_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_458_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 458 Geometry (limes_458_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_459_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 459 Geometry (limes_459_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_45_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 45 Geometry (limes_45_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_460_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 460 Geometry (limes_460_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_461_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 461 Geometry (limes_461_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_462_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 462 Geometry (limes_462_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_463_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 463 Geometry (limes_463_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_464_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 464 Geometry (limes_464_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_465_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 465 Geometry (limes_465_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_466_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 466 Geometry (limes_466_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_467_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 467 Geometry (limes_467_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_468_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 468 Geometry (limes_468_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_469_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 469 Geometry (limes_469_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_46_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 46 Geometry (limes_46_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_470_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 470 Geometry (limes_470_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_471_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 471 Geometry (limes_471_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_472_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 472 Geometry (limes_472_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_473_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 473 Geometry (limes_473_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_474_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 474 Geometry (limes_474_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_475_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 475 Geometry (limes_475_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_476_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 476 Geometry (limes_476_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_477_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 477 Geometry (limes_477_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_478_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 478 Geometry (limes_478_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_479_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 479 Geometry (limes_479_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_47_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 47 Geometry (limes_47_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_480_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 480 Geometry (limes_480_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_481_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 481 Geometry (limes_481_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_482_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 482 Geometry (limes_482_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_483_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 483 Geometry (limes_483_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_484_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 484 Geometry (limes_484_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_485_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 485 Geometry (limes_485_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_486_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 486 Geometry (limes_486_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_487_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 487 Geometry (limes_487_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_488_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 488 Geometry (limes_488_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_489_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 489 Geometry (limes_489_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_48_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 48 Geometry (limes_48_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_490_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 490 Geometry (limes_490_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_491_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 491 Geometry (limes_491_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_492_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 492 Geometry (limes_492_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_493_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 493 Geometry (limes_493_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_494_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 494 Geometry (limes_494_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_495_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 495 Geometry (limes_495_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_496_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 496 Geometry (limes_496_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_497_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 497 Geometry (limes_497_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_498_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 498 Geometry (limes_498_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_499_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 499 Geometry (limes_499_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_49_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 49 Geometry (limes_49_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 4 Geometry (limes_4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_500_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 500 Geometry (limes_500_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_501_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 501 Geometry (limes_501_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_502_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 502 Geometry (limes_502_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_503_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 503 Geometry (limes_503_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_504_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 504 Geometry (limes_504_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_505_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 505 Geometry (limes_505_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_506_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 506 Geometry (limes_506_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_507_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 507 Geometry (limes_507_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_508_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 508 Geometry (limes_508_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_509_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 509 Geometry (limes_509_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_50_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 50 Geometry (limes_50_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_510_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 510 Geometry (limes_510_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_511_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 511 Geometry (limes_511_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_512_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 512 Geometry (limes_512_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_513_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 513 Geometry (limes_513_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_514_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 514 Geometry (limes_514_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_515_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 515 Geometry (limes_515_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_516_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 516 Geometry (limes_516_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_517_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 517 Geometry (limes_517_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_518_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 518 Geometry (limes_518_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_519_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 519 Geometry (limes_519_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_51_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 51 Geometry (limes_51_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_520_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 520 Geometry (limes_520_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_521_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 521 Geometry (limes_521_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_522_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 522 Geometry (limes_522_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_523_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 523 Geometry (limes_523_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_524_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 524 Geometry (limes_524_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_525_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 525 Geometry (limes_525_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_526_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 526 Geometry (limes_526_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_527_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 527 Geometry (limes_527_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_528_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 528 Geometry (limes_528_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_529_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 529 Geometry (limes_529_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_52_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 52 Geometry (limes_52_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_530_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 530 Geometry (limes_530_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_531_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 531 Geometry (limes_531_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_532_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 532 Geometry (limes_532_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_533_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 533 Geometry (limes_533_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_534_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 534 Geometry (limes_534_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_535_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 535 Geometry (limes_535_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_536_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 536 Geometry (limes_536_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_537_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 537 Geometry (limes_537_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_538_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 538 Geometry (limes_538_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_539_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 539 Geometry (limes_539_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_53_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 53 Geometry (limes_53_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_540_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 540 Geometry (limes_540_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_541_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 541 Geometry (limes_541_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_542_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 542 Geometry (limes_542_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_543_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 543 Geometry (limes_543_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_544_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 544 Geometry (limes_544_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_545_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 545 Geometry (limes_545_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_546_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 546 Geometry (limes_546_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_547_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 547 Geometry (limes_547_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_548_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 548 Geometry (limes_548_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_549_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 549 Geometry (limes_549_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_54_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 54 Geometry (limes_54_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_550_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 550 Geometry (limes_550_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_551_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 551 Geometry (limes_551_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_552_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 552 Geometry (limes_552_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_553_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 553 Geometry (limes_553_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_554_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 554 Geometry (limes_554_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_555_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 555 Geometry (limes_555_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_556_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 556 Geometry (limes_556_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_557_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 557 Geometry (limes_557_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_558_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 558 Geometry (limes_558_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_559_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 559 Geometry (limes_559_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_55_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 55 Geometry (limes_55_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_560_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 560 Geometry (limes_560_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_561_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 561 Geometry (limes_561_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_562_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 562 Geometry (limes_562_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_563_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 563 Geometry (limes_563_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_564_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 564 Geometry (limes_564_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_565_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 565 Geometry (limes_565_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_566_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 566 Geometry (limes_566_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_567_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 567 Geometry (limes_567_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_568_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 568 Geometry (limes_568_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_569_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 569 Geometry (limes_569_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_56_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 56 Geometry (limes_56_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_570_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 570 Geometry (limes_570_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_571_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 571 Geometry (limes_571_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_572_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 572 Geometry (limes_572_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_573_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 573 Geometry (limes_573_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_574_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 574 Geometry (limes_574_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_575_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 575 Geometry (limes_575_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_576_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 576 Geometry (limes_576_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_577_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 577 Geometry (limes_577_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_578_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 578 Geometry (limes_578_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_579_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 579 Geometry (limes_579_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_57_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 57 Geometry (limes_57_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_580_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 580 Geometry (limes_580_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_581_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 581 Geometry (limes_581_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_582_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 582 Geometry (limes_582_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_583_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 583 Geometry (limes_583_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_584_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 584 Geometry (limes_584_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_585_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 585 Geometry (limes_585_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_586_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 586 Geometry (limes_586_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_587_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 587 Geometry (limes_587_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_588_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 588 Geometry (limes_588_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_589_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 589 Geometry (limes_589_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_58_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 58 Geometry (limes_58_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_590_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 590 Geometry (limes_590_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_591_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 591 Geometry (limes_591_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_592_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 592 Geometry (limes_592_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_593_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 593 Geometry (limes_593_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_594_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 594 Geometry (limes_594_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_595_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 595 Geometry (limes_595_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_596_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 596 Geometry (limes_596_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_597_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 597 Geometry (limes_597_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_598_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 598 Geometry (limes_598_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_599_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 599 Geometry (limes_599_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_59_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 59 Geometry (limes_59_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 5 Geometry (limes_5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_600_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 600 Geometry (limes_600_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_601_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 601 Geometry (limes_601_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_602_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 602 Geometry (limes_602_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_603_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 603 Geometry (limes_603_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_604_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 604 Geometry (limes_604_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_605_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 605 Geometry (limes_605_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_606_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 606 Geometry (limes_606_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_607_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 607 Geometry (limes_607_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_608_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 608 Geometry (limes_608_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_609_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 609 Geometry (limes_609_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_60_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 60 Geometry (limes_60_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_610_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 610 Geometry (limes_610_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_611_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 611 Geometry (limes_611_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_612_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 612 Geometry (limes_612_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_613_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 613 Geometry (limes_613_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_614_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 614 Geometry (limes_614_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_615_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 615 Geometry (limes_615_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_616_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 616 Geometry (limes_616_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_617_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 617 Geometry (limes_617_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_618_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 618 Geometry (limes_618_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_619_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 619 Geometry (limes_619_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_61_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 61 Geometry (limes_61_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_620_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 620 Geometry (limes_620_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_621_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 621 Geometry (limes_621_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_622_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 622 Geometry (limes_622_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_623_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 623 Geometry (limes_623_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_624_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 624 Geometry (limes_624_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_625_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 625 Geometry (limes_625_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_626_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 626 Geometry (limes_626_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_627_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 627 Geometry (limes_627_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_628_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 628 Geometry (limes_628_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_629_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 629 Geometry (limes_629_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_62_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 62 Geometry (limes_62_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_630_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 630 Geometry (limes_630_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_631_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 631 Geometry (limes_631_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_632_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 632 Geometry (limes_632_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_633_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 633 Geometry (limes_633_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_634_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 634 Geometry (limes_634_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_635_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 635 Geometry (limes_635_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_636_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 636 Geometry (limes_636_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_637_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 637 Geometry (limes_637_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_638_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 638 Geometry (limes_638_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_639_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 639 Geometry (limes_639_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_63_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 63 Geometry (limes_63_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_640_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 640 Geometry (limes_640_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_641_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 641 Geometry (limes_641_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_642_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 642 Geometry (limes_642_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_643_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 643 Geometry (limes_643_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_644_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 644 Geometry (limes_644_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_645_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 645 Geometry (limes_645_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_646_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 646 Geometry (limes_646_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_647_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 647 Geometry (limes_647_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_648_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 648 Geometry (limes_648_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_649_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 649 Geometry (limes_649_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_64_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 64 Geometry (limes_64_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_650_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 650 Geometry (limes_650_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_651_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 651 Geometry (limes_651_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_652_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 652 Geometry (limes_652_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_653_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 653 Geometry (limes_653_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_654_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 654 Geometry (limes_654_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_655_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 655 Geometry (limes_655_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_656_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 656 Geometry (limes_656_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_657_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 657 Geometry (limes_657_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_658_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 658 Geometry (limes_658_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_659_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 659 Geometry (limes_659_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_65_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 65 Geometry (limes_65_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_660_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 660 Geometry (limes_660_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_661_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 661 Geometry (limes_661_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_662_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 662 Geometry (limes_662_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_663_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 663 Geometry (limes_663_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_664_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 664 Geometry (limes_664_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_665_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 665 Geometry (limes_665_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_666_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 666 Geometry (limes_666_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_667_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 667 Geometry (limes_667_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_668_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 668 Geometry (limes_668_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_669_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 669 Geometry (limes_669_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_66_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 66 Geometry (limes_66_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_670_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 670 Geometry (limes_670_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_671_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 671 Geometry (limes_671_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_672_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 672 Geometry (limes_672_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_673_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 673 Geometry (limes_673_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_674_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 674 Geometry (limes_674_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_675_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 675 Geometry (limes_675_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_676_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 676 Geometry (limes_676_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_677_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 677 Geometry (limes_677_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_678_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 678 Geometry (limes_678_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_679_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 679 Geometry (limes_679_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_67_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 67 Geometry (limes_67_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_680_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 680 Geometry (limes_680_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_681_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 681 Geometry (limes_681_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_682_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 682 Geometry (limes_682_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_683_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 683 Geometry (limes_683_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_684_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 684 Geometry (limes_684_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_685_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 685 Geometry (limes_685_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_686_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 686 Geometry (limes_686_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_687_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 687 Geometry (limes_687_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_688_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 688 Geometry (limes_688_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_689_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 689 Geometry (limes_689_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_68_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 68 Geometry (limes_68_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_690_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 690 Geometry (limes_690_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_691_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 691 Geometry (limes_691_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_692_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 692 Geometry (limes_692_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_693_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 693 Geometry (limes_693_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_694_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 694 Geometry (limes_694_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_695_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 695 Geometry (limes_695_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_696_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 696 Geometry (limes_696_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_697_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 697 Geometry (limes_697_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_698_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 698 Geometry (limes_698_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_699_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 699 Geometry (limes_699_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_69_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 69 Geometry (limes_69_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 6 Geometry (limes_6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_700_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 700 Geometry (limes_700_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_701_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 701 Geometry (limes_701_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_702_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 702 Geometry (limes_702_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_703_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 703 Geometry (limes_703_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_704_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 704 Geometry (limes_704_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_705_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 705 Geometry (limes_705_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_706_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 706 Geometry (limes_706_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_707_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 707 Geometry (limes_707_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_708_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 708 Geometry (limes_708_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_709_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 709 Geometry (limes_709_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_70_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 70 Geometry (limes_70_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_710_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 710 Geometry (limes_710_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_711_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 711 Geometry (limes_711_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_712_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 712 Geometry (limes_712_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_713_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 713 Geometry (limes_713_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_714_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 714 Geometry (limes_714_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_715_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 715 Geometry (limes_715_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_716_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 716 Geometry (limes_716_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_717_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 717 Geometry (limes_717_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_718_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 718 Geometry (limes_718_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_719_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 719 Geometry (limes_719_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_71_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 71 Geometry (limes_71_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_720_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 720 Geometry (limes_720_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_721_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 721 Geometry (limes_721_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_722_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 722 Geometry (limes_722_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_723_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 723 Geometry (limes_723_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_724_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 724 Geometry (limes_724_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_725_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 725 Geometry (limes_725_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_726_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 726 Geometry (limes_726_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_727_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 727 Geometry (limes_727_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_728_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 728 Geometry (limes_728_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_729_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 729 Geometry (limes_729_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_72_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 72 Geometry (limes_72_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_730_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 730 Geometry (limes_730_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_731_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 731 Geometry (limes_731_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_732_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 732 Geometry (limes_732_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_733_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 733 Geometry (limes_733_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_734_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 734 Geometry (limes_734_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_735_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 735 Geometry (limes_735_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_736_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 736 Geometry (limes_736_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_737_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 737 Geometry (limes_737_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_738_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 738 Geometry (limes_738_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_739_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 739 Geometry (limes_739_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_73_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 73 Geometry (limes_73_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_740_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 740 Geometry (limes_740_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_741_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 741 Geometry (limes_741_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_742_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 742 Geometry (limes_742_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_743_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 743 Geometry (limes_743_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_744_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 744 Geometry (limes_744_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_745_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 745 Geometry (limes_745_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_746_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 746 Geometry (limes_746_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_747_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 747 Geometry (limes_747_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_748_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 748 Geometry (limes_748_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_749_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 749 Geometry (limes_749_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_74_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 74 Geometry (limes_74_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_750_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 750 Geometry (limes_750_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_751_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 751 Geometry (limes_751_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_752_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 752 Geometry (limes_752_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_753_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 753 Geometry (limes_753_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_754_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 754 Geometry (limes_754_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_755_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 755 Geometry (limes_755_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_756_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 756 Geometry (limes_756_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_757_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 757 Geometry (limes_757_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_758_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 758 Geometry (limes_758_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_759_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 759 Geometry (limes_759_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_75_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 75 Geometry (limes_75_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_760_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 760 Geometry (limes_760_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_761_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 761 Geometry (limes_761_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_762_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 762 Geometry (limes_762_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_763_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 763 Geometry (limes_763_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_764_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 764 Geometry (limes_764_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_765_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 765 Geometry (limes_765_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_766_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 766 Geometry (limes_766_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_767_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 767 Geometry (limes_767_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_768_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 768 Geometry (limes_768_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_769_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 769 Geometry (limes_769_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_76_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 76 Geometry (limes_76_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_770_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 770 Geometry (limes_770_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_771_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 771 Geometry (limes_771_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_772_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 772 Geometry (limes_772_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_773_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 773 Geometry (limes_773_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_774_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 774 Geometry (limes_774_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_775_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 775 Geometry (limes_775_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_776_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 776 Geometry (limes_776_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_777_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 777 Geometry (limes_777_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_778_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 778 Geometry (limes_778_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_779_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 779 Geometry (limes_779_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_77_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 77 Geometry (limes_77_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_780_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 780 Geometry (limes_780_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_781_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 781 Geometry (limes_781_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_782_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 782 Geometry (limes_782_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_783_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 783 Geometry (limes_783_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_784_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 784 Geometry (limes_784_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_785_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 785 Geometry (limes_785_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_786_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 786 Geometry (limes_786_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_787_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 787 Geometry (limes_787_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_788_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 788 Geometry (limes_788_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_789_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 789 Geometry (limes_789_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_78_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 78 Geometry (limes_78_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_790_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 790 Geometry (limes_790_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_791_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 791 Geometry (limes_791_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_792_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 792 Geometry (limes_792_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_793_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 793 Geometry (limes_793_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_794_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 794 Geometry (limes_794_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_795_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 795 Geometry (limes_795_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_796_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 796 Geometry (limes_796_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_797_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 797 Geometry (limes_797_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_798_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 798 Geometry (limes_798_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_799_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 799 Geometry (limes_799_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_79_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 79 Geometry (limes_79_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 7 Geometry (limes_7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_800_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 800 Geometry (limes_800_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_801_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 801 Geometry (limes_801_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_802_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 802 Geometry (limes_802_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_803_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 803 Geometry (limes_803_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_804_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 804 Geometry (limes_804_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_805_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 805 Geometry (limes_805_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_806_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 806 Geometry (limes_806_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_807_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 807 Geometry (limes_807_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_808_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 808 Geometry (limes_808_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_809_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 809 Geometry (limes_809_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_80_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 80 Geometry (limes_80_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_810_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 810 Geometry (limes_810_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_811_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 811 Geometry (limes_811_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_812_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 812 Geometry (limes_812_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_813_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 813 Geometry (limes_813_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_814_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 814 Geometry (limes_814_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_815_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 815 Geometry (limes_815_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_816_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 816 Geometry (limes_816_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_817_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 817 Geometry (limes_817_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_818_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 818 Geometry (limes_818_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_819_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 819 Geometry (limes_819_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_81_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 81 Geometry (limes_81_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_820_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 820 Geometry (limes_820_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_821_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 821 Geometry (limes_821_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_822_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 822 Geometry (limes_822_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_823_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 823 Geometry (limes_823_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_824_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 824 Geometry (limes_824_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_825_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 825 Geometry (limes_825_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_826_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 826 Geometry (limes_826_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_827_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 827 Geometry (limes_827_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_828_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 828 Geometry (limes_828_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_829_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 829 Geometry (limes_829_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_82_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 82 Geometry (limes_82_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_830_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 830 Geometry (limes_830_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_831_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 831 Geometry (limes_831_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_832_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 832 Geometry (limes_832_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_833_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 833 Geometry (limes_833_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_834_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 834 Geometry (limes_834_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_835_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 835 Geometry (limes_835_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_836_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 836 Geometry (limes_836_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_837_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 837 Geometry (limes_837_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_838_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 838 Geometry (limes_838_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_839_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 839 Geometry (limes_839_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_83_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 83 Geometry (limes_83_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_840_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 840 Geometry (limes_840_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_841_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 841 Geometry (limes_841_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_842_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 842 Geometry (limes_842_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_843_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 843 Geometry (limes_843_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_844_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 844 Geometry (limes_844_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_845_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 845 Geometry (limes_845_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_846_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 846 Geometry (limes_846_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_847_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 847 Geometry (limes_847_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_848_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 848 Geometry (limes_848_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_849_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 849 Geometry (limes_849_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_84_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 84 Geometry (limes_84_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_850_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 850 Geometry (limes_850_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_851_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 851 Geometry (limes_851_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_852_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 852 Geometry (limes_852_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_853_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 853 Geometry (limes_853_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_854_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 854 Geometry (limes_854_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_855_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 855 Geometry (limes_855_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_856_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 856 Geometry (limes_856_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_857_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 857 Geometry (limes_857_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_858_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 858 Geometry (limes_858_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_859_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 859 Geometry (limes_859_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_85_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 85 Geometry (limes_85_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_860_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 860 Geometry (limes_860_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_861_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 861 Geometry (limes_861_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_862_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 862 Geometry (limes_862_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_863_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 863 Geometry (limes_863_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_864_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 864 Geometry (limes_864_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_865_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 865 Geometry (limes_865_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_866_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 866 Geometry (limes_866_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_867_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 867 Geometry (limes_867_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_868_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 868 Geometry (limes_868_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_869_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 869 Geometry (limes_869_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_86_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 86 Geometry (limes_86_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_870_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 870 Geometry (limes_870_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_871_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 871 Geometry (limes_871_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_872_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 872 Geometry (limes_872_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_873_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 873 Geometry (limes_873_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_874_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 874 Geometry (limes_874_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_875_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 875 Geometry (limes_875_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_876_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 876 Geometry (limes_876_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_877_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 877 Geometry (limes_877_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_878_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 878 Geometry (limes_878_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_879_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 879 Geometry (limes_879_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_87_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 87 Geometry (limes_87_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_880_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 880 Geometry (limes_880_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_881_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 881 Geometry (limes_881_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_882_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 882 Geometry (limes_882_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_883_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 883 Geometry (limes_883_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_884_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 884 Geometry (limes_884_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_885_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 885 Geometry (limes_885_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_886_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 886 Geometry (limes_886_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_887_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 887 Geometry (limes_887_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_888_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 888 Geometry (limes_888_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_889_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 889 Geometry (limes_889_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_88_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 88 Geometry (limes_88_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_890_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 890 Geometry (limes_890_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_891_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 891 Geometry (limes_891_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_892_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 892 Geometry (limes_892_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_893_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 893 Geometry (limes_893_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_894_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 894 Geometry (limes_894_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_895_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 895 Geometry (limes_895_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_896_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 896 Geometry (limes_896_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_897_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 897 Geometry (limes_897_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_898_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 898 Geometry (limes_898_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_899_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 899 Geometry (limes_899_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_89_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 89 Geometry (limes_89_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 8 Geometry (limes_8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_900_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 900 Geometry (limes_900_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_901_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 901 Geometry (limes_901_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_902_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 902 Geometry (limes_902_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_903_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 903 Geometry (limes_903_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_904_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 904 Geometry (limes_904_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_905_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 905 Geometry (limes_905_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_906_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 906 Geometry (limes_906_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_907_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 907 Geometry (limes_907_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_908_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 908 Geometry (limes_908_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_909_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 909 Geometry (limes_909_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_90_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 90 Geometry (limes_90_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_910_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 910 Geometry (limes_910_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_911_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 911 Geometry (limes_911_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_912_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 912 Geometry (limes_912_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_913_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 913 Geometry (limes_913_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_914_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 914 Geometry (limes_914_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_915_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 915 Geometry (limes_915_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_916_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 916 Geometry (limes_916_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_917_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 917 Geometry (limes_917_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_918_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 918 Geometry (limes_918_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_919_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 919 Geometry (limes_919_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_91_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 91 Geometry (limes_91_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_920_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 920 Geometry (limes_920_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_921_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 921 Geometry (limes_921_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_922_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 922 Geometry (limes_922_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_923_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 923 Geometry (limes_923_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_924_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 924 Geometry (limes_924_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_925_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 925 Geometry (limes_925_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_926_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 926 Geometry (limes_926_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_927_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 927 Geometry (limes_927_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_928_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 928 Geometry (limes_928_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_929_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 929 Geometry (limes_929_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_92_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 92 Geometry (limes_92_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_930_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 930 Geometry (limes_930_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_931_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 931 Geometry (limes_931_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_932_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 932 Geometry (limes_932_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_933_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 933 Geometry (limes_933_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_934_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 934 Geometry (limes_934_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_935_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 935 Geometry (limes_935_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_936_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 936 Geometry (limes_936_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_937_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 937 Geometry (limes_937_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_938_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 938 Geometry (limes_938_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_939_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 939 Geometry (limes_939_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_93_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 93 Geometry (limes_93_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_940_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 940 Geometry (limes_940_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_941_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 941 Geometry (limes_941_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_942_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 942 Geometry (limes_942_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_943_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 943 Geometry (limes_943_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_944_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 944 Geometry (limes_944_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_945_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 945 Geometry (limes_945_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_946_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 946 Geometry (limes_946_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_947_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 947 Geometry (limes_947_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_948_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 948 Geometry (limes_948_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_949_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 949 Geometry (limes_949_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_94_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 94 Geometry (limes_94_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_950_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 950 Geometry (limes_950_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_951_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 951 Geometry (limes_951_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_952_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 952 Geometry (limes_952_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_953_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 953 Geometry (limes_953_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_954_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 954 Geometry (limes_954_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_955_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 955 Geometry (limes_955_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_956_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 956 Geometry (limes_956_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_957_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 957 Geometry (limes_957_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_958_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 958 Geometry (limes_958_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_959_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 959 Geometry (limes_959_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_95_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 95 Geometry (limes_95_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_960_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 960 Geometry (limes_960_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_961_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 961 Geometry (limes_961_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_962_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 962 Geometry (limes_962_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_963_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 963 Geometry (limes_963_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_964_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 964 Geometry (limes_964_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_965_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 965 Geometry (limes_965_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_966_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 966 Geometry (limes_966_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_967_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 967 Geometry (limes_967_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_968_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 968 Geometry (limes_968_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_969_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 969 Geometry (limes_969_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_96_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 96 Geometry (limes_96_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_970_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 970 Geometry (limes_970_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_971_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 971 Geometry (limes_971_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_972_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 972 Geometry (limes_972_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_973_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 973 Geometry (limes_973_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_974_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 974 Geometry (limes_974_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_975_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 975 Geometry (limes_975_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_976_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 976 Geometry (limes_976_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_977_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 977 Geometry (limes_977_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_978_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 978 Geometry (limes_978_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_979_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 979 Geometry (limes_979_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_97_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 97 Geometry (limes_97_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_980_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 980 Geometry (limes_980_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_981_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 981 Geometry (limes_981_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_982_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 982 Geometry (limes_982_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_983_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 983 Geometry (limes_983_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_984_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 984 Geometry (limes_984_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_985_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 985 Geometry (limes_985_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_986_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 986 Geometry (limes_986_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_987_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 987 Geometry (limes_987_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_988_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 988 Geometry (limes_988_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_989_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 989 Geometry (limes_989_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_98_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 98 Geometry (limes_98_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_990_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 990 Geometry (limes_990_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_991_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 991 Geometry (limes_991_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_992_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 992 Geometry (limes_992_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_993_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 993 Geometry (limes_993_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_994_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 994 Geometry (limes_994_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_995_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 995 Geometry (limes_995_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_996_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 996 Geometry (limes_996_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_997_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 997 Geometry (limes_997_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_998_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 998 Geometry (limes_998_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_999_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 999 Geometry (limes_999_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_99_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 99 Geometry (limes_99_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/obergermanischraetisch/limes_9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Limes Part 9 Geometry (limes_9_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "http://www.opengis.net/ont/geosparql#Geometry",
        "type": "geoclass",
        "text": "Point (sf:Point) [1537]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#asWKT": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Watchtower": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#GeometryCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#Geometry",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "type": "class",
        "text": "Geometry (gsp:Geometry)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/Class_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Class Instances Collection (Class_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/FeatureCollection_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "FeatureCollection Instances Collection (FeatureCollection_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/GeometryCollection_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "GeometryCollection Instances Collection (GeometryCollection_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [4]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 4,
              "http://www.w3.org/2002/07/owl#Class": 1
            }
          },
          "from": {}
        },
        "instancecount": 6
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObject",
        "parent": "#",
        "type": "class",
        "text": "SpatialObject (gsp:SpatialObject)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/MidlandsWalesCornwallFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Midlands Wales Cornwall Features (MidlandsWalesCornwallFeatures)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/Limes_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Instances Collection (Limes_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/Fort_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Fort Instances Collection (Fort_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/MidlandsWalesCornwallGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Midlands Wales Cornwall Geometries (MidlandsWalesCornwallGeometries)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/a0c87a08-a3b7-4e6f-90bc-8533f05dfbe5",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Deva Victrix (a0c87a08-a3b7-4e6f-90bc-8533f05dfbe5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/b3ee75b6-e145-4399-aff4-68cbc90b0629",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Ardotalia (b3ee75b6-e145-4399-aff4-68cbc90b0629)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/f2634f9a-dca9-4577-a5a3-f4ba92bcd03f",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Isca Silurum (f2634f9a-dca9-4577-a5a3-f4ba92bcd03f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/207f89fa-bf61-4abd-9681-d7837ca7d51f",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Gobannium (207f89fa-bf61-4abd-9681-d7837ca7d51f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/822f96a2-8331-472e-95a8-65093e2be433",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Venta Silurum (822f96a2-8331-472e-95a8-65093e2be433)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Limes",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "Limes [62]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/a0c87a08-a3b7-4e6f-90bc-8533f05dfbe5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Deva Victrix Geometry (a0c87a08-a3b7-4e6f-90bc-8533f05dfbe5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/a1d2a417-f83c-42d8-beb0-a66c07205771_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Beulah Geometry (a1d2a417-f83c-42d8-beb0-a66c07205771_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/a4904939-1939-42a4-942b-60681dc45f30_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Caer Gybi Geometry (a4904939-1939-42a4-942b-60681dc45f30_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/ad8b8445-fcbb-4697-8f40-404efaec1489_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Carmarthen Geometry (ad8b8445-fcbb-4697-8f40-404efaec1489_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/b3ee75b6-e145-4399-aff4-68cbc90b0629_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Ardotalia Geometry (b3ee75b6-e145-4399-aff4-68cbc90b0629_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/ce8aba9e-3c66-4b4b-8cfe-eb942d59052d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Hen Waliau Geometry (ce8aba9e-3c66-4b4b-8cfe-eb942d59052d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/cf347329-1be3-4a4a-a723-626c10d64722_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cardiff A Geometry (cf347329-1be3-4a4a-a723-626c10d64722_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/d7254927-d49b-45c8-adef-45be35cea8ab_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cardiff B Geometry (d7254927-d49b-45c8-adef-45be35cea8ab_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/e2fb3019-26d7-4e0e-9f72-1dc415536378_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Caerphilly Geometry (e2fb3019-26d7-4e0e-9f72-1dc415536378_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/e7d62830-39ab-4301-a897-9fe64f5a892c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Bryn Glas Geometry (e7d62830-39ab-4301-a897-9fe64f5a892c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/ed625560-b8fa-4d82-9322-3594551b8c96_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Caersws II Geometry (ed625560-b8fa-4d82-9322-3594551b8c96_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/f2634f9a-dca9-4577-a5a3-f4ba92bcd03f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Isca Silurum Geometry (f2634f9a-dca9-4577-a5a3-f4ba92bcd03f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/fb9e2432-fec5-43f4-9a60-83d171a5921e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Caerhun (Canovium) Geometry (fb9e2432-fec5-43f4-9a60-83d171a5921e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/fcd9beaf-116a-4836-b264-bffd5527663e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Lunt Roman Fort I Geometry (fcd9beaf-116a-4836-b264-bffd5527663e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/1ccf2406-bad8-4938-880c-c9a9365f213d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Caer Gai Geometry (1ccf2406-bad8-4938-880c-c9a9365f213d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/1981b386-39e5-42c1-bca9-6000dfe926ad_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bryn Y Gefeiliau Geometry (1981b386-39e5-42c1-bca9-6000dfe926ad_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/207f89fa-bf61-4abd-9681-d7837ca7d51f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Gobannium Geometry (207f89fa-bf61-4abd-9681-d7837ca7d51f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/2251c787-e2fb-4c65-9662-b3296b2d36b5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Lunt Roman Fort IV Geometry (2251c787-e2fb-4c65-9662-b3296b2d36b5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/3f2c1551-85ca-4f89-81f6-db55736b6325_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Brecon Y Gaer Geometry (3f2c1551-85ca-4f89-81f6-db55736b6325_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/32f81caa-d550-4ce3-bd96-afbd809e0a4d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cardiff C Geometry (32f81caa-d550-4ce3-bd96-afbd809e0a4d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/41fae62b-cdaa-44c7-9a2f-5eb92621db71_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Lunt Roman Fort II Geometry (41fae62b-cdaa-44c7-9a2f-5eb92621db71_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/43ce98a8-2fab-4c4a-86ad-d18cbb7548a5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Lunt Roman Fort III Geometry (43ce98a8-2fab-4c4a-86ad-d18cbb7548a5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/58210be9-d5d3-4304-ad2a-5141ecefcdef_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Carmarthen Geometry (58210be9-d5d3-4304-ad2a-5141ecefcdef_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/61a1eeed-0e4f-45ad-9a54-cee033b0b837_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Caersws I Geometry (61a1eeed-0e4f-45ad-9a54-cee033b0b837_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/66367869-4ca7-44d6-9782-ed7c3bf5efbe_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Caerau Geometry (66367869-4ca7-44d6-9782-ed7c3bf5efbe_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/8165f2ca-91b5-4148-b5a1-37adebb59043_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Brithdir Geometry (8165f2ca-91b5-4148-b5a1-37adebb59043_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/822f96a2-8331-472e-95a8-65093e2be433_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Venta Silurum Geometry (822f96a2-8331-472e-95a8-65093e2be433_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/86169d7e-1006-408e-85fd-9bfb06b88d09_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cardiff D Geometry (86169d7e-1006-408e-85fd-9bfb06b88d09_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/87505f9f-d868-4d50-8b7d-8cb21d641d36_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Segontium Geometry (87505f9f-d868-4d50-8b7d-8cb21d641d36_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/9d2fd06d-8b12-46aa-9e88-6d25aadfae6c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Cae Gaer Geometry (9d2fd06d-8b12-46aa-9e88-6d25aadfae6c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/a1d2a417-f83c-42d8-beb0-a66c07205771",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Beulah (a1d2a417-f83c-42d8-beb0-a66c07205771)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/ad8b8445-fcbb-4697-8f40-404efaec1489",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Carmarthen (ad8b8445-fcbb-4697-8f40-404efaec1489)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/cf347329-1be3-4a4a-a723-626c10d64722",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cardiff A (cf347329-1be3-4a4a-a723-626c10d64722)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/d7254927-d49b-45c8-adef-45be35cea8ab",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cardiff B (d7254927-d49b-45c8-adef-45be35cea8ab)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/e2fb3019-26d7-4e0e-9f72-1dc415536378",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Caerphilly (e2fb3019-26d7-4e0e-9f72-1dc415536378)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/ed625560-b8fa-4d82-9322-3594551b8c96",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Caersws II (ed625560-b8fa-4d82-9322-3594551b8c96)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/fb9e2432-fec5-43f4-9a60-83d171a5921e",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Caerhun (Canovium) (fb9e2432-fec5-43f4-9a60-83d171a5921e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/1ccf2406-bad8-4938-880c-c9a9365f213d",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Caer Gai (1ccf2406-bad8-4938-880c-c9a9365f213d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/1981b386-39e5-42c1-bca9-6000dfe926ad",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bryn Y Gefeiliau (1981b386-39e5-42c1-bca9-6000dfe926ad)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/3f2c1551-85ca-4f89-81f6-db55736b6325",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Brecon Y Gaer (3f2c1551-85ca-4f89-81f6-db55736b6325)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/32f81caa-d550-4ce3-bd96-afbd809e0a4d",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cardiff C (32f81caa-d550-4ce3-bd96-afbd809e0a4d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/58210be9-d5d3-4304-ad2a-5141ecefcdef",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Carmarthen (58210be9-d5d3-4304-ad2a-5141ecefcdef)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/61a1eeed-0e4f-45ad-9a54-cee033b0b837",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Caersws I (61a1eeed-0e4f-45ad-9a54-cee033b0b837)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/66367869-4ca7-44d6-9782-ed7c3bf5efbe",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Caerau (66367869-4ca7-44d6-9782-ed7c3bf5efbe)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/86169d7e-1006-408e-85fd-9bfb06b88d09",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cardiff D (86169d7e-1006-408e-85fd-9bfb06b88d09)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/87505f9f-d868-4d50-8b7d-8cb21d641d36",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Segontium (87505f9f-d868-4d50-8b7d-8cb21d641d36)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "MilitaryCamp [74]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/a4904939-1939-42a4-942b-60681dc45f30",
        "parent": "http://lod.squirrel.link/data/limes/midlandswalescornwall/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Caer Gybi (a4904939-1939-42a4-942b-60681dc45f30)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/ce8aba9e-3c66-4b4b-8cfe-eb942d59052d",
        "parent": "http://lod.squirrel.link/data/limes/midlandswalescornwall/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Hen Waliau (ce8aba9e-3c66-4b4b-8cfe-eb942d59052d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/e7d62830-39ab-4301-a897-9fe64f5a892c",
        "parent": "http://lod.squirrel.link/data/limes/midlandswalescornwall/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Bryn Glas (e7d62830-39ab-4301-a897-9fe64f5a892c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/8165f2ca-91b5-4148-b5a1-37adebb59043",
        "parent": "http://lod.squirrel.link/data/limes/midlandswalescornwall/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Brithdir (8165f2ca-91b5-4148-b5a1-37adebb59043)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/9d2fd06d-8b12-46aa-9e88-6d25aadfae6c",
        "parent": "http://lod.squirrel.link/data/limes/midlandswalescornwall/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Cae Gaer (9d2fd06d-8b12-46aa-9e88-6d25aadfae6c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/Kleinkastell",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Kleinkastell [5]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/fcd9beaf-116a-4836-b264-bffd5527663e",
        "parent": "http://hadrianswall.squirrel.link/ontology#Fort",
        "type": "geoinstance",
        "text": "Lunt Roman Fort I (fcd9beaf-116a-4836-b264-bffd5527663e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/2251c787-e2fb-4c65-9662-b3296b2d36b5",
        "parent": "http://hadrianswall.squirrel.link/ontology#Fort",
        "type": "geoinstance",
        "text": "Lunt Roman Fort IV (2251c787-e2fb-4c65-9662-b3296b2d36b5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/41fae62b-cdaa-44c7-9a2f-5eb92621db71",
        "parent": "http://hadrianswall.squirrel.link/ontology#Fort",
        "type": "geoinstance",
        "text": "Lunt Roman Fort II (41fae62b-cdaa-44c7-9a2f-5eb92621db71)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/midlandswalescornwall/43ce98a8-2fab-4c4a-86ad-d18cbb7548a5",
        "parent": "http://hadrianswall.squirrel.link/ontology#Fort",
        "type": "geoinstance",
        "text": "Lunt Roman Fort III (43ce98a8-2fab-4c4a-86ad-d18cbb7548a5)",
        "data": {}
      },
      {
        "id": "http://hadrianswall.squirrel.link/ontology#Fort",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Fort [5]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://lod.squirrel.link/data/limes/NamedIndividual_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "geoinstance",
        "text": "NamedIndividual Instances Collection (NamedIndividual_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/LimesPannoniaInferiorFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Pannonia Inferior Features (LimesPannoniaInferiorFeatures)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/Burgus_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Burgus Instances Collection (Burgus_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/LimesPannoniaInferiorGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Limes Pannonia Inferior Geometries (LimesPannoniaInferiorGeometries)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/a5dd32c0-df1c-4341-b711-24aff2b22322",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager II (a5dd32c0-df1c-4341-b711-24aff2b22322)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/a98f053b-fc16-4c21-a839-23e5e3f73ace",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Binnenfestung S\u00e1gv\u00e1r (Tricciana) (a98f053b-fc16-4c21-a839-23e5e3f73ace)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ab4de5e3-0edb-4ac1-81d7-9d0550b163d6",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 1 (ab4de5e3-0edb-4ac1-81d7-9d0550b163d6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/aca1955a-ed95-4f85-8f8c-df7c86a2d91a",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXX\u2013XXXI (aca1955a-ed95-4f85-8f8c-df7c86a2d91a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ace94069-cfb1-40ce-8ab4-f4da0c89cdd1",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XX (ace94069-cfb1-40ce-8ab4-f4da0c89cdd1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ad90d8a1-600f-4533-b416-7b072c2dd447",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XIII\u2013XIV (ad90d8a1-600f-4533-b416-7b072c2dd447)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/aea7eb5d-f95d-4aa9-b752-acff838365de",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Binnenfestung L\u00e9b\u00e9ny-Bar\u00e1tf\u00f6ldpuszta (Quadrata) (aea7eb5d-f95d-4aa9-b752-acff838365de)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b4283304-364a-4d78-a5b9-5531d6d659e2",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Binnenfestung Keszthely-Fen\u00e9kpuszta  (b4283304-364a-4d78-a5b9-5531d6d659e2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/baf5509d-053d-4793-9bde-3cd9a372cf43",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager VIII\u2013XI (baf5509d-053d-4793-9bde-3cd9a372cf43)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bc7e9c02-c10a-4aa1-8c52-a2f413514fda",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Transaquincum (bc7e9c02-c10a-4aa1-8c52-a2f413514fda)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ce9e5613-5021-4a81-9adc-fb37464de8ab",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXVIII (ce9e5613-5021-4a81-9adc-fb37464de8ab)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d0718a46-c061-4dc3-992a-acb8318a3646",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Burgus Pilismar\u00f3t\u2013Malompatak (Burgus Selva 19) (d0718a46-c061-4dc3-992a-acb8318a3646)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d0cc770a-8c40-4384-a773-c52cf84e0acb",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 2 (d0cc770a-8c40-4384-a773-c52cf84e0acb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d4075da4-0b61-43bb-b596-8f87ff55616b",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XV (d4075da4-0b61-43bb-b596-8f87ff55616b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/da9d7382-6935-4ff2-bda1-d74acec7c0f4",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Burgus Selva 7 (da9d7382-6935-4ff2-bda1-d74acec7c0f4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/db6b51e4-0c6a-4918-bfc5-738b7d626d0c",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXI (db6b51e4-0c6a-4918-bfc5-738b7d626d0c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e7ee5596-fbaf-4575-83b2-cb41379f7d91",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXVII (e7ee5596-fbaf-4575-83b2-cb41379f7d91)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ef4dc87e-0fd4-42d3-bff8-e481fde2d8fd",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager VII (ef4dc87e-0fd4-42d3-bff8-e481fde2d8fd)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/fc03de9a-f548-4219-a3ce-ef537d8f41ea",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Contra Aquincum (fc03de9a-f548-4219-a3ce-ef537d8f41ea)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1fa19985-d997-45b3-8399-ddb1cc33aeea",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager III (1fa19985-d997-45b3-8399-ddb1cc33aeea)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/11ee6efa-bae8-4fcb-b21d-f8dcfb4bcf44",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Ad\u00f3ny-Iv\u00e1ncsa (Vetus Salina. Nordkastell) (11ee6efa-bae8-4fcb-b21d-f8dcfb4bcf44)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/14bc70ba-404d-4e6d-a8df-7bd2d6002f34",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXXII (14bc70ba-404d-4e6d-a8df-7bd2d6002f34)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2ba62f14-8e41-446a-bda9-e0840c1bdfb2",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager V (2ba62f14-8e41-446a-bda9-e0840c1bdfb2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3a0b7de2-aeb8-4e24-bda4-c0afb86c250c",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXV (3a0b7de2-aeb8-4e24-bda4-c0afb86c250c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/32718820-57dd-4c81-a069-1963b471f8f8",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Castra ad Herculem (32718820-57dd-4c81-a069-1963b471f8f8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/336194fc-6a00-4b75-b592-2428ed4e0939",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XVIII (336194fc-6a00-4b75-b592-2428ed4e0939)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/4255c519-733d-463a-be35-1190a3efb9c6",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager IV (4255c519-733d-463a-be35-1190a3efb9c6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/427718f0-fd9e-491f-a3d8-fb1865807ab6",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager VI (427718f0-fd9e-491f-a3d8-fb1865807ab6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/549d42aa-59dc-43bb-9279-eb255c5d96e7",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXVI (549d42aa-59dc-43bb-9279-eb255c5d96e7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/54940057-f319-484b-bf3b-488c2b8c2a62",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXIX (54940057-f319-484b-bf3b-488c2b8c2a62)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/582ea44c-450a-4f8d-aaa9-e271c4d07dbf",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXII\u2013XXIII (582ea44c-450a-4f8d-aaa9-e271c4d07dbf)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/59d5d1de-4d87-4d5f-b6e8-f370418aac7c",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XVII (59d5d1de-4d87-4d5f-b6e8-f370418aac7c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/6a9731cf-3630-4085-9e1f-fbbb62be5f86",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXIV (6a9731cf-3630-4085-9e1f-fbbb62be5f86)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/7e46c6a7-cec2-4c69-9771-adda533b0c4e",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XII. XXXIII (7e46c6a7-cec2-4c69-9771-adda533b0c4e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/70fade86-1df9-4788-9031-22b8b2859802",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Castra Aquincum (70fade86-1df9-4788-9031-22b8b2859802)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/730f9c25-4a40-40bb-b024-f47ee5fee0b2",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 3 (730f9c25-4a40-40bb-b024-f47ee5fee0b2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8091de45-36a8-4d2c-943c-0321332e968b",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXXIV (8091de45-36a8-4d2c-943c-0321332e968b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8585be01-6da3-4ad6-b096-bb26f5ca24d7",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XIX (8585be01-6da3-4ad6-b096-bb26f5ca24d7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/86e75d60-d1e3-477f-9830-1c916530259b",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 4 (86e75d60-d1e3-477f-9830-1c916530259b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/99ec9c4c-7b84-463b-9238-adce834944f4",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 5 (99ec9c4c-7b84-463b-9238-adce834944f4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/a5dd32c0-df1c-4341-b711-24aff2b22322_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager II Geometry (a5dd32c0-df1c-4341-b711-24aff2b22322_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/a7acd349-b010-4e98-9c6b-fef6f3261439_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ver\u0151cemaros-Dunamez\u0151 (Burgus Selva 38) Geometry (a7acd349-b010-4e98-9c6b-fef6f3261439_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/a98f053b-fc16-4c21-a839-23e5e3f73ace_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Binnenfestung S\u00e1gv\u00e1r (Tricciana) Geometry (a98f053b-fc16-4c21-a839-23e5e3f73ace_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/aac6edc5-ee7a-439f-9c8f-15161f1da3fa_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Crumerum 1 Geometry (aac6edc5-ee7a-439f-9c8f-15161f1da3fa_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ab4de5e3-0edb-4ac1-81d7-9d0550b163d6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 1 Geometry (ab4de5e3-0edb-4ac1-81d7-9d0550b163d6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/aca1955a-ed95-4f85-8f8c-df7c86a2d91a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXX\u2013XXXI Geometry (aca1955a-ed95-4f85-8f8c-df7c86a2d91a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ace94069-cfb1-40ce-8ab4-f4da0c89cdd1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XX Geometry (ace94069-cfb1-40ce-8ab4-f4da0c89cdd1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ad90d8a1-600f-4533-b416-7b072c2dd447_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XIII\u2013XIV Geometry (ad90d8a1-600f-4533-b416-7b072c2dd447_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/aea7eb5d-f95d-4aa9-b752-acff838365de_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Binnenfestung L\u00e9b\u00e9ny-Bar\u00e1tf\u00f6ldpuszta (Quadrata) Geometry (aea7eb5d-f95d-4aa9-b752-acff838365de_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b3fa7419-213b-4c0d-894c-60ead538ded7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Matrica 4 Geometry (b3fa7419-213b-4c0d-894c-60ead538ded7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b4283304-364a-4d78-a5b9-5531d6d659e2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Binnenfestung Keszthely-Fen\u00e9kpuszta Geometry (b4283304-364a-4d78-a5b9-5531d6d659e2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b4552074-7af6-417e-8e11-16b1f9b99239_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "b4552074-7af6-417e-8e11-16b1f9b99239_geom",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b64e9a5a-8008-4c71-af9a-894e99297eae_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 6 Geometry (b64e9a5a-8008-4c71-af9a-894e99297eae_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b80a9dba-dbeb-4ffd-ac12-95534d5991a4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Kiseroszi Geometry (b80a9dba-dbeb-4ffd-ac12-95534d5991a4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/baf5509d-053d-4793-9bde-3cd9a372cf43_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager VIII\u2013XI Geometry (baf5509d-053d-4793-9bde-3cd9a372cf43_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bb99f739-3d76-4ad8-bcb5-faa5b3b9cb4a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Crumerum 4 Geometry (bb99f739-3d76-4ad8-bcb5-faa5b3b9cb4a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bc7e9c02-c10a-4aa1-8c52-a2f413514fda_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Transaquincum Geometry (bc7e9c02-c10a-4aa1-8c52-a2f413514fda_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bcfa7793-709f-4adc-b800-e178dae99e01_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Visegr\u00e1d\u2013Sibrik Geometry (bcfa7793-709f-4adc-b800-e178dae99e01_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bf3f0671-28ae-42ac-b38f-8bde297ecbe0_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Alm\u00e1sf\u00fczit\u0151 Geometry (bf3f0671-28ae-42ac-b38f-8bde297ecbe0_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/c0bec1d6-4c1d-418b-9e0e-65925fa336d3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ediavum 4 Geometry (c0bec1d6-4c1d-418b-9e0e-65925fa336d3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/c6eb07df-12fd-4960-a6e4-b4464af11b93_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 36 Geometry (c6eb07df-12fd-4960-a6e4-b4464af11b93_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/c89d6dce-617e-4dde-af58-edffd18cc475_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Szentendre-Dera (Burgus Ulcisia 1) Geometry (c89d6dce-617e-4dde-af58-edffd18cc475_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/cb77b215-4444-4ae4-9bf5-5f7adbaa8f7e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 3 Geometry (cb77b215-4444-4ae4-9bf5-5f7adbaa8f7e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ce9e5613-5021-4a81-9adc-fb37464de8ab_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXVIII Geometry (ce9e5613-5021-4a81-9adc-fb37464de8ab_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ceac5833-9f93-4540-8d66-cda88c604156_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Eszterg\u00f3m Geometry (ceac5833-9f93-4540-8d66-cda88c604156_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/cebe94e2-6643-48c7-865b-9381171938de_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell G\u00f6d-B\u00f3csa\u00fajtelep Geometry (cebe94e2-6643-48c7-865b-9381171938de_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d0718a46-c061-4dc3-992a-acb8318a3646_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Pilismar\u00f3t\u2013Malompatak (Burgus Selva 19) Geometry (d0718a46-c061-4dc3-992a-acb8318a3646_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d0cc770a-8c40-4384-a773-c52cf84e0acb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 2 Geometry (d0cc770a-8c40-4384-a773-c52cf84e0acb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d2a6a9e8-16b7-4752-84da-59b8698fc473_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 2 Geometry (d2a6a9e8-16b7-4752-84da-59b8698fc473_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d4075da4-0b61-43bb-b596-8f87ff55616b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XV Geometry (d4075da4-0b61-43bb-b596-8f87ff55616b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d6339f99-934d-4b59-810c-7d58ea02e3a4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Lussenium 9 Geometry (d6339f99-934d-4b59-810c-7d58ea02e3a4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d8a59c0d-c174-483a-aafd-cfba60949cc0_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 28 Geometry (d8a59c0d-c174-483a-aafd-cfba60949cc0_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/da9d7382-6935-4ff2-bda1-d74acec7c0f4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 7 Geometry (da9d7382-6935-4ff2-bda1-d74acec7c0f4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/db6b51e4-0c6a-4918-bfc5-738b7d626d0c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXI Geometry (db6b51e4-0c6a-4918-bfc5-738b7d626d0c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/dc50aae7-600e-4e9b-a943-3d5006792377_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 6 Geometry (dc50aae7-600e-4e9b-a943-3d5006792377_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/dd9522f6-89b3-46eb-8d7f-17ca28d6e246_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 2 Geometry (dd9522f6-89b3-46eb-8d7f-17ca28d6e246_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ddf22685-0725-48ab-b760-5482cb2b7c90_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 8 Geometry (ddf22685-0725-48ab-b760-5482cb2b7c90_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ddf85cbc-b977-4a78-9bf2-341cb79199da_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Lussenium 10 Geometry (ddf85cbc-b977-4a78-9bf2-341cb79199da_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e3435e7e-bdc1-4581-9925-a1f2b13443ce_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 35 Geometry (e3435e7e-bdc1-4581-9925-a1f2b13443ce_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e71cd557-0236-4104-8d10-a315099b2a07_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Le\u00e1nyfalu (Burgus Cirpi 2) Geometry (e71cd557-0236-4104-8d10-a315099b2a07_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e7ee5596-fbaf-4575-83b2-cb41379f7d91_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXVII Geometry (e7ee5596-fbaf-4575-83b2-cb41379f7d91_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e826e179-72ab-4757-b9ed-d30aaa754d55_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Crumerum 2 Geometry (e826e179-72ab-4757-b9ed-d30aaa754d55_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ea929cfa-33c0-41f6-833d-ac879c894ab5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Budakal\u00e1sz-Luppa cs\u00e1rda (Burgus Ulcisia 2) Geometry (ea929cfa-33c0-41f6-833d-ac879c894ab5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/eab5ab59-b69e-4a20-a483-1d5594664c42_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Teutoburgium Geometry (eab5ab59-b69e-4a20-a483-1d5594664c42_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ec9c2a26-68eb-462e-a6ab-6e0d56e8820c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 5 Geometry (ec9c2a26-68eb-462e-a6ab-6e0d56e8820c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/eec105bf-53e5-4e52-97b6-b5bb8de5c871_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Annamatia Geometry (eec105bf-53e5-4e52-97b6-b5bb8de5c871_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ef0914ec-b616-479b-8607-2ea54225966a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 7 (Burgus L\u00e9anyv\u00e1r) Geometry (ef0914ec-b616-479b-8607-2ea54225966a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ef4dc87e-0fd4-42d3-bff8-e481fde2d8fd_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager VII Geometry (ef4dc87e-0fd4-42d3-bff8-e481fde2d8fd_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f1166725-ce99-4ce4-a509-7144191015eb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Mursa Geometry (f1166725-ce99-4ce4-a509-7144191015eb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f258df11-3d47-4948-be41-91a17b96f0fe_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ad Militare Geometry (f258df11-3d47-4948-be41-91a17b96f0fe_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f5d17f90-36df-4e7d-ae74-e5ebdb7acc91_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Dunabogd\u00e1ny Geometry (f5d17f90-36df-4e7d-ae74-e5ebdb7acc91_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f962a887-5a55-40d4-83af-f2321b799d9e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 10 Geometry (f962a887-5a55-40d4-83af-f2321b799d9e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/fc03de9a-f548-4219-a3ce-ef537d8f41ea_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Contra Aquincum Geometry (fc03de9a-f548-4219-a3ce-ef537d8f41ea_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ff287ea8-ee40-4278-b52a-cadb07d30702_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ad NEvas Geometry (ff287ea8-ee40-4278-b52a-cadb07d30702_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ff2fe46e-5c22-40e7-a07d-d414ef6ec2af_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Alisca Geometry (ff2fe46e-5c22-40e7-a07d-d414ef6ec2af_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/0413cfe0-cf75-4743-96ad-6d956299eeba_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Visegr\u00e1d\u2013Sibrik Geometry (0413cfe0-cf75-4743-96ad-6d956299eeba_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/059621de-aced-4f31-b388-3d4e9dadfe0b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Lussenium 6 Geometry (059621de-aced-4f31-b388-3d4e9dadfe0b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/06c52928-baee-4d80-a8a4-c89b61cc2a91_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell I\u017ea-Le\u00e1nyv\u00e1r Geometry (06c52928-baee-4d80-a8a4-c89b61cc2a91_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/075b9029-1d31-4389-9588-2aae0563bb07_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell CampEna Geometry (075b9029-1d31-4389-9588-2aae0563bb07_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1a7707ca-f256-415f-9f96-40728dc5a119_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Intercisa Geometry (1a7707ca-f256-415f-9f96-40728dc5a119_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1c714ff8-dc67-4597-bf36-6dce46a74393_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Lussenium 3 Geometry (1c714ff8-dc67-4597-bf36-6dce46a74393_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1e971c18-5164-4185-ae03-777eda973af9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell I\u017ea-Le\u00e1nyv\u00e1r Geometry (1e971c18-5164-4185-ae03-777eda973af9_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1fa19985-d997-45b3-8399-ddb1cc33aeea_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager III Geometry (1fa19985-d997-45b3-8399-ddb1cc33aeea_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/11ee6efa-bae8-4fcb-b21d-f8dcfb4bcf44_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Ad\u00f3ny-Iv\u00e1ncsa (Vetus Salina. Nordkastell) Geometry (11ee6efa-bae8-4fcb-b21d-f8dcfb4bcf44_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/14bc70ba-404d-4e6d-a8df-7bd2d6002f34_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXXII Geometry (14bc70ba-404d-4e6d-a8df-7bd2d6002f34_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/16be76aa-3967-42b8-89ea-1f668371abee_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ediavum 3 Geometry (16be76aa-3967-42b8-89ea-1f668371abee_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/17c2efe9-6ce7-4afc-9f5b-45cc9f7f1965_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Lussenium Geometry (17c2efe9-6ce7-4afc-9f5b-45cc9f7f1965_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/172630af-fb8c-4695-992a-a0ac1c461d49_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Lussenium 12 Geometry (172630af-fb8c-4695-992a-a0ac1c461d49_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1811cd3b-bf1b-4dbc-944b-d8204301e5dc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Lugio 5 Geometry (1811cd3b-bf1b-4dbc-944b-d8204301e5dc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/19da5b58-c63f-4d5b-a86f-685d3dce9c15_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cernacum Geometry (19da5b58-c63f-4d5b-a86f-685d3dce9c15_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2b00f4aa-0cd9-4bf0-882a-4ccc73329d1d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Alm\u00e1sf\u00fczit\u0151 Geometry (2b00f4aa-0cd9-4bf0-882a-4ccc73329d1d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2ba62f14-8e41-446a-bda9-e0840c1bdfb2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager V Geometry (2ba62f14-8e41-446a-bda9-e0840c1bdfb2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2d2db48b-cc09-4399-8610-30b8cb48ab8f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 3 Geometry (2d2db48b-cc09-4399-8610-30b8cb48ab8f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2ff8ad6b-fcf5-49c5-ad90-69e6e76b2b1b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 11 Geometry (2ff8ad6b-fcf5-49c5-ad90-69e6e76b2b1b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/25525110-3f2a-4450-9b09-c9df59404a62_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Szigetmonoster-Her\u00e1ny (Burgus Ulcisia 8) Geometry (25525110-3f2a-4450-9b09-c9df59404a62_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/260868e7-addd-4bb2-b695-c369de33100b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 1 Geometry (260868e7-addd-4bb2-b695-c369de33100b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3a0b7de2-aeb8-4e24-bda4-c0afb86c250c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXV Geometry (3a0b7de2-aeb8-4e24-bda4-c0afb86c250c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3bcf2479-8e0d-4cf0-996f-174a25282a47_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Dunabogd\u00e1ny Geometry (3bcf2479-8e0d-4cf0-996f-174a25282a47_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3d1b9e48-8058-47bb-b6b8-912148844075_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Budapest-Albertfalva Geometry (3d1b9e48-8058-47bb-b6b8-912148844075_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3f41e388-9ea2-4b35-81a8-9e601d6601a7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Vetus Salina Geometry (3f41e388-9ea2-4b35-81a8-9e601d6601a7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/303d6873-c7b8-4f0b-a367-e66f8150c479_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ediavum 6 Geometry (303d6873-c7b8-4f0b-a367-e66f8150c479_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/32718820-57dd-4c81-a069-1963b471f8f8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Castra ad Herculem Geometry (32718820-57dd-4c81-a069-1963b471f8f8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/336194fc-6a00-4b75-b592-2428ed4e0939_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XVIII Geometry (336194fc-6a00-4b75-b592-2428ed4e0939_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/36051d15-90fb-4a93-8fcb-bc12ed784ee2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ba\u010d-B\u00e1cs Geometry (36051d15-90fb-4a93-8fcb-bc12ed784ee2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/37bf73a0-5706-43d8-b5fc-0e873805c5ce_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 5 Geometry (37bf73a0-5706-43d8-b5fc-0e873805c5ce_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3768e771-d594-4c59-a591-5b92f15213dc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Dunakeszi (Burgus Ulcisia 9) Geometry (3768e771-d594-4c59-a591-5b92f15213dc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/4a6e3d7d-82a6-4d35-be6a-dad4641dfc47_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 9 Geometry (4a6e3d7d-82a6-4d35-be6a-dad4641dfc47_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/4d39c5d5-3f47-4e6c-8480-3b4425168403_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 8 Geometry (4d39c5d5-3f47-4e6c-8480-3b4425168403_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/4255c519-733d-463a-be35-1190a3efb9c6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager IV Geometry (4255c519-733d-463a-be35-1190a3efb9c6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/427718f0-fd9e-491f-a3d8-fb1865807ab6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager VI Geometry (427718f0-fd9e-491f-a3d8-fb1865807ab6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/46cab0c4-6fa1-4a8c-8229-da1f890cc620_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Brigetio 1 Geometry (46cab0c4-6fa1-4a8c-8229-da1f890cc620_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/494b6ca6-68da-4339-a97f-6e80720a7b18_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Altinum 1 Geometry (494b6ca6-68da-4339-a97f-6e80720a7b18_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5bd9cb91-b2bd-4003-b22b-091b1ee9c13f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ediavum 5 Geometry (5bd9cb91-b2bd-4003-b22b-091b1ee9c13f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5fa40012-5c4f-4750-b813-d8bbd78fc91c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Crumerum 3 Geometry (5fa40012-5c4f-4750-b813-d8bbd78fc91c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5fada9b6-7dcf-46b9-8e17-744826645c97_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Brigetio 4 Geometry (5fada9b6-7dcf-46b9-8e17-744826645c97_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/50456667-b575-467c-b665-fb76f09aabf7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 8 Geometry (50456667-b575-467c-b665-fb76f09aabf7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/515a97f2-f638-463a-b163-c11e67424da6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Matrica Geometry (515a97f2-f638-463a-b163-c11e67424da6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5165a106-cb40-4036-a14e-c918a0d44c32_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 24 Geometry (5165a106-cb40-4036-a14e-c918a0d44c32_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5241ed3a-fece-484f-b511-f8c0f67e85a6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Dunaszekcs\u0151 Geometry (5241ed3a-fece-484f-b511-f8c0f67e85a6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/528c4ba1-54df-4e32-9c98-8f1b36a3e939_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 11 Geometry (528c4ba1-54df-4e32-9c98-8f1b36a3e939_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/549d42aa-59dc-43bb-9279-eb255c5d96e7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXVI Geometry (549d42aa-59dc-43bb-9279-eb255c5d96e7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/54940057-f319-484b-bf3b-488c2b8c2a62_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXIX Geometry (54940057-f319-484b-bf3b-488c2b8c2a62_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/55008a76-bd84-4f1f-900a-f81fcdd1fd28_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus B\u00f6lcske (Burgus Annamatia 12) Geometry (55008a76-bd84-4f1f-900a-f81fcdd1fd28_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/582ea44c-450a-4f8d-aaa9-e271c4d07dbf_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXII\u2013XXIII Geometry (582ea44c-450a-4f8d-aaa9-e271c4d07dbf_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/59d5d1de-4d87-4d5f-b6e8-f370418aac7c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XVII Geometry (59d5d1de-4d87-4d5f-b6e8-f370418aac7c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/6a9731cf-3630-4085-9e1f-fbbb62be5f86_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXIV Geometry (6a9731cf-3630-4085-9e1f-fbbb62be5f86_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/65dd4a2c-83c8-406e-80e0-c5739c914d72_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cuccium Geometry (65dd4a2c-83c8-406e-80e0-c5739c914d72_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/67a73fcf-c538-4be4-ad79-d07738392157_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Crumerum Geometry (67a73fcf-c538-4be4-ad79-d07738392157_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/67f13b3c-7970-47e5-9a13-0475850f4859_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Szentendre-Hunka (Burgus Cirpi 3) Geometry (67f13b3c-7970-47e5-9a13-0475850f4859_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/7e46c6a7-cec2-4c69-9771-adda533b0c4e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XII. XXXIII Geometry (7e46c6a7-cec2-4c69-9771-adda533b0c4e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/70fade86-1df9-4788-9031-22b8b2859802_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Castra Aquincum Geometry (70fade86-1df9-4788-9031-22b8b2859802_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/720b2968-30a2-4064-b4fa-8c03319d8da4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell T\u00f3k\u00f3d Geometry (720b2968-30a2-4064-b4fa-8c03319d8da4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/730f9c25-4a40-40bb-b024-f47ee5fee0b2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 3 Geometry (730f9c25-4a40-40bb-b024-f47ee5fee0b2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/76934c47-0f61-4c41-b7da-bae004dcd600_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Szentendre Geometry (76934c47-0f61-4c41-b7da-bae004dcd600_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/77971d57-fb4f-451d-801d-cde9a3cff37c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Eszterg\u00f3m\u2013Hideglel\u0151skereszt Geometry (77971d57-fb4f-451d-801d-cde9a3cff37c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/78288c69-7f4c-4695-8afe-d85373d165d3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ediavum 1 Geometry (78288c69-7f4c-4695-8afe-d85373d165d3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8ccf2b06-441e-4974-a378-7b84fff89963_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Tahit\u00f3tfalu-Balhav\u00e1r (Burgus Cirpi 5) Geometry (8ccf2b06-441e-4974-a378-7b84fff89963_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8cf7eb08-1d66-415e-93b1-5f65c1596362_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 9 Geometry (8cf7eb08-1d66-415e-93b1-5f65c1596362_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8eaee659-3e88-4e1e-8e3c-a359094d1b3c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 4 Geometry (8eaee659-3e88-4e1e-8e3c-a359094d1b3c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8091de45-36a8-4d2c-943c-0321332e968b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XXXIV Geometry (8091de45-36a8-4d2c-943c-0321332e968b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/84a42426-dd41-44b2-8fe7-d4713c9d05bc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Alm\u00e1sf\u00fczit\u0151 Geometry (84a42426-dd41-44b2-8fe7-d4713c9d05bc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/84b562b2-9d51-41ad-864b-9ffdf947a6f1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Szeb (Burgus Selva 34) Geometry (84b562b2-9d51-41ad-864b-9ffdf947a6f1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/84c7ce47-f5dd-48fc-aa78-b06fc3411cbc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Dunak\u00f6ml\u0151d (Burgus Lussenium 1) Geometry (84c7ce47-f5dd-48fc-aa78-b06fc3411cbc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8585be01-6da3-4ad6-b096-bb26f5ca24d7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Brigetio \u2013 Lager XIX Geometry (8585be01-6da3-4ad6-b096-bb26f5ca24d7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/86cf0854-1813-41b2-a723-eb4432d32047_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Matrica 5 Geometry (86cf0854-1813-41b2-a723-eb4432d32047_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/86e75d60-d1e3-477f-9830-1c916530259b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 4 Geometry (86e75d60-d1e3-477f-9830-1c916530259b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/86758651-756d-46e3-844b-1c63f0ca4b71_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ad Statuas (V\u00e1rdomb) Geometry (86758651-756d-46e3-844b-1c63f0ca4b71_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/9cf455ad-e38e-44f9-b39c-d1a74510f1db_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Brigetio 2 Geometry (9cf455ad-e38e-44f9-b39c-d1a74510f1db_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/9eed5204-45ce-4045-952e-61d45661a85f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Annamatia 16 Geometry (9eed5204-45ce-4045-952e-61d45661a85f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/92032e81-4a76-41a8-8ea2-2b46d20a41af_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus contra Florentiam (Burgus Lugio 1) Geometry (92032e81-4a76-41a8-8ea2-2b46d20a41af_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/92976c89-b9e1-435f-868c-c30ff6865f5c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Selva 37 Geometry (92976c89-b9e1-435f-868c-c30ff6865f5c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/93b40ea3-5477-4f15-98e8-acbc0af281da_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Visegr\u00e1d\u2013Gizellamajor Geometry (93b40ea3-5477-4f15-98e8-acbc0af281da_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/95587312-7c23-4442-ad00-c5538303050b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Matrica 2 Geometry (95587312-7c23-4442-ad00-c5538303050b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/96831b8f-ad80-40ae-be10-377cb43c8e13_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Meh\u00e1cs-K\u00f6lked Geometry (96831b8f-ad80-40ae-be10-377cb43c8e13_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/99ec9c4c-7b84-463b-9238-adce834944f4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Erdlager I\u017ea-Le\u00e1nyv\u00e1r 5 Geometry (99ec9c4c-7b84-463b-9238-adce834944f4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/a7acd349-b010-4e98-9c6b-fef6f3261439",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ver\u0151cemaros-Dunamez\u0151 (Burgus Selva 38) (a7acd349-b010-4e98-9c6b-fef6f3261439)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/aac6edc5-ee7a-439f-9c8f-15161f1da3fa",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Crumerum 1 (aac6edc5-ee7a-439f-9c8f-15161f1da3fa)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b3fa7419-213b-4c0d-894c-60ead538ded7",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Matrica 4 (b3fa7419-213b-4c0d-894c-60ead538ded7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b4552074-7af6-417e-8e11-16b1f9b99239",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 30 (b4552074-7af6-417e-8e11-16b1f9b99239)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b64e9a5a-8008-4c71-af9a-894e99297eae",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 6 (b64e9a5a-8008-4c71-af9a-894e99297eae)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bb99f739-3d76-4ad8-bcb5-faa5b3b9cb4a",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Crumerum 4 (bb99f739-3d76-4ad8-bcb5-faa5b3b9cb4a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/c0bec1d6-4c1d-418b-9e0e-65925fa336d3",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ediavum 4 (c0bec1d6-4c1d-418b-9e0e-65925fa336d3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/c6eb07df-12fd-4960-a6e4-b4464af11b93",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 36 (c6eb07df-12fd-4960-a6e4-b4464af11b93)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/c89d6dce-617e-4dde-af58-edffd18cc475",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Szentendre-Dera (Burgus Ulcisia 1) (c89d6dce-617e-4dde-af58-edffd18cc475)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/cb77b215-4444-4ae4-9bf5-5f7adbaa8f7e",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 3 (cb77b215-4444-4ae4-9bf5-5f7adbaa8f7e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d2a6a9e8-16b7-4752-84da-59b8698fc473",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 2 (d2a6a9e8-16b7-4752-84da-59b8698fc473)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d6339f99-934d-4b59-810c-7d58ea02e3a4",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Lussenium 9 (d6339f99-934d-4b59-810c-7d58ea02e3a4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/d8a59c0d-c174-483a-aafd-cfba60949cc0",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 28 (d8a59c0d-c174-483a-aafd-cfba60949cc0)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/dc50aae7-600e-4e9b-a943-3d5006792377",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 6 (dc50aae7-600e-4e9b-a943-3d5006792377)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/dd9522f6-89b3-46eb-8d7f-17ca28d6e246",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 2 (dd9522f6-89b3-46eb-8d7f-17ca28d6e246)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ddf22685-0725-48ab-b760-5482cb2b7c90",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 8 (ddf22685-0725-48ab-b760-5482cb2b7c90)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ddf85cbc-b977-4a78-9bf2-341cb79199da",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Lussenium 10 (ddf85cbc-b977-4a78-9bf2-341cb79199da)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e3435e7e-bdc1-4581-9925-a1f2b13443ce",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 35 (e3435e7e-bdc1-4581-9925-a1f2b13443ce)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e71cd557-0236-4104-8d10-a315099b2a07",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Le\u00e1nyfalu (Burgus Cirpi 2) (e71cd557-0236-4104-8d10-a315099b2a07)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/e826e179-72ab-4757-b9ed-d30aaa754d55",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Crumerum 2 (e826e179-72ab-4757-b9ed-d30aaa754d55)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ea929cfa-33c0-41f6-833d-ac879c894ab5",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Budakal\u00e1sz-Luppa cs\u00e1rda (Burgus Ulcisia 2) (ea929cfa-33c0-41f6-833d-ac879c894ab5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ec9c2a26-68eb-462e-a6ab-6e0d56e8820c",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 5 (ec9c2a26-68eb-462e-a6ab-6e0d56e8820c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ef0914ec-b616-479b-8607-2ea54225966a",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 7 (Burgus L\u00e9anyv\u00e1r) (ef0914ec-b616-479b-8607-2ea54225966a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f962a887-5a55-40d4-83af-f2321b799d9e",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 10 (f962a887-5a55-40d4-83af-f2321b799d9e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/059621de-aced-4f31-b388-3d4e9dadfe0b",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Lussenium 6 (059621de-aced-4f31-b388-3d4e9dadfe0b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1c714ff8-dc67-4597-bf36-6dce46a74393",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Lussenium 3 (1c714ff8-dc67-4597-bf36-6dce46a74393)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/16be76aa-3967-42b8-89ea-1f668371abee",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ediavum 3 (16be76aa-3967-42b8-89ea-1f668371abee)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/172630af-fb8c-4695-992a-a0ac1c461d49",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Lussenium 12 (172630af-fb8c-4695-992a-a0ac1c461d49)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1811cd3b-bf1b-4dbc-944b-d8204301e5dc",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Lugio 5 (1811cd3b-bf1b-4dbc-944b-d8204301e5dc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2d2db48b-cc09-4399-8610-30b8cb48ab8f",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 3 (2d2db48b-cc09-4399-8610-30b8cb48ab8f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2ff8ad6b-fcf5-49c5-ad90-69e6e76b2b1b",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 11 (2ff8ad6b-fcf5-49c5-ad90-69e6e76b2b1b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/25525110-3f2a-4450-9b09-c9df59404a62",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Szigetmonoster-Her\u00e1ny (Burgus Ulcisia 8) (25525110-3f2a-4450-9b09-c9df59404a62)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/260868e7-addd-4bb2-b695-c369de33100b",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 1 (260868e7-addd-4bb2-b695-c369de33100b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/303d6873-c7b8-4f0b-a367-e66f8150c479",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ediavum 6 (303d6873-c7b8-4f0b-a367-e66f8150c479)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/36051d15-90fb-4a93-8fcb-bc12ed784ee2",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ba\u010d-B\u00e1cs (36051d15-90fb-4a93-8fcb-bc12ed784ee2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/37bf73a0-5706-43d8-b5fc-0e873805c5ce",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 5 (37bf73a0-5706-43d8-b5fc-0e873805c5ce)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3768e771-d594-4c59-a591-5b92f15213dc",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Dunakeszi (Burgus Ulcisia 9) (3768e771-d594-4c59-a591-5b92f15213dc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/4a6e3d7d-82a6-4d35-be6a-dad4641dfc47",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 9 (4a6e3d7d-82a6-4d35-be6a-dad4641dfc47)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/4d39c5d5-3f47-4e6c-8480-3b4425168403",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 8 (4d39c5d5-3f47-4e6c-8480-3b4425168403)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/46cab0c4-6fa1-4a8c-8229-da1f890cc620",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Brigetio 1 (46cab0c4-6fa1-4a8c-8229-da1f890cc620)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/494b6ca6-68da-4339-a97f-6e80720a7b18",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Altinum 1 (494b6ca6-68da-4339-a97f-6e80720a7b18)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5bd9cb91-b2bd-4003-b22b-091b1ee9c13f",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ediavum 5 (5bd9cb91-b2bd-4003-b22b-091b1ee9c13f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5fa40012-5c4f-4750-b813-d8bbd78fc91c",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Crumerum 3 (5fa40012-5c4f-4750-b813-d8bbd78fc91c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5fada9b6-7dcf-46b9-8e17-744826645c97",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Brigetio 4 (5fada9b6-7dcf-46b9-8e17-744826645c97)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/50456667-b575-467c-b665-fb76f09aabf7",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 8 (50456667-b575-467c-b665-fb76f09aabf7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5165a106-cb40-4036-a14e-c918a0d44c32",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 24 (5165a106-cb40-4036-a14e-c918a0d44c32)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/528c4ba1-54df-4e32-9c98-8f1b36a3e939",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 11 (528c4ba1-54df-4e32-9c98-8f1b36a3e939)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/55008a76-bd84-4f1f-900a-f81fcdd1fd28",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus B\u00f6lcske (Burgus Annamatia 12) (55008a76-bd84-4f1f-900a-f81fcdd1fd28)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/67f13b3c-7970-47e5-9a13-0475850f4859",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Szentendre-Hunka (Burgus Cirpi 3) (67f13b3c-7970-47e5-9a13-0475850f4859)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/78288c69-7f4c-4695-8afe-d85373d165d3",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ediavum 1 (78288c69-7f4c-4695-8afe-d85373d165d3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8ccf2b06-441e-4974-a378-7b84fff89963",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Tahit\u00f3tfalu-Balhav\u00e1r (Burgus Cirpi 5) (8ccf2b06-441e-4974-a378-7b84fff89963)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8cf7eb08-1d66-415e-93b1-5f65c1596362",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 9 (8cf7eb08-1d66-415e-93b1-5f65c1596362)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/8eaee659-3e88-4e1e-8e3c-a359094d1b3c",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 4 (8eaee659-3e88-4e1e-8e3c-a359094d1b3c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/84b562b2-9d51-41ad-864b-9ffdf947a6f1",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Szeb (Burgus Selva 34) (84b562b2-9d51-41ad-864b-9ffdf947a6f1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/84c7ce47-f5dd-48fc-aa78-b06fc3411cbc",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Dunak\u00f6ml\u0151d (Burgus Lussenium 1) (84c7ce47-f5dd-48fc-aa78-b06fc3411cbc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/86cf0854-1813-41b2-a723-eb4432d32047",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Matrica 5 (86cf0854-1813-41b2-a723-eb4432d32047)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/9cf455ad-e38e-44f9-b39c-d1a74510f1db",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Brigetio 2 (9cf455ad-e38e-44f9-b39c-d1a74510f1db)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/9eed5204-45ce-4045-952e-61d45661a85f",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Annamatia 16 (9eed5204-45ce-4045-952e-61d45661a85f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/92032e81-4a76-41a8-8ea2-2b46d20a41af",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus contra Florentiam (Burgus Lugio 1) (92032e81-4a76-41a8-8ea2-2b46d20a41af)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/92976c89-b9e1-435f-868c-c30ff6865f5c",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Selva 37 (92976c89-b9e1-435f-868c-c30ff6865f5c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/95587312-7c23-4442-ad00-c5538303050b",
        "parent": "http://archaeoinformatics.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Matrica 2 (95587312-7c23-4442-ad00-c5538303050b)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Burgus",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Burgus [61]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/b80a9dba-dbeb-4ffd-ac12-95534d5991a4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Kiseroszi (b80a9dba-dbeb-4ffd-ac12-95534d5991a4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bcfa7793-709f-4adc-b800-e178dae99e01",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Visegr\u00e1d\u2013Sibrik (bcfa7793-709f-4adc-b800-e178dae99e01)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/bf3f0671-28ae-42ac-b38f-8bde297ecbe0",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Alm\u00e1sf\u00fczit\u0151 (bf3f0671-28ae-42ac-b38f-8bde297ecbe0)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ceac5833-9f93-4540-8d66-cda88c604156",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Eszterg\u00f3m (ceac5833-9f93-4540-8d66-cda88c604156)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/cebe94e2-6643-48c7-865b-9381171938de",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell G\u00f6d-B\u00f3csa\u00fajtelep (cebe94e2-6643-48c7-865b-9381171938de)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/eab5ab59-b69e-4a20-a483-1d5594664c42",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Teutoburgium (eab5ab59-b69e-4a20-a483-1d5594664c42)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/eec105bf-53e5-4e52-97b6-b5bb8de5c871",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Annamatia (eec105bf-53e5-4e52-97b6-b5bb8de5c871)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f1166725-ce99-4ce4-a509-7144191015eb",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Mursa (f1166725-ce99-4ce4-a509-7144191015eb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f258df11-3d47-4948-be41-91a17b96f0fe",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ad Militare (f258df11-3d47-4948-be41-91a17b96f0fe)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/f5d17f90-36df-4e7d-ae74-e5ebdb7acc91",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Dunabogd\u00e1ny (f5d17f90-36df-4e7d-ae74-e5ebdb7acc91)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ff287ea8-ee40-4278-b52a-cadb07d30702",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ad NEvas (ff287ea8-ee40-4278-b52a-cadb07d30702)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/ff2fe46e-5c22-40e7-a07d-d414ef6ec2af",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Alisca (ff2fe46e-5c22-40e7-a07d-d414ef6ec2af)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/0413cfe0-cf75-4743-96ad-6d956299eeba",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Visegr\u00e1d\u2013Sibrik (0413cfe0-cf75-4743-96ad-6d956299eeba)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/06c52928-baee-4d80-a8a4-c89b61cc2a91",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell I\u017ea-Le\u00e1nyv\u00e1r (06c52928-baee-4d80-a8a4-c89b61cc2a91)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/075b9029-1d31-4389-9588-2aae0563bb07",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell CampEna (075b9029-1d31-4389-9588-2aae0563bb07)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1a7707ca-f256-415f-9f96-40728dc5a119",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Intercisa (1a7707ca-f256-415f-9f96-40728dc5a119)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/1e971c18-5164-4185-ae03-777eda973af9",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell I\u017ea-Le\u00e1nyv\u00e1r (1e971c18-5164-4185-ae03-777eda973af9)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/17c2efe9-6ce7-4afc-9f5b-45cc9f7f1965",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Lussenium (17c2efe9-6ce7-4afc-9f5b-45cc9f7f1965)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/19da5b58-c63f-4d5b-a86f-685d3dce9c15",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cernacum (19da5b58-c63f-4d5b-a86f-685d3dce9c15)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/2b00f4aa-0cd9-4bf0-882a-4ccc73329d1d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Alm\u00e1sf\u00fczit\u0151 (2b00f4aa-0cd9-4bf0-882a-4ccc73329d1d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3bcf2479-8e0d-4cf0-996f-174a25282a47",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Dunabogd\u00e1ny (3bcf2479-8e0d-4cf0-996f-174a25282a47)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3d1b9e48-8058-47bb-b6b8-912148844075",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Budapest-Albertfalva (3d1b9e48-8058-47bb-b6b8-912148844075)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/3f41e388-9ea2-4b35-81a8-9e601d6601a7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Vetus Salina (3f41e388-9ea2-4b35-81a8-9e601d6601a7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/515a97f2-f638-463a-b163-c11e67424da6",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Matrica (515a97f2-f638-463a-b163-c11e67424da6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/5241ed3a-fece-484f-b511-f8c0f67e85a6",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Dunaszekcs\u0151 (5241ed3a-fece-484f-b511-f8c0f67e85a6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/65dd4a2c-83c8-406e-80e0-c5739c914d72",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cuccium (65dd4a2c-83c8-406e-80e0-c5739c914d72)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/67a73fcf-c538-4be4-ad79-d07738392157",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Crumerum (67a73fcf-c538-4be4-ad79-d07738392157)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/720b2968-30a2-4064-b4fa-8c03319d8da4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell T\u00f3k\u00f3d (720b2968-30a2-4064-b4fa-8c03319d8da4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/76934c47-0f61-4c41-b7da-bae004dcd600",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Szentendre (76934c47-0f61-4c41-b7da-bae004dcd600)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/77971d57-fb4f-451d-801d-cde9a3cff37c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Eszterg\u00f3m\u2013Hideglel\u0151skereszt (77971d57-fb4f-451d-801d-cde9a3cff37c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/84a42426-dd41-44b2-8fe7-d4713c9d05bc",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Alm\u00e1sf\u00fczit\u0151 (84a42426-dd41-44b2-8fe7-d4713c9d05bc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/86758651-756d-46e3-844b-1c63f0ca4b71",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ad Statuas (V\u00e1rdomb) (86758651-756d-46e3-844b-1c63f0ca4b71)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/93b40ea3-5477-4f15-98e8-acbc0af281da",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Visegr\u00e1d\u2013Gizellamajor (93b40ea3-5477-4f15-98e8-acbc0af281da)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/pannoniainferior/96831b8f-ad80-40ae-be10-377cb43c8e13",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Meh\u00e1cs-K\u00f6lked (96831b8f-ad80-40ae-be10-377cb43c8e13)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/LimesNoricumFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Noricum Features (LimesNoricumFeatures)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/LegionaryCamp_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "LegionaryCamp Instances Collection (LegionaryCamp_collection)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/LimesNoricumGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Limes Noricum Geometries (LimesNoricumGeometries)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/a41296e5-fca2-4ce3-843e-a17871a5d85b",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Wallsee-Nordhang (a41296e5-fca2-4ce3-843e-a17871a5d85b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c75941f8-009d-4c4c-8505-0298a88a6fd4",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Hollenburg (c75941f8-009d-4c4c-8505-0298a88a6fd4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ec211670-f0d2-4c53-b8a5-3b8830b0aaa1",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Rossatz (ec211670-f0d2-4c53-b8a5-3b8830b0aaa1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed3e59f2-e683-4800-9e27-92d82cbc867f",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Neumarkt (ed3e59f2-e683-4800-9e27-92d82cbc867f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0a1032df-bf53-47e7-9da6-e56c2b97caa8",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Hirschleitengraben (0a1032df-bf53-47e7-9da6-e56c2b97caa8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/130bed48-35dd-45d9-9fc0-bc50fb465c60",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Melk-Spielberg (130bed48-35dd-45d9-9fc0-bc50fb465c60)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/26f3beb0-0cb4-42a8-849d-38455b2d1b79",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Passau-Haibach (26f3beb0-0cb4-42a8-849d-38455b2d1b79)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4c745423-da08-4414-93b9-bf0df2382c76",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Sommerau (4c745423-da08-4414-93b9-bf0df2382c76)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/48f27058-f4ea-41f3-8319-888f59ffdd2d",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Au-Rotte Hof (48f27058-f4ea-41f3-8319-888f59ffdd2d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/5028c3bd-efbb-43b3-a8f6-a30ab9844d1b",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Aggsbach-Dorf/Blashauskapelle (5028c3bd-efbb-43b3-a8f6-a30ab9844d1b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/58660c1d-c211-4cf7-90d6-b53a5957addc",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus St. Lorenz (58660c1d-c211-4cf7-90d6-b53a5957addc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/71192446-c179-4a45-9214-44ef9a3a996b",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Bacharnsdorf (71192446-c179-4a45-9214-44ef9a3a996b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8135cb6b-504d-4cae-9835-b9a7b0613163",
        "parent": "http://onto.squirrel.link/ontology#Burgus",
        "type": "geoinstance",
        "text": "Burgus Ybbs (8135cb6b-504d-4cae-9835-b9a7b0613163)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#Burgus",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Burgus [13]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/a41296e5-fca2-4ce3-843e-a17871a5d85b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Wallsee-Nordhang Geometry (a41296e5-fca2-4ce3-843e-a17871a5d85b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/b3e7d110-127b-45a7-9195-5e8a694e4862_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Arelape Geometry (b3e7d110-127b-45a7-9195-5e8a694e4862_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c2b75037-aed0-49b4-9e1c-39944efa5cb4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm S\u00e4usenstein Geometry (c2b75037-aed0-49b4-9e1c-39944efa5cb4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c589a7d3-f71c-4051-ac8b-c701902d3610_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm/Stra\u00dfenstation Maria Gugging Geometry (c589a7d3-f71c-4051-ac8b-c701902d3610_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c75941f8-009d-4c4c-8505-0298a88a6fd4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Hollenburg Geometry (c75941f8-009d-4c4c-8505-0298a88a6fd4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee S\u00fcd Geometry (cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cfcfa4b0-501f-4563-8157-3c76054014a4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Favianis Geometry (cfcfa4b0-501f-4563-8157-3c76054014a4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d0ef2a62-6c85-44ce-a995-65ab6d5a5f43_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Boiotro Geometry (d0ef2a62-6c85-44ce-a995-65ab6d5a5f43_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d151609e-cb90-4faf-a74b-54d2f52e01a1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Comagena Geometry (d151609e-cb90-4faf-a74b-54d2f52e01a1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d8bcb543-3948-43fd-937b-2782138b9deb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Wallsee Geometry (d8bcb543-3948-43fd-937b-2782138b9deb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ec211670-f0d2-4c53-b8a5-3b8830b0aaa1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Rossatz Geometry (ec211670-f0d2-4c53-b8a5-3b8830b0aaa1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed3e59f2-e683-4800-9e27-92d82cbc867f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Neumarkt Geometry (ed3e59f2-e683-4800-9e27-92d82cbc867f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed6779f9-6afd-4f34-b7ff-0a6e731d4846_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Freinberg Geometry (ed6779f9-6afd-4f34-b7ff-0a6e731d4846_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0a1032df-bf53-47e7-9da6-e56c2b97caa8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Hirschleitengraben Geometry (0a1032df-bf53-47e7-9da6-e56c2b97caa8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0e8a5ba3-887e-4540-92c3-d35fef2bd579_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Eferding Geometry (0e8a5ba3-887e-4540-92c3-d35fef2bd579_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0f5c8dda-88a9-48ad-bf8f-e72f216a4066_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Zwentendorf Geometry (0f5c8dda-88a9-48ad-bf8f-e72f216a4066_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/1d31fa5a-61cc-42df-b958-a5e9d83555a3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee West Geometry (1d31fa5a-61cc-42df-b958-a5e9d83555a3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/130bed48-35dd-45d9-9fc0-bc50fb465c60_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Melk-Spielberg Geometry (130bed48-35dd-45d9-9fc0-bc50fb465c60_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/13572025-f4dc-4503-8aad-72050202752b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Melk Geometry (13572025-f4dc-4503-8aad-72050202752b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2bf44917-dd67-4ec8-9240-513476cdb60c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Augustianis Geometry (2bf44917-dd67-4ec8-9240-513476cdb60c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2e2c9ca5-61d1-459e-a151-fad5d81dd1b7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Locus Felicis Geometry (2e2c9ca5-61d1-459e-a151-fad5d81dd1b7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/203478fb-4a78-48c7-bd75-97b667f6e707_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Eberranna Geometry (203478fb-4a78-48c7-bd75-97b667f6e707_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2471711a-fb59-436f-ade5-b61e4fd67732_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Kobling See Geometry (2471711a-fb59-436f-ade5-b61e4fd67732_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/26f3beb0-0cb4-42a8-849d-38455b2d1b79_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Passau-Haibach Geometry (26f3beb0-0cb4-42a8-849d-38455b2d1b79_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/32371ca3-a871-475e-8d85-49ca8c26da3d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Lauriacum Geometry (32371ca3-a871-475e-8d85-49ca8c26da3d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4c745423-da08-4414-93b9-bf0df2382c76_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Sommerau Geometry (4c745423-da08-4414-93b9-bf0df2382c76_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4043d889-d9be-47b7-b9d3-afede593d67a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Sarling Geometry (4043d889-d9be-47b7-b9d3-afede593d67a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/48f27058-f4ea-41f3-8319-888f59ffdd2d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Au-Rotte Hof Geometry (48f27058-f4ea-41f3-8319-888f59ffdd2d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/5028c3bd-efbb-43b3-a8f6-a30ab9844d1b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Aggsbach-Dorf/Blashauskapelle Geometry (5028c3bd-efbb-43b3-a8f6-a30ab9844d1b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/51607531-4767-41c1-94ca-86d68572c7c2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Sankt Marienkirchen Geometry (51607531-4767-41c1-94ca-86d68572c7c2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/58660c1d-c211-4cf7-90d6-b53a5957addc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus St. Lorenz Geometry (58660c1d-c211-4cf7-90d6-b53a5957addc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/64755b3a-9ff6-4c12-b9fb-778e3bde5b1f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Legionslager Albing Geometry (64755b3a-9ff6-4c12-b9fb-778e3bde5b1f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/7e23ed9a-8efc-48ec-a294-a7cc9b8285dc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Milit\u00e4rziegelei Sankt Marienkirchen Geometry (7e23ed9a-8efc-48ec-a294-a7cc9b8285dc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/71192446-c179-4a45-9214-44ef9a3a996b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Bacharnsdorf Geometry (71192446-c179-4a45-9214-44ef9a3a996b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/78b044f5-8a10-47ed-acf0-74658affbf22_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Lentia Geometry (78b044f5-8a10-47ed-acf0-74658affbf22_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8f964055-7a95-4e88-bcef-5bd3a5824de9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cannabiaca Geometry (8f964055-7a95-4e88-bcef-5bd3a5824de9_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/80943cf4-f263-44f2-bd49-2a2c405b3be6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Schl\u00f6gen Geometry (80943cf4-f263-44f2-bd49-2a2c405b3be6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8135cb6b-504d-4cae-9835-b9a7b0613163_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burgus Ybbs Geometry (8135cb6b-504d-4cae-9835-b9a7b0613163_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/88218e4a-aa6a-421c-84ea-a646790b80cb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Wachturm Kobling-Rossgraben Geometry (88218e4a-aa6a-421c-84ea-a646790b80cb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/9f8f4e96-12d9-449b-b9ab-6e6080e34c9f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Boiodurum Geometry (9f8f4e96-12d9-449b-b9ab-6e6080e34c9f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/b3e7d110-127b-45a7-9195-5e8a694e4862",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Arelape (b3e7d110-127b-45a7-9195-5e8a694e4862)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cfcfa4b0-501f-4563-8157-3c76054014a4",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Favianis (cfcfa4b0-501f-4563-8157-3c76054014a4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d0ef2a62-6c85-44ce-a995-65ab6d5a5f43",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Boiotro (d0ef2a62-6c85-44ce-a995-65ab6d5a5f43)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d151609e-cb90-4faf-a74b-54d2f52e01a1",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Comagena (d151609e-cb90-4faf-a74b-54d2f52e01a1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/d8bcb543-3948-43fd-937b-2782138b9deb",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Wallsee (d8bcb543-3948-43fd-937b-2782138b9deb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0e8a5ba3-887e-4540-92c3-d35fef2bd579",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Eferding (0e8a5ba3-887e-4540-92c3-d35fef2bd579)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/0f5c8dda-88a9-48ad-bf8f-e72f216a4066",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Zwentendorf (0f5c8dda-88a9-48ad-bf8f-e72f216a4066)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/13572025-f4dc-4503-8aad-72050202752b",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Melk (13572025-f4dc-4503-8aad-72050202752b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2bf44917-dd67-4ec8-9240-513476cdb60c",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Augustianis (2bf44917-dd67-4ec8-9240-513476cdb60c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/78b044f5-8a10-47ed-acf0-74658affbf22",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Lentia (78b044f5-8a10-47ed-acf0-74658affbf22)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/8f964055-7a95-4e88-bcef-5bd3a5824de9",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cannabiaca (8f964055-7a95-4e88-bcef-5bd3a5824de9)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/9f8f4e96-12d9-449b-b9ab-6e6080e34c9f",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Boiodurum  (9f8f4e96-12d9-449b-b9ab-6e6080e34c9f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c2b75037-aed0-49b4-9e1c-39944efa5cb4",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm S\u00e4usenstein (c2b75037-aed0-49b4-9e1c-39944efa5cb4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/c589a7d3-f71c-4051-ac8b-c701902d3610",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm/Stra\u00dfenstation Maria Gugging (c589a7d3-f71c-4051-ac8b-c701902d3610)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee S\u00fcd (cb7b6f3a-395f-48b6-a6e3-247e6c5a2ff5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/ed6779f9-6afd-4f34-b7ff-0a6e731d4846",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Freinberg  (ed6779f9-6afd-4f34-b7ff-0a6e731d4846)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/1d31fa5a-61cc-42df-b958-a5e9d83555a3",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Maria Ponsee West (1d31fa5a-61cc-42df-b958-a5e9d83555a3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2471711a-fb59-436f-ade5-b61e4fd67732",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Kobling See (2471711a-fb59-436f-ade5-b61e4fd67732)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/4043d889-d9be-47b7-b9d3-afede593d67a",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Sarling (4043d889-d9be-47b7-b9d3-afede593d67a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/88218e4a-aa6a-421c-84ea-a646790b80cb",
        "parent": "http://onto.squirrel.link/ontology#Watchtower",
        "type": "geoinstance",
        "text": "Wachturm Kobling-Rossgraben (88218e4a-aa6a-421c-84ea-a646790b80cb)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#Watchtower",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Watchtower [8]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/2e2c9ca5-61d1-459e-a151-fad5d81dd1b7",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Locus Felicis (2e2c9ca5-61d1-459e-a151-fad5d81dd1b7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/32371ca3-a871-475e-8d85-49ca8c26da3d",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Lauriacum (32371ca3-a871-475e-8d85-49ca8c26da3d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/7e23ed9a-8efc-48ec-a294-a7cc9b8285dc",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Milit\u00e4rziegelei Sankt Marienkirchen (7e23ed9a-8efc-48ec-a294-a7cc9b8285dc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/203478fb-4a78-48c7-bd75-97b667f6e707",
        "parent": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Eberranna (203478fb-4a78-48c7-bd75-97b667f6e707)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/51607531-4767-41c1-94ca-86d68572c7c2",
        "parent": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Sankt Marienkirchen (51607531-4767-41c1-94ca-86d68572c7c2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/80943cf4-f263-44f2-bd49-2a2c405b3be6",
        "parent": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Schl\u00f6gen (80943cf4-f263-44f2-bd49-2a2c405b3be6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/Kleinkastell",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Kleinkastell [3]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/noricum/64755b3a-9ff6-4c12-b9fb-778e3bde5b1f",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Legionslager Albing (64755b3a-9ff6-4c12-b9fb-778e3bde5b1f)",
        "data": {}
      },
      {
        "id": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "LegionaryCamp [10]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/LimesGermaniaInferiorFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Germania Inferior Features (LimesGermaniaInferiorFeatures)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/LimesGermaniaInferiorGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Limes Germania Inferior Geometries (LimesGermaniaInferiorGeometries)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/a2bea8d5-01f2-4d4f-b0b3-0137a51c5441",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Nigrum Pullum (a2bea8d5-01f2-4d4f-b0b3-0137a51c5441)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b1c81794-733f-4548-9c7c-40619f39f58f",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Novaesium (b1c81794-733f-4548-9c7c-40619f39f58f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/c3af096e-b097-435b-8948-9e7a81d3ce97",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Laurium (castellum) (c3af096e-b097-435b-8948-9e7a81d3ce97)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d091de62-a690-4c5b-af5e-29a6a38ca333",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Matilo (d091de62-a690-4c5b-af5e-29a6a38ca333)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d3acc4c8-e6b7-4c77-b2f4-c2b1d5cdd027",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Harenatium (d3acc4c8-e6b7-4c77-b2f4-c2b1d5cdd027)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/e9210076-3cb4-4e97-9c0b-b7511cf30369",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Novaesium (e9210076-3cb4-4e97-9c0b-b7511cf30369)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f2095095-501b-40e6-b4b9-0fd7bf49431d",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Fletio (f2095095-501b-40e6-b4b9-0fd7bf49431d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f6fe77e2-ac41-417a-a8cd-705d53ee1c7b",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Marschlager Ermelo (f6fe77e2-ac41-417a-a8cd-705d53ee1c7b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/28cb0c9b-8e4e-4c1b-9b62-79cc16fb0165",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Gelduba (28cb0c9b-8e4e-4c1b-9b62-79cc16fb0165)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/29148bab-cc6d-4d71-b6db-3121d9c01ba6",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Haus B\u00fcrgel (29148bab-cc6d-4d71-b6db-3121d9c01ba6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/4d1c3b62-2769-4a71-890d-ab244ae44ee2",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Catualium (4d1c3b62-2769-4a71-890d-ab244ae44ee2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/60c223e7-10c7-4ae6-981a-685d252a56ff",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Quadriburgium (60c223e7-10c7-4ae6-981a-685d252a56ff)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/944e27f0-40f0-4745-8ec9-4a5a3390a179",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Flottenkastell Alteburg (944e27f0-40f0-4745-8ec9-4a5a3390a179)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/96c96491-656c-4e07-90bb-c40dcd8d5ce8",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoinstance",
        "text": "Grinnes (96c96491-656c-4e07-90bb-c40dcd8d5ce8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/a2bea8d5-01f2-4d4f-b0b3-0137a51c5441_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Nigrum Pullum Geometry (a2bea8d5-01f2-4d4f-b0b3-0137a51c5441_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/a5b3488f-1d25-489b-ab65-3c3473cbff07_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Praetorium Agrippinae Geometry (a5b3488f-1d25-489b-ab65-3c3473cbff07_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/aee24259-67ad-49be-922e-16c646e5d5de_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Quadriburgium Geometry (aee24259-67ad-49be-922e-16c646e5d5de_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b1c81794-733f-4548-9c7c-40619f39f58f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (b1c81794-733f-4548-9c7c-40619f39f58f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b35331ba-9289-456b-a0f0-e04e2f24755c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Huissen Geometry (b35331ba-9289-456b-a0f0-e04e2f24755c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b3852c1f-95cb-47f4-8a70-96b20f0f2b15_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Asciburgium Geometry (b3852c1f-95cb-47f4-8a70-96b20f0f2b15_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b5c44356-76fc-4692-b29b-e67fe18f2cd3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Ceuclum Geometry (b5c44356-76fc-4692-b29b-e67fe18f2cd3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b9b6bdae-7bde-416f-af8e-47c048122b75_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Overbetuwe-Randwijk Geometry (b9b6bdae-7bde-416f-af8e-47c048122b75_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ba996587-ba3f-446e-b757-1e3f9ca14a85_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Asciburgium Geometry (ba996587-ba3f-446e-b757-1e3f9ca14a85_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/bcc18f1b-a0fa-4244-bd91-cdfa04a98af3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Albaniana Geometry (bcc18f1b-a0fa-4244-bd91-cdfa04a98af3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/be832c50-11e4-42ce-8569-141cebb46b55_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Bonna Geometry (be832c50-11e4-42ce-8569-141cebb46b55_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/c0732773-aaca-4918-adaf-de32f7a8dffb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Asciburgium Geometry (c0732773-aaca-4918-adaf-de32f7a8dffb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/c3af096e-b097-435b-8948-9e7a81d3ce97_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Laurium (castellum) Geometry (c3af096e-b097-435b-8948-9e7a81d3ce97_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ce2e748b-0abb-49a7-aa86-1362051c9d24_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Velsen II Geometry (ce2e748b-0abb-49a7-aa86-1362051c9d24_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ce4744d7-582d-4ca7-8b98-7e58ddb44dcd_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Quadriburgium Geometry (ce4744d7-582d-4ca7-8b98-7e58ddb44dcd_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d091de62-a690-4c5b-af5e-29a6a38ca333_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Matilo Geometry (d091de62-a690-4c5b-af5e-29a6a38ca333_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d1a5fa4c-859d-442d-9d02-ac7df0fe0400_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Bonna Geometry (d1a5fa4c-859d-442d-9d02-ac7df0fe0400_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d3acc4c8-e6b7-4c77-b2f4-c2b1d5cdd027_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Harenatium Geometry (d3acc4c8-e6b7-4c77-b2f4-c2b1d5cdd027_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d5c06a3b-fc3e-4618-9acc-0fe01e9f606f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Werthausen Geometry (d5c06a3b-fc3e-4618-9acc-0fe01e9f606f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/de22933b-7705-4754-866a-58b91e5b6853_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Lugdunum Batavorum (Kastell) Geometry (de22933b-7705-4754-866a-58b91e5b6853_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/e0ca600e-5d30-4965-af63-874b48814d3d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Wesel-B\u00fcderich Geometry (e0ca600e-5d30-4965-af63-874b48814d3d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/e9210076-3cb4-4e97-9c0b-b7511cf30369_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (e9210076-3cb4-4e97-9c0b-b7511cf30369_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ee4fb6bf-1cac-4f05-bc6e-74188071c2fb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Ulpia Noviomagus Batavorum Geometry (ee4fb6bf-1cac-4f05-bc6e-74188071c2fb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f169beec-2f70-4687-94c4-a07c1a2ae01d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Castra Herculis Geometry (f169beec-2f70-4687-94c4-a07c1a2ae01d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f2095095-501b-40e6-b4b9-0fd7bf49431d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Fletio Geometry (f2095095-501b-40e6-b4b9-0fd7bf49431d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f6cee380-f253-4202-bcab-5f3e3c4ac67d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Vetera Geometry (f6cee380-f253-4202-bcab-5f3e3c4ac67d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f6fe77e2-ac41-417a-a8cd-705d53ee1c7b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Marschlager Ermelo Geometry (f6fe77e2-ac41-417a-a8cd-705d53ee1c7b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f92cc454-3ac7-400e-ad3f-9cd247965f37_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (f92cc454-3ac7-400e-ad3f-9cd247965f37_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/fb3300d3-ba95-4efe-909f-618ff028e521_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (fb3300d3-ba95-4efe-909f-618ff028e521_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/0d55bdb0-f758-4679-88f2-b3a76e920ab3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Apud aram Ubiorum Geometry (0d55bdb0-f758-4679-88f2-b3a76e920ab3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/0fecff6f-8513-4e0f-9c4f-752b70fd3459_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Traiectum (Utrecht) Geometry (0fecff6f-8513-4e0f-9c4f-752b70fd3459_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/07605059-9ec3-4bb9-840f-425320e9e2ed_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Overbetuwe-Driel Geometry (07605059-9ec3-4bb9-840f-425320e9e2ed_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/078eb33e-1ac3-4f60-9be2-5b115c4f8328_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Ulpia Noviomagus Batavorum Geometry (078eb33e-1ac3-4f60-9be2-5b115c4f8328_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/1a5bddd1-5aa5-4d1d-8ac3-29ab4043ee8b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Castra Herculis Geometry (1a5bddd1-5aa5-4d1d-8ac3-29ab4043ee8b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/19b3c83b-abbd-41ef-9d15-12faef9fb8c5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "R\u00f6merlager Wesseling Geometry (19b3c83b-abbd-41ef-9d15-12faef9fb8c5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/2b586bad-d60a-4409-8105-4385fdb028e3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (2b586bad-d60a-4409-8105-4385fdb028e3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/2d4a3c93-9ed4-4ca6-be0c-5d0fe8969b4e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell am Reckberg Geometry (2d4a3c93-9ed4-4ca6-be0c-5d0fe8969b4e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/2d666246-3029-4fa9-a05b-97217811ceb3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Ulpia Noviomagus Batavorum Geometry (2d666246-3029-4fa9-a05b-97217811ceb3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/21bc93a2-8eed-4293-ae8d-a31b30633c82_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Gelduba Geometry (21bc93a2-8eed-4293-ae8d-a31b30633c82_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/223fc314-e105-41fd-aceb-5949a7d241a3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Gelduba Geometry (223fc314-e105-41fd-aceb-5949a7d241a3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/27df7c06-b16d-4f57-a2f3-c5d4544cf58f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Praetorium Agrippinae Geometry (27df7c06-b16d-4f57-a2f3-c5d4544cf58f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/273cf769-9f36-4758-a7df-32c77892bef6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Levefanum Geometry (273cf769-9f36-4758-a7df-32c77892bef6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/28cb0c9b-8e4e-4c1b-9b62-79cc16fb0165_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Gelduba Geometry (28cb0c9b-8e4e-4c1b-9b62-79cc16fb0165_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/28dd8b38-e0bd-4e1c-8677-ae68768d4d57_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Carvium Geometry (28dd8b38-e0bd-4e1c-8677-ae68768d4d57_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/28927d19-a924-4a7f-864d-bca1bd51b781_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Bonna Geometry (28927d19-a924-4a7f-864d-bca1bd51b781_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/29148bab-cc6d-4d71-b6db-3121d9c01ba6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Haus B\u00fcrgel Geometry (29148bab-cc6d-4d71-b6db-3121d9c01ba6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/32084127-bb17-4ba3-9b39-cb41ff591a33_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Gelduba Geometry (32084127-bb17-4ba3-9b39-cb41ff591a33_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/4b55f485-4cd2-4a8d-b130-aa4adc882d7c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Duiven-Loowaard Geometry (4b55f485-4cd2-4a8d-b130-aa4adc882d7c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/4d1c3b62-2769-4a71-890d-ab244ae44ee2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Catualium Geometry (4d1c3b62-2769-4a71-890d-ab244ae44ee2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/432caec7-bb27-4da5-8c0d-ddaafcd51769_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Steincheshof Geometry (432caec7-bb27-4da5-8c0d-ddaafcd51769_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/47f2a125-dd8e-4617-8301-b1198eb59c91_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Vetera Geometry (47f2a125-dd8e-4617-8301-b1198eb59c91_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/495c7990-9252-4402-89b5-a3cc8d74ab4c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Rigomagus Geometry (495c7990-9252-4402-89b5-a3cc8d74ab4c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/5b6b0c76-d187-47ca-b7c3-5ef87c5facc3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Castra Herculis Geometry (5b6b0c76-d187-47ca-b7c3-5ef87c5facc3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/5ee3e9c6-7445-4b01-afeb-72e943754083_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Fectio Geometry (5ee3e9c6-7445-4b01-afeb-72e943754083_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/526deee6-c498-4b0b-a0ee-c97178c138fc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Maldegem-Vake Geometry (526deee6-c498-4b0b-a0ee-c97178c138fc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/57fef844-bff8-4abb-8305-044f66f57452_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Ockenburgh Geometry (57fef844-bff8-4abb-8305-044f66f57452_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/6af7d576-d110-4c72-ab74-cd9138a94ab3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Durnomagus Geometry (6af7d576-d110-4c72-ab74-cd9138a94ab3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/60c223e7-10c7-4ae6-981a-685d252a56ff_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Quadriburgium Geometry (60c223e7-10c7-4ae6-981a-685d252a56ff_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/650f8dbc-79c6-4809-aa57-d51581434084_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (650f8dbc-79c6-4809-aa57-d51581434084_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/7ae857f7-6fdf-42c8-9779-0d0d7a0c369e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Carvo Geometry (7ae857f7-6fdf-42c8-9779-0d0d7a0c369e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/7bdcc559-03d3-47fc-9592-3323842bf83b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Mannaricium Geometry (7bdcc559-03d3-47fc-9592-3323842bf83b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/7c66f14f-3d29-4e88-a717-cc68d29f2a96_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell am Reckberg Geometry (7c66f14f-3d29-4e88-a717-cc68d29f2a96_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/71dbde54-b2e6-4b60-a1f5-2a08cd10bfb0_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Rigomagus Geometry (71dbde54-b2e6-4b60-a1f5-2a08cd10bfb0_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8c713b0d-4442-4a1c-9177-0d2fa9ab36f5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (8c713b0d-4442-4a1c-9177-0d2fa9ab36f5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8c99c0b6-c1e4-4eb1-bb81-312b3207f245_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Velsen I Geometry (8c99c0b6-c1e4-4eb1-bb81-312b3207f245_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8ed02cac-0316-4894-a17d-1add206f3fa9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Castra Herculis Geometry (8ed02cac-0316-4894-a17d-1add206f3fa9_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8f9fc336-1f16-4461-898b-ce5ce0a28921_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Burginatium Geometry (8f9fc336-1f16-4461-898b-ce5ce0a28921_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/823bacf7-11b7-48a3-b3f2-6a780a2da387_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Fectio Geometry (823bacf7-11b7-48a3-b3f2-6a780a2da387_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/9d9f674d-4ea3-4d53-aa59-3e181900a8e8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Novaesium Geometry (9d9f674d-4ea3-4d53-aa59-3e181900a8e8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/9dc7e240-c1e1-4e4f-b758-515aaf784e55_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Asciburgium Geometry (9dc7e240-c1e1-4e4f-b758-515aaf784e55_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/9ec23b64-edcf-42a2-ac2e-22e0e0a2101e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kleinkastell Bodegraven Geometry (9ec23b64-edcf-42a2-ac2e-22e0e0a2101e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/93c44eaf-2945-411a-a323-186aa29ee068_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Aardenburg Geometry (93c44eaf-2945-411a-a323-186aa29ee068_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/944e27f0-40f0-4745-8ec9-4a5a3390a179_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Flottenkastell Alteburg Geometry (944e27f0-40f0-4745-8ec9-4a5a3390a179_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/952fce3e-40f2-4b96-944f-d7ee313dc056_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Castra Herculis Geometry (952fce3e-40f2-4b96-944f-d7ee313dc056_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/96c96491-656c-4e07-90bb-c40dcd8d5ce8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Grinnes Geometry (96c96491-656c-4e07-90bb-c40dcd8d5ce8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/99897f8a-545d-4441-8b19-5666ede911b9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Quadriburgium Geometry (99897f8a-545d-4441-8b19-5666ede911b9_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/a5b3488f-1d25-489b-ab65-3c3473cbff07",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Praetorium Agrippinae (a5b3488f-1d25-489b-ab65-3c3473cbff07)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/aee24259-67ad-49be-922e-16c646e5d5de",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Quadriburgium (aee24259-67ad-49be-922e-16c646e5d5de)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b35331ba-9289-456b-a0f0-e04e2f24755c",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Huissen (b35331ba-9289-456b-a0f0-e04e2f24755c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b3852c1f-95cb-47f4-8a70-96b20f0f2b15",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Asciburgium (b3852c1f-95cb-47f4-8a70-96b20f0f2b15)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b5c44356-76fc-4692-b29b-e67fe18f2cd3",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Ceuclum (b5c44356-76fc-4692-b29b-e67fe18f2cd3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/b9b6bdae-7bde-416f-af8e-47c048122b75",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Overbetuwe-Randwijk (b9b6bdae-7bde-416f-af8e-47c048122b75)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ba996587-ba3f-446e-b757-1e3f9ca14a85",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Asciburgium (ba996587-ba3f-446e-b757-1e3f9ca14a85)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/bcc18f1b-a0fa-4244-bd91-cdfa04a98af3",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Albaniana (bcc18f1b-a0fa-4244-bd91-cdfa04a98af3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/be832c50-11e4-42ce-8569-141cebb46b55",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Bonna (be832c50-11e4-42ce-8569-141cebb46b55)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/c0732773-aaca-4918-adaf-de32f7a8dffb",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Asciburgium (c0732773-aaca-4918-adaf-de32f7a8dffb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ce2e748b-0abb-49a7-aa86-1362051c9d24",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Velsen II (ce2e748b-0abb-49a7-aa86-1362051c9d24)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ce4744d7-582d-4ca7-8b98-7e58ddb44dcd",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Quadriburgium (ce4744d7-582d-4ca7-8b98-7e58ddb44dcd)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d1a5fa4c-859d-442d-9d02-ac7df0fe0400",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Bonna (d1a5fa4c-859d-442d-9d02-ac7df0fe0400)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/de22933b-7705-4754-866a-58b91e5b6853",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Lugdunum Batavorum (Kastell) (de22933b-7705-4754-866a-58b91e5b6853)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/e0ca600e-5d30-4965-af63-874b48814d3d",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Wesel-B\u00fcderich (e0ca600e-5d30-4965-af63-874b48814d3d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f169beec-2f70-4687-94c4-a07c1a2ae01d",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Castra Herculis (f169beec-2f70-4687-94c4-a07c1a2ae01d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/0fecff6f-8513-4e0f-9c4f-752b70fd3459",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Traiectum (Utrecht) (0fecff6f-8513-4e0f-9c4f-752b70fd3459)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/07605059-9ec3-4bb9-840f-425320e9e2ed",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Overbetuwe-Driel (07605059-9ec3-4bb9-840f-425320e9e2ed)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/078eb33e-1ac3-4f60-9be2-5b115c4f8328",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Ulpia Noviomagus Batavorum (078eb33e-1ac3-4f60-9be2-5b115c4f8328)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/1a5bddd1-5aa5-4d1d-8ac3-29ab4043ee8b",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Castra Herculis (1a5bddd1-5aa5-4d1d-8ac3-29ab4043ee8b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/19b3c83b-abbd-41ef-9d15-12faef9fb8c5",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "R\u00f6merlager Wesseling (19b3c83b-abbd-41ef-9d15-12faef9fb8c5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/2b586bad-d60a-4409-8105-4385fdb028e3",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Novaesium (2b586bad-d60a-4409-8105-4385fdb028e3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/21bc93a2-8eed-4293-ae8d-a31b30633c82",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Gelduba (21bc93a2-8eed-4293-ae8d-a31b30633c82)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/223fc314-e105-41fd-aceb-5949a7d241a3",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Gelduba (223fc314-e105-41fd-aceb-5949a7d241a3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/27df7c06-b16d-4f57-a2f3-c5d4544cf58f",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Praetorium Agrippinae (27df7c06-b16d-4f57-a2f3-c5d4544cf58f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/273cf769-9f36-4758-a7df-32c77892bef6",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Levefanum (273cf769-9f36-4758-a7df-32c77892bef6)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/28dd8b38-e0bd-4e1c-8677-ae68768d4d57",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Carvium (28dd8b38-e0bd-4e1c-8677-ae68768d4d57)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/28927d19-a924-4a7f-864d-bca1bd51b781",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Bonna (28927d19-a924-4a7f-864d-bca1bd51b781)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/32084127-bb17-4ba3-9b39-cb41ff591a33",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Gelduba (32084127-bb17-4ba3-9b39-cb41ff591a33)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/4b55f485-4cd2-4a8d-b130-aa4adc882d7c",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Duiven-Loowaard (4b55f485-4cd2-4a8d-b130-aa4adc882d7c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/432caec7-bb27-4da5-8c0d-ddaafcd51769",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Steincheshof (432caec7-bb27-4da5-8c0d-ddaafcd51769)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/495c7990-9252-4402-89b5-a3cc8d74ab4c",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Rigomagus (495c7990-9252-4402-89b5-a3cc8d74ab4c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/5b6b0c76-d187-47ca-b7c3-5ef87c5facc3",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Castra Herculis (5b6b0c76-d187-47ca-b7c3-5ef87c5facc3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/5ee3e9c6-7445-4b01-afeb-72e943754083",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Fectio (5ee3e9c6-7445-4b01-afeb-72e943754083)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/526deee6-c498-4b0b-a0ee-c97178c138fc",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Maldegem-Vake (526deee6-c498-4b0b-a0ee-c97178c138fc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/6af7d576-d110-4c72-ab74-cd9138a94ab3",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Durnomagus (6af7d576-d110-4c72-ab74-cd9138a94ab3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/650f8dbc-79c6-4809-aa57-d51581434084",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Novaesium (650f8dbc-79c6-4809-aa57-d51581434084)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/7ae857f7-6fdf-42c8-9779-0d0d7a0c369e",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Carvo (7ae857f7-6fdf-42c8-9779-0d0d7a0c369e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/7bdcc559-03d3-47fc-9592-3323842bf83b",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Mannaricium (7bdcc559-03d3-47fc-9592-3323842bf83b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8c99c0b6-c1e4-4eb1-bb81-312b3207f245",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Velsen I (8c99c0b6-c1e4-4eb1-bb81-312b3207f245)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8ed02cac-0316-4894-a17d-1add206f3fa9",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Castra Herculis (8ed02cac-0316-4894-a17d-1add206f3fa9)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8f9fc336-1f16-4461-898b-ce5ce0a28921",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Burginatium (8f9fc336-1f16-4461-898b-ce5ce0a28921)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/823bacf7-11b7-48a3-b3f2-6a780a2da387",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Fectio (823bacf7-11b7-48a3-b3f2-6a780a2da387)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/9dc7e240-c1e1-4e4f-b758-515aaf784e55",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Asciburgium (9dc7e240-c1e1-4e4f-b758-515aaf784e55)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/93c44eaf-2945-411a-a323-186aa29ee068",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Aardenburg (93c44eaf-2945-411a-a323-186aa29ee068)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/952fce3e-40f2-4b96-944f-d7ee313dc056",
        "parent": "http://onto.squirrel.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Castra Herculis (952fce3e-40f2-4b96-944f-d7ee313dc056)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/d5c06a3b-fc3e-4618-9acc-0fe01e9f606f",
        "parent": "http://lod.squirrel.link/data/limes/germaniainferior/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Werthausen (d5c06a3b-fc3e-4618-9acc-0fe01e9f606f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/2d4a3c93-9ed4-4ca6-be0c-5d0fe8969b4e",
        "parent": "http://lod.squirrel.link/data/limes/germaniainferior/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell am Reckberg (2d4a3c93-9ed4-4ca6-be0c-5d0fe8969b4e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/57fef844-bff8-4abb-8305-044f66f57452",
        "parent": "http://lod.squirrel.link/data/limes/germaniainferior/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Ockenburgh (57fef844-bff8-4abb-8305-044f66f57452)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/7c66f14f-3d29-4e88-a717-cc68d29f2a96",
        "parent": "http://lod.squirrel.link/data/limes/germaniainferior/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell am Reckberg (7c66f14f-3d29-4e88-a717-cc68d29f2a96)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/9ec23b64-edcf-42a2-ac2e-22e0e0a2101e",
        "parent": "http://lod.squirrel.link/data/limes/germaniainferior/Kleinkastell",
        "type": "geoinstance",
        "text": "Kleinkastell Bodegraven (9ec23b64-edcf-42a2-ac2e-22e0e0a2101e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/99897f8a-545d-4441-8b19-5666ede911b9",
        "parent": "http://lod.squirrel.link/data/limes/germaniainferior/Kleinkastell",
        "type": "geoinstance",
        "text": "Quadriburgium (99897f8a-545d-4441-8b19-5666ede911b9)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/Kleinkastell",
        "parent": "http://archaeoinformatics.link/ontology#Limes",
        "type": "geoclass",
        "text": "Kleinkastell [6]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/ee4fb6bf-1cac-4f05-bc6e-74188071c2fb",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Ulpia Noviomagus Batavorum (ee4fb6bf-1cac-4f05-bc6e-74188071c2fb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f6cee380-f253-4202-bcab-5f3e3c4ac67d",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Vetera (f6cee380-f253-4202-bcab-5f3e3c4ac67d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/f92cc454-3ac7-400e-ad3f-9cd247965f37",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Novaesium (f92cc454-3ac7-400e-ad3f-9cd247965f37)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/fb3300d3-ba95-4efe-909f-618ff028e521",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Novaesium (fb3300d3-ba95-4efe-909f-618ff028e521)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/0d55bdb0-f758-4679-88f2-b3a76e920ab3",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Apud aram Ubiorum (0d55bdb0-f758-4679-88f2-b3a76e920ab3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/2d666246-3029-4fa9-a05b-97217811ceb3",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Ulpia Noviomagus Batavorum (2d666246-3029-4fa9-a05b-97217811ceb3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/47f2a125-dd8e-4617-8301-b1198eb59c91",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Vetera (47f2a125-dd8e-4617-8301-b1198eb59c91)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/8c713b0d-4442-4a1c-9177-0d2fa9ab36f5",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Novaesium (8c713b0d-4442-4a1c-9177-0d2fa9ab36f5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/9d9f674d-4ea3-4d53-aa59-3e181900a8e8",
        "parent": "http://onto.squirrel.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Novaesium (9d9f674d-4ea3-4d53-aa59-3e181900a8e8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/germaniainferior/71dbde54-b2e6-4b60-a1f5-2a08cd10bfb0",
        "parent": "http://hadrianswall.squirrel.link/ontology#Fort",
        "type": "geoinstance",
        "text": "Rigomagus (71dbde54-b2e6-4b60-a1f5-2a08cd10bfb0)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/LimesDaicusFeatures",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Limes Daicus Features (LimesDaicusFeatures)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/LimesDaicusGeometries",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Limes Daicus Geometries (LimesDaicusGeometries)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/a6ec226a-3c2a-444a-9221-839201e1135f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos I (a6ec226a-3c2a-444a-9221-839201e1135f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/aadec8db-70f9-4c40-833a-2a7c39c631d2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103tunele (aadec8db-70f9-4c40-833a-2a7c39c631d2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ae458e0d-85d0-4756-b265-db4db5bb7fe2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Inl\u0103ceni (ae458e0d-85d0-4756-b265-db4db5bb7fe2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/af909713-68f5-4b6d-89d5-03f7fc7fd5c1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u0103mbotin (Castra Traiana) (af909713-68f5-4b6d-89d5-03f7fc7fd5c1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0524f84-a9d2-45fa-9f69-d8164ad73440",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Olteni (b0524f84-a9d2-45fa-9f69-d8164ad73440)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0cccdd1-2478-40bc-add2-a0e1bad88feb",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sl\u0103veni (b0cccdd1-2478-40bc-add2-a0e1bad88feb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b5cf0c45-ec51-4710-a03a-75e7dc30a7a3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Romanasi (Largiana) (b5cf0c45-ec51-4710-a03a-75e7dc30a7a3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b6e369cd-722a-4a1c-a984-538bb26f3777",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Buciumi (b6e369cd-722a-4a1c-a984-538bb26f3777)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bd14e9f3-dd38-4329-a655-60b00fd8d5b7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sighisoara (bd14e9f3-dd38-4329-a655-60b00fd8d5b7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Odorheiul Secuiesc (bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3451d14-c4ee-42be-b918-af9735167f5f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sarateni (c3451d14-c4ee-42be-b918-af9735167f5f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3a471a8-ab67-4e9c-b127-1eff017b0cb4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Albota (c3a471a8-ab67-4e9c-b127-1eff017b0cb4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c8ecf3da-c535-41df-b06e-298cd8542633",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Teregova (Ad Pannonios) (c8ecf3da-c535-41df-b06e-298cd8542633)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/cba75304-f136-465d-90fb-56dff3acc018",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Eno\u015fe\u015fti (Acidava) (cba75304-f136-465d-90fb-56dff3acc018)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d2adbbd5-f4a7-471d-a817-b28e37bcbfb1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Banatska Palanka (d2adbbd5-f4a7-471d-a817-b28e37bcbfb1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d92ef45f-91c4-442e-b279-61f17fbccb7c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ili\u015fua (Arcobara) (d92ef45f-91c4-442e-b279-61f17fbccb7c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e0423dfe-4fdf-4bf6-8453-97d7bee4d031",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ghioca (e0423dfe-4fdf-4bf6-8453-97d7bee4d031)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e2573931-d743-40c3-a6b7-08ffeb244daa",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Valea Urluii (e2573931-d743-40c3-a6b7-08ffeb244daa)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e3899f66-1234-4a44-b16e-2ead1e0bf696",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cincsor (e3899f66-1234-4a44-b16e-2ead1e0bf696)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e69e6cb2-cded-446c-b159-daec78476f43",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103ciul\u0103te\u0219ti (e69e6cb2-cded-446c-b159-daec78476f43)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e811fe5a-92d2-43a0-a572-51bc5942e242",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Aizis (e811fe5a-92d2-43a0-a572-51bc5942e242)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ec646e12-636f-4c8c-96c2-0f46833adf1c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u0103carii de Jos (ec646e12-636f-4c8c-96c2-0f46833adf1c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ed79872f-dcb1-48d0-a008-5a3c65432a67",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Aradul Nou (ed79872f-dcb1-48d0-a008-5a3c65432a67)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f35f2d3f-8925-4139-9e9b-cf07ee5aaecb",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Borosneu Mare (f35f2d3f-8925-4139-9e9b-cf07ee5aaecb)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f42bb013-afeb-4044-9886-ece53cc813d4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sutoru (f42bb013-afeb-4044-9886-ece53cc813d4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f81e10af-8e41-447d-b601-dcba5311199b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Re\u015fca (Romula/Malva) (f81e10af-8e41-447d-b601-dcba5311199b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f8305d66-9429-43c0-b6e3-73721df9986b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Urluieni II (f8305d66-9429-43c0-b6e3-73721df9986b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell V\u0103r\u0103dia (fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ab5e10e-4fb0-4854-835b-389043840ee0",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Li\u015fteava (0ab5e10e-4fb0-4854-835b-389043840ee0)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ccd99fd-62d1-4978-873a-106b1f5e3880",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ruc\u0103r (0ccd99fd-62d1-4978-873a-106b1f5e3880)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0e91c0e7-3991-4a45-89ed-382f7c74731a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos II (0e91c0e7-3991-4a45-89ed-382f7c74731a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0f25c729-a3c7-4cb4-b063-ff72c0124b4f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Urluieni I (0f25c729-a3c7-4cb4-b063-ff72c0124b4f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103\u015feiu (Samum) (0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/000d5176-6b9e-4065-a44f-d7b8f75b1199",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Or\u0103\u015ftioara de Sus (000d5176-6b9e-4065-a44f-d7b8f75b1199)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/01189de6-024d-4022-96ff-eec7e4efee0c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Or\u0219ova (Dierna) (01189de6-024d-4022-96ff-eec7e4efee0c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0203af0b-bc52-4f9f-b490-b2bc3fe431fc",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cigm\u0103u  (0203af0b-bc52-4f9f-b490-b2bc3fe431fc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/06eb8de4-750e-4ed9-ad04-9bf16d61c975",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Momote\u015fti (Rusidava) (06eb8de4-750e-4ed9-ad04-9bf16d61c975)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/096a9a4c-020f-4ce0-a4a6-993d50d08fea",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cop\u0103ceni (Praetorium I) (096a9a4c-020f-4ce0-a4a6-993d50d08fea)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1b4b9c1f-cb64-4c02-976d-61c2147b0705",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u00e2ul Vadului (1b4b9c1f-cb64-4c02-976d-61c2147b0705)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1c936059-6af8-4f03-8e18-cc61f529c5f3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastelle von Porolissum (1c936059-6af8-4f03-8e18-cc61f529c5f3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1d8f65a8-c30b-40f1-9676-2e1145691ac3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Abrud (Alburnus Maior) (1d8f65a8-c30b-40f1-9676-2e1145691ac3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1e218e82-f264-4241-a8e0-5efd9a1ec8a4",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Islaz-Razovica (1e218e82-f264-4241-a8e0-5efd9a1ec8a4)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/10b043a5-bb2b-48af-a168-84046185d6f7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Pinoasa (10b043a5-bb2b-48af-a168-84046185d6f7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/120e3991-1f39-4359-b810-37bb24aff05c",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Romita (120e3991-1f39-4359-b810-37bb24aff05c)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1795d125-e071-4153-b07e-e147bb19ad65",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Comal\u0103u (1795d125-e071-4153-b07e-e147bb19ad65)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/19360a61-a15a-4d56-a100-f3be57e93ff1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Mofleni (Pelendava) (19360a61-a15a-4d56-a100-f3be57e93ff1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/2c2fb600-f249-469e-a025-1961edf5132d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u0103zboieni (2c2fb600-f249-469e-a025-1961edf5132d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/22bf9a4e-a715-43f7-9fd0-4a60b8b77288",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tia Mare (22bf9a4e-a715-43f7-9fd0-4a60b8b77288)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3af3a2c4-8038-482d-9fa9-a0e90584ef6d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bulci (3af3a2c4-8038-482d-9fa9-a0e90584ef6d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3b51185a-d7ca-4c22-b85d-a021b3727c4d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Br\u00e2ncovene\u015fti (3b51185a-d7ca-4c22-b85d-a021b3727c4d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3f7e0b8c-1a5f-423f-85da-536d87bbdcc8",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Orheiul Bistri\u0163ei (3f7e0b8c-1a5f-423f-85da-536d87bbdcc8)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/322e89c0-f571-4be4-a08c-84b35efb69e5",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u00e2npaul (322e89c0-f571-4be4-a08c-84b35efb69e5)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/34d0d768-2d4d-42b3-82ae-e29bad5c1eed",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Gresia (34d0d768-2d4d-42b3-82ae-e29bad5c1eed)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/340738ca-7444-4896-a0fd-cd9e6806eb30",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Mehadia (Praetorium) (340738ca-7444-4896-a0fd-cd9e6806eb30)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3680e065-f377-4f4d-a9d6-84523dcb1727",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bre\u021bcu  (3680e065-f377-4f4d-a9d6-84523dcb1727)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Fl\u0103m\u0103nda (Poiana) (4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4df4edbc-facd-42bd-b05e-076f94ae693b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell IIone\u0219tii Govorii (Pons Aluti) (4df4edbc-facd-42bd-b05e-076f94ae693b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4e013c45-7445-4ea6-8356-2c9cc9e7ac6e",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Gil\u0103u (4e013c45-7445-4ea6-8356-2c9cc9e7ac6e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4198c975-e14a-4fb3-9b2e-7be9e145ecac",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Jiblea (4198c975-e14a-4fb3-9b2e-7be9e145ecac)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/42d9c007-47e1-4b2a-ab2c-c381f93cac96",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Grebenac (42d9c007-47e1-4b2a-ab2c-c381f93cac96)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Plesa (46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/47a7d25e-6315-4256-b257-c2dfaea5e42f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Z\u0103voi (Acmonia ?) (47a7d25e-6315-4256-b257-c2dfaea5e42f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5a43030f-b985-4444-8cf9-3e4a0b132d79",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell V\u00e2rtop (5a43030f-b985-4444-8cf9-3e4a0b132d79)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5b90b8d5-ba6e-4789-94d2-db823824acbf",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103ineni (Pons Vetus ?) (5b90b8d5-ba6e-4789-94d2-db823824acbf)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5d0fac8e-53ae-4ae7-92a2-dd419eee0dce",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Hoghiz (5d0fac8e-53ae-4ae7-92a2-dd419eee0dce)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e33b468-4135-46b4-babc-99f5c423f966",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Szeged (5e33b468-4135-46b4-babc-99f5c423f966)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e6a65c9-32dd-4581-b6ab-a95afdc4d061",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel I (5e6a65c9-32dd-4581-b6ab-a95afdc4d061)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5ea0f057-026f-4556-97f5-3e0e3a9471c3",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Gherla (5ea0f057-026f-4556-97f5-3e0e3a9471c3)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/50320dbe-929c-40e3-aebd-f8f257d6472a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Castranova (50320dbe-929c-40e3-aebd-f8f257d6472a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell S\u00e2nnicolau Mare (59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa I (6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/64ae9ea8-9dca-4e22-b32b-c2f95fd80b44",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell F\u00e2lfani (64ae9ea8-9dca-4e22-b32b-c2f95fd80b44)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6689fc0e-01ff-4dbc-b3ed-49e35a3d397a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bologa (Resculum) (6689fc0e-01ff-4dbc-b3ed-49e35a3d397a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ro\u0219iorii de Vede (7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7aa137c0-3763-4bd3-a1ec-bd8a88b3d786",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u0103lug\u0103reni (7aa137c0-3763-4bd3-a1ec-bd8a88b3d786)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7b05b48b-cd48-4c66-916e-6ea581179843",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Islaz-Verdea (7b05b48b-cd48-4c66-916e-6ea581179843)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7c3bf06c-8f79-457e-b56f-77da98c7a69b",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa II (7c3bf06c-8f79-457e-b56f-77da98c7a69b)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cadca30-bfd9-4628-9916-c20eecafa356",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Stolniceni (7cadca30-bfd9-4628-9916-c20eecafa356)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cb289bf-4a31-467d-9c9d-4271a8dc55c9",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Boi\u0163a (Caput Stenarum)  (7cb289bf-4a31-467d-9c9d-4271a8dc55c9)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7dd1742c-a3a5-4494-b148-1d435d754d5d",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Vr\u0161ac (7dd1742c-a3a5-4494-b148-1d435d754d5d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/70d51242-571e-43ce-bd01-3bffca8cb4be",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Feldioara (70d51242-571e-43ce-bd01-3bffca8cb4be)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/707cb61a-d04e-4c7b-a620-6587db82f116",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Purc\u0103reni (707cb61a-d04e-4c7b-a620-6587db82f116)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7422f9df-da23-450f-8eac-db2d8dfca42e",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Livezile (7422f9df-da23-450f-8eac-db2d8dfca42e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8c5f1f84-f11a-48f0-8e9a-c629c7d346e2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel II (8c5f1f84-f11a-48f0-8e9a-c629c7d346e2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8f823c04-d42b-49ec-879d-2c446d575885",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Voine\u015fti (8f823c04-d42b-49ec-879d-2c446d575885)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8fa245f8-ffe5-4e74-b259-410c7be91afd",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tite\u015fti (8fa245f8-ffe5-4e74-b259-410c7be91afd)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/80ce787b-1ab0-42e7-b03c-c641d3767774",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Perisani (80ce787b-1ab0-42e7-b03c-c641d3767774)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/815f5c63-8478-4aac-bafb-11eaafa9a923",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Dupljaja (815f5c63-8478-4aac-bafb-11eaafa9a923)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/86dae60a-c827-480d-bb38-04a480b9ea01",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Cenad (86dae60a-c827-480d-bb38-04a480b9ea01)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a084d40-bf5c-42fa-8aa7-8c678524c631",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Racovi\u0163a (Praetorium II) (9a084d40-bf5c-42fa-8aa7-8c678524c631)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a118e00-be2c-4c2d-a9f9-8cb86170e3d1",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u0103d\u0103cine\u015fti (9a118e00-be2c-4c2d-a9f9-8cb86170e3d1)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ac48ee9-00b6-46ab-a597-b6aa5f2d784a",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bivolari (Arutela) (9ac48ee9-00b6-46ab-a597-b6aa5f2d784a)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9b62118c-9936-42f2-a6e7-49f649c937f2",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Bumbe\u015fti (9b62118c-9936-42f2-a6e7-49f649c937f2)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Criste\u015fti (9ba7d74c-175e-48c8-9403-dbbdd650ed22)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9d1c0c0d-98f5-4728-86ee-4288dde6d0fa",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell R\u00e2\u0219nov  (9d1c0c0d-98f5-4728-86ee-4288dde6d0fa)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9f76d5fd-4ee3-4985-9fb6-c22bfdf43436",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Putineiu (9f76d5fd-4ee3-4985-9fb6-c22bfdf43436)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/918ef494-4408-4a91-8ee0-61f6087ffee7",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Surducul Mare (918ef494-4408-4a91-8ee0-61f6087ffee7)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/986efe66-cf8a-4b64-a488-ad95d0f2dd79",
        "parent": "http://archaeoinformatics.link/ontology#MilitaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tih\u0103u (986efe66-cf8a-4b64-a488-ad95d0f2dd79)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/a6ec226a-3c2a-444a-9221-839201e1135f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos I Geometry (a6ec226a-3c2a-444a-9221-839201e1135f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/aadec8db-70f9-4c40-833a-2a7c39c631d2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103tunele Geometry (aadec8db-70f9-4c40-833a-2a7c39c631d2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ae458e0d-85d0-4756-b265-db4db5bb7fe2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Inl\u0103ceni Geometry (ae458e0d-85d0-4756-b265-db4db5bb7fe2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/af909713-68f5-4b6d-89d5-03f7fc7fd5c1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u0103mbotin (Castra Traiana) Geometry (af909713-68f5-4b6d-89d5-03f7fc7fd5c1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0524f84-a9d2-45fa-9f69-d8164ad73440_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Olteni Geometry (b0524f84-a9d2-45fa-9f69-d8164ad73440_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b0cccdd1-2478-40bc-add2-a0e1bad88feb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sl\u0103veni Geometry (b0cccdd1-2478-40bc-add2-a0e1bad88feb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b5cf0c45-ec51-4710-a03a-75e7dc30a7a3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Romanasi (Largiana) Geometry (b5cf0c45-ec51-4710-a03a-75e7dc30a7a3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/b6e369cd-722a-4a1c-a984-538bb26f3777_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Buciumi Geometry (b6e369cd-722a-4a1c-a984-538bb26f3777_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bd14e9f3-dd38-4329-a655-60b00fd8d5b7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sighisoara Geometry (bd14e9f3-dd38-4329-a655-60b00fd8d5b7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Odorheiul Secuiesc Geometry (bf339c52-9ac1-4b87-94ab-2dc33bc7d3e4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3451d14-c4ee-42be-b918-af9735167f5f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sarateni Geometry (c3451d14-c4ee-42be-b918-af9735167f5f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c3a471a8-ab67-4e9c-b127-1eff017b0cb4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Albota Geometry (c3a471a8-ab67-4e9c-b127-1eff017b0cb4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/c8ecf3da-c535-41df-b06e-298cd8542633_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Teregova (Ad Pannonios) Geometry (c8ecf3da-c535-41df-b06e-298cd8542633_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/cba75304-f136-465d-90fb-56dff3acc018_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Eno\u015fe\u015fti (Acidava) Geometry (cba75304-f136-465d-90fb-56dff3acc018_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d2adbbd5-f4a7-471d-a817-b28e37bcbfb1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Banatska Palanka Geometry (d2adbbd5-f4a7-471d-a817-b28e37bcbfb1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/d92ef45f-91c4-442e-b279-61f17fbccb7c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ili\u015fua (Arcobara) Geometry (d92ef45f-91c4-442e-b279-61f17fbccb7c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e0423dfe-4fdf-4bf6-8453-97d7bee4d031_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ghioca Geometry (e0423dfe-4fdf-4bf6-8453-97d7bee4d031_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e2573931-d743-40c3-a6b7-08ffeb244daa_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Valea Urluii Geometry (e2573931-d743-40c3-a6b7-08ffeb244daa_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e3899f66-1234-4a44-b16e-2ead1e0bf696_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cincsor Geometry (e3899f66-1234-4a44-b16e-2ead1e0bf696_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e69e6cb2-cded-446c-b159-daec78476f43_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103ciul\u0103te\u0219ti Geometry (e69e6cb2-cded-446c-b159-daec78476f43_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/e811fe5a-92d2-43a0-a572-51bc5942e242_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Aizis Geometry (e811fe5a-92d2-43a0-a572-51bc5942e242_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ec646e12-636f-4c8c-96c2-0f46833adf1c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u0103carii de Jos Geometry (ec646e12-636f-4c8c-96c2-0f46833adf1c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ed79872f-dcb1-48d0-a008-5a3c65432a67_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Aradul Nou Geometry (ed79872f-dcb1-48d0-a008-5a3c65432a67_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f35f2d3f-8925-4139-9e9b-cf07ee5aaecb_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Borosneu Mare Geometry (f35f2d3f-8925-4139-9e9b-cf07ee5aaecb_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f42bb013-afeb-4044-9886-ece53cc813d4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sutoru Geometry (f42bb013-afeb-4044-9886-ece53cc813d4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f81e10af-8e41-447d-b601-dcba5311199b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Re\u015fca (Romula/Malva) Geometry (f81e10af-8e41-447d-b601-dcba5311199b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/f8305d66-9429-43c0-b6e3-73721df9986b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Urluieni II Geometry (f8305d66-9429-43c0-b6e3-73721df9986b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell V\u0103r\u0103dia Geometry (fb3dfa9f-ac48-4ced-a8dc-2b635594cfdd_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Legionslager Alba Julia Geometry (fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ffd99607-0513-4fa5-8073-c80bddbfab84_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tibiscum Geometry (ffd99607-0513-4fa5-8073-c80bddbfab84_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ab5e10e-4fb0-4854-835b-389043840ee0_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Li\u015fteava Geometry (0ab5e10e-4fb0-4854-835b-389043840ee0_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0ccd99fd-62d1-4978-873a-106b1f5e3880_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ruc\u0103r Geometry (0ccd99fd-62d1-4978-873a-106b1f5e3880_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0e91c0e7-3991-4a45-89ed-382f7c74731a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u0103pata de Jos II Geometry (0e91c0e7-3991-4a45-89ed-382f7c74731a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0f25c729-a3c7-4cb4-b063-ff72c0124b4f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Urluieni I Geometry (0f25c729-a3c7-4cb4-b063-ff72c0124b4f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103\u015feiu (Samum) Geometry (0fe1d8dd-b425-4d55-ae80-2cd8d5d61ace_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/000d5176-6b9e-4065-a44f-d7b8f75b1199_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Or\u0103\u015ftioara de Sus Geometry (000d5176-6b9e-4065-a44f-d7b8f75b1199_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/01189de6-024d-4022-96ff-eec7e4efee0c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Or\u0219ova (Dierna) Geometry (01189de6-024d-4022-96ff-eec7e4efee0c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/0203af0b-bc52-4f9f-b490-b2bc3fe431fc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cigm\u0103u Geometry (0203af0b-bc52-4f9f-b490-b2bc3fe431fc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/06eb8de4-750e-4ed9-ad04-9bf16d61c975_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Momote\u015fti (Rusidava) Geometry (06eb8de4-750e-4ed9-ad04-9bf16d61c975_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/096a9a4c-020f-4ce0-a4a6-993d50d08fea_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cop\u0103ceni (Praetorium I) Geometry (096a9a4c-020f-4ce0-a4a6-993d50d08fea_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1b4b9c1f-cb64-4c02-976d-61c2147b0705_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u00e2ul Vadului Geometry (1b4b9c1f-cb64-4c02-976d-61c2147b0705_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1c936059-6af8-4f03-8e18-cc61f529c5f3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastelle von Porolissum Geometry (1c936059-6af8-4f03-8e18-cc61f529c5f3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1d8f65a8-c30b-40f1-9676-2e1145691ac3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Abrud (Alburnus Maior) Geometry (1d8f65a8-c30b-40f1-9676-2e1145691ac3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1e218e82-f264-4241-a8e0-5efd9a1ec8a4_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Islaz-Razovica Geometry (1e218e82-f264-4241-a8e0-5efd9a1ec8a4_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/10b043a5-bb2b-48af-a168-84046185d6f7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Pinoasa Geometry (10b043a5-bb2b-48af-a168-84046185d6f7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/120e3991-1f39-4359-b810-37bb24aff05c_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Romita Geometry (120e3991-1f39-4359-b810-37bb24aff05c_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/1795d125-e071-4153-b07e-e147bb19ad65_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Comal\u0103u Geometry (1795d125-e071-4153-b07e-e147bb19ad65_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/19360a61-a15a-4d56-a100-f3be57e93ff1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Mofleni (Pelendava) Geometry (19360a61-a15a-4d56-a100-f3be57e93ff1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/2c2fb600-f249-469e-a025-1961edf5132d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u0103zboieni Geometry (2c2fb600-f249-469e-a025-1961edf5132d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/22bf9a4e-a715-43f7-9fd0-4a60b8b77288_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tia Mare Geometry (22bf9a4e-a715-43f7-9fd0-4a60b8b77288_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3af3a2c4-8038-482d-9fa9-a0e90584ef6d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bulci Geometry (3af3a2c4-8038-482d-9fa9-a0e90584ef6d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3b51185a-d7ca-4c22-b85d-a021b3727c4d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Br\u00e2ncovene\u015fti Geometry (3b51185a-d7ca-4c22-b85d-a021b3727c4d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3f7e0b8c-1a5f-423f-85da-536d87bbdcc8_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Orheiul Bistri\u0163ei Geometry (3f7e0b8c-1a5f-423f-85da-536d87bbdcc8_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/322e89c0-f571-4be4-a08c-84b35efb69e5_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u00e2npaul Geometry (322e89c0-f571-4be4-a08c-84b35efb69e5_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/34d0d768-2d4d-42b3-82ae-e29bad5c1eed_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Gresia Geometry (34d0d768-2d4d-42b3-82ae-e29bad5c1eed_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/340738ca-7444-4896-a0fd-cd9e6806eb30_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Mehadia (Praetorium) Geometry (340738ca-7444-4896-a0fd-cd9e6806eb30_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/3680e065-f377-4f4d-a9d6-84523dcb1727_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bre\u021bcu Geometry (3680e065-f377-4f4d-a9d6-84523dcb1727_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Fl\u0103m\u0103nda (Poiana) Geometry (4dbfae9e-f0f7-4dab-94ca-9bca2cec83aa_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4df4edbc-facd-42bd-b05e-076f94ae693b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell IIone\u0219tii Govorii (Pons Aluti) Geometry (4df4edbc-facd-42bd-b05e-076f94ae693b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4e013c45-7445-4ea6-8356-2c9cc9e7ac6e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Gil\u0103u Geometry (4e013c45-7445-4ea6-8356-2c9cc9e7ac6e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/4198c975-e14a-4fb3-9b2e-7be9e145ecac_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Jiblea Geometry (4198c975-e14a-4fb3-9b2e-7be9e145ecac_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/42d9c007-47e1-4b2a-ab2c-c381f93cac96_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Grebenac Geometry (42d9c007-47e1-4b2a-ab2c-c381f93cac96_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Plesa Geometry (46e40ed7-3b02-4bb3-ba5c-8dcb5f55b990_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/47a7d25e-6315-4256-b257-c2dfaea5e42f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Z\u0103voi (Acmonia ?) Geometry (47a7d25e-6315-4256-b257-c2dfaea5e42f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/497eff64-e309-4704-b5f0-3e2872ff379d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Legionslager Potaissa Geometry (497eff64-e309-4704-b5f0-3e2872ff379d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5a43030f-b985-4444-8cf9-3e4a0b132d79_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell V\u00e2rtop Geometry (5a43030f-b985-4444-8cf9-3e4a0b132d79_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5b90b8d5-ba6e-4789-94d2-db823824acbf_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103ineni (Pons Vetus ?) Geometry (5b90b8d5-ba6e-4789-94d2-db823824acbf_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5d0fac8e-53ae-4ae7-92a2-dd419eee0dce_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Hoghiz Geometry (5d0fac8e-53ae-4ae7-92a2-dd419eee0dce_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e33b468-4135-46b4-babc-99f5c423f966_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Szeged Geometry (5e33b468-4135-46b4-babc-99f5c423f966_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5e6a65c9-32dd-4581-b6ab-a95afdc4d061_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel I Geometry (5e6a65c9-32dd-4581-b6ab-a95afdc4d061_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5ea0f057-026f-4556-97f5-3e0e3a9471c3_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Gherla Geometry (5ea0f057-026f-4556-97f5-3e0e3a9471c3_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/50320dbe-929c-40e3-aebd-f8f257d6472a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Castranova Geometry (50320dbe-929c-40e3-aebd-f8f257d6472a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5709a2bb-8d86-44af-b582-19151b918068_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Sarmizegetusa (Ulpia Traiana) Geometry (5709a2bb-8d86-44af-b582-19151b918068_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell S\u00e2nnicolau Mare Geometry (59eaf728-6bdb-4f30-a9e7-abec5dbbaa5f_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa I Geometry (6c5d4f2f-8a7b-4ad5-8672-f4ecc7e80ff0_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/64ae9ea8-9dca-4e22-b32b-c2f95fd80b44_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell F\u00e2lfani Geometry (64ae9ea8-9dca-4e22-b32b-c2f95fd80b44_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/6689fc0e-01ff-4dbc-b3ed-49e35a3d397a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bologa (Resculum) Geometry (6689fc0e-01ff-4dbc-b3ed-49e35a3d397a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ro\u0219iorii de Vede Geometry (7a5a0685-4a85-48f0-a5ac-7b3b56efa3dc_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7aa137c0-3763-4bd3-a1ec-bd8a88b3d786_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u0103lug\u0103reni Geometry (7aa137c0-3763-4bd3-a1ec-bd8a88b3d786_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7b05b48b-cd48-4c66-916e-6ea581179843_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Islaz-Verdea Geometry (7b05b48b-cd48-4c66-916e-6ea581179843_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7c3bf06c-8f79-457e-b56f-77da98c7a69b_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell B\u0103neasa II Geometry (7c3bf06c-8f79-457e-b56f-77da98c7a69b_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cadca30-bfd9-4628-9916-c20eecafa356_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Stolniceni Geometry (7cadca30-bfd9-4628-9916-c20eecafa356_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7cb289bf-4a31-467d-9c9d-4271a8dc55c9_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Boi\u0163a (Caput Stenarum) Geometry (7cb289bf-4a31-467d-9c9d-4271a8dc55c9_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7dd1742c-a3a5-4494-b148-1d435d754d5d_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Vr\u0161ac Geometry (7dd1742c-a3a5-4494-b148-1d435d754d5d_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7e6b0abd-392e-48da-a973-52db57e43459_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Berzovia Geometry (7e6b0abd-392e-48da-a973-52db57e43459_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/70d51242-571e-43ce-bd01-3bffca8cb4be_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Feldioara Geometry (70d51242-571e-43ce-bd01-3bffca8cb4be_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/707cb61a-d04e-4c7b-a620-6587db82f116_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Purc\u0103reni Geometry (707cb61a-d04e-4c7b-a620-6587db82f116_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7422f9df-da23-450f-8eac-db2d8dfca42e_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Livezile Geometry (7422f9df-da23-450f-8eac-db2d8dfca42e_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8c5f1f84-f11a-48f0-8e9a-c629c7d346e2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell C\u00e2mpulung Muscel II Geometry (8c5f1f84-f11a-48f0-8e9a-c629c7d346e2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8f823c04-d42b-49ec-879d-2c446d575885_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Voine\u015fti Geometry (8f823c04-d42b-49ec-879d-2c446d575885_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/8fa245f8-ffe5-4e74-b259-410c7be91afd_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tite\u015fti Geometry (8fa245f8-ffe5-4e74-b259-410c7be91afd_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/80ce787b-1ab0-42e7-b03c-c641d3767774_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Perisani Geometry (80ce787b-1ab0-42e7-b03c-c641d3767774_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/815f5c63-8478-4aac-bafb-11eaafa9a923_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Dupljaja Geometry (815f5c63-8478-4aac-bafb-11eaafa9a923_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/86dae60a-c827-480d-bb38-04a480b9ea01_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Cenad Geometry (86dae60a-c827-480d-bb38-04a480b9ea01_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/87009579-c2cc-4c7a-9b02-901bf75a0ee6_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Ve\u021bel Geometry (87009579-c2cc-4c7a-9b02-901bf75a0ee6_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a084d40-bf5c-42fa-8aa7-8c678524c631_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Racovi\u0163a (Praetorium II) Geometry (9a084d40-bf5c-42fa-8aa7-8c678524c631_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9a118e00-be2c-4c2d-a9f9-8cb86170e3d1_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u0103d\u0103cine\u015fti Geometry (9a118e00-be2c-4c2d-a9f9-8cb86170e3d1_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ac48ee9-00b6-46ab-a597-b6aa5f2d784a_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bivolari (Arutela) Geometry (9ac48ee9-00b6-46ab-a597-b6aa5f2d784a_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9b62118c-9936-42f2-a6e7-49f649c937f2_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Bumbe\u015fti Geometry (9b62118c-9936-42f2-a6e7-49f649c937f2_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9ba7d74c-175e-48c8-9403-dbbdd650ed22_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Criste\u015fti Geometry (9ba7d74c-175e-48c8-9403-dbbdd650ed22_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9d1c0c0d-98f5-4728-86ee-4288dde6d0fa_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell R\u00e2\u0219nov Geometry (9d1c0c0d-98f5-4728-86ee-4288dde6d0fa_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/9f76d5fd-4ee3-4985-9fb6-c22bfdf43436_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Putineiu Geometry (9f76d5fd-4ee3-4985-9fb6-c22bfdf43436_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/918ef494-4408-4a91-8ee0-61f6087ffee7_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Surducul Mare Geometry (918ef494-4408-4a91-8ee0-61f6087ffee7_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/986efe66-cf8a-4b64-a488-ad95d0f2dd79_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "Kastell Tih\u0103u Geometry (986efe66-cf8a-4b64-a488-ad95d0f2dd79_geom)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Legionslager Alba Julia (fddcce1d-ea5f-4dc2-a2d1-740ca41fa97e)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/ffd99607-0513-4fa5-8073-c80bddbfab84",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Tibiscum (ffd99607-0513-4fa5-8073-c80bddbfab84)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/497eff64-e309-4704-b5f0-3e2872ff379d",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Legionslager Potaissa (497eff64-e309-4704-b5f0-3e2872ff379d)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/5709a2bb-8d86-44af-b582-19151b918068",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Sarmizegetusa (Ulpia Traiana) (5709a2bb-8d86-44af-b582-19151b918068)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/7e6b0abd-392e-48da-a973-52db57e43459",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Berzovia  (7e6b0abd-392e-48da-a973-52db57e43459)",
        "data": {}
      },
      {
        "id": "http://lod.squirrel.link/data/limes/daicus/87009579-c2cc-4c7a-9b02-901bf75a0ee6",
        "parent": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "type": "geoinstance",
        "text": "Kastell Ve\u021bel (87009579-c2cc-4c7a-9b02-901bf75a0ee6)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#LegionaryCamp",
        "parent": "http://www.opengis.net/ont/geosparql#Feature",
        "type": "geoclass",
        "text": "LegionaryCamp [6]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 4
      }
    ]
  }
}