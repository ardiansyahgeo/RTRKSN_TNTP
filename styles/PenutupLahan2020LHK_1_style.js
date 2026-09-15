var size = 0;
var placement = 'point';
function categories_PenutupLahan2020LHK_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Belukar rawa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(189,211,25,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan lahan kering primer':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,103,57,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan lahan kering sekunder':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,255,108,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan mangrove primer':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(112,34,147,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan mangrove sekunder':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,59,224,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan rawa primer':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,154,159,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan rawa sekunder':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,255,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan tanaman':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,23,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pelabuhan Udara/Laut':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,204,202,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Permukiman':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,79,60,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pertambangan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,199,196,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perkebunan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,201,93,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pertanian lahan kering':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,128,6,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pertanian Lahan Kering + Semak':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,223,154,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,209,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Semak/Belukar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(216,255,240,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tambak':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,149,161,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tanah terbuka':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(93,60,14,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Transmigrasi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,214,205,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tubuh air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(18,113,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PenutupLahan2020LHK_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("lc_2020");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PenutupLahan2020LHK_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
