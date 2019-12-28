var canvas = document.getElementById('canvas'),
    gl = canvas.getContext('webgl');

gl.clearColor(0.0, 0.0, 0.0, 0.5);
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

/* 通过缓冲区实现多个点 */
var pointBuffer = new Float32Array([
    -0.5,0.5,0.0,
    -0.5,-0.5,0.0,
    0.5,-0.5,0.0,
]);

// 1. 创建缓冲区对象
var vertexBuffer = gl.createBuffer();
// 2. 绑定缓冲区
// gl.bindBuffer(target, buffer)
// target: 制定缓冲区的目标类型
// buffer: 自己创建缓冲区的对象
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
// 3. 像缓冲区写入数据: 数据类型 数据 绘制方式
gl.bufferData(gl.ARRAY_BUFFER, pointBuffer, gl.STATIC_DRAW);

// 变量赋值
// 4. 获取 attribute 变量的存储信息, 返回对应的地址信息
var g_Position = gl.getAttribLocation(shaderProgram, 'g_Position');
var g_PointSize = gl.getAttribLocation(shaderProgram, 'g_PointSize');
var g_FragColor = gl.getUniformLocation(shaderProgram, 'g_FragColor');

// 单个点
// gl.vertexAttrib3f(g_Position, 0.5, 0.5, 0.0);
// 5. 把缓冲区对象分配给 g_Position
gl.vertexAttribPointer(g_Position, 2, gl.FLOAT, false, 0, 0);
// 6. 链接缓冲区对象和 g_Position
gl.enableVertexAttribArray(g_Position);

gl.vertexAttrib1f(g_PointSize, 10.0);
gl.uniform4f(g_FragColor, 0.8, 0.5, 0.0, 1.0);

// 绘制图像
gl.drawArrays(gl.POINTS, 0, 3);
// 绘制三角形
gl.drawArrays(gl.TRIANGLES, 0, 3);