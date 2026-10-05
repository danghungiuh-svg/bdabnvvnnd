var wms_layers = [];

var format_tong_0 = new ol.format.GeoJSON();
var features_tong_0 = format_tong_0.readFeatures(json_tong_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tong_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tong_0.addFeatures(features_tong_0);
var lyr_tong_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tong_0, 
                style: style_tong_0,
                popuplayertitle: 'tong',
                interactive: true,
    title: 'tong<br />\
    <img src="styles/legend/tong_0_0.png" /> 652080<br />\
    <img src="styles/legend/tong_0_1.png" /> 679250<br />\
    <img src="styles/legend/tong_0_2.png" /> 713212<br />\
    <img src="styles/legend/tong_0_3.png" /> 760760<br />\
    <img src="styles/legend/tong_0_4.png" /> 798798<br />\
    <img src="styles/legend/tong_0_5.png" /> 836836<br />\
    <img src="styles/legend/tong_0_6.png" /> 869440<br />\
    <img src="styles/legend/tong_0_7.png" /> 912912<br />\
    <img src="styles/legend/tong_0_8.png" /> 923780<br />\
    <img src="styles/legend/tong_0_9.png" /> 956384<br />\
    <img src="styles/legend/tong_0_10.png" /> 969969<br />\
    <img src="styles/legend/tong_0_11.png" /> 978120<br />\
    <img src="styles/legend/tong_0_12.png" /> 1027026<br />\
    <img src="styles/legend/tong_0_13.png" /> 1032460<br />\
    <img src="styles/legend/tong_0_14.png" /> 1043328<br />\
    <img src="styles/legend/tong_0_15.png" /> 1075932<br />\
    <img src="styles/legend/tong_0_16.png" /> 1084083<br />\
    <img src="styles/legend/tong_0_17.png" /> 1086800<br />\
    <img src="styles/legend/tong_0_18.png" /> 1141140<br />\
    <img src="styles/legend/tong_0_19.png" /> 1195480<br />\
    <img src="styles/legend/tong_0_20.png" /> 1198197<br />\
    <img src="styles/legend/tong_0_21.png" /> 1255254<br />\
    <img src="styles/legend/tong_0_22.png" /> 1304106<br />\
    <img src="styles/legend/tong_0_23.png" /> 1304160<br />\
    <img src="styles/legend/tong_0_24.png" /> 1434517<br />\
    <img src="styles/legend/tong_0_25.png" /> 1434576<br />\
    <img src="styles/legend/tong_0_26.png" /> 1467180<br />\
    <img src="styles/legend/tong_0_27.png" /> 1564992<br />\
    <img src="styles/legend/tong_0_28.png" /> 1613898<br />\
    <img src="styles/legend/tong_0_29.png" /> 1630200<br />\
    <img src="styles/legend/tong_0_30.png" /> 1711710<br />\
    <img src="styles/legend/tong_0_31.png" /> 1793220<br />\
    <img src="styles/legend/tong_0_32.png" /> 1874730<br />\
    <img src="styles/legend/tong_0_33.png" /> 1956240<br />\
    <img src="styles/legend/tong_0_34.png" /> 2092090<br />\
    <img src="styles/legend/tong_0_35.png" /> 2301299<br />\
    <img src="styles/legend/tong_0_36.png" /> 2390960<br />\
    <img src="styles/legend/tong_0_37.png" /> 2405904<br />\
    <img src="styles/legend/tong_0_38.png" /> 2510508<br />\
    <img src="styles/legend/tong_0_39.png" /> 2630056<br />\
    <img src="styles/legend/tong_0_40.png" /> 2749604<br />\
    <img src="styles/legend/tong_0_41.png" /> 4862000<br />\
    <img src="styles/legend/tong_0_42.png" /> 5348200<br />\
    <img src="styles/legend/tong_0_43.png" /> 5834400<br />\
    <img src="styles/legend/tong_0_44.png" /> <br />' });
var format_giaothongdagan_1 = new ol.format.GeoJSON();
var features_giaothongdagan_1 = format_giaothongdagan_1.readFeatures(json_giaothongdagan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_giaothongdagan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_giaothongdagan_1.addFeatures(features_giaothongdagan_1);
var lyr_giaothongdagan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_giaothongdagan_1, 
                style: style_giaothongdagan_1,
                popuplayertitle: 'giaothongdagan',
                interactive: true,
                title: '<img src="styles/legend/giaothongdagan_1.png" /> giaothongdagan'
            });

lyr_tong_0.setVisible(true);lyr_giaothongdagan_1.setVisible(true);
var layersList = [lyr_tong_0,lyr_giaothongdagan_1];
lyr_tong_0.set('fieldAliases', {'FID': 'FID', 'soto': 'số tờ', 'sothua': 'số thửa', 'loaidat': 'loaidat', 'dientich': 'dientich', 'csdd': 'csdd', 'diachi': 'diachi', 'layer': 'layer', 'path': 'path', 'ODT': 'ODT', 'vitri': 'vitri', 'ten': 'ten', 'tu': 'tu', 'den': 'den', });
lyr_giaothongdagan_1.set('fieldAliases', {'stt': 'stt', 'ten': 'ten', 'tu': 'tu', 'den': 'den', 'vt1': 'vt1', 'vt2': 'vt2', 'vt3': 'vt3', 'vt4': 'vt4', 'vt5': 'vt5', 'giao lộ': 'giao lộ', });
lyr_tong_0.set('fieldImages', {'FID': 'TextEdit', 'soto': 'TextEdit', 'sothua': 'TextEdit', 'loaidat': 'TextEdit', 'dientich': 'TextEdit', 'csdd': 'TextEdit', 'diachi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'ODT': 'TextEdit', 'vitri': 'TextEdit', 'ten': 'TextEdit', 'tu': 'TextEdit', 'den': 'TextEdit', });
lyr_giaothongdagan_1.set('fieldImages', {'stt': '', 'ten': '', 'tu': '', 'den': '', 'vt1': '', 'vt2': '', 'vt3': '', 'vt4': '', 'vt5': '', 'giao lộ': '', });
lyr_tong_0.set('fieldLabels', {'FID': 'hidden field', 'soto': 'inline label - visible with data', 'sothua': 'inline label - visible with data', 'loaidat': 'inline label - visible with data', 'dientich': 'inline label - visible with data', 'csdd': 'no label', 'diachi': 'no label', 'layer': 'no label', 'path': 'no label', 'ODT': 'no label', 'vitri': 'no label', 'ten': 'no label', 'tu': 'no label', 'den': 'no label', });
lyr_giaothongdagan_1.set('fieldLabels', {'stt': 'hidden field', 'ten': 'no label', 'tu': 'no label', 'den': 'no label', 'vt1': 'hidden field', 'vt2': 'hidden field', 'vt3': 'hidden field', 'vt4': 'hidden field', 'vt5': 'hidden field', 'giao lộ': 'hidden field', });
lyr_giaothongdagan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});