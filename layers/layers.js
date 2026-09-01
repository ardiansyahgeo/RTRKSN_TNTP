var wms_layers = [];


        var lyr_googleimagery_0 = new ol.layer.Tile({
            'title': 'google imagery',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_PenutupLahan2020LHK_1 = new ol.format.GeoJSON();
var features_PenutupLahan2020LHK_1 = format_PenutupLahan2020LHK_1.readFeatures(json_PenutupLahan2020LHK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenutupLahan2020LHK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenutupLahan2020LHK_1.addFeatures(features_PenutupLahan2020LHK_1);
var lyr_PenutupLahan2020LHK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenutupLahan2020LHK_1, 
                style: style_PenutupLahan2020LHK_1,
                popuplayertitle: "Penutup Lahan 2020 LHK",
                interactive: true,
    title: 'Penutup Lahan 2020 LHK<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_0.png" /> Belukar rawa<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_1.png" /> Hutan lahan kering primer<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_2.png" /> Hutan lahan kering sekunder<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_3.png" /> Hutan mangrove primer<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_4.png" /> Hutan mangrove sekunder<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_5.png" /> Hutan rawa primer<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_6.png" /> Hutan rawa sekunder<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_7.png" /> Hutan tanaman<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_8.png" /> Pelabuhan Udara/Laut<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_9.png" /> Permukiman<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_10.png" /> Pertambangan<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_11.png" /> Perkebunan<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_12.png" /> Pertanian lahan kering<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_13.png" /> Pertanian Lahan Kering + Semak<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_14.png" /> Rawa<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_15.png" /> Semak/Belukar<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_16.png" /> Tambak<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_17.png" /> Tanah terbuka<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_18.png" /> Transmigrasi<br />\
    <img src="styles/legend/PenutupLahan2020LHK_1_19.png" /> Tubuh air<br />'
        });
var lyr_1980_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "1980",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1980_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12342261.418950, -436222.800334, 12627760.289304, -21607.648756]
                            })
                        });
var lyr_1990_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "1990",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1990_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12342261.418950, -436222.800334, 12627760.289304, -21607.648756]
                            })
                        });
var lyr_2000_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "2000",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2000_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12342261.418950, -436222.800334, 12627760.289304, -21607.648756]
                            })
                        });
var lyr_2010_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2010_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12342261.418950, -436222.800334, 12627760.289304, -21607.648756]
                            })
                        });
var lyr_2020_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2020_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12342261.418950, -436222.800334, 12627760.289304, -21607.648756]
                            })
                        });
var lyr_2025_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "2025",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2025_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12342261.418950, -436222.800334, 12627760.289304, -21607.648756]
                            })
                        });
var lyr_RawanKarhutlaInarisk_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Rawan Karhutla (Inarisk)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RawanKarhutlaInarisk_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12326624.076928, -394724.277125, 12896324.076928, 88104.579592]
                            })
                        });
var lyr_Hotspot_GT320_2025_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2025",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2025_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2024_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2024",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2024_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2023_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2023_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2022_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2022",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2022_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2021_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2021_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2020_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2020_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2019_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2019_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2018_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2018_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2017_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2017",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2017_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2016_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2016",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2016_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2015_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2015",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2015_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2014_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2014",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2014_20.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2013_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2013",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2013_21.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2012_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2012",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2012_22.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2011_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2011",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2011_23.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2010_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2010_24.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2009_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2009",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2009_25.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2008_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2008",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2008_26.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2007_27 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2007",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2007_27.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2006_28 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2006",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2006_28.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2005_29 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2005",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2005_29.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2004_30 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2004",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2004_30.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2003_31 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2003",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2003_31.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2002_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2002",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2002_32.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var lyr_Hotspot_GT320_2001_33 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hotspot_GT320_2001",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hotspot_GT320_2001_33.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12241000.000000, -433332.985658, 12752000.000000, 70001.405297]
                            })
                        });
var format_RawanKarhutlainarisk_34 = new ol.format.GeoJSON();
var features_RawanKarhutlainarisk_34 = format_RawanKarhutlainarisk_34.readFeatures(json_RawanKarhutlainarisk_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanKarhutlainarisk_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanKarhutlainarisk_34.addFeatures(features_RawanKarhutlainarisk_34);
var lyr_RawanKarhutlainarisk_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanKarhutlainarisk_34, 
                style: style_RawanKarhutlainarisk_34,
                popuplayertitle: "Rawan Karhutla (inarisk)",
                interactive: true,
    title: 'Rawan Karhutla (inarisk)<br />\
    <img src="styles/legend/RawanKarhutlainarisk_34_0.png" /> Rawan Karhutla Rendah<br />\
    <img src="styles/legend/RawanKarhutlainarisk_34_1.png" /> Rawan Karhutla Sedang<br />\
    <img src="styles/legend/RawanKarhutlainarisk_34_2.png" /> Rawan Karhutla Tinggi<br />'
        });
var format_Deforestasi19902020LHK_35 = new ol.format.GeoJSON();
var features_Deforestasi19902020LHK_35 = format_Deforestasi19902020LHK_35.readFeatures(json_Deforestasi19902020LHK_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deforestasi19902020LHK_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deforestasi19902020LHK_35.addFeatures(features_Deforestasi19902020LHK_35);
var lyr_Deforestasi19902020LHK_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deforestasi19902020LHK_35, 
                style: style_Deforestasi19902020LHK_35,
                popuplayertitle: "Deforestasi 1990-2020 (LHK)",
                interactive: true,
    title: 'Deforestasi 1990-2020 (LHK)<br />\
    <img src="styles/legend/Deforestasi19902020LHK_35_0.png" /> Hutan 2020<br />\
    <img src="styles/legend/Deforestasi19902020LHK_35_1.png" /> Deforestasi 1990-2020<br />'
        });
var format_PertumbuhanPermukiman19902020_36 = new ol.format.GeoJSON();
var features_PertumbuhanPermukiman19902020_36 = format_PertumbuhanPermukiman19902020_36.readFeatures(json_PertumbuhanPermukiman19902020_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PertumbuhanPermukiman19902020_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PertumbuhanPermukiman19902020_36.addFeatures(features_PertumbuhanPermukiman19902020_36);
var lyr_PertumbuhanPermukiman19902020_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PertumbuhanPermukiman19902020_36, 
                style: style_PertumbuhanPermukiman19902020_36,
                popuplayertitle: "Pertumbuhan Permukiman 1990-2020",
                interactive: true,
    title: 'Pertumbuhan Permukiman 1990-2020<br />\
    <img src="styles/legend/PertumbuhanPermukiman19902020_36_0.png" /> Permukiman 1990<br />\
    <img src="styles/legend/PertumbuhanPermukiman19902020_36_1.png" /> Pertumbuhan permukiman 1990-2020<br />'
        });
var format_PertumbuhanSawit19902020LHK_37 = new ol.format.GeoJSON();
var features_PertumbuhanSawit19902020LHK_37 = format_PertumbuhanSawit19902020LHK_37.readFeatures(json_PertumbuhanSawit19902020LHK_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PertumbuhanSawit19902020LHK_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PertumbuhanSawit19902020LHK_37.addFeatures(features_PertumbuhanSawit19902020LHK_37);
var lyr_PertumbuhanSawit19902020LHK_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PertumbuhanSawit19902020LHK_37, 
                style: style_PertumbuhanSawit19902020LHK_37,
                popuplayertitle: "Pertumbuhan Sawit 1990-2020 (LHK)",
                interactive: true,
    title: 'Pertumbuhan Sawit 1990-2020 (LHK)<br />\
    <img src="styles/legend/PertumbuhanSawit19902020LHK_37_0.png" /> Pertumbuhan Sawit 1990-2020<br />\
    <img src="styles/legend/PertumbuhanSawit19902020LHK_37_1.png" /> Sawit 1990<br />'
        });
var format_FungsiKawasanHutan_38 = new ol.format.GeoJSON();
var features_FungsiKawasanHutan_38 = format_FungsiKawasanHutan_38.readFeatures(json_FungsiKawasanHutan_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiKawasanHutan_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiKawasanHutan_38.addFeatures(features_FungsiKawasanHutan_38);
var lyr_FungsiKawasanHutan_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FungsiKawasanHutan_38, 
                style: style_FungsiKawasanHutan_38,
                popuplayertitle: "Fungsi Kawasan Hutan",
                interactive: true,
    title: 'Fungsi Kawasan Hutan<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_0.png" /> Area Penggunaan Lain<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_1.png" /> Hutan lindung<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_2.png" /> Hutan Produksi<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_3.png" /> Hutan Produksi Konversi<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_4.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_5.png" /> Taman Nasional<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_6.png" /> Taman Nasional Laut<br />\
    <img src="styles/legend/FungsiKawasanHutan_38_7.png" /> Taman Wisata Alam/Hutan Wisata Darat<br />'
        });
var format_BatasKawasanTNTP_39 = new ol.format.GeoJSON();
var features_BatasKawasanTNTP_39 = format_BatasKawasanTNTP_39.readFeatures(json_BatasKawasanTNTP_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKawasanTNTP_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKawasanTNTP_39.addFeatures(features_BatasKawasanTNTP_39);
var lyr_BatasKawasanTNTP_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKawasanTNTP_39, 
                style: style_BatasKawasanTNTP_39,
                popuplayertitle: "Batas Kawasan TNTP",
                interactive: true,
                title: '<img src="styles/legend/BatasKawasanTNTP_39.png" /> Batas Kawasan TNTP'
            });
var format_BatasDesa_40 = new ol.format.GeoJSON();
var features_BatasDesa_40 = format_BatasDesa_40.readFeatures(json_BatasDesa_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_40.addFeatures(features_BatasDesa_40);
var lyr_BatasDesa_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_40, 
                style: style_BatasDesa_40,
                popuplayertitle: "Batas Desa",
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_40.png" /> Batas Desa'
            });
var format_BatasKecamatan_41 = new ol.format.GeoJSON();
var features_BatasKecamatan_41 = format_BatasKecamatan_41.readFeatures(json_BatasKecamatan_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_41.addFeatures(features_BatasKecamatan_41);
var lyr_BatasKecamatan_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_41, 
                style: style_BatasKecamatan_41,
                popuplayertitle: "Batas Kecamatan",
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_41.png" /> Batas Kecamatan'
            });
var format_BatasKabupaten_42 = new ol.format.GeoJSON();
var features_BatasKabupaten_42 = format_BatasKabupaten_42.readFeatures(json_BatasKabupaten_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_42.addFeatures(features_BatasKabupaten_42);
var lyr_BatasKabupaten_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_42, 
                style: style_BatasKabupaten_42,
                popuplayertitle: "Batas Kabupaten",
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_42.png" /> Batas Kabupaten'
            });
var format_SistemDasKemenhut_43 = new ol.format.GeoJSON();
var features_SistemDasKemenhut_43 = format_SistemDasKemenhut_43.readFeatures(json_SistemDasKemenhut_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemDasKemenhut_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemDasKemenhut_43.addFeatures(features_SistemDasKemenhut_43);
var lyr_SistemDasKemenhut_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemDasKemenhut_43, 
                style: style_SistemDasKemenhut_43,
                popuplayertitle: "Sistem Das Kemenhut",
                interactive: true,
                title: '<img src="styles/legend/SistemDasKemenhut_43.png" /> Sistem Das Kemenhut'
            });
var format_JaringanSungai_44 = new ol.format.GeoJSON();
var features_JaringanSungai_44 = format_JaringanSungai_44.readFeatures(json_JaringanSungai_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanSungai_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanSungai_44.addFeatures(features_JaringanSungai_44);
var lyr_JaringanSungai_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanSungai_44, 
                style: style_JaringanSungai_44,
                popuplayertitle: "Jaringan Sungai",
                interactive: true,
    title: 'Jaringan Sungai<br />\
    <img src="styles/legend/JaringanSungai_44_0.png" /> Kanal<br />\
    <img src="styles/legend/JaringanSungai_44_1.png" /> Sungai<br />\
    <img src="styles/legend/JaringanSungai_44_2.png" /> Anak Sungai<br />'
        });
var lyr_Zonasiversi2024_45 = new ol.layer.Image({
                            opacity: 1,
                            title: "Zonasi versi 2024",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Zonasiversi2024_45.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12428664.324651, -407251.723725, 12533849.833681, -268194.550778]
                            })
                        });
var format_zonasiversiKSP_46 = new ol.format.GeoJSON();
var features_zonasiversiKSP_46 = format_zonasiversiKSP_46.readFeatures(json_zonasiversiKSP_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonasiversiKSP_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonasiversiKSP_46.addFeatures(features_zonasiversiKSP_46);
var lyr_zonasiversiKSP_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonasiversiKSP_46, 
                style: style_zonasiversiKSP_46,
                popuplayertitle: "zonasi versi KSP",
                interactive: true,
    title: 'zonasi versi KSP<br />\
    <img src="styles/legend/zonasiversiKSP_46_0.png" /> Inti<br />\
    <img src="styles/legend/zonasiversiKSP_46_1.png" /> Rimba<br />\
    <img src="styles/legend/zonasiversiKSP_46_2.png" /> Perlindungan Bahari<br />\
    <img src="styles/legend/zonasiversiKSP_46_3.png" /> Pemanfaatan<br />\
    <img src="styles/legend/zonasiversiKSP_46_4.png" /> Tradisional<br />\
    <img src="styles/legend/zonasiversiKSP_46_5.png" /> Rehabilitasi<br />\
    <img src="styles/legend/zonasiversiKSP_46_6.png" /> Religi, Budaya dan Sejarah<br />\
    <img src="styles/legend/zonasiversiKSP_46_7.png" /> Khusus<br />'
        });
var format_MasyarakatAdat_47 = new ol.format.GeoJSON();
var features_MasyarakatAdat_47 = format_MasyarakatAdat_47.readFeatures(json_MasyarakatAdat_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasyarakatAdat_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasyarakatAdat_47.addFeatures(features_MasyarakatAdat_47);
var lyr_MasyarakatAdat_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasyarakatAdat_47, 
                style: style_MasyarakatAdat_47,
                popuplayertitle: "Masyarakat Adat",
                interactive: true,
                title: '<img src="styles/legend/MasyarakatAdat_47.png" /> Masyarakat Adat'
            });
var format_HutanTanamanRakyatLHK_48 = new ol.format.GeoJSON();
var features_HutanTanamanRakyatLHK_48 = format_HutanTanamanRakyatLHK_48.readFeatures(json_HutanTanamanRakyatLHK_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HutanTanamanRakyatLHK_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HutanTanamanRakyatLHK_48.addFeatures(features_HutanTanamanRakyatLHK_48);
var lyr_HutanTanamanRakyatLHK_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HutanTanamanRakyatLHK_48, 
                style: style_HutanTanamanRakyatLHK_48,
                popuplayertitle: "Hutan Tanaman Rakyat (LHK)",
                interactive: true,
                title: '<img src="styles/legend/HutanTanamanRakyatLHK_48.png" /> Hutan Tanaman Rakyat (LHK)'
            });
var format_PetaindikatifarahanpreservasiLHK_49 = new ol.format.GeoJSON();
var features_PetaindikatifarahanpreservasiLHK_49 = format_PetaindikatifarahanpreservasiLHK_49.readFeatures(json_PetaindikatifarahanpreservasiLHK_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaindikatifarahanpreservasiLHK_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaindikatifarahanpreservasiLHK_49.addFeatures(features_PetaindikatifarahanpreservasiLHK_49);
var lyr_PetaindikatifarahanpreservasiLHK_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaindikatifarahanpreservasiLHK_49, 
                style: style_PetaindikatifarahanpreservasiLHK_49,
                popuplayertitle: "Peta indikatif arahan preservasi (LHK)",
                interactive: true,
                title: '<img src="styles/legend/PetaindikatifarahanpreservasiLHK_49.png" /> Peta indikatif arahan preservasi (LHK)'
            });
