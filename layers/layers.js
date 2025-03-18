var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Batasrt_1 = new ol.format.GeoJSON();
var features_Batasrt_1 = format_Batasrt_1.readFeatures(json_Batasrt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batasrt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batasrt_1.addFeatures(features_Batasrt_1);
var lyr_Batasrt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batasrt_1, 
                style: style_Batasrt_1,
                popuplayertitle: "Batas rt",
                interactive: true,
    title: 'Batas rt<br />\
    <img src="styles/legend/Batasrt_1_0.png" /> 1<br />\
    <img src="styles/legend/Batasrt_1_1.png" /> 2<br />\
    <img src="styles/legend/Batasrt_1_2.png" /> 3<br />\
    <img src="styles/legend/Batasrt_1_3.png" /> 4<br />\
    <img src="styles/legend/Batasrt_1_4.png" /> 5<br />'
        });
var format_Place_2 = new ol.format.GeoJSON();
var features_Place_2 = format_Place_2.readFeatures(json_Place_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Place_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Place_2.addFeatures(features_Place_2);
var lyr_Place_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Place_2, 
                style: style_Place_2,
                popuplayertitle: "Place",
                interactive: true,
    title: 'Place<br />\
    <img src="styles/legend/Place_2_0.png" /> Baruga Desa<br />\
    <img src="styles/legend/Place_2_1.png" /> Kantor Desa Bumi Banyusari<br />\
    <img src="styles/legend/Place_2_2.png" /> Lapangan Desa Bumi Banyusari<br />\
    <img src="styles/legend/Place_2_3.png" /> Masjid Sekolah<br />\
    <img src="styles/legend/Place_2_4.png" /> MTs Al-Ikhlas Bumi Banyusari<br />\
    <img src="styles/legend/Place_2_5.png" /> Mushola Nurul Yaqin<br />\
    <img src="styles/legend/Place_2_6.png" /> Musholla Nurul Huda<br />\
    <img src="styles/legend/Place_2_7.png" /> Pabrik Kopi<br />\
    <img src="styles/legend/Place_2_8.png" /> Polindes Bumi Banyusari<br />\
    <img src="styles/legend/Place_2_9.png" /> Rumah Kaur Keuangan<br />\
    <img src="styles/legend/Place_2_10.png" /> Rumah Kepala Desa<br />\
    <img src="styles/legend/Place_2_11.png" /> Rumah Ketua BPD<br />\
    <img src="styles/legend/Place_2_12.png" /> Rumah Sekretaris Desa<br />\
    <img src="styles/legend/Place_2_13.png" /> SDN Bumi Banyusari<br />\
    <img src="styles/legend/Place_2_14.png" /> Taman Kanak-kanak (TK)<br />\
    <img src="styles/legend/Place_2_15.png" /> TPQ Miftahul Ulum Bumi Banyusari<br />\
    <img src="styles/legend/Place_2_16.png" /> Balai Desa<br />\
    <img src="styles/legend/Place_2_17.png" /> Rumah Kaur Kesejahteraan<br />\
    <img src="styles/legend/Place_2_18.png" /> Rumah Kaur Pemerintahan<br />\
    <img src="styles/legend/Place_2_19.png" /> Rumah Kaur Umum<br />\
    <img src="styles/legend/Place_2_20.png" /> <br />'
        });
var format_AreaPerkebunan_3 = new ol.format.GeoJSON();
var features_AreaPerkebunan_3 = format_AreaPerkebunan_3.readFeatures(json_AreaPerkebunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerkebunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerkebunan_3.addFeatures(features_AreaPerkebunan_3);
var lyr_AreaPerkebunan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerkebunan_3, 
                style: style_AreaPerkebunan_3,
                popuplayertitle: "Area Perkebunan",
                interactive: true,
                title: '<img src="styles/legend/AreaPerkebunan_3.png" /> Area Perkebunan'
            });
var format_TempatPemakamanUmum_4 = new ol.format.GeoJSON();
var features_TempatPemakamanUmum_4 = format_TempatPemakamanUmum_4.readFeatures(json_TempatPemakamanUmum_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPemakamanUmum_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatPemakamanUmum_4.addFeatures(features_TempatPemakamanUmum_4);
var lyr_TempatPemakamanUmum_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatPemakamanUmum_4, 
                style: style_TempatPemakamanUmum_4,
                popuplayertitle: "Tempat Pemakaman Umum",
                interactive: true,
                title: '<img src="styles/legend/TempatPemakamanUmum_4.png" /> Tempat Pemakaman Umum'
            });
var format_polyline_5 = new ol.format.GeoJSON();
var features_polyline_5 = format_polyline_5.readFeatures(json_polyline_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polyline_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polyline_5.addFeatures(features_polyline_5);
var lyr_polyline_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polyline_5, 
                style: style_polyline_5,
                popuplayertitle: "polyline",
                interactive: true,
    title: 'polyline<br />\
    <img src="styles/legend/polyline_5_0.png" /> Jalan bawang<br />\
    <img src="styles/legend/polyline_5_1.png" /> Jalan Bayam<br />\
    <img src="styles/legend/polyline_5_2.png" /> Jalan Buncis<br />\
    <img src="styles/legend/polyline_5_3.png" /> Jalan kacang panjang<br />\
    <img src="styles/legend/polyline_5_4.png" /> Jalan kangkung<br />\
    <img src="styles/legend/polyline_5_5.png" /> Jalan Robusta<br />\
    <img src="styles/legend/polyline_5_6.png" /> Jalan Terong<br />\
    <img src="styles/legend/polyline_5_7.png" /> Jalan tomat<br />\
    <img src="styles/legend/polyline_5_8.png" /> Lorong Mandiri<br />\
    <img src="styles/legend/polyline_5_9.png" /> Lorong Sejahtera<br />\
    <img src="styles/legend/polyline_5_10.png" /> Sungai Lariang<br />\
    <img src="styles/legend/polyline_5_11.png" /> Sungai Pembala<br />\
    <img src="styles/legend/polyline_5_12.png" /> Lorong Pemakaman<br />\
    <img src="styles/legend/polyline_5_13.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Batasrt_1.setVisible(true);lyr_Place_2.setVisible(true);lyr_AreaPerkebunan_3.setVisible(true);lyr_TempatPemakamanUmum_4.setVisible(true);lyr_polyline_5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Batasrt_1,lyr_Place_2,lyr_AreaPerkebunan_3,lyr_TempatPemakamanUmum_4,lyr_polyline_5];
lyr_Batasrt_1.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', 'Gambar': 'Gambar', });
lyr_Place_2.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', 'Gambar': 'Gambar', });
lyr_AreaPerkebunan_3.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_TempatPemakamanUmum_4.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_polyline_5.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', });
lyr_Batasrt_1.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', 'Gambar': 'TextEdit', });
lyr_Place_2.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', 'Gambar': 'TextEdit', });
lyr_AreaPerkebunan_3.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_TempatPemakamanUmum_4.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_polyline_5.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Batasrt_1.set('fieldLabels', {'id': 'no label', 'keterangan': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_Place_2.set('fieldLabels', {'id': 'no label', 'Keterangan': 'inline label - always visible', 'Gambar': 'inline label - always visible', });
lyr_AreaPerkebunan_3.set('fieldLabels', {'id': 'no label', 'keterangan': 'inline label - always visible', });
lyr_TempatPemakamanUmum_4.set('fieldLabels', {'id': 'no label', 'keterangan': 'inline label - always visible', });
lyr_polyline_5.set('fieldLabels', {'id': 'no label', 'Keterangan': 'inline label - always visible', });
lyr_polyline_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});