var canvas = document.querySelector('canvas');

// 获取 canvas webGL 画笔
var webgl = canvas.getContext('webgl');

// viewport: webgl 视口相当于画布
webgl.viewport(0, 0, canvas.width, canvas.height);
// 使用某个颜色清除画布
webgl.clearColor(1.0, 0.0, 0.0, 1.0);
// 上色清除
webgl.clear(webgl.COLOR_BUFFER_BIT);