var format_cagarbiosfer_50 = new ol.format.GeoJSON();
var features_cagarbiosfer_50 = format_cagarbiosfer_50.readFeatures(json_cagarbiosfer_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cagarbiosfer_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cagarbiosfer_50.addFeatures(features_cagarbiosfer_50);
var lyr_cagarbiosfer_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cagarbiosfer_50, 
                style: style_cagarbiosfer_50,
                popuplayertitle: "cagar biosfer",
                interactive: true,
                title: '<img src="styles/legend/cagarbiosfer_50.png" /> cagar biosfer'
            });
var format_IndeksKerentananIklimLH_51 = new ol.format.GeoJSON();
var features_IndeksKerentananIklimLH_51 = format_IndeksKerentananIklimLH_51.readFeatures(json_IndeksKerentananIklimLH_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksKerentananIklimLH_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksKerentananIklimLH_51.addFeatures(features_IndeksKerentananIklimLH_51);
var lyr_IndeksKerentananIklimLH_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksKerentananIklimLH_51, 
                style: style_IndeksKerentananIklimLH_51,
                popuplayertitle: "Indeks Kerentanan Iklim (LH)",
                interactive: true,
    title: 'Indeks Kerentanan Iklim (LH)<br />\
    <img src="styles/legend/IndeksKerentananIklimLH_51_0.png" /> Sedang<br />\
    <img src="styles/legend/IndeksKerentananIklimLH_51_1.png" /> Tinggi<br />'
        });
var format_subdas_52 = new ol.format.GeoJSON();
var features_subdas_52 = format_subdas_52.readFeatures(json_subdas_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subdas_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subdas_52.addFeatures(features_subdas_52);
var lyr_subdas_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_subdas_52, 
                style: style_subdas_52,
                popuplayertitle: "subdas",
                interactive: true,
    title: 'subdas<br />\
    <img src="styles/legend/subdas_52_0.png" /> BATANGHALANG<br />\
    <img src="styles/legend/subdas_52_1.png" /> BULUH 1<br />\
    <img src="styles/legend/subdas_52_2.png" /> BULUH 2<br />\
    <img src="styles/legend/subdas_52_3.png" /> BULUH BESAR<br />\
    <img src="styles/legend/subdas_52_4.png" /> BULUH KECIL<br />\
    <img src="styles/legend/subdas_52_5.png" /> CABANG<br />\
    <img src="styles/legend/subdas_52_6.png" /> DAS BENIPAH<br />\
    <img src="styles/legend/subdas_52_7.png" /> DAS KOTAWARINGIN<br />\
    <img src="styles/legend/subdas_52_8.png" /> DAS KUMAI<br />\
    <img src="styles/legend/subdas_52_9.png" /> JEJER<br />\
    <img src="styles/legend/subdas_52_10.png" /> KUDUNG<br />\
    <img src="styles/legend/subdas_52_11.png" /> PERLU<br />\
    <img src="styles/legend/subdas_52_12.png" /> RANGGAU<br />\
    <img src="styles/legend/subdas_52_13.png" /> SABUAI<br />\
    <img src="styles/legend/subdas_52_14.png" /> SANDARIAN<br />\
    <img src="styles/legend/subdas_52_15.png" /> SARAI<br />\
    <img src="styles/legend/subdas_52_16.png" /> SEGINTUNG<br />\
    <img src="styles/legend/subdas_52_17.png" /> SERUYAN<br />\
    <img src="styles/legend/subdas_52_18.png" /> TELUK PULAI<br />\
    <img src="styles/legend/subdas_52_19.png" /> TELUK RANGGAU<br />\
    <img src="styles/legend/subdas_52_20.png" /> UDANG<br />'
        });
var format_HutanAdat_53 = new ol.format.GeoJSON();
var features_HutanAdat_53 = format_HutanAdat_53.readFeatures(json_HutanAdat_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HutanAdat_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HutanAdat_53.addFeatures(features_HutanAdat_53);
var lyr_HutanAdat_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HutanAdat_53, 
                style: style_HutanAdat_53,
                popuplayertitle: "Hutan Adat",
                interactive: true,
                title: '<img src="styles/legend/HutanAdat_53.png" /> Hutan Adat'
            });
var format_landsistemBIG_54 = new ol.format.GeoJSON();
var features_landsistemBIG_54 = format_landsistemBIG_54.readFeatures(json_landsistemBIG_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landsistemBIG_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landsistemBIG_54.addFeatures(features_landsistemBIG_54);
var lyr_landsistemBIG_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landsistemBIG_54, 
                style: style_landsistemBIG_54,
                popuplayertitle: "landsistem (BIG)",
                interactive: true,
                title: '<img src="styles/legend/landsistemBIG_54.png" /> landsistem (BIG)'
            });
var format_LERENG_55 = new ol.format.GeoJSON();
var features_LERENG_55 = format_LERENG_55.readFeatures(json_LERENG_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LERENG_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LERENG_55.addFeatures(features_LERENG_55);
var lyr_LERENG_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LERENG_55, 
                style: style_LERENG_55,
                popuplayertitle: "LERENG",
                interactive: true,
    title: 'LERENG<br />\
    <img src="styles/legend/LERENG_55_0.png" /> Datar (0-3%)<br />\
    <img src="styles/legend/LERENG_55_1.png" /> Landai (3-8%)<br />\
    <img src="styles/legend/LERENG_55_2.png" /> Curam (8-16%)<br />\
    <img src="styles/legend/LERENG_55_3.png" /> Agak Curam (16-25%)<br />\
    <img src="styles/legend/LERENG_55_4.png" /> Sangat Curam (25-55%)<br />'
        });
var format_EkoregionLHK_56 = new ol.format.GeoJSON();
var features_EkoregionLHK_56 = format_EkoregionLHK_56.readFeatures(json_EkoregionLHK_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EkoregionLHK_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EkoregionLHK_56.addFeatures(features_EkoregionLHK_56);
var lyr_EkoregionLHK_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EkoregionLHK_56, 
                style: style_EkoregionLHK_56,
                popuplayertitle: "Ekoregion (LHK)",
                interactive: true,
    title: 'Ekoregion (LHK)<br />\
    <img src="styles/legend/EkoregionLHK_56_0.png" /> Kompleks Dataran Fluvial<br />\
    <img src="styles/legend/EkoregionLHK_56_1.png" /> Kompleks Dataran Gambut<br />\
    <img src="styles/legend/EkoregionLHK_56_2.png" /> Kompleks Perbukitan Denudasiona<br />'
        });
var format_IzinUsahaPertambanganESDM_57 = new ol.format.GeoJSON();
var features_IzinUsahaPertambanganESDM_57 = format_IzinUsahaPertambanganESDM_57.readFeatures(json_IzinUsahaPertambanganESDM_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IzinUsahaPertambanganESDM_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IzinUsahaPertambanganESDM_57.addFeatures(features_IzinUsahaPertambanganESDM_57);
var lyr_IzinUsahaPertambanganESDM_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IzinUsahaPertambanganESDM_57, 
                style: style_IzinUsahaPertambanganESDM_57,
                popuplayertitle: "Izin Usaha Pertambangan (ESDM)",
                interactive: true,
                title: '<img src="styles/legend/IzinUsahaPertambanganESDM_57.png" /> Izin Usaha Pertambangan (ESDM)'
            });
var format_PerkebunanHGUATRBPN_58 = new ol.format.GeoJSON();
var features_PerkebunanHGUATRBPN_58 = format_PerkebunanHGUATRBPN_58.readFeatures(json_PerkebunanHGUATRBPN_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerkebunanHGUATRBPN_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerkebunanHGUATRBPN_58.addFeatures(features_PerkebunanHGUATRBPN_58);
var lyr_PerkebunanHGUATRBPN_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerkebunanHGUATRBPN_58, 
                style: style_PerkebunanHGUATRBPN_58,
                popuplayertitle: "Perkebunan HGU (ATR BPN)",
                interactive: true,
                title: '<img src="styles/legend/PerkebunanHGUATRBPN_58.png" /> Perkebunan HGU (ATR BPN)'
            });
var format_GambutdankedalamannyaBBSDLP2019_59 = new ol.format.GeoJSON();
var features_GambutdankedalamannyaBBSDLP2019_59 = format_GambutdankedalamannyaBBSDLP2019_59.readFeatures(json_GambutdankedalamannyaBBSDLP2019_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GambutdankedalamannyaBBSDLP2019_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GambutdankedalamannyaBBSDLP2019_59.addFeatures(features_GambutdankedalamannyaBBSDLP2019_59);
var lyr_GambutdankedalamannyaBBSDLP2019_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GambutdankedalamannyaBBSDLP2019_59, 
                style: style_GambutdankedalamannyaBBSDLP2019_59,
                popuplayertitle: "Gambut dan kedalamannya (BBSDLP) 2019",
                interactive: true,
    title: 'Gambut dan kedalamannya (BBSDLP) 2019<br />\
    <img src="styles/legend/GambutdankedalamannyaBBSDLP2019_59_0.png" /> 50-<100 cm<br />\
    <img src="styles/legend/GambutdankedalamannyaBBSDLP2019_59_1.png" /> 100-<200 cm<br />\
    <img src="styles/legend/GambutdankedalamannyaBBSDLP2019_59_2.png" /> 200-<300 cm<br />\
    <img src="styles/legend/GambutdankedalamannyaBBSDLP2019_59_3.png" /> 300-<500 cm<br />'
        });
var format_PetaGambutLHK_60 = new ol.format.GeoJSON();
var features_PetaGambutLHK_60 = format_PetaGambutLHK_60.readFeatures(json_PetaGambutLHK_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaGambutLHK_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaGambutLHK_60.addFeatures(features_PetaGambutLHK_60);
var lyr_PetaGambutLHK_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaGambutLHK_60, 
                style: style_PetaGambutLHK_60,
                popuplayertitle: "Peta Gambut (LHK)",
                interactive: true,
                title: '<img src="styles/legend/PetaGambutLHK_60.png" /> Peta Gambut (LHK)'
            });
var format_habitatorangutanWWF_61 = new ol.format.GeoJSON();
var features_habitatorangutanWWF_61 = format_habitatorangutanWWF_61.readFeatures(json_habitatorangutanWWF_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_habitatorangutanWWF_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_habitatorangutanWWF_61.addFeatures(features_habitatorangutanWWF_61);
var lyr_habitatorangutanWWF_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_habitatorangutanWWF_61, 
                style: style_habitatorangutanWWF_61,
                popuplayertitle: "habitat orangutan (WWF)",
                interactive: true,
                title: '<img src="styles/legend/habitatorangutanWWF_61.png" /> habitat orangutan (WWF)'
            });
var format_habitatbekantan_62 = new ol.format.GeoJSON();
var features_habitatbekantan_62 = format_habitatbekantan_62.readFeatures(json_habitatbekantan_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_habitatbekantan_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_habitatbekantan_62.addFeatures(features_habitatbekantan_62);
var lyr_habitatbekantan_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_habitatbekantan_62, 
                style: style_habitatbekantan_62,
                popuplayertitle: "habitat bekantan",
                interactive: true,
                title: '<img src="styles/legend/habitatbekantan_62.png" /> habitat bekantan'
            });
var format_KHGLHK_63 = new ol.format.GeoJSON();
var features_KHGLHK_63 = format_KHGLHK_63.readFeatures(json_KHGLHK_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHGLHK_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHGLHK_63.addFeatures(features_KHGLHK_63);
var lyr_KHGLHK_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHGLHK_63, 
                style: style_KHGLHK_63,
                popuplayertitle: "KHG (LHK)",
                interactive: true,
    title: 'KHG (LHK)<br />\
    <img src="styles/legend/KHGLHK_63_0.png" /> KHG Sungai Arut<br />\
    <img src="styles/legend/KHGLHK_63_1.png" /> KHG Sungai Buluh Besar<br />\
    <img src="styles/legend/KHGLHK_63_2.png" /> KHG Sungai Buluh Besar - Sungai Seruyan<br />\
    <img src="styles/legend/KHGLHK_63_3.png" /> KHG Sungai Kumai - Sungai Sekonyer<br />\
    <img src="styles/legend/KHGLHK_63_4.png" /> KHG Sungai Lamandau - Sungai Arut<br />\
    <img src="styles/legend/KHGLHK_63_5.png" /> KHG Sungai Lamandau - Sungai Kumai<br />\
    <img src="styles/legend/KHGLHK_63_6.png" /> KHG Sungai Pukun - Sungai Kelua Besar<br />\
    <img src="styles/legend/KHGLHK_63_7.png" /> KHG Sungai Pukun - Sungai Seruyan<br />\
    <img src="styles/legend/KHGLHK_63_8.png" /> KHG Sungai Rasaw - Sungai Lamandau<br />\
    <img src="styles/legend/KHGLHK_63_9.png" /> KHG Sungai Seruyan - Sungai Kelua Besar<br />\
    <img src="styles/legend/KHGLHK_63_10.png" /> KHG Sungai Seruyan - Sungai Sembuluh<br />'
        });
var format_mangroveLHK_64 = new ol.format.GeoJSON();
var features_mangroveLHK_64 = format_mangroveLHK_64.readFeatures(json_mangroveLHK_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mangroveLHK_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mangroveLHK_64.addFeatures(features_mangroveLHK_64);
var lyr_mangroveLHK_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mangroveLHK_64, 
                style: style_mangroveLHK_64,
                popuplayertitle: "mangrove (LHK)",
                interactive: true,
                title: '<img src="styles/legend/mangroveLHK_64.png" /> mangrove (LHK)'
            });
var format_KoridorSatwa_65 = new ol.format.GeoJSON();
var features_KoridorSatwa_65 = format_KoridorSatwa_65.readFeatures(json_KoridorSatwa_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KoridorSatwa_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KoridorSatwa_65.addFeatures(features_KoridorSatwa_65);
var lyr_KoridorSatwa_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KoridorSatwa_65, 
                style: style_KoridorSatwa_65,
                popuplayertitle: "Koridor Satwa",
                interactive: true,
                title: '<img src="styles/legend/KoridorSatwa_65.png" /> Koridor Satwa'
            });
var format_Arahaliran_sungai_66 = new ol.format.GeoJSON();
var features_Arahaliran_sungai_66 = format_Arahaliran_sungai_66.readFeatures(json_Arahaliran_sungai_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arahaliran_sungai_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arahaliran_sungai_66.addFeatures(features_Arahaliran_sungai_66);
var lyr_Arahaliran_sungai_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arahaliran_sungai_66, 
                style: style_Arahaliran_sungai_66,
                popuplayertitle: "Arahaliran_sungai",
                interactive: true,
                title: '<img src="styles/legend/Arahaliran_sungai_66.png" /> Arahaliran_sungai'
            });
var format_kriteria10rawanbencana_67 = new ol.format.GeoJSON();
var features_kriteria10rawanbencana_67 = format_kriteria10rawanbencana_67.readFeatures(json_kriteria10rawanbencana_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kriteria10rawanbencana_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kriteria10rawanbencana_67.addFeatures(features_kriteria10rawanbencana_67);
var lyr_kriteria10rawanbencana_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kriteria10rawanbencana_67, 
                style: style_kriteria10rawanbencana_67,
                popuplayertitle: "kriteria 10 (rawan bencana)",
                interactive: true,
                title: '<img src="styles/legend/kriteria10rawanbencana_67.png" /> kriteria 10 (rawan bencana)'
            });
