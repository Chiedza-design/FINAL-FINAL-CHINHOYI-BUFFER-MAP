var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KEYSETTLEMENTS_1 = new ol.format.GeoJSON();
var features_KEYSETTLEMENTS_1 = format_KEYSETTLEMENTS_1.readFeatures(json_KEYSETTLEMENTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEYSETTLEMENTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEYSETTLEMENTS_1.addFeatures(features_KEYSETTLEMENTS_1);
var lyr_KEYSETTLEMENTS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEYSETTLEMENTS_1, 
                style: style_KEYSETTLEMENTS_1,
                popuplayertitle: 'KEY SETTLEMENTS',
                interactive: true,
                title: '<img src="styles/legend/KEYSETTLEMENTS_1.png" /> KEY SETTLEMENTS'
            });
var format_CHINHOYIBOUNDARY_2 = new ol.format.GeoJSON();
var features_CHINHOYIBOUNDARY_2 = format_CHINHOYIBOUNDARY_2.readFeatures(json_CHINHOYIBOUNDARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHINHOYIBOUNDARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHINHOYIBOUNDARY_2.addFeatures(features_CHINHOYIBOUNDARY_2);
var lyr_CHINHOYIBOUNDARY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHINHOYIBOUNDARY_2, 
                style: style_CHINHOYIBOUNDARY_2,
                popuplayertitle: 'CHINHOYI BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/CHINHOYIBOUNDARY_2.png" /> CHINHOYI BOUNDARY'
            });
var format_BUFFERACTIVITIES_3 = new ol.format.GeoJSON();
var features_BUFFERACTIVITIES_3 = format_BUFFERACTIVITIES_3.readFeatures(json_BUFFERACTIVITIES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFERACTIVITIES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERACTIVITIES_3.addFeatures(features_BUFFERACTIVITIES_3);
cluster_BUFFERACTIVITIES_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BUFFERACTIVITIES_3
});
var lyr_BUFFERACTIVITIES_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BUFFERACTIVITIES_3, 
                style: style_BUFFERACTIVITIES_3,
                popuplayertitle: 'BUFFER ACTIVITIES',
                interactive: true,
                title: '<img src="styles/legend/BUFFERACTIVITIES_3.png" /> BUFFER ACTIVITIES'
            });
var format_CHINHOYICAVES_4 = new ol.format.GeoJSON();
var features_CHINHOYICAVES_4 = format_CHINHOYICAVES_4.readFeatures(json_CHINHOYICAVES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHINHOYICAVES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHINHOYICAVES_4.addFeatures(features_CHINHOYICAVES_4);
cluster_CHINHOYICAVES_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CHINHOYICAVES_4
});
var lyr_CHINHOYICAVES_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CHINHOYICAVES_4, 
                style: style_CHINHOYICAVES_4,
                popuplayertitle: 'CHINHOYI CAVES',
                interactive: true,
                title: '<img src="styles/legend/CHINHOYICAVES_4.png" /> CHINHOYI CAVES'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KEYSETTLEMENTS_1.setVisible(true);lyr_CHINHOYIBOUNDARY_2.setVisible(false);lyr_BUFFERACTIVITIES_3.setVisible(true);lyr_CHINHOYICAVES_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KEYSETTLEMENTS_1,lyr_CHINHOYIBOUNDARY_2,lyr_BUFFERACTIVITIES_3,lyr_CHINHOYICAVES_4];
lyr_KEYSETTLEMENTS_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_CHINHOYIBOUNDARY_2.set('fieldAliases', {'id': 'id', });
lyr_BUFFERACTIVITIES_3.set('fieldAliases', {'id': 'id', 'USE': 'USE', 'NAME': 'NAME', 'ID_1': 'ID_1', 'Chinhoyi_P': 'Chinhoyi_P', 'Chinhoyi_1': 'Chinhoyi_1', 'Chinhoyi_2': 'Chinhoyi_2', 'Chinhoyi_3': 'Chinhoyi_3', 'Chinhoyi_4': 'Chinhoyi_4', 'Chinhoyi_5': 'Chinhoyi_5', 'Chinhoyi_6': 'Chinhoyi_6', 'Chinhoyi_7': 'Chinhoyi_7', 'Chinhoyi_8': 'Chinhoyi_8', 'Chinhoyi_9': 'Chinhoyi_9', 'Chinhoyi10': 'Chinhoyi10', 'Chinhoyi11': 'Chinhoyi11', 'Chinhoyi12': 'Chinhoyi12', 'Chinhoyi13': 'Chinhoyi13', 'Chinhoyi14': 'Chinhoyi14', });
lyr_CHINHOYICAVES_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', });
lyr_KEYSETTLEMENTS_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_CHINHOYIBOUNDARY_2.set('fieldImages', {'id': 'TextEdit', });
lyr_BUFFERACTIVITIES_3.set('fieldImages', {'id': 'TextEdit', 'USE': 'TextEdit', 'NAME': 'TextEdit', 'ID_1': 'TextEdit', 'Chinhoyi_P': 'TextEdit', 'Chinhoyi_1': 'TextEdit', 'Chinhoyi_2': 'TextEdit', 'Chinhoyi_3': 'TextEdit', 'Chinhoyi_4': 'TextEdit', 'Chinhoyi_5': 'TextEdit', 'Chinhoyi_6': 'TextEdit', 'Chinhoyi_7': 'TextEdit', 'Chinhoyi_8': 'TextEdit', 'Chinhoyi_9': 'TextEdit', 'Chinhoyi10': 'TextEdit', 'Chinhoyi11': 'TextEdit', 'Chinhoyi12': 'TextEdit', 'Chinhoyi13': 'TextEdit', 'Chinhoyi14': 'TextEdit', });
lyr_CHINHOYICAVES_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', });
lyr_KEYSETTLEMENTS_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', 'type': 'no label', });
lyr_CHINHOYIBOUNDARY_2.set('fieldLabels', {'id': 'no label', });
lyr_BUFFERACTIVITIES_3.set('fieldLabels', {'id': 'inline label - visible with data', 'USE': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'Chinhoyi_P': 'inline label - visible with data', 'Chinhoyi_1': 'inline label - visible with data', 'Chinhoyi_2': 'inline label - visible with data', 'Chinhoyi_3': 'inline label - visible with data', 'Chinhoyi_4': 'inline label - visible with data', 'Chinhoyi_5': 'inline label - visible with data', 'Chinhoyi_6': 'inline label - visible with data', 'Chinhoyi_7': 'inline label - visible with data', 'Chinhoyi_8': 'inline label - visible with data', 'Chinhoyi_9': 'inline label - visible with data', 'Chinhoyi10': 'inline label - visible with data', 'Chinhoyi11': 'inline label - visible with data', 'Chinhoyi12': 'inline label - visible with data', 'Chinhoyi13': 'inline label - visible with data', 'Chinhoyi14': 'inline label - visible with data', });
lyr_CHINHOYICAVES_4.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'inline label - visible with data', 'fclass': 'inline label - visible with data', });
lyr_CHINHOYICAVES_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});