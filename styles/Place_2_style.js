var size = 0;
var placement = 'point';
function categories_Place_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Baruga Desa':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/kantor.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kantor Desa Bumi Banyusari':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/kantor_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lapangan Desa Bumi Banyusari':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/icon-normal.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Masjid Sekolah':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/masjid.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MTs Al-Ikhlas Bumi Banyusari':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/school.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mushola Nurul Yaqin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/masjid_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Musholla Nurul Huda':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/masjid_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pabrik Kopi':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/icon-normal_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Polindes Bumi Banyusari':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/pkm.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rumah Kaur Keuangan':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/home.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rumah Kepala Desa':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/home_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rumah Ketua BPD':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/home_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rumah Sekretaris Desa':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/home_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SDN Bumi Banyusari':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/school_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kanak-kanak (TK)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/school_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TPQ Miftahul Ulum Bumi Banyusari':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1298, 1344],
                  scale: 0.020030816640986132,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/masjid_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Balai Desa':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/kantor_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rumah Kaur Kesejahteraan':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/home_4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rumah Kaur Pemerintahan':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/home_5.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rumah Kaur Umum':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/home_6.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1080, 1080],
                  scale: 0.024074074074074074,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/icon-normal_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Place_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Keterangan");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Place_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