var format_Kriteria9subdas_68 = new ol.format.GeoJSON();
var features_Kriteria9subdas_68 = format_Kriteria9subdas_68.readFeatures(json_Kriteria9subdas_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kriteria9subdas_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kriteria9subdas_68.addFeatures(features_Kriteria9subdas_68);
var lyr_Kriteria9subdas_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kriteria9subdas_68, 
                style: style_Kriteria9subdas_68,
                popuplayertitle: "Kriteria 9 (subdas)",
                interactive: true,
                title: '<img src="styles/legend/Kriteria9subdas_68.png" /> Kriteria 9 (subdas)'
            });
var format_kriteria8cagarbiosferTNTPramsar_69 = new ol.format.GeoJSON();
var features_kriteria8cagarbiosferTNTPramsar_69 = format_kriteria8cagarbiosferTNTPramsar_69.readFeatures(json_kriteria8cagarbiosferTNTPramsar_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kriteria8cagarbiosferTNTPramsar_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kriteria8cagarbiosferTNTPramsar_69.addFeatures(features_kriteria8cagarbiosferTNTPramsar_69);
var lyr_kriteria8cagarbiosferTNTPramsar_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kriteria8cagarbiosferTNTPramsar_69, 
                style: style_kriteria8cagarbiosferTNTPramsar_69,
                popuplayertitle: "kriteria 8 (cagar biosfer, TNTP, ramsar)",
                interactive: true,
                title: '<img src="styles/legend/kriteria8cagarbiosferTNTPramsar_69.png" /> kriteria 8 (cagar biosfer, TNTP, ramsar)'
            });
var format_Kriteria7masyarakatadat_70 = new ol.format.GeoJSON();
var features_Kriteria7masyarakatadat_70 = format_Kriteria7masyarakatadat_70.readFeatures(json_Kriteria7masyarakatadat_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kriteria7masyarakatadat_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kriteria7masyarakatadat_70.addFeatures(features_Kriteria7masyarakatadat_70);
var lyr_Kriteria7masyarakatadat_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kriteria7masyarakatadat_70, 
                style: style_Kriteria7masyarakatadat_70,
                popuplayertitle: "Kriteria 7 (masyarakat adat)",
                interactive: true,
                title: '<img src="styles/legend/Kriteria7masyarakatadat_70.png" /> Kriteria 7 (masyarakat adat)'
            });
var format_Kriteria6JarakdanJangkauanpergerakan_71 = new ol.format.GeoJSON();
var features_Kriteria6JarakdanJangkauanpergerakan_71 = format_Kriteria6JarakdanJangkauanpergerakan_71.readFeatures(json_Kriteria6JarakdanJangkauanpergerakan_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kriteria6JarakdanJangkauanpergerakan_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kriteria6JarakdanJangkauanpergerakan_71.addFeatures(features_Kriteria6JarakdanJangkauanpergerakan_71);
var lyr_Kriteria6JarakdanJangkauanpergerakan_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kriteria6JarakdanJangkauanpergerakan_71, 
                style: style_Kriteria6JarakdanJangkauanpergerakan_71,
                popuplayertitle: "Kriteria 6 (Jarak dan Jangkauan pergerakan)",
                interactive: true,
    title: 'Kriteria 6 (Jarak dan Jangkauan pergerakan)<br />\
    <img src="styles/legend/Kriteria6JarakdanJangkauanpergerakan_71_0.png" /> Dekat dari kota-kota sekitar<br />\
    <img src="styles/legend/Kriteria6JarakdanJangkauanpergerakan_71_1.png" /> Cukup dekat dari kota-kota sekitar<br />\
    <img src="styles/legend/Kriteria6JarakdanJangkauanpergerakan_71_2.png" /> Cukup Jauh dari kota-kota sekitar<br />\
    <img src="styles/legend/Kriteria6JarakdanJangkauanpergerakan_71_3.png" /> Jauh dari kota-kota sekitar<br />\
    <img src="styles/legend/Kriteria6JarakdanJangkauanpergerakan_71_4.png" /> Sangat Jauh dari kota-kota sekitar<br />'
        });
var lyr_kriteria5perkembanganpermukiman_72 = new ol.layer.Image({
                            opacity: 1,
                            title: "kriteria 5 (perkembangan permukiman)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/kriteria5perkembanganpermukiman_72.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12387915.504131, -394724.277136, 12571525.825522, -236986.251010]
                            })
                        });
var format_kriteria4pusatekonomi_73 = new ol.format.GeoJSON();
var features_kriteria4pusatekonomi_73 = format_kriteria4pusatekonomi_73.readFeatures(json_kriteria4pusatekonomi_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kriteria4pusatekonomi_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kriteria4pusatekonomi_73.addFeatures(features_kriteria4pusatekonomi_73);
var lyr_kriteria4pusatekonomi_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kriteria4pusatekonomi_73, 
                style: style_kriteria4pusatekonomi_73,
                popuplayertitle: "kriteria 4 (pusat ekonomi)",
                interactive: true,
                title: '<img src="styles/legend/kriteria4pusatekonomi_73.png" /> kriteria 4 (pusat ekonomi)'
            });
var format_kriteria3hutanhabitatsatwakuncidanKHG_74 = new ol.format.GeoJSON();
var features_kriteria3hutanhabitatsatwakuncidanKHG_74 = format_kriteria3hutanhabitatsatwakuncidanKHG_74.readFeatures(json_kriteria3hutanhabitatsatwakuncidanKHG_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kriteria3hutanhabitatsatwakuncidanKHG_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kriteria3hutanhabitatsatwakuncidanKHG_74.addFeatures(features_kriteria3hutanhabitatsatwakuncidanKHG_74);
var lyr_kriteria3hutanhabitatsatwakuncidanKHG_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kriteria3hutanhabitatsatwakuncidanKHG_74, 
                style: style_kriteria3hutanhabitatsatwakuncidanKHG_74,
                popuplayertitle: "kriteria 3 (hutan, habitat satwa kunci dan KHG) ",
                interactive: true,
                title: '<img src="styles/legend/kriteria3hutanhabitatsatwakuncidanKHG_74.png" /> kriteria 3 (hutan, habitat satwa kunci dan KHG) '
            });
var format_kriteria2fokuspenanganan_75 = new ol.format.GeoJSON();
var features_kriteria2fokuspenanganan_75 = format_kriteria2fokuspenanganan_75.readFeatures(json_kriteria2fokuspenanganan_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kriteria2fokuspenanganan_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kriteria2fokuspenanganan_75.addFeatures(features_kriteria2fokuspenanganan_75);
var lyr_kriteria2fokuspenanganan_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kriteria2fokuspenanganan_75, 
                style: style_kriteria2fokuspenanganan_75,
                popuplayertitle: "kriteria 2 (fokus penanganan)",
                interactive: true,
                title: '<img src="styles/legend/kriteria2fokuspenanganan_75.png" /> kriteria 2 (fokus penanganan)'
            });
var format_kriteria1isustrategis_76 = new ol.format.GeoJSON();
var features_kriteria1isustrategis_76 = format_kriteria1isustrategis_76.readFeatures(json_kriteria1isustrategis_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kriteria1isustrategis_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kriteria1isustrategis_76.addFeatures(features_kriteria1isustrategis_76);
var lyr_kriteria1isustrategis_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kriteria1isustrategis_76, 
                style: style_kriteria1isustrategis_76,
                popuplayertitle: "kriteria 1 (isu strategis)",
                interactive: true,
                title: '<img src="styles/legend/kriteria1isustrategis_76.png" /> kriteria 1 (isu strategis)'
            });
var format_ZONAPERLINDUNGANSETEMPAT_77 = new ol.format.GeoJSON();
var features_ZONAPERLINDUNGANSETEMPAT_77 = format_ZONAPERLINDUNGANSETEMPAT_77.readFeatures(json_ZONAPERLINDUNGANSETEMPAT_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAPERLINDUNGANSETEMPAT_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAPERLINDUNGANSETEMPAT_77.addFeatures(features_ZONAPERLINDUNGANSETEMPAT_77);
var lyr_ZONAPERLINDUNGANSETEMPAT_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAPERLINDUNGANSETEMPAT_77, 
                style: style_ZONAPERLINDUNGANSETEMPAT_77,
                popuplayertitle: "ZONA PERLINDUNGAN SETEMPAT",
                interactive: true,
    title: 'ZONA PERLINDUNGAN SETEMPAT<br />\
    <img src="styles/legend/ZONAPERLINDUNGANSETEMPAT_77_0.png" /> Zona Perlindungan Setempat<br />'
        });
var format_ZONABUDIDAYASEDANG_78 = new ol.format.GeoJSON();
var features_ZONABUDIDAYASEDANG_78 = format_ZONABUDIDAYASEDANG_78.readFeatures(json_ZONABUDIDAYASEDANG_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONABUDIDAYASEDANG_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONABUDIDAYASEDANG_78.addFeatures(features_ZONABUDIDAYASEDANG_78);
var lyr_ZONABUDIDAYASEDANG_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONABUDIDAYASEDANG_78, 
                style: style_ZONABUDIDAYASEDANG_78,
                popuplayertitle: "ZONA BUDIDAYA SEDANG",
                interactive: true,
    title: 'ZONA BUDIDAYA SEDANG<br />\
    <img src="styles/legend/ZONABUDIDAYASEDANG_78_0.png" /> Zona Budi Daya Sedang<br />'
        });
var format_ZONABUDIDAYARENDAH_79 = new ol.format.GeoJSON();
var features_ZONABUDIDAYARENDAH_79 = format_ZONABUDIDAYARENDAH_79.readFeatures(json_ZONABUDIDAYARENDAH_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONABUDIDAYARENDAH_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONABUDIDAYARENDAH_79.addFeatures(features_ZONABUDIDAYARENDAH_79);
var lyr_ZONABUDIDAYARENDAH_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONABUDIDAYARENDAH_79, 
                style: style_ZONABUDIDAYARENDAH_79,
                popuplayertitle: "ZONA BUDI DAYA RENDAH",
                interactive: true,
    title: 'ZONA BUDI DAYA RENDAH<br />\
    <img src="styles/legend/ZONABUDIDAYARENDAH_79_0.png" /> Zona Budi Daya Rendah<br />'
        });
var format_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80 = new ol.format.GeoJSON();
var features_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80 = format_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80.readFeatures(json_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80.addFeatures(features_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80);
var lyr_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80, 
                style: style_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80,
                popuplayertitle: "ZONA BUDI DAYA KAWASAN HUTAN PRODUKSI",
                interactive: true,
    title: 'ZONA BUDI DAYA KAWASAN HUTAN PRODUKSI<br />\
    <img src="styles/legend/ZONABUDIDAYAKAWASANHUTANPRODUKSI_80_0.png" /> Zona Budi Daya Kawasan Hutan Produksi<br />'
        });
var format_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81 = new ol.format.GeoJSON();
var features_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81 = format_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81.readFeatures(json_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81.addFeatures(features_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81);
var lyr_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81, 
                style: style_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81,
                popuplayertitle: "ZONA BUDI DAYA DENGAN KARAKTERISTIK KAWASAN PERTANIAN",
                interactive: true,
    title: 'ZONA BUDI DAYA DENGAN KARAKTERISTIK KAWASAN PERTANIAN<br />\
    <img src="styles/legend/ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81_0.png" /> Zona Budi Daya Dengan Karakteristik Kawasan Pertanian<br />'
        });
var format_TAMANWISATAALAM_82 = new ol.format.GeoJSON();
var features_TAMANWISATAALAM_82 = format_TAMANWISATAALAM_82.readFeatures(json_TAMANWISATAALAM_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMANWISATAALAM_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMANWISATAALAM_82.addFeatures(features_TAMANWISATAALAM_82);
var lyr_TAMANWISATAALAM_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMANWISATAALAM_82, 
                style: style_TAMANWISATAALAM_82,
                popuplayertitle: "TAMAN WISATA ALAM",
                interactive: true,
    title: 'TAMAN WISATA ALAM<br />\
    <img src="styles/legend/TAMANWISATAALAM_82_0.png" /> Taman Wisata Alam<br />'
        });
var format_TAMANNASIONAL_83 = new ol.format.GeoJSON();
var features_TAMANNASIONAL_83 = format_TAMANNASIONAL_83.readFeatures(json_TAMANNASIONAL_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMANNASIONAL_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMANNASIONAL_83.addFeatures(features_TAMANNASIONAL_83);
var lyr_TAMANNASIONAL_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMANNASIONAL_83, 
                style: style_TAMANNASIONAL_83,
                popuplayertitle: "TAMAN NASIONAL",
                interactive: true,
    title: 'TAMAN NASIONAL<br />\
    <img src="styles/legend/TAMANNASIONAL_83_0.png" /> Taman Nasional<br />'
        });
var format_KAWASANLINDUNGGAMBUT_84 = new ol.format.GeoJSON();
var features_KAWASANLINDUNGGAMBUT_84 = format_KAWASANLINDUNGGAMBUT_84.readFeatures(json_KAWASANLINDUNGGAMBUT_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANLINDUNGGAMBUT_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANLINDUNGGAMBUT_84.addFeatures(features_KAWASANLINDUNGGAMBUT_84);
var lyr_KAWASANLINDUNGGAMBUT_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANLINDUNGGAMBUT_84, 
                style: style_KAWASANLINDUNGGAMBUT_84,
                popuplayertitle: "KAWASAN LINDUNG GAMBUT",
                interactive: true,
    title: 'KAWASAN LINDUNG GAMBUT<br />\
    <img src="styles/legend/KAWASANLINDUNGGAMBUT_84_0.png" /> Kawasan Lindung Gambut<br />'
        });
var format_EKOSISTEMMANGROVE_85 = new ol.format.GeoJSON();
var features_EKOSISTEMMANGROVE_85 = format_EKOSISTEMMANGROVE_85.readFeatures(json_EKOSISTEMMANGROVE_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EKOSISTEMMANGROVE_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EKOSISTEMMANGROVE_85.addFeatures(features_EKOSISTEMMANGROVE_85);
var lyr_EKOSISTEMMANGROVE_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EKOSISTEMMANGROVE_85, 
                style: style_EKOSISTEMMANGROVE_85,
                popuplayertitle: "EKOSISTEM MANGROVE",
                interactive: true,
    title: 'EKOSISTEM MANGROVE<br />\
    <img src="styles/legend/EKOSISTEMMANGROVE_85_0.png" /> Ekosistem Mangrove<br />'
        });
var format_BADANAIR_86 = new ol.format.GeoJSON();
var features_BADANAIR_86 = format_BADANAIR_86.readFeatures(json_BADANAIR_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BADANAIR_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BADANAIR_86.addFeatures(features_BADANAIR_86);
var lyr_BADANAIR_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BADANAIR_86, 
                style: style_BADANAIR_86,
                popuplayertitle: "BADAN AIR",
                interactive: true,
    title: 'BADAN AIR<br />\
    <img src="styles/legend/BADANAIR_86_0.png" /> Badan Air<br />'
        });
