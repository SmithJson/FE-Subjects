var canvas = document.querySelector('#canvas'),
    gl = canvas.getContext('webgl');

gl.clearColor(0.0, 0.0, 0.0, 0.5);
gl.clear(gl.COLOR_BUFFER_BIT);

// 1. 定义着色器字符串
var vertex_shader = `
    attribute vec4 g_Position;
    attribute float g_PointSize;
    void main() {
        gl_Position = g_Position;
        gl_PointSize = g_PointSize;
    }
`;
var fragment_shader = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.1, 1.0);
    }
`;

// 2. 创建着色器
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// 给着色器添加源
gl.shaderSource(vertexShader, vertex_shader);
gl.shaderSource(fragmentShader, fragment_shader);

// 编译着色器
gl.compileShader(vertexShader);
gl.compileShader(fragmentShader);

// 3. 创建着色器程序
var shaderProgram = gl.createProgram();

// 将着色器添加到程序上
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);

// 4. 链接程序
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

// 获取变量
var g_Position = gl.getAttribLocation(shaderProgram, 'g_Position');
var g_PointSize = gl.getAttribLocation(shaderProgram, 'g_PointSize');

// 给变量赋值
gl.vertexAttrib3f(g_Position, -0.96, 0.95, 0.0);
gl.vertexAttrib1f(g_PointSize, 20.0);

// 绘制点
gl.drawArrays(gl.POINTS, 0, 1);
