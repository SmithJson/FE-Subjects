var myChart = echarts.init(document.querySelector('#main')),
    option = {
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow',
            },
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
                interval: 0, // x轴label名称显示完全
                rotate: 45, // x轴label名称选择
            },
            boundaryGap: false, // 轴两边不留白
        },
        backgroundColor: '#000', // 背景颜色
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    type: 'solid',
                },
            },
            splitLine: { // 分割线配置
                show: false,
            },
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true, // 平滑显示
            areaStyle: {
                opacity: 0.3,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'red', // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue', // 100% 处的颜色
                    }],
                    global: false, // 缺省为 false
                },
            },
            lineStyle: {
                color: '#000895',
                opacity: 0.5,
            },
            itemStyle: {
                color: 'blue',
            },
            symbol: 'rect', // 标记图形
        }],
    };

myChart.showLoading();

setTimeout(function () {
    myChart.hideLoading();
    myChart.setOption(option);
}, 1500);
