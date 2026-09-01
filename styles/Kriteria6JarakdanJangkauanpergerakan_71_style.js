var size = 0;
var placement = 'point';
function categories_Kriteria6JarakdanJangkauanpergerakan_71(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Dekat dari kota-kota sekitar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cukup dekat dari kota-kota sekitar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(171,221,164,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cukup Jauh dari kota-kota sekitar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,191,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jauh dari kota-kota sekitar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,174,97,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sangat Jauh dari kota-kota sekitar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Kriteria6JarakdanJangkauanpergerakan_71 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("keterangan");
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
    
var style = categories_Kriteria6JarakdanJangkauanpergerakan_71(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