var format_JARINGANPRASARANALAINNYA_87 = new ol.format.GeoJSON();
var features_JARINGANPRASARANALAINNYA_87 = format_JARINGANPRASARANALAINNYA_87.readFeatures(json_JARINGANPRASARANALAINNYA_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANPRASARANALAINNYA_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANPRASARANALAINNYA_87.addFeatures(features_JARINGANPRASARANALAINNYA_87);
var lyr_JARINGANPRASARANALAINNYA_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANPRASARANALAINNYA_87, 
                style: style_JARINGANPRASARANALAINNYA_87,
                popuplayertitle: "JARINGAN PRASARANA LAINNYA",
                interactive: true,
    title: 'JARINGAN PRASARANA LAINNYA<br />\
    <img src="styles/legend/JARINGANPRASARANALAINNYA_87_0.png" /> Rute Pariwisata<br />'
        });
var format_INFRASTUKTURPRASARANALAINNYA_88 = new ol.format.GeoJSON();
var features_INFRASTUKTURPRASARANALAINNYA_88 = format_INFRASTUKTURPRASARANALAINNYA_88.readFeatures(json_INFRASTUKTURPRASARANALAINNYA_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTUKTURPRASARANALAINNYA_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTUKTURPRASARANALAINNYA_88.addFeatures(features_INFRASTUKTURPRASARANALAINNYA_88);
var lyr_INFRASTUKTURPRASARANALAINNYA_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTUKTURPRASARANALAINNYA_88, 
                style: style_INFRASTUKTURPRASARANALAINNYA_88,
                popuplayertitle: "INFRASTUKTUR PRASARANA LAINNYA",
                interactive: true,
    title: 'INFRASTUKTUR PRASARANA LAINNYA<br />\
    <img src="styles/legend/INFRASTUKTURPRASARANALAINNYA_88_0.png" /> Tempat Evakuasi Bencana<br />'
        });
var format_JARINGANPERMUKIMAN_89 = new ol.format.GeoJSON();
var features_JARINGANPERMUKIMAN_89 = format_JARINGANPERMUKIMAN_89.readFeatures(json_JARINGANPERMUKIMAN_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANPERMUKIMAN_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANPERMUKIMAN_89.addFeatures(features_JARINGANPERMUKIMAN_89);
var lyr_JARINGANPERMUKIMAN_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANPERMUKIMAN_89, 
                style: style_JARINGANPERMUKIMAN_89,
                popuplayertitle: "JARINGAN PERMUKIMAN",
                interactive: true,
    title: 'JARINGAN PERMUKIMAN<br />\
    <img src="styles/legend/JARINGANPERMUKIMAN_89_0.png" /> Jaringan Drainase Primer<br />\
    <img src="styles/legend/JARINGANPERMUKIMAN_89_1.png" /> Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/JARINGANPERMUKIMAN_89_2.png" /> Jaringan Drainase Tersier<br />\
    <img src="styles/legend/JARINGANPERMUKIMAN_89_3.png" /> Jaringan Transmisi Air Baku<br />\
    <img src="styles/legend/JARINGANPERMUKIMAN_89_4.png" /> Unit Distribusi<br />'
        });
var format_INFRASTUKTURPERMUKIMAN_90 = new ol.format.GeoJSON();
var features_INFRASTUKTURPERMUKIMAN_90 = format_INFRASTUKTURPERMUKIMAN_90.readFeatures(json_INFRASTUKTURPERMUKIMAN_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTUKTURPERMUKIMAN_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTUKTURPERMUKIMAN_90.addFeatures(features_INFRASTUKTURPERMUKIMAN_90);
var lyr_INFRASTUKTURPERMUKIMAN_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTUKTURPERMUKIMAN_90, 
                style: style_INFRASTUKTURPERMUKIMAN_90,
                popuplayertitle: "INFRASTUKTUR PERMUKIMAN",
                interactive: true,
    title: 'INFRASTUKTUR PERMUKIMAN<br />\
    <img src="styles/legend/INFRASTUKTURPERMUKIMAN_90_0.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/INFRASTUKTURPERMUKIMAN_90_1.png" /> Instalasi Pengolahan Lumpur Tinja (IPLT)<br />\
    <img src="styles/legend/INFRASTUKTURPERMUKIMAN_90_2.png" /> Sistem Pengelolaan Limbah Bahan Berbahaya Dan Beracun (B3)<br />\
    <img src="styles/legend/INFRASTUKTURPERMUKIMAN_90_3.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />\
    <img src="styles/legend/INFRASTUKTURPERMUKIMAN_90_4.png" /> Tempat Pengolahan Sampah Terpadu (TPST)<br />\
    <img src="styles/legend/INFRASTUKTURPERMUKIMAN_90_5.png" /> Bangunan Pengambil Air baku<br />'
        });
var format_JARINGANSDA_91 = new ol.format.GeoJSON();
var features_JARINGANSDA_91 = format_JARINGANSDA_91.readFeatures(json_JARINGANSDA_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANSDA_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANSDA_91.addFeatures(features_JARINGANSDA_91);
var lyr_JARINGANSDA_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANSDA_91, 
                style: style_JARINGANSDA_91,
                popuplayertitle: "JARINGAN SDA",
                interactive: true,
    title: 'JARINGAN SDA<br />\
    <img src="styles/legend/JARINGANSDA_91_0.png" /> Jaringan Irigasi Primer<br />\
    <img src="styles/legend/JARINGANSDA_91_1.png" /> Jaringan Irigasi Sekunder<br />\
    <img src="styles/legend/JARINGANSDA_91_2.png" /> Jaringan Pengendalian Banjir<br />'
        });
var format_INFRASTRUKTURSDA_92 = new ol.format.GeoJSON();
var features_INFRASTRUKTURSDA_92 = format_INFRASTRUKTURSDA_92.readFeatures(json_INFRASTRUKTURSDA_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTRUKTURSDA_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTRUKTURSDA_92.addFeatures(features_INFRASTRUKTURSDA_92);
var lyr_INFRASTRUKTURSDA_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTRUKTURSDA_92, 
                style: style_INFRASTRUKTURSDA_92,
                popuplayertitle: "INFRASTRUKTUR SDA",
                interactive: true,
    title: 'INFRASTRUKTUR SDA<br />\
    <img src="styles/legend/INFRASTRUKTURSDA_92_0.png" /> Bangunan Pengendalian Banjir<br />\
    <img src="styles/legend/INFRASTRUKTURSDA_92_1.png" /> Bangunan Sumber Daya Air<br />'
        });
var format_JARINGANTELEKOMUNIKASI_93 = new ol.format.GeoJSON();
var features_JARINGANTELEKOMUNIKASI_93 = format_JARINGANTELEKOMUNIKASI_93.readFeatures(json_JARINGANTELEKOMUNIKASI_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANTELEKOMUNIKASI_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANTELEKOMUNIKASI_93.addFeatures(features_JARINGANTELEKOMUNIKASI_93);
var lyr_JARINGANTELEKOMUNIKASI_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANTELEKOMUNIKASI_93, 
                style: style_JARINGANTELEKOMUNIKASI_93,
                popuplayertitle: "JARINGAN TELEKOMUNIKASI",
                interactive: true,
    title: 'JARINGAN TELEKOMUNIKASI<br />\
    <img src="styles/legend/JARINGANTELEKOMUNIKASI_93_0.png" /> Jaringan Kabel<br />\
    <img src="styles/legend/JARINGANTELEKOMUNIKASI_93_1.png" /> Kabel Bawah Laut Untuk Telekomunikasi<br />'
        });
var format_INFRASTRUKTURTELEKOMUNIKASI_94 = new ol.format.GeoJSON();
var features_INFRASTRUKTURTELEKOMUNIKASI_94 = format_INFRASTRUKTURTELEKOMUNIKASI_94.readFeatures(json_INFRASTRUKTURTELEKOMUNIKASI_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTRUKTURTELEKOMUNIKASI_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTRUKTURTELEKOMUNIKASI_94.addFeatures(features_INFRASTRUKTURTELEKOMUNIKASI_94);
var lyr_INFRASTRUKTURTELEKOMUNIKASI_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTRUKTURTELEKOMUNIKASI_94, 
                style: style_INFRASTRUKTURTELEKOMUNIKASI_94,
                popuplayertitle: "INFRASTRUKTUR TELEKOMUNIKASI",
                interactive: true,
    title: 'INFRASTRUKTUR TELEKOMUNIKASI<br />\
    <img src="styles/legend/INFRASTRUKTURTELEKOMUNIKASI_94_0.png" /> Jaringan Bergerak Seluler<br />'
        });
var format_JARINGANENERGI_95 = new ol.format.GeoJSON();
var features_JARINGANENERGI_95 = format_JARINGANENERGI_95.readFeatures(json_JARINGANENERGI_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANENERGI_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANENERGI_95.addFeatures(features_JARINGANENERGI_95);
var lyr_JARINGANENERGI_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANENERGI_95, 
                style: style_JARINGANENERGI_95,
                popuplayertitle: "JARINGAN ENERGI",
                interactive: true,
    title: 'JARINGAN ENERGI<br />\
    <img src="styles/legend/JARINGANENERGI_95_0.png" /> Gardu Induk<br />\
    <img src="styles/legend/JARINGANENERGI_95_1.png" /> Infrastruktur Minyak dan Gas Bumi<br />\
    <img src="styles/legend/JARINGANENERGI_95_2.png" /> Pembangkit Listrik Tenaga Bayu (PLTB)<br />\
    <img src="styles/legend/JARINGANENERGI_95_3.png" /> Pembangkit Listrik Tenaga Diesel (PLTD)<br />\
    <img src="styles/legend/JARINGANENERGI_95_4.png" /> Pembangkit Listrik Tenaga Gas (PLTG)<br />\
    <img src="styles/legend/JARINGANENERGI_95_5.png" /> Pembangkit Listrik Tenaga Uap (PLTU)<br />'
        });
var format_INFRASTUKTURENERGI_96 = new ol.format.GeoJSON();
var features_INFRASTUKTURENERGI_96 = format_INFRASTUKTURENERGI_96.readFeatures(json_INFRASTUKTURENERGI_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTUKTURENERGI_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTUKTURENERGI_96.addFeatures(features_INFRASTUKTURENERGI_96);
var lyr_INFRASTUKTURENERGI_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTUKTURENERGI_96, 
                style: style_INFRASTUKTURENERGI_96,
                popuplayertitle: "INFRASTUKTUR ENERGI",
                interactive: true,
    title: 'INFRASTUKTUR ENERGI<br />\
    <img src="styles/legend/INFRASTUKTURENERGI_96_0.png" /> Saluran Udara Tegangan Tinggi (SUTT)<br />'
        });
var format_JARINGANTRANSPORTASI_97 = new ol.format.GeoJSON();
var features_JARINGANTRANSPORTASI_97 = format_JARINGANTRANSPORTASI_97.readFeatures(json_JARINGANTRANSPORTASI_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANTRANSPORTASI_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANTRANSPORTASI_97.addFeatures(features_JARINGANTRANSPORTASI_97);
var lyr_JARINGANTRANSPORTASI_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANTRANSPORTASI_97, 
                style: style_JARINGANTRANSPORTASI_97,
                popuplayertitle: "JARINGAN TRANSPORTASI",
                interactive: true,
    title: 'JARINGAN TRANSPORTASI<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_1.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_2.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_3.png" /> Jalan Tol<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_4.png" /> Jaringan Jalur Kereta Api Antarkota<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_5.png" /> Lintas Angkutan Sungai dan Danau<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_6.png" /> Lintas Penyeberangan Antarprovinsi<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_7.png" /> Lintas Penyeberangan dalam Kabupaten<br />\
    <img src="styles/legend/JARINGANTRANSPORTASI_97_8.png" /> Jalan Strategis Nasional<br />'
        });
var format_INFRASTRUKTURTRANSPORTASI_98 = new ol.format.GeoJSON();
var features_INFRASTRUKTURTRANSPORTASI_98 = format_INFRASTRUKTURTRANSPORTASI_98.readFeatures(json_INFRASTRUKTURTRANSPORTASI_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTRUKTURTRANSPORTASI_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTRUKTURTRANSPORTASI_98.addFeatures(features_INFRASTRUKTURTRANSPORTASI_98);
var lyr_INFRASTRUKTURTRANSPORTASI_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTRUKTURTRANSPORTASI_98, 
                style: style_INFRASTRUKTURTRANSPORTASI_98,
                popuplayertitle: "INFRASTRUKTUR TRANSPORTASI",
                interactive: true,
    title: 'INFRASTRUKTUR TRANSPORTASI<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_0.png" /> Bandar Udara Pengumpan<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_1.png" /> Bandar Udara Pengumpul<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_2.png" /> Pangkalan Pendaratan Ikan<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_3.png" /> Pelabuhan Pengumpan Lokal<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_4.png" /> Pelabuhan Pengumpan Regional<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_5.png" /> Pelabuhan Pengumpul<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_6.png" /> Pelabuhan Penyeberangan Kelas I<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_7.png" /> Pelabuhan Sungai dan Danau Pengumpan<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_8.png" /> Pelabuhan Sungai dan Danau Pengumpul<br />\
    <img src="styles/legend/INFRASTRUKTURTRANSPORTASI_98_9.png" /> Stasiun Penumpang<br />'
        });
var format_PUSAT_PEMUKIMAN_99 = new ol.format.GeoJSON();
var features_PUSAT_PEMUKIMAN_99 = format_PUSAT_PEMUKIMAN_99.readFeatures(json_PUSAT_PEMUKIMAN_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSAT_PEMUKIMAN_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSAT_PEMUKIMAN_99.addFeatures(features_PUSAT_PEMUKIMAN_99);
var lyr_PUSAT_PEMUKIMAN_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSAT_PEMUKIMAN_99, 
                style: style_PUSAT_PEMUKIMAN_99,
                popuplayertitle: "PUSAT_PEMUKIMAN",
                interactive: true,
    title: 'PUSAT_PEMUKIMAN<br />\
    <img src="styles/legend/PUSAT_PEMUKIMAN_99_0.png" /> Sistem Pelayanan Sekunder<br />\
    <img src="styles/legend/PUSAT_PEMUKIMAN_99_1.png" /> Sistem Pelayanan Tertier<br />'
        });
var format_BATASWP_100 = new ol.format.GeoJSON();
var features_BATASWP_100 = format_BATASWP_100.readFeatures(json_BATASWP_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASWP_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASWP_100.addFeatures(features_BATASWP_100);
var lyr_BATASWP_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASWP_100, 
                style: style_BATASWP_100,
                popuplayertitle: "BATAS WP",
                interactive: true,
                title: '<img src="styles/legend/BATASWP_100.png" /> BATAS WP'
            });
var format_TitikDrone_101 = new ol.format.GeoJSON();
var features_TitikDrone_101 = format_TitikDrone_101.readFeatures(json_TitikDrone_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikDrone_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikDrone_101.addFeatures(features_TitikDrone_101);
var lyr_TitikDrone_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikDrone_101, 
                style: style_TitikDrone_101,
                popuplayertitle: "Titik Drone",
                interactive: true,
                title: '<img src="styles/legend/TitikDrone_101.png" /> Titik Drone'
            });
var group_STRUKTURRUANG = new ol.layer.Group({
                                layers: [lyr_PUSAT_PEMUKIMAN_99,],
                                fold: "close",
                                title: "STRUKTUR RUANG"});
var group_PRASARANAUTAMATRANSPORTASI = new ol.layer.Group({
                                layers: [lyr_JARINGANTRANSPORTASI_97,lyr_INFRASTRUKTURTRANSPORTASI_98,],
                                fold: "close",
                                title: "PRASARANA UTAMA TRANSPORTASI"});
