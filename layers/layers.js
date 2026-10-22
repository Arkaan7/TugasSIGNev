var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_geologilitologi_1 = new ol.format.GeoJSON();
var features_geologilitologi_1 = format_geologilitologi_1.readFeatures(json_geologilitologi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologilitologi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologilitologi_1.addFeatures(features_geologilitologi_1);
var lyr_geologilitologi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologilitologi_1, 
                style: style_geologilitologi_1,
                popuplayertitle: 'geologi litologi',
                interactive: true,
    title: 'geologi litologi<br />\
    <img src="styles/legend/geologilitologi_1_0.png" /> Aluvial<br />\
    <img src="styles/legend/geologilitologi_1_1.png" /> Andesit<br />\
    <img src="styles/legend/geologilitologi_1_2.png" /> Anggota Banyak<br />\
    <img src="styles/legend/geologilitologi_1_3.png" /> Anggota Damar<br />\
    <img src="styles/legend/geologilitologi_1_4.png" /> Anggota Kapung<br />\
    <img src="styles/legend/geologilitologi_1_5.png" /> Anggota Klitik<br />\
    <img src="styles/legend/geologilitologi_1_6.png" /> Anggota Ngrayong<br />\
    <img src="styles/legend/geologilitologi_1_7.png" /> Basal<br />\
    <img src="styles/legend/geologilitologi_1_8.png" /> Batuan gunungapi Gajah mungkur<br />\
    <img src="styles/legend/geologilitologi_1_9.png" /> Batuan Gunungapi Jembangan<br />\
    <img src="styles/legend/geologilitologi_1_10.png" /> Batuan gunungapi Lasem<br />\
    <img src="styles/legend/geologilitologi_1_11.png" /> Batuan Gunungapi Tak Terpisahkan<br />\
    <img src="styles/legend/geologilitologi_1_12.png" /> Batuan Gunungapi Telomoyo<br />\
    <img src="styles/legend/geologilitologi_1_13.png" /> Batuan Vulkanik Andong dan Kendil<br />\
    <img src="styles/legend/geologilitologi_1_14.png" /> Breksi Gunungapi<br />\
    <img src="styles/legend/geologilitologi_1_15.png" /> Formasi Bulu<br />\
    <img src="styles/legend/geologilitologi_1_16.png" /> Formasi Damar<br />\
    <img src="styles/legend/geologilitologi_1_17.png" /> Formasi Jongkong<br />\
    <img src="styles/legend/geologilitologi_1_18.png" /> Formasi Kalibeng<br />\
    <img src="styles/legend/geologilitologi_1_19.png" /> Formasi Kaligetas<br />\
    <img src="styles/legend/geologilitologi_1_20.png" /> Formasi Kerek<br />\
    <img src="styles/legend/geologilitologi_1_21.png" /> Formasi Ledok<br />\
    <img src="styles/legend/geologilitologi_1_22.png" /> Formasi Lidah<br />\
    <img src="styles/legend/geologilitologi_1_23.png" /> Formasi Madura<br />\
    <img src="styles/legend/geologilitologi_1_24.png" /> Formasi Mundu<br />\
    <img src="styles/legend/geologilitologi_1_25.png" /> Formasi Ngrayong<br />\
    <img src="styles/legend/geologilitologi_1_26.png" /> Formasi Payung<br />\
    <img src="styles/legend/geologilitologi_1_27.png" /> Formasi Pelang<br />\
    <img src="styles/legend/geologilitologi_1_28.png" /> Formasi Penyatan<br />\
    <img src="styles/legend/geologilitologi_1_29.png" /> Formasi Selorejo<br />\
    <img src="styles/legend/geologilitologi_1_30.png" /> Formasi Tambakromo<br />\
    <img src="styles/legend/geologilitologi_1_31.png" /> Formasi Wonocolo<br />\
    <img src="styles/legend/geologilitologi_1_32.png" /> Gunungapi Gilipetung<br />\
    <img src="styles/legend/geologilitologi_1_33.png" /> Gunungapi Kaligesic<br />\
    <img src="styles/legend/geologilitologi_1_34.png" /> Kipas Aluvial<br />\
    <img src="styles/legend/geologilitologi_1_35.png" /> Lava Sumbing<br />\
    <img src="styles/legend/geologilitologi_1_36.png" /> <br />' });

lyr_GoogleSatelite_0.setVisible(true);lyr_geologilitologi_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_geologilitologi_1];
lyr_geologilitologi_1.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_geologilitologi_1.set('fieldImages', {'SYMBOLS': 'TextEdit', 'NM_LEMBAR': 'TextEdit', 'NO_LEMBAR': 'TextEdit', 'PROJECT': 'TextEdit', 'NAME': 'TextEdit', 'FORMATION': 'TextEdit', 'CLASS_LITH': 'TextEdit', 'T_CLASS_EN': 'TextEdit', 'B_CLASS_EN': 'TextEdit', 'DESCRIP1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_geologilitologi_1.set('fieldLabels', {'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'PROJECT': 'no label', 'NAME': 'no label', 'FORMATION': 'no label', 'CLASS_LITH': 'header label - visible with data', 'T_CLASS_EN': 'no label', 'B_CLASS_EN': 'no label', 'DESCRIP1': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'no label', });
lyr_geologilitologi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});