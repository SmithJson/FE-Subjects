// 初始化好的 dom, 初始化 ECharts 实例
var myChart = echarts.init(document.querySelector('#main')),
    options = {
        background: '#ccc',
        color: ['#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
        title: {
            text: 'ECharts 入门实例',
        },
        legend: {
            data: ['销量', '价格'],
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [],
    };

// ECharts loading 加载
myChart.showLoading();

setTimeout(function () {
    myChart.hideLoading();
    options.series.push({
            name: '销量',
            type: 'line',
            data: [10, 20, 30, 40, 60, 10],
        },
        {
            name: '价格',
            type: 'bar',
            data: [10, 20, 30, 40, 60, 10],
        });
    myChart.setOption(options);
}, 2000);

myChart.on('click', function (params) {
    console.log(params.data);
});