var group_PRASARANAUTAMAENERGI = new ol.layer.Group({
                                layers: [lyr_JARINGANENERGI_95,lyr_INFRASTUKTURENERGI_96,],
                                fold: "close",
                                title: "PRASARANA UTAMA ENERGI"});
var group_PRASARANAUTAMATELEKOMUNIKASI = new ol.layer.Group({
                                layers: [lyr_JARINGANTELEKOMUNIKASI_93,lyr_INFRASTRUKTURTELEKOMUNIKASI_94,],
                                fold: "close",
                                title: "PRASARANA UTAMA TELEKOMUNIKASI"});
var group_PRASARANAUTAMASUMBERDAYAAIR = new ol.layer.Group({
                                layers: [lyr_JARINGANSDA_91,lyr_INFRASTRUKTURSDA_92,],
                                fold: "close",
                                title: "PRASARANA UTAMA SUMBER DAYA AIR"});
var group_PRASARANAUTAMAPERMUKIMAN = new ol.layer.Group({
                                layers: [lyr_JARINGANPERMUKIMAN_89,lyr_INFRASTUKTURPERMUKIMAN_90,],
                                fold: "close",
                                title: "PRASARANA UTAMA PERMUKIMAN"});
var group_PRASARANALAINNYA = new ol.layer.Group({
                                layers: [lyr_JARINGANPRASARANALAINNYA_87,lyr_INFRASTUKTURPRASARANALAINNYA_88,],
                                fold: "close",
                                title: "PRASARANA LAINNYA"});
var group_POLARUANG = new ol.layer.Group({
                                layers: [lyr_ZONAPERLINDUNGANSETEMPAT_77,lyr_ZONABUDIDAYASEDANG_78,lyr_ZONABUDIDAYARENDAH_79,lyr_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80,lyr_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81,lyr_TAMANWISATAALAM_82,lyr_TAMANNASIONAL_83,lyr_KAWASANLINDUNGGAMBUT_84,lyr_EKOSISTEMMANGROVE_85,lyr_BADANAIR_86,],
                                fold: "open",
                                title: "POLA RUANG"});
var group_kriteriadeliniasi = new ol.layer.Group({
                                layers: [lyr_kriteria10rawanbencana_67,lyr_Kriteria9subdas_68,lyr_kriteria8cagarbiosferTNTPramsar_69,lyr_Kriteria7masyarakatadat_70,lyr_Kriteria6JarakdanJangkauanpergerakan_71,lyr_kriteria5perkembanganpermukiman_72,lyr_kriteria4pusatekonomi_73,lyr_kriteria3hutanhabitatsatwakuncidanKHG_74,lyr_kriteria2fokuspenanganan_75,lyr_kriteria1isustrategis_76,],
                                fold: "close",
                                title: "kriteria deliniasi"});
var group_PETATEMATIK = new ol.layer.Group({
                                layers: [lyr_MasyarakatAdat_47,lyr_HutanTanamanRakyatLHK_48,lyr_PetaindikatifarahanpreservasiLHK_49,lyr_cagarbiosfer_50,lyr_IndeksKerentananIklimLH_51,lyr_subdas_52,lyr_HutanAdat_53,lyr_landsistemBIG_54,lyr_LERENG_55,lyr_EkoregionLHK_56,lyr_IzinUsahaPertambanganESDM_57,lyr_PerkebunanHGUATRBPN_58,lyr_GambutdankedalamannyaBBSDLP2019_59,lyr_PetaGambutLHK_60,lyr_habitatorangutanWWF_61,lyr_habitatbekantan_62,lyr_KHGLHK_63,lyr_mangroveLHK_64,lyr_KoridorSatwa_65,lyr_Arahaliran_sungai_66,],
                                fold: "close",
                                title: "PETA TEMATIK"});
var group_ZonasiKawasanTNTP = new ol.layer.Group({
                                layers: [lyr_Zonasiversi2024_45,lyr_zonasiversiKSP_46,],
                                fold: "close",
                                title: "Zonasi Kawasan TNTP"});
var group_Dasdanaliransungai = new ol.layer.Group({
                                layers: [lyr_SistemDasKemenhut_43,lyr_JaringanSungai_44,],
                                fold: "close",
                                title: "Das dan aliran sungai"});
var group_PETAANALISIS = new ol.layer.Group({
                                layers: [lyr_RawanKarhutlainarisk_34,lyr_Deforestasi19902020LHK_35,lyr_PertumbuhanPermukiman19902020_36,lyr_PertumbuhanSawit19902020LHK_37,],
                                fold: "close",
                                title: "PETA ANALISIS "});
var group_HOTSPOTtahunanFIRMSModis20012025 = new ol.layer.Group({
                                layers: [lyr_Hotspot_GT320_2025_9,lyr_Hotspot_GT320_2024_10,lyr_Hotspot_GT320_2023_11,lyr_Hotspot_GT320_2022_12,lyr_Hotspot_GT320_2021_13,lyr_Hotspot_GT320_2020_14,lyr_Hotspot_GT320_2019_15,lyr_Hotspot_GT320_2018_16,lyr_Hotspot_GT320_2017_17,lyr_Hotspot_GT320_2016_18,lyr_Hotspot_GT320_2015_19,lyr_Hotspot_GT320_2014_20,lyr_Hotspot_GT320_2013_21,lyr_Hotspot_GT320_2012_22,lyr_Hotspot_GT320_2011_23,lyr_Hotspot_GT320_2010_24,lyr_Hotspot_GT320_2009_25,lyr_Hotspot_GT320_2008_26,lyr_Hotspot_GT320_2007_27,lyr_Hotspot_GT320_2006_28,lyr_Hotspot_GT320_2005_29,lyr_Hotspot_GT320_2004_30,lyr_Hotspot_GT320_2003_31,lyr_Hotspot_GT320_2002_32,lyr_Hotspot_GT320_2001_33,],
                                fold: "close",
                                title: "HOTSPOT tahunan FIRMS Modis 2001-2025"});
var group_PerkembanganPemukiman10tahunan19802025 = new ol.layer.Group({
                                layers: [lyr_1980_2,lyr_1990_3,lyr_2000_4,lyr_2010_5,lyr_2020_6,lyr_2025_7,],
                                fold: "close",
                                title: "Perkembangan Pemukiman 10 tahunan (1980-2025)"});
var group_PenutupLahan = new ol.layer.Group({
                                layers: [lyr_PenutupLahan2020LHK_1,],
                                fold: "close",
                                title: "Penutup Lahan "});

