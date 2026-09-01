var size = 0;
var placement = 'point';
function categories_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Zona Budi Daya Kawasan Hutan Produksi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,180,55,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80 = function(feature, resolution){
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
    
var style = categories_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
