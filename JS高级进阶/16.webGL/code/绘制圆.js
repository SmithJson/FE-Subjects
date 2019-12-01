var canvas = document.querySelector('#canvas'),
    gl = canvas.getContext('webgl');

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

// 顶点着色器声明变量 attribute type name
var vertex_shader = `
    attribute vec4 g_Position;
    attribute float g_PointSize;
    void main() {
        gl_Position = g_Position;
        gl_PointSize = g_PointSize;
    }
`;
// 片元着色器声明变量 uniform type name
// distance(gl_PointCoord, vec2(0.5, 0.5)); 图像光栅化 => 获取0.5, 0.5 返回内的像素点
var fragment_shader = `
    #ifdef GL_ES
        precision mediump float;
    #endif
    uniform vec4 g_FragColor;
    void main() {
        float d = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (d < 0.5) {
            gl_FragColor = g_FragColor; 
        } else {
            discard;
        }
    }
`;

// 创建着色器
var vertexShader = gl.createShader(gl.VERTEX_SHADER),
    fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// 添加着色源
gl.shaderSource(vertexShader, vertex_shader);
gl.shaderSource(fragmentShader, fragment_shader);

// 编译着色器
gl.compileShader(vertexShader);
gl.compileShader(fragmentShader);

// 创建着色器程序
var shaderProgram = gl.createProgram();

// 程序添加着色器
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);

// 链接程序
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

// 变量赋值
var g_Position = gl.getAttribLocation(shaderProgram, 'g_Position');
var g_PointSize = gl.getAttribLocation(shaderProgram, 'g_PointSize');
var g_FragColor = gl.getUniformLocation(shaderProgram, 'g_FragColor');

gl.vertexAttrib3f(g_Position, 0.5, 0.5, 0.0);
gl.vertexAttrib1f(g_PointSize, 20.0);
gl.uniform4f(g_FragColor, 1.0, 0.0, 0.0, 1.0);

// 绘制图像
gl.drawArrays(gl.POINTS, 0, 1);