lyr_googleimagery_0.setVisible(true);lyr_PenutupLahan2020LHK_1.setVisible(false);lyr_1980_2.setVisible(false);lyr_1990_3.setVisible(false);lyr_2000_4.setVisible(false);lyr_2010_5.setVisible(false);lyr_2020_6.setVisible(false);lyr_2025_7.setVisible(false);lyr_RawanKarhutlaInarisk_8.setVisible(false);lyr_Hotspot_GT320_2025_9.setVisible(false);lyr_Hotspot_GT320_2024_10.setVisible(false);lyr_Hotspot_GT320_2023_11.setVisible(false);lyr_Hotspot_GT320_2022_12.setVisible(false);lyr_Hotspot_GT320_2021_13.setVisible(false);lyr_Hotspot_GT320_2020_14.setVisible(false);lyr_Hotspot_GT320_2019_15.setVisible(false);lyr_Hotspot_GT320_2018_16.setVisible(false);lyr_Hotspot_GT320_2017_17.setVisible(false);lyr_Hotspot_GT320_2016_18.setVisible(false);lyr_Hotspot_GT320_2015_19.setVisible(false);lyr_Hotspot_GT320_2014_20.setVisible(false);lyr_Hotspot_GT320_2013_21.setVisible(false);lyr_Hotspot_GT320_2012_22.setVisible(false);lyr_Hotspot_GT320_2011_23.setVisible(false);lyr_Hotspot_GT320_2010_24.setVisible(false);lyr_Hotspot_GT320_2009_25.setVisible(false);lyr_Hotspot_GT320_2008_26.setVisible(false);lyr_Hotspot_GT320_2007_27.setVisible(false);lyr_Hotspot_GT320_2006_28.setVisible(false);lyr_Hotspot_GT320_2005_29.setVisible(false);lyr_Hotspot_GT320_2004_30.setVisible(false);lyr_Hotspot_GT320_2003_31.setVisible(false);lyr_Hotspot_GT320_2002_32.setVisible(false);lyr_Hotspot_GT320_2001_33.setVisible(false);lyr_RawanKarhutlainarisk_34.setVisible(false);lyr_Deforestasi19902020LHK_35.setVisible(false);lyr_PertumbuhanPermukiman19902020_36.setVisible(false);lyr_PertumbuhanSawit19902020LHK_37.setVisible(false);lyr_FungsiKawasanHutan_38.setVisible(false);lyr_BatasKawasanTNTP_39.setVisible(true);lyr_BatasDesa_40.setVisible(true);lyr_BatasKecamatan_41.setVisible(true);lyr_BatasKabupaten_42.setVisible(true);lyr_SistemDasKemenhut_43.setVisible(false);lyr_JaringanSungai_44.setVisible(false);lyr_Zonasiversi2024_45.setVisible(false);lyr_zonasiversiKSP_46.setVisible(false);lyr_MasyarakatAdat_47.setVisible(false);lyr_HutanTanamanRakyatLHK_48.setVisible(false);lyr_PetaindikatifarahanpreservasiLHK_49.setVisible(false);lyr_cagarbiosfer_50.setVisible(false);lyr_IndeksKerentananIklimLH_51.setVisible(false);lyr_subdas_52.setVisible(false);lyr_HutanAdat_53.setVisible(false);lyr_landsistemBIG_54.setVisible(false);lyr_LERENG_55.setVisible(false);lyr_EkoregionLHK_56.setVisible(false);lyr_IzinUsahaPertambanganESDM_57.setVisible(false);lyr_PerkebunanHGUATRBPN_58.setVisible(false);lyr_GambutdankedalamannyaBBSDLP2019_59.setVisible(false);lyr_PetaGambutLHK_60.setVisible(false);lyr_habitatorangutanWWF_61.setVisible(false);lyr_habitatbekantan_62.setVisible(false);lyr_KHGLHK_63.setVisible(false);lyr_mangroveLHK_64.setVisible(false);lyr_KoridorSatwa_65.setVisible(false);lyr_Arahaliran_sungai_66.setVisible(false);lyr_kriteria10rawanbencana_67.setVisible(false);lyr_Kriteria9subdas_68.setVisible(false);lyr_kriteria8cagarbiosferTNTPramsar_69.setVisible(false);lyr_Kriteria7masyarakatadat_70.setVisible(false);lyr_Kriteria6JarakdanJangkauanpergerakan_71.setVisible(false);lyr_kriteria5perkembanganpermukiman_72.setVisible(false);lyr_kriteria4pusatekonomi_73.setVisible(false);lyr_kriteria3hutanhabitatsatwakuncidanKHG_74.setVisible(false);lyr_kriteria2fokuspenanganan_75.setVisible(false);lyr_kriteria1isustrategis_76.setVisible(false);lyr_ZONAPERLINDUNGANSETEMPAT_77.setVisible(true);lyr_ZONABUDIDAYASEDANG_78.setVisible(true);lyr_ZONABUDIDAYARENDAH_79.setVisible(true);lyr_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80.setVisible(true);lyr_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81.setVisible(true);lyr_TAMANWISATAALAM_82.setVisible(true);lyr_TAMANNASIONAL_83.setVisible(true);lyr_KAWASANLINDUNGGAMBUT_84.setVisible(true);lyr_EKOSISTEMMANGROVE_85.setVisible(true);lyr_BADANAIR_86.setVisible(true);lyr_JARINGANPRASARANALAINNYA_87.setVisible(false);lyr_INFRASTUKTURPRASARANALAINNYA_88.setVisible(false);lyr_JARINGANPERMUKIMAN_89.setVisible(false);lyr_INFRASTUKTURPERMUKIMAN_90.setVisible(false);lyr_JARINGANSDA_91.setVisible(false);lyr_INFRASTRUKTURSDA_92.setVisible(false);lyr_JARINGANTELEKOMUNIKASI_93.setVisible(false);lyr_INFRASTRUKTURTELEKOMUNIKASI_94.setVisible(false);lyr_JARINGANENERGI_95.setVisible(false);lyr_INFRASTUKTURENERGI_96.setVisible(false);lyr_JARINGANTRANSPORTASI_97.setVisible(false);lyr_INFRASTRUKTURTRANSPORTASI_98.setVisible(false);lyr_PUSAT_PEMUKIMAN_99.setVisible(false);lyr_BATASWP_100.setVisible(true);lyr_TitikDrone_101.setVisible(false);
var layersList = [lyr_googleimagery_0,group_PenutupLahan,group_PerkembanganPemukiman10tahunan19802025,lyr_RawanKarhutlaInarisk_8,group_HOTSPOTtahunanFIRMSModis20012025,group_PETAANALISIS,lyr_FungsiKawasanHutan_38,lyr_BatasKawasanTNTP_39,lyr_BatasDesa_40,lyr_BatasKecamatan_41,lyr_BatasKabupaten_42,group_Dasdanaliransungai,group_ZonasiKawasanTNTP,group_PETATEMATIK,group_kriteriadeliniasi,group_POLARUANG,group_PRASARANALAINNYA,group_PRASARANAUTAMAPERMUKIMAN,group_PRASARANAUTAMASUMBERDAYAAIR,group_PRASARANAUTAMATELEKOMUNIKASI,group_PRASARANAUTAMAENERGI,group_PRASARANAUTAMATRANSPORTASI,group_STRUKTURRUANG,lyr_BATASWP_100,lyr_TitikDrone_101];
lyr_PenutupLahan2020LHK_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LC_90': 'LC_90', 'LC_2000': 'LC_2000', 'LC_2010': 'LC_2010', 'lc_2020': 'lc_2020', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanKarhutlainarisk_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'tingkatan': 'tingkatan', });
lyr_Deforestasi19902020LHK_35.set('fieldAliases', {'Shape_Area': 'Shape_Area', 'keterangan': 'keterangan', });
lyr_PertumbuhanPermukiman19902020_36.set('fieldAliases', {'ket': 'ket', });
lyr_PertumbuhanSawit19902020LHK_37.set('fieldAliases', {'ket': 'ket', });
lyr_FungsiKawasanHutan_38.set('fieldAliases', {'FUNGSIKWS': 'FUNGSIKWS', 'Fungsi': 'Fungsi', });
lyr_BatasKawasanTNTP_39.set('fieldAliases', {'fid_1': 'fid_1', 'objectid': 'objectid', 'fcode': 'fcode', 'metadata': 'metadata', 'srs_id': 'srs_id', 'remark': 'remark', 'fungsikws': 'fungsikws', 'noskkws': 'noskkws', 'tglskkws': 'tglskkws', 'lskkws': 'lskkws', 'shape_Area': 'shape_Area', 'shape_Leng': 'shape_Leng', 'F_KAW_HTN': 'F_KAW_HTN', });
lyr_BatasDesa_40.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'cea_ha': 'cea_ha', });
lyr_BatasKecamatan_41.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BatasKabupaten_42.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'label': 'label', });
lyr_SistemDasKemenhut_43.set('fieldAliases', {'objectid': 'objectid', 'kode_das': 'kode_das', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'klsfks': 'klsfks', 'bpdashl': 'bpdashl', 'keterangan': 'keterangan', });
lyr_JaringanSungai_44.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_zonasiversiKSP_46.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fgskws': 'fgskws', 'nkws': 'nkws', 'nprov': 'nprov', 'nupt': 'nupt', 'kodezona': 'kodezona', 'remark': 'remark', 'shape_leng': 'shape_leng', 'catatan': 'catatan', 'keterangan': 'keterangan', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_MasyarakatAdat_47.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'Komunitas': 'Komunitas', 'Suku': 'Suku', 'sumber': 'sumber', });
lyr_HutanTanamanRakyatLHK_48.set('fieldAliases', {'objectid': 'objectid', 'kode_prov': 'kode_prov', 'kode_kab': 'kode_kab', 'htr_id': 'htr_id', 'nama_prov': 'nama_prov', 'nama_kab': 'nama_kab', 'nama_kec': 'nama_kec', 'nama_desa': 'nama_desa', 'nama_kelom': 'nama_kelom', 'no_sk_ppht': 'no_sk_ppht', 'tgl_sk_pph': 'tgl_sk_pph', 'no_sk_penc': 'no_sk_penc', 'tgl_sk_pen': 'tgl_sk_pen', 'luas_hpt': 'luas_hpt', 'luas_hp': 'luas_hp', 'luas_hpk': 'luas_hpk', 'luas_pphtr': 'luas_pphtr', 'fcode': 'fcode', 'metadata': 'metadata', 'namobj': 'namobj', 'remark': 'remark', 'srs_id': 'srs_id', });
lyr_PetaindikatifarahanpreservasiLHK_49.set('fieldAliases', {'Id': 'Id', 'preservasi': 'preservasi', });
lyr_cagarbiosfer_50.set('fieldAliases', {'Id': 'Id', 'cagarbios': 'cagarbios', });
lyr_IndeksKerentananIklimLH_51.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ket': 'ket', });
lyr_subdas_52.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KETERANGAN': 'KETERANGAN', 'das': 'das', });
lyr_HutanAdat_53.set('fieldAliases', {'objectid': 'objectid', 'kode_prov': 'kode_prov', 'kode_kab': 'kode_kab', 'kecamatan': 'kecamatan', 'desa': 'desa', 'nama_mha': 'nama_mha', 'nomor_sk': 'nomor_sk', 'tgl_sk': 'tgl_sk', 'luas_sk': 'luas_sk', 'fcode': 'fcode', 'srs_id': 'srs_id', 'metadata': 'metadata', 'remark': 'remark', });
lyr_landsistemBIG_54.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LCODE': 'LCODE', 'AREAM': 'AREAM', 'PERIM': 'PERIM', 'REGCODE': 'REGCODE', 'REGIONAME': 'REGIONAME', 'UNITCODE': 'UNITCODE', 'UNITNAME': 'UNITNAME', 'SYMBOL': 'SYMBOL', 'NAME': 'NAME', 'AREA_KM2': 'AREA_KM2', 'GENERAL_DE': 'GENERAL_DE', 'DESAUNETTE': 'DESAUNETTE', 'SLOPE__': 'SLOPE__', 'RELIEF_M': 'RELIEF_M', 'CREST_WIDT': 'CREST_WIDT', 'VALLEY_WID': 'VALLEY_WID', 'LITHOLOGY': 'LITHOLOGY', 'SOIL_GREAT': 'SOIL_GREAT', 'OF_MAP_UNI': 'OF_MAP_UNI', 'TEXTURE_OF': 'TEXTURE_OF', 'RAINFALL_M': 'RAINFALL_M', 'WET__200MM': 'WET__200MM', 'DRY__100MM': 'DRY__100MM', 'LOWMIN_TEM': 'LOWMIN_TEM', 'HIGHMAX_TE': 'HIGHMAX_TE', 'CULTIVATIO': 'CULTIVATIO', 'HOUSELOT': 'HOUSELOT', 'DRYLAND_AR': 'DRYLAND_AR', 'WETLAND_AR': 'WETLAND_AR', 'HIGHLAND_A': 'HIGHLAND_A', 'PASTURE_LI': 'PASTURE_LI', 'BRACKISH_F': 'BRACKISH_F', 'TIDAL_IRRI': 'TIDAL_IRRI', 'TREE_CROPS': 'TREE_CROPS', 'AGROFOREST': 'AGROFOREST', 'REAFFOREST': 'REAFFOREST', 'RUBBER': 'RUBBER', 'OIL_PALM': 'OIL_PALM', 'COCONUT': 'COCONUT', 'TEA': 'TEA', 'ROBUSTA_CO': 'ROBUSTA_CO', 'ARABICA_CO': 'ARABICA_CO', 'COCOA': 'COCOA', 'CLOVE': 'CLOVE', 'PEPPER': 'PEPPER', 'SUGAR_CANE': 'SUGAR_CANE', 'TOBACCO': 'TOBACCO', 'PINEAPPLE': 'PINEAPPLE', 'CASHEW': 'CASHEW', 'BANANA': 'BANANA', 'COTTON': 'COTTON', 'SAGO': 'SAGO', 'RATTAN': 'RATTAN', 'ARABLE_CRO': 'ARABLE_CRO', 'WETLAND_RI': 'WETLAND_RI', 'WETLAND__1': 'WETLAND__1', 'WATERLOGGE': 'WATERLOGGE', 'NUTRITION': 'NUTRITION', 'DRYLAND': 'DRYLAND', 'WETLAND': 'WETLAND', 'COFFEE': 'COFFEE', 'SUGAR': 'SUGAR', 'GROUND_WAT': 'GROUND_WAT', 'POTABLE_WA': 'POTABLE_WA', 'INUNDATION': 'INUNDATION', 'CLIMATEC': 'CLIMATEC', 'SOIL_TEXTU': 'SOIL_TEXTU', 'SOIL_DEPTH': 'SOIL_DEPTH', 'SOIL_DRAIN': 'SOIL_DRAIN', 'SOIL_FERTI': 'SOIL_FERTI', 'ELEVATIONL': 'ELEVATIONL', 'SLOPES': 'SLOPES', 'FRAGMENTAT': 'FRAGMENTAT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LERENG_55.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'm_slope': 'm_slope', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EkoregionLHK_56.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'Luas': 'Luas', });
lyr_IzinUsahaPertambanganESDM_57.set('fieldAliases', {'LAYER': 'LAYER', 'objectid': 'objectid', 'join_count': 'join_count', 'target_fid': 'target_fid', 'join_fid': 'join_fid', 'pejabat': 'pejabat', 'nama_prov': 'nama_prov', 'nama_kab': 'nama_kab', 'pulau': 'pulau', 'lokasi': 'lokasi', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'nama_usaha': 'nama_usaha', 'badan_usah': 'badan_usah', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'jenis_izin': 'jenis_izin', 'luas_sk': 'luas_sk', 'cnc': 'cnc', 'komoditas': 'komoditas', 'kode_wiup': 'kode_wiup', 'shape_leng': 'shape_leng', 'objectid_1': 'objectid_1', 'kode_prov': 'kode_prov', 'id_ppkh': 'id_ppkh', 'nama_ppkh': 'nama_ppkh', 'no_ppkh': 'no_ppkh', 'tgl_ppkh': 'tgl_ppkh', 'luas_ppkh': 'luas_ppkh', 'kode_guna': 'kode_guna', 'jenis_sura': 'jenis_sura', 'jenis_ppkh': 'jenis_ppkh', 'status': 'status', 'tgl_berakh': 'tgl_berakh', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', 'ha': 'ha', });
lyr_PerkebunanHGUATRBPN_58.set('fieldAliases', {'persilid': 'persilid', 'nib': 'nib', 'tanggal': 'tanggal', 'berakhir': 'berakhir', 'nomorsk': 'nomorsk', 'lokasi': 'lokasi', });
lyr_GambutdankedalamannyaBBSDLP2019_59.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'GmlID': 'GmlID', 'gid': 'gid', 'objectid': 'objectid', 'kd_sl': 'kd_sl', 'spt': 'spt', 'jntnh1': 'jntnh1', 'jntnh2': 'jntnh2', 'jntnh3': 'jntnh3', 'ketebalan': 'ketebalan', 'tahun': 'tahun', 'kk': 'kk', 'kode_gbt': 'kode_gbt', 'kelas_gbt': 'kelas_gbt', 'ph': 'ph', 'substratum': 'substratum', 'shape_leng': 'shape_leng', '_shape_are': '_shape_are', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_PetaGambutLHK_60.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'layer_revi': 'layer_revi', 'shape_leng': 'shape_leng', 'globalid': 'globalid', 'shape_Le_1': 'shape_Le_1', 'shape_Area': 'shape_Area', });
lyr_habitatorangutanWWF_61.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid': 'objectid', 'status_hab': 'status_hab', 'nama': 'nama', 'meta_pop': 'meta_pop', 'subsp': 'subsp', 'shape_leng': 'shape_leng', 'species': 'species', 'x_central': 'x_central', 'y_central': 'y_central', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_habitatbekantan_62.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid': 'objectid', 'id': 'id', 'gridcode': 'gridcode', 'proboscis': 'proboscis', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'bekantan': 'bekantan', });
lyr_KHGLHK_63.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nama_khg': 'nama_khg', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_mangroveLHK_64.set('fieldAliases', {'kttj': 'kttj', });
lyr_KoridorSatwa_65.set('fieldAliases', {'Id': 'Id', 'Luas_Ha': 'Luas_Ha', 'kor_satwa': 'kor_satwa', 'Orde3_R': 'Orde3_R', });
lyr_Arahaliran_sungai_66.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', });
lyr_kriteria10rawanbencana_67.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'status_hab': 'status_hab', 'nama': 'nama', 'subsp': 'subsp', 'species': 'species', 'ORANGUTAN': 'ORANGUTAN', 'tingkatan': 'tingkatan', 'keterangan': 'keterangan', 'sawit': 'sawit', 'nama_khg': 'nama_khg', 'ket': 'ket', 'kritis': 'kritis', 'proboscis': 'proboscis', 'BEKANTAN': 'BEKANTAN', 'kttj': 'kttj', 'isu_1': 'isu_1', 'isu_2': 'isu_2', 'isu_3': 'isu_3', 'isu_4': 'isu_4', 'isu_7': 'isu_7', 'isu8': 'isu8', 'total_isu': 'total_isu', });
lyr_Kriteria9subdas_68.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', 'KETERANGAN': 'KETERANGAN', });
lyr_kriteria8cagarbiosferTNTPramsar_69.set('fieldAliases', {'Id': 'Id', 'cagarbios': 'cagarbios', });
lyr_Kriteria7masyarakatadat_70.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'Komunitas': 'Komunitas', 'Suku': 'Suku', 'sumber': 'sumber', });
lyr_Kriteria6JarakdanJangkauanpergerakan_71.set('fieldAliases', {'FID_dariku': 'FID_dariku', 'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', 'FID_daripa': 'FID_daripa', 'Facility_1': 'Facility_1', 'Name_1': 'Name_1', 'FromBreak_': 'FromBreak_', 'ToBreak_1': 'ToBreak_1', 'FID_darise': 'FID_darise', 'Facility_2': 'Facility_2', 'Name_12': 'Name_12', 'FromBreak1': 'FromBreak1', 'ToBreak_12': 'ToBreak_12', 'FID_dari_1': 'FID_dari_1', 'Facility_3': 'Facility_3', 'Name_12_13': 'Name_12_13', 'FromBrea_1': 'FromBrea_1', 'ToBreak_13': 'ToBreak_13', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'totalbot': 'totalbot', 'keterangan': 'keterangan', });
lyr_kriteria4pusatekonomi_73.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'O11SP1': 'O11SP1', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'JNSSSR': 'JNSSSR', 'STSJRN': 'STSJRN', 'STSRTR': 'STSRTR', 'PP': 'PP', 'BA': 'BA', 'BT': 'BT', 'NOTHPR': 'NOTHPR', 'kriteria_4': 'kriteria_4', });
lyr_kriteria3hutanhabitatsatwakuncidanKHG_74.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'kriteria_3': 'kriteria_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_kriteria2fokuspenanganan_75.set('fieldAliases', {'kriteria': 'kriteria', });
lyr_kriteria1isustrategis_76.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'status_hab': 'habitat', 'nama': 'nama habitat', 'subsp': 'sumber data', 'species': 'species', 'ORANGUTAN': 'orangutan', 'tingkatan': 'rawan karhutla', 'keterangan': 'Hutan', 'sawit': 'Sawit', 'nama_khg': 'Nama KHG', 'ket': 'Kondisi KHG', 'kritis': 'Kondisi KHG', 'proboscis': 'bekantan', 'BEKANTAN': 'BEKANTAN', 'kttj': 'Mangrove', 'isu_1': 'isu_1', 'isu_2': 'isu_2', 'isu_3': 'isu_3', 'isu_4': 'isu_4', 'isu_7': 'isu_7', 'isu8': 'isu8', 'total_isu': 'total_isu', });
lyr_ZONAPERLINDUNGANSETEMPAT_77.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ZONABUDIDAYASEDANG_78.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ZONABUDIDAYARENDAH_79.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TAMANWISATAALAM_82.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TAMANNASIONAL_83.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_KAWASANLINDUNGGAMBUT_84.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EKOSISTEMMANGROVE_85.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BADANAIR_86.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_RUANG_V2': 'PL_RUANG_V2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_JARINGANPRASARANALAINNYA_87.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'SHAPE_Length': 'SHAPE_Length', });
lyr_INFRASTUKTURPRASARANALAINNYA_88.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JARINGANPERMUKIMAN_89.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_INFRASTUKTURPERMUKIMAN_90.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JARINGANSDA_91.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_INFRASTRUKTURSDA_92.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JARINGANTELEKOMUNIKASI_93.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_INFRASTRUKTURTELEKOMUNIKASI_94.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JARINGANENERGI_95.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_INFRASTUKTURENERGI_96.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_JARINGANTRANSPORTASI_97.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_INFRASTRUKTURTRANSPORTASI_98.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'ORDE05': 'Orde 5', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PUSAT_PEMUKIMAN_99.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'ORDE05': 'ORDE05', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', });
lyr_BATASWP_100.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WP': 'WP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ha': 'ha', });
lyr_TitikDrone_101.set('fieldAliases', {'Keterangan': 'Keterangan', 'Y': 'Y', 'X': 'X', 'link_video': 'link_video', });
lyr_PenutupLahan2020LHK_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'LC_90': 'TextEdit', 'LC_2000': 'TextEdit', 'LC_2010': 'TextEdit', 'lc_2020': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RawanKarhutlainarisk_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'tingkatan': 'TextEdit', });
lyr_Deforestasi19902020LHK_35.set('fieldImages', {'Shape_Area': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_PertumbuhanPermukiman19902020_36.set('fieldImages', {'ket': 'TextEdit', });
lyr_PertumbuhanSawit19902020LHK_37.set('fieldImages', {'ket': 'TextEdit', });
lyr_FungsiKawasanHutan_38.set('fieldImages', {'FUNGSIKWS': 'TextEdit', 'Fungsi': 'TextEdit', });
lyr_BatasKawasanTNTP_39.set('fieldImages', {'fid_1': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'remark': 'TextEdit', 'fungsikws': 'TextEdit', 'noskkws': 'TextEdit', 'tglskkws': 'TextEdit', 'lskkws': 'TextEdit', 'shape_Area': 'TextEdit', 'shape_Leng': 'TextEdit', 'F_KAW_HTN': 'TextEdit', });
lyr_BatasDesa_40.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'cea_ha': '', });
lyr_BatasKecamatan_41.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasKabupaten_42.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'label': '', });
lyr_SistemDasKemenhut_43.set('fieldImages', {'objectid': 'TextEdit', 'kode_das': 'TextEdit', 'nama_das': 'TextEdit', 'luas_ha': 'TextEdit', 'klsfks': 'TextEdit', 'bpdashl': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_JaringanSungai_44.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'TextEdit', 'name': 'TextEdit', });
lyr_zonasiversiKSP_46.set('fieldImages', {'OBJECTID': 'TextEdit', 'fgskws': 'TextEdit', 'nkws': 'TextEdit', 'nprov': 'TextEdit', 'nupt': 'TextEdit', 'kodezona': 'TextEdit', 'remark': 'TextEdit', 'shape_leng': 'TextEdit', 'catatan': 'TextEdit', 'keterangan': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MasyarakatAdat_47.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'Komunitas': 'TextEdit', 'Suku': 'TextEdit', 'sumber': 'TextEdit', });
lyr_HutanTanamanRakyatLHK_48.set('fieldImages', {'objectid': 'Range', 'kode_prov': 'Range', 'kode_kab': 'Range', 'htr_id': 'Range', 'nama_prov': 'TextEdit', 'nama_kab': 'TextEdit', 'nama_kec': 'TextEdit', 'nama_desa': 'TextEdit', 'nama_kelom': 'TextEdit', 'no_sk_ppht': 'TextEdit', 'tgl_sk_pph': 'DateTime', 'no_sk_penc': 'TextEdit', 'tgl_sk_pen': 'DateTime', 'luas_hpt': 'TextEdit', 'luas_hp': 'TextEdit', 'luas_hpk': 'TextEdit', 'luas_pphtr': 'TextEdit', 'fcode': 'TextEdit', 'metadata': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', });
lyr_PetaindikatifarahanpreservasiLHK_49.set('fieldImages', {'Id': 'TextEdit', 'preservasi': 'TextEdit', });
lyr_cagarbiosfer_50.set('fieldImages', {'Id': 'TextEdit', 'cagarbios': 'TextEdit', });
lyr_IndeksKerentananIklimLH_51.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ket': 'TextEdit', });
lyr_subdas_52.set('fieldImages', {'OBJECTID': 'TextEdit', 'KETERANGAN': 'TextEdit', 'das': 'TextEdit', });
lyr_HutanAdat_53.set('fieldImages', {'objectid': 'Range', 'kode_prov': 'Range', 'kode_kab': 'Range', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'nama_mha': 'TextEdit', 'nomor_sk': 'TextEdit', 'tgl_sk': 'DateTime', 'luas_sk': 'TextEdit', 'fcode': 'TextEdit', 'srs_id': 'TextEdit', 'metadata': 'TextEdit', 'remark': 'TextEdit', });
lyr_landsistemBIG_54.set('fieldImages', {'OBJECTID': 'TextEdit', 'LCODE': 'TextEdit', 'AREAM': 'TextEdit', 'PERIM': 'TextEdit', 'REGCODE': 'TextEdit', 'REGIONAME': 'TextEdit', 'UNITCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SYMBOL': 'TextEdit', 'NAME': 'TextEdit', 'AREA_KM2': 'TextEdit', 'GENERAL_DE': 'TextEdit', 'DESAUNETTE': 'TextEdit', 'SLOPE__': 'TextEdit', 'RELIEF_M': 'TextEdit', 'CREST_WIDT': 'TextEdit', 'VALLEY_WID': 'TextEdit', 'LITHOLOGY': 'TextEdit', 'SOIL_GREAT': 'TextEdit', 'OF_MAP_UNI': 'TextEdit', 'TEXTURE_OF': 'TextEdit', 'RAINFALL_M': 'TextEdit', 'WET__200MM': 'TextEdit', 'DRY__100MM': 'TextEdit', 'LOWMIN_TEM': 'TextEdit', 'HIGHMAX_TE': 'TextEdit', 'CULTIVATIO': 'TextEdit', 'HOUSELOT': 'TextEdit', 'DRYLAND_AR': 'TextEdit', 'WETLAND_AR': 'TextEdit', 'HIGHLAND_A': 'TextEdit', 'PASTURE_LI': 'TextEdit', 'BRACKISH_F': 'TextEdit', 'TIDAL_IRRI': 'TextEdit', 'TREE_CROPS': 'TextEdit', 'AGROFOREST': 'TextEdit', 'REAFFOREST': 'TextEdit', 'RUBBER': 'TextEdit', 'OIL_PALM': 'TextEdit', 'COCONUT': 'TextEdit', 'TEA': 'TextEdit', 'ROBUSTA_CO': 'TextEdit', 'ARABICA_CO': 'TextEdit', 'COCOA': 'TextEdit', 'CLOVE': 'TextEdit', 'PEPPER': 'TextEdit', 'SUGAR_CANE': 'TextEdit', 'TOBACCO': 'TextEdit', 'PINEAPPLE': 'TextEdit', 'CASHEW': 'TextEdit', 'BANANA': 'TextEdit', 'COTTON': 'TextEdit', 'SAGO': 'TextEdit', 'RATTAN': 'TextEdit', 'ARABLE_CRO': 'TextEdit', 'WETLAND_RI': 'TextEdit', 'WETLAND__1': 'TextEdit', 'WATERLOGGE': 'TextEdit', 'NUTRITION': 'TextEdit', 'DRYLAND': 'TextEdit', 'WETLAND': 'TextEdit', 'COFFEE': 'TextEdit', 'SUGAR': 'TextEdit', 'GROUND_WAT': 'TextEdit', 'POTABLE_WA': 'TextEdit', 'INUNDATION': 'TextEdit', 'CLIMATEC': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'SOIL_DRAIN': 'TextEdit', 'SOIL_FERTI': 'TextEdit', 'ELEVATIONL': 'TextEdit', 'SLOPES': 'TextEdit', 'FRAGMENTAT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LERENG_55.set('fieldImages', {'OBJECTID': 'TextEdit', 'm_slope': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EkoregionLHK_56.set('fieldImages', {'Id': 'TextEdit', 'Keterangan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_IzinUsahaPertambanganESDM_57.set('fieldImages', {'LAYER': '', 'objectid': '', 'join_count': '', 'target_fid': '', 'join_fid': '', 'pejabat': '', 'nama_prov': '', 'nama_kab': '', 'pulau': '', 'lokasi': '', 'kode_golon': '', 'kode_jnsko': '', 'nama_usaha': '', 'badan_usah': '', 'sk_iup': '', 'tgl_berlak': '', 'tgl_akhir': '', 'kegiatan': '', 'jenis_izin': '', 'luas_sk': '', 'cnc': '', 'komoditas': '', 'kode_wiup': '', 'shape_leng': '', 'objectid_1': '', 'kode_prov': '', 'id_ppkh': '', 'nama_ppkh': '', 'no_ppkh': '', 'tgl_ppkh': '', 'luas_ppkh': '', 'kode_guna': '', 'jenis_sura': '', 'jenis_ppkh': '', 'status': 'TextEdit', 'tgl_berakh': '', 'st_area_sh': '', 'st_perimet': '', 'ha': '', });
lyr_PerkebunanHGUATRBPN_58.set('fieldImages', {'persilid': 'TextEdit', 'nib': 'TextEdit', 'tanggal': 'TextEdit', 'berakhir': 'TextEdit', 'nomorsk': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_GambutdankedalamannyaBBSDLP2019_59.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'GmlID': 'TextEdit', 'gid': 'TextEdit', 'objectid': 'TextEdit', 'kd_sl': 'TextEdit', 'spt': 'TextEdit', 'jntnh1': 'TextEdit', 'jntnh2': 'TextEdit', 'jntnh3': 'TextEdit', 'ketebalan': 'TextEdit', 'tahun': 'TextEdit', 'kk': 'TextEdit', 'kode_gbt': 'TextEdit', 'kelas_gbt': 'TextEdit', 'ph': 'TextEdit', 'substratum': 'TextEdit', 'shape_leng': 'TextEdit', '_shape_are': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PetaGambutLHK_60.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'layer_revi': 'TextEdit', 'shape_leng': 'TextEdit', 'globalid': 'TextEdit', 'shape_Le_1': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_habitatorangutanWWF_61.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'objectid': 'TextEdit', 'status_hab': 'TextEdit', 'nama': 'TextEdit', 'meta_pop': 'TextEdit', 'subsp': 'TextEdit', 'shape_leng': 'TextEdit', 'species': 'TextEdit', 'x_central': 'TextEdit', 'y_central': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_habitatbekantan_62.set('fieldImages', {'OBJECTID_1': '', 'objectid': 'TextEdit', 'id': 'TextEdit', 'gridcode': 'TextEdit', 'proboscis': 'TextEdit', 'Shape_Leng': '', 'Shape_Area': '', 'bekantan': '', });
lyr_KHGLHK_63.set('fieldImages', {'OBJECTID': 'TextEdit', 'nama_khg': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_mangroveLHK_64.set('fieldImages', {'kttj': 'TextEdit', });
lyr_KoridorSatwa_65.set('fieldImages', {'Id': 'Range', 'Luas_Ha': 'Range', 'kor_satwa': 'TextEdit', 'Orde3_R': '', });
lyr_Arahaliran_sungai_66.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'IN_FLOW': 'TextEdit', 'OUT_FLOW': 'TextEdit', 'DRAIN_AREA': 'TextEdit', });
lyr_kriteria10rawanbencana_67.set('fieldImages', {'OBJECTID': 'TextEdit', 'status_hab': 'TextEdit', 'nama': 'TextEdit', 'subsp': 'TextEdit', 'species': 'TextEdit', 'ORANGUTAN': 'TextEdit', 'tingkatan': 'TextEdit', 'keterangan': 'TextEdit', 'sawit': 'TextEdit', 'nama_khg': 'TextEdit', 'ket': 'TextEdit', 'kritis': 'TextEdit', 'proboscis': 'TextEdit', 'BEKANTAN': 'TextEdit', 'kttj': 'TextEdit', 'isu_1': 'TextEdit', 'isu_2': 'TextEdit', 'isu_3': 'TextEdit', 'isu_4': 'TextEdit', 'isu_7': 'TextEdit', 'isu8': 'TextEdit', 'total_isu': 'TextEdit', });
lyr_Kriteria9subdas_68.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', 'KETERANGAN': 'TextEdit', });
lyr_kriteria8cagarbiosferTNTPramsar_69.set('fieldImages', {'Id': 'TextEdit', 'cagarbios': 'TextEdit', });
lyr_Kriteria7masyarakatadat_70.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'Komunitas': 'TextEdit', 'Suku': 'TextEdit', 'sumber': 'TextEdit', });
lyr_Kriteria6JarakdanJangkauanpergerakan_71.set('fieldImages', {'FID_dariku': 'TextEdit', 'FacilityID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', 'FID_daripa': 'TextEdit', 'Facility_1': 'TextEdit', 'Name_1': 'TextEdit', 'FromBreak_': 'TextEdit', 'ToBreak_1': 'TextEdit', 'FID_darise': 'TextEdit', 'Facility_2': 'TextEdit', 'Name_12': 'TextEdit', 'FromBreak1': 'TextEdit', 'ToBreak_12': 'TextEdit', 'FID_dari_1': 'TextEdit', 'Facility_3': 'TextEdit', 'Name_12_13': 'TextEdit', 'FromBrea_1': 'TextEdit', 'ToBreak_13': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'totalbot': 'Range', 'keterangan': 'TextEdit', });
lyr_kriteria4pusatekonomi_73.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'O11SP1': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'JNSSSR': 'TextEdit', 'STSJRN': 'TextEdit', 'STSRTR': 'TextEdit', 'PP': 'TextEdit', 'BA': 'TextEdit', 'BT': 'TextEdit', 'NOTHPR': 'TextEdit', 'kriteria_4': 'TextEdit', });
lyr_kriteria3hutanhabitatsatwakuncidanKHG_74.set('fieldImages', {'OBJECTID': 'TextEdit', 'kriteria_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_kriteria2fokuspenanganan_75.set('fieldImages', {'kriteria': 'TextEdit', });
lyr_kriteria1isustrategis_76.set('fieldImages', {'OBJECTID': 'TextEdit', 'status_hab': 'TextEdit', 'nama': 'TextEdit', 'subsp': 'TextEdit', 'species': 'TextEdit', 'ORANGUTAN': 'TextEdit', 'tingkatan': 'TextEdit', 'keterangan': 'TextEdit', 'sawit': 'TextEdit', 'nama_khg': 'TextEdit', 'ket': 'TextEdit', 'kritis': 'TextEdit', 'proboscis': 'TextEdit', 'BEKANTAN': 'TextEdit', 'kttj': 'TextEdit', 'isu_1': 'TextEdit', 'isu_2': 'TextEdit', 'isu_3': 'TextEdit', 'isu_4': 'TextEdit', 'isu_7': 'TextEdit', 'isu8': 'TextEdit', 'total_isu': 'TextEdit', });
lyr_ZONAPERLINDUNGANSETEMPAT_77.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZONABUDIDAYASEDANG_78.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZONABUDIDAYARENDAH_79.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TAMANWISATAALAM_82.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TAMANNASIONAL_83.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KAWASANLINDUNGGAMBUT_84.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EKOSISTEMMANGROVE_85.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BADANAIR_86.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_RUANG_V2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JARINGANPRASARANALAINNYA_87.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Length': '', });
lyr_INFRASTUKTURPRASARANALAINNYA_88.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JARINGANPERMUKIMAN_89.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': '', });
lyr_INFRASTUKTURPERMUKIMAN_90.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JARINGANSDA_91.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': '', });
lyr_INFRASTRUKTURSDA_92.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JARINGANTELEKOMUNIKASI_93.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': '', });
lyr_INFRASTRUKTURTELEKOMUNIKASI_94.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JARINGANENERGI_95.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_INFRASTUKTURENERGI_96.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': '', });
lyr_JARINGANTRANSPORTASI_97.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_INFRASTRUKTURTRANSPORTASI_98.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PUSAT_PEMUKIMAN_99.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'ORDE05': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_BATASWP_100.set('fieldImages', {'OBJECTID': 'TextEdit', 'WP': '', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ha': '', });
lyr_TitikDrone_101.set('fieldImages', {'Keterangan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'link_video': 'TextEdit', });
lyr_PenutupLahan2020LHK_1.set('fieldLabels', {'OBJECTID': 'no label', 'LC_90': 'no label', 'LC_2000': 'no label', 'LC_2010': 'no label', 'lc_2020': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RawanKarhutlainarisk_34.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'tingkatan': 'inline label - always visible', });
lyr_Deforestasi19902020LHK_35.set('fieldLabels', {'Shape_Area': 'inline label - always visible', 'keterangan': 'inline label - always visible', });
lyr_PertumbuhanPermukiman19902020_36.set('fieldLabels', {'ket': 'inline label - always visible', });
lyr_PertumbuhanSawit19902020LHK_37.set('fieldLabels', {'ket': 'inline label - always visible', });
lyr_FungsiKawasanHutan_38.set('fieldLabels', {'FUNGSIKWS': 'no label', 'Fungsi': 'inline label - always visible', });
lyr_BatasKawasanTNTP_39.set('fieldLabels', {'fid_1': 'inline label - always visible', 'objectid': 'inline label - always visible', 'fcode': 'inline label - always visible', 'metadata': 'inline label - always visible', 'srs_id': 'inline label - always visible', 'remark': 'inline label - always visible', 'fungsikws': 'inline label - always visible', 'noskkws': 'inline label - always visible', 'tglskkws': 'inline label - always visible', 'lskkws': 'inline label - always visible', 'shape_Area': 'inline label - always visible', 'shape_Leng': 'inline label - always visible', 'F_KAW_HTN': 'inline label - always visible', });
lyr_BatasDesa_40.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'cea_ha': 'inline label - always visible', });
lyr_BatasKecamatan_41.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_BatasKabupaten_42.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'label': 'inline label - always visible', });
lyr_SistemDasKemenhut_43.set('fieldLabels', {'objectid': 'inline label - always visible', 'kode_das': 'inline label - always visible', 'nama_das': 'inline label - always visible', 'luas_ha': 'inline label - always visible', 'klsfks': 'inline label - always visible', 'bpdashl': 'inline label - always visible', 'keterangan': 'inline label - visible with data', });
lyr_JaringanSungai_44.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'width': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_zonasiversiKSP_46.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'fgskws': 'inline label - always visible', 'nkws': 'inline label - visible with data', 'nprov': 'inline label - always visible', 'nupt': 'inline label - always visible', 'kodezona': 'inline label - always visible', 'remark': 'inline label - always visible', 'shape_leng': 'inline label - always visible', 'catatan': 'inline label - always visible', 'keterangan': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_MasyarakatAdat_47.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'Komunitas': 'inline label - always visible', 'Suku': 'inline label - always visible', 'sumber': 'inline label - always visible', });
lyr_HutanTanamanRakyatLHK_48.set('fieldLabels', {'objectid': 'inline label - always visible', 'kode_prov': 'inline label - always visible', 'kode_kab': 'inline label - always visible', 'htr_id': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'nama_kec': 'inline label - always visible', 'nama_desa': 'inline label - always visible', 'nama_kelom': 'inline label - always visible', 'no_sk_ppht': 'inline label - always visible', 'tgl_sk_pph': 'inline label - always visible', 'no_sk_penc': 'inline label - always visible', 'tgl_sk_pen': 'inline label - always visible', 'luas_hpt': 'inline label - always visible', 'luas_hp': 'inline label - always visible', 'luas_hpk': 'inline label - always visible', 'luas_pphtr': 'inline label - always visible', 'fcode': 'inline label - always visible', 'metadata': 'inline label - always visible', 'namobj': 'inline label - always visible', 'remark': 'inline label - always visible', 'srs_id': 'inline label - always visible', });
lyr_PetaindikatifarahanpreservasiLHK_49.set('fieldLabels', {'Id': 'inline label - always visible', 'preservasi': 'inline label - always visible', });
lyr_cagarbiosfer_50.set('fieldLabels', {'Id': 'inline label - always visible', 'cagarbios': 'inline label - always visible', });
lyr_IndeksKerentananIklimLH_51.set('fieldLabels', {'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'ket': 'inline label - always visible', });
lyr_subdas_52.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'das': 'inline label - always visible', });
lyr_HutanAdat_53.set('fieldLabels', {'objectid': 'inline label - always visible', 'kode_prov': 'inline label - always visible', 'kode_kab': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'desa': 'inline label - always visible', 'nama_mha': 'inline label - always visible', 'nomor_sk': 'inline label - always visible', 'tgl_sk': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'fcode': 'inline label - always visible', 'srs_id': 'inline label - always visible', 'metadata': 'inline label - always visible', 'remark': 'inline label - always visible', });
lyr_landsistemBIG_54.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'AREAM': 'inline label - always visible', 'PERIM': 'inline label - always visible', 'REGCODE': 'inline label - always visible', 'REGIONAME': 'inline label - always visible', 'UNITCODE': 'inline label - always visible', 'UNITNAME': 'inline label - always visible', 'SYMBOL': 'inline label - always visible', 'NAME': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'GENERAL_DE': 'inline label - always visible', 'DESAUNETTE': 'inline label - always visible', 'SLOPE__': 'inline label - always visible', 'RELIEF_M': 'inline label - always visible', 'CREST_WIDT': 'inline label - always visible', 'VALLEY_WID': 'inline label - always visible', 'LITHOLOGY': 'inline label - always visible', 'SOIL_GREAT': 'inline label - always visible', 'OF_MAP_UNI': 'inline label - always visible', 'TEXTURE_OF': 'inline label - always visible', 'RAINFALL_M': 'inline label - always visible', 'WET__200MM': 'inline label - always visible', 'DRY__100MM': 'inline label - always visible', 'LOWMIN_TEM': 'inline label - always visible', 'HIGHMAX_TE': 'inline label - always visible', 'CULTIVATIO': 'inline label - always visible', 'HOUSELOT': 'inline label - always visible', 'DRYLAND_AR': 'inline label - always visible', 'WETLAND_AR': 'inline label - always visible', 'HIGHLAND_A': 'inline label - always visible', 'PASTURE_LI': 'inline label - always visible', 'BRACKISH_F': 'inline label - always visible', 'TIDAL_IRRI': 'inline label - always visible', 'TREE_CROPS': 'inline label - always visible', 'AGROFOREST': 'inline label - always visible', 'REAFFOREST': 'inline label - always visible', 'RUBBER': 'inline label - always visible', 'OIL_PALM': 'inline label - always visible', 'COCONUT': 'inline label - always visible', 'TEA': 'inline label - always visible', 'ROBUSTA_CO': 'inline label - always visible', 'ARABICA_CO': 'inline label - always visible', 'COCOA': 'inline label - always visible', 'CLOVE': 'inline label - always visible', 'PEPPER': 'inline label - always visible', 'SUGAR_CANE': 'inline label - always visible', 'TOBACCO': 'inline label - always visible', 'PINEAPPLE': 'inline label - always visible', 'CASHEW': 'inline label - always visible', 'BANANA': 'inline label - always visible', 'COTTON': 'inline label - always visible', 'SAGO': 'inline label - always visible', 'RATTAN': 'inline label - always visible', 'ARABLE_CRO': 'inline label - always visible', 'WETLAND_RI': 'inline label - always visible', 'WETLAND__1': 'inline label - always visible', 'WATERLOGGE': 'inline label - always visible', 'NUTRITION': 'inline label - always visible', 'DRYLAND': 'inline label - always visible', 'WETLAND': 'inline label - always visible', 'COFFEE': 'inline label - always visible', 'SUGAR': 'inline label - always visible', 'GROUND_WAT': 'inline label - always visible', 'POTABLE_WA': 'inline label - always visible', 'INUNDATION': 'inline label - always visible', 'CLIMATEC': 'inline label - always visible', 'SOIL_TEXTU': 'inline label - always visible', 'SOIL_DEPTH': 'inline label - always visible', 'SOIL_DRAIN': 'inline label - always visible', 'SOIL_FERTI': 'inline label - always visible', 'ELEVATIONL': 'inline label - always visible', 'SLOPES': 'inline label - always visible', 'FRAGMENTAT': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LERENG_55.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'm_slope': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_EkoregionLHK_56.set('fieldLabels', {'Id': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_IzinUsahaPertambanganESDM_57.set('fieldLabels', {'LAYER': 'no label', 'objectid': 'inline label - always visible', 'join_count': 'no label', 'target_fid': 'no label', 'join_fid': 'no label', 'pejabat': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'pulau': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'cnc': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'shape_leng': 'no label', 'objectid_1': 'no label', 'kode_prov': 'no label', 'id_ppkh': 'no label', 'nama_ppkh': 'no label', 'no_ppkh': 'no label', 'tgl_ppkh': 'no label', 'luas_ppkh': 'no label', 'kode_guna': 'no label', 'jenis_sura': 'no label', 'jenis_ppkh': 'no label', 'status': 'no label', 'tgl_berakh': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', 'ha': 'no label', });
lyr_PerkebunanHGUATRBPN_58.set('fieldLabels', {'persilid': 'inline label - always visible', 'nib': 'inline label - always visible', 'tanggal': 'inline label - always visible', 'berakhir': 'inline label - always visible', 'nomorsk': 'inline label - always visible', 'lokasi': 'no label', });
lyr_GambutdankedalamannyaBBSDLP2019_59.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'GmlID': 'inline label - always visible', 'gid': 'inline label - always visible', 'objectid': 'inline label - always visible', 'kd_sl': 'inline label - always visible', 'spt': 'inline label - always visible', 'jntnh1': 'inline label - always visible', 'jntnh2': 'inline label - always visible', 'jntnh3': 'inline label - always visible', 'ketebalan': 'inline label - always visible', 'tahun': 'inline label - always visible', 'kk': 'inline label - always visible', 'kode_gbt': 'inline label - always visible', 'kelas_gbt': 'inline label - always visible', 'ph': 'inline label - always visible', 'substratum': 'inline label - always visible', 'shape_leng': 'inline label - always visible', '_shape_are': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_PetaGambutLHK_60.set('fieldLabels', {'objectid_1': 'inline label - always visible', 'objectid': 'inline label - always visible', 'layer_revi': 'inline label - always visible', 'shape_leng': 'inline label - always visible', 'globalid': 'inline label - always visible', 'shape_Le_1': 'inline label - always visible', 'shape_Area': 'inline label - always visible', });
lyr_habitatorangutanWWF_61.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'objectid': 'inline label - always visible', 'status_hab': 'inline label - always visible', 'nama': 'inline label - always visible', 'meta_pop': 'inline label - always visible', 'subsp': 'inline label - always visible', 'shape_leng': 'inline label - always visible', 'species': 'inline label - always visible', 'x_central': 'inline label - always visible', 'y_central': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_habitatbekantan_62.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'objectid': 'inline label - always visible', 'id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'proboscis': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'bekantan': 'inline label - always visible', });
lyr_KHGLHK_63.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'nama_khg': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_mangroveLHK_64.set('fieldLabels', {'kttj': 'inline label - always visible', });
lyr_KoridorSatwa_65.set('fieldLabels', {'Id': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', 'kor_satwa': 'inline label - always visible', 'Orde3_R': 'no label', });
lyr_Arahaliran_sungai_66.set('fieldLabels', {'LAYER': 'inline label - always visible', 'ELEVATION': 'inline label - always visible', 'STREAM_ID': 'inline label - always visible', 'IN_FLOW': 'inline label - always visible', 'OUT_FLOW': 'inline label - always visible', 'DRAIN_AREA': 'inline label - always visible', });
lyr_kriteria10rawanbencana_67.set('fieldLabels', {'OBJECTID': 'no label', 'status_hab': 'no label', 'nama': 'no label', 'subsp': 'no label', 'species': 'no label', 'ORANGUTAN': 'no label', 'tingkatan': 'inline label - always visible', 'keterangan': 'no label', 'sawit': 'no label', 'nama_khg': 'no label', 'ket': 'no label', 'kritis': 'no label', 'proboscis': 'no label', 'BEKANTAN': 'no label', 'kttj': 'no label', 'isu_1': 'no label', 'isu_2': 'no label', 'isu_3': 'no label', 'isu_4': 'no label', 'isu_7': 'no label', 'isu8': 'no label', 'total_isu': 'no label', });
lyr_Kriteria9subdas_68.set('fieldLabels', {'LAYER': 'inline label - always visible', 'STREAM_ID': 'inline label - always visible', 'NEXT_STREA': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', });
lyr_kriteria8cagarbiosferTNTPramsar_69.set('fieldLabels', {'Id': 'inline label - always visible', 'cagarbios': 'inline label - always visible', });
lyr_Kriteria7masyarakatadat_70.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'Komunitas': 'inline label - always visible', 'Suku': 'inline label - always visible', 'sumber': 'inline label - always visible', });
lyr_Kriteria6JarakdanJangkauanpergerakan_71.set('fieldLabels', {'FID_dariku': 'no label', 'FacilityID': 'no label', 'Name': 'inline label - always visible', 'FromBreak': 'no label', 'ToBreak': 'no label', 'FID_daripa': 'no label', 'Facility_1': 'no label', 'Name_1': 'inline label - always visible', 'FromBreak_': 'no label', 'ToBreak_1': 'no label', 'FID_darise': 'no label', 'Facility_2': 'no label', 'Name_12': 'inline label - always visible', 'FromBreak1': 'no label', 'ToBreak_12': 'no label', 'FID_dari_1': 'no label', 'Facility_3': 'no label', 'Name_12_13': 'inline label - always visible', 'FromBrea_1': 'no label', 'ToBreak_13': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'totalbot': 'inline label - always visible', 'keterangan': 'inline label - always visible', });
lyr_kriteria4pusatekonomi_73.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'O11SP1': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'JNSSSR': 'no label', 'STSJRN': 'no label', 'STSRTR': 'no label', 'PP': 'inline label - always visible', 'BA': 'inline label - always visible', 'BT': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', 'kriteria_4': 'inline label - always visible', });
lyr_kriteria3hutanhabitatsatwakuncidanKHG_74.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'kriteria_3': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_kriteria2fokuspenanganan_75.set('fieldLabels', {'kriteria': 'inline label - visible with data', });
lyr_kriteria1isustrategis_76.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'status_hab': 'inline label - always visible', 'nama': 'inline label - always visible', 'subsp': 'inline label - always visible', 'species': 'inline label - always visible', 'ORANGUTAN': 'inline label - always visible', 'tingkatan': 'inline label - always visible', 'keterangan': 'inline label - always visible', 'sawit': 'inline label - always visible', 'nama_khg': 'inline label - always visible', 'ket': 'inline label - always visible', 'kritis': 'inline label - always visible', 'proboscis': 'inline label - always visible', 'BEKANTAN': 'inline label - always visible', 'kttj': 'inline label - always visible', 'isu_1': 'inline label - always visible', 'isu_2': 'no label', 'isu_3': 'no label', 'isu_4': 'no label', 'isu_7': 'no label', 'isu8': 'no label', 'total_isu': 'no label', });
lyr_ZONAPERLINDUNGANSETEMPAT_77.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ZONABUDIDAYASEDANG_78.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ZONABUDIDAYARENDAH_79.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ZONABUDIDAYAKAWASANHUTANPRODUKSI_80.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ZONABUDIDAYADENGANKARAKTERISTIKKAWASANPERTANIAN_81.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_TAMANWISATAALAM_82.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_TAMANNASIONAL_83.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_KAWASANLINDUNGGAMBUT_84.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_EKOSISTEMMANGROVE_85.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_BADANAIR_86.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PL_RUANG_V2': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_JARINGANPRASARANALAINNYA_87.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'SHAPE_Length': 'no label', });
lyr_INFRASTUKTURPRASARANALAINNYA_88.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JARINGANPERMUKIMAN_89.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'no label', });
lyr_INFRASTUKTURPERMUKIMAN_90.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JARINGANSDA_91.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'no label', });
lyr_INFRASTRUKTURSDA_92.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - visible with data', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JARINGANTELEKOMUNIKASI_93.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'no label', });
lyr_INFRASTRUKTURTELEKOMUNIKASI_94.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JARINGANENERGI_95.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_INFRASTUKTURENERGI_96.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'no label', });
lyr_JARINGANTRANSPORTASI_97.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'no label', });
lyr_INFRASTRUKTURTRANSPORTASI_98.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - visible with data', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - visible with data', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_PUSAT_PEMUKIMAN_99.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'ORDE05': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_BATASWP_100.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WP': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'ha': 'no label', });
lyr_TitikDrone_101.set('fieldLabels', {'Keterangan': 'inline label - always visible', 'Y': 'inline label - always visible', 'X': 'inline label - always visible', 'link_video': 'inline label - always visible', });
lyr_TitikDrone_101.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});