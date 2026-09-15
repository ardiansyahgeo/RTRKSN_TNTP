var size = 0;
var placement = 'point';
function categories_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Zona Budi Daya Dengan Karakteristik Kawasan Pertanian':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("PL_RUANG_V2");
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
    
var style = categories_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
