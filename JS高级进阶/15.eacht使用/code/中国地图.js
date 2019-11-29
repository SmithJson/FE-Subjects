var myChart = echarts.init(document.querySelector('#main'));

function initMap(name, data) {
    var option = {
        title: {
            text: '中国地图',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} <br/> {c}',
        },
        series: [
            {
                type: 'map',
                map: name,
                data: data,
                zoom: 1.2,
                label: {
                    show: true, // 显示省份标签
                    color: '#fbfdfe',
                },
                selectedMode: 'single',
                itemStyle: {
                    borderWidth: 0.5,
                    areaColor: '#4ea397',
                    borderColor: '#0550c3',
                },
                emphasis: { // 鼠标悬浮状态
                    itemStyle: {
                        borderWidth: 2,
                        areaColor: '#ece39e',
                        borderColor: '#4b0082',
                    },
                },
            },
        ],
    };

    myChart.off('click');

    if (name === 'china') {
        myChart.on('click', function (param) {
            if (!param.name)
                return false;

            var provinceName = param.data.alias;

            loadRelativeProvince(provinceName, function (data) {
                initMap(param.name, seriesHebeiData);
            });
        });
    } else {
        myChart.on('click', function (param) {
            if (!param.name)
                return false;

            initMap('china', seriesData);
        });
    }

    myChart.setOption(option);
}

function loadRelativeProvince(provinceVal, callback) {
    var scriptProvince = document.querySelector('.' + provinceVal);

    if (scriptProvince)
        return callback && callback(provinceVal);

    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = './js/province/' + provinceVal + '.js';
    script.classList.add(provinceVal);

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                callback && callback(provinceVal);
            }
        };
    } else {
        script.onload = function () {
            callback && callback(provinceVal);
        };
    }

    document.getElementsByTagName('head')[0].appendChild(script);
}

myChart.showLoading();
setTimeout(function () {
    myChart.hideLoading();
    initMap('china', seriesData);
}, 500);
