var canvas = document.querySelector('#canvas'),
    gl = canvas.getContext('webgl');

gl.clearColor(0.5, 0.5, 0.5, 1.0);  //rgba - 0 - 0    1 - 255
gl.clear(gl.COLOR_BUFFER_BIT);

// 1. 定义着色器
/**
 * 顶点着色器
 * gl_Position: 顶点着色器的 x, y, z, 使用三维坐标系
 * gl_PointSize: 点的大小
 */
var vertex_shader = `
    void main(){
       gl_Position=vec4(0.5,0.0,1.0,1.0); 
       gl_PointSize=20.0; 
    }
`;
/**
 * gl_FragColor: rgba
 */
var fragment_shader = `
    void main(){ 
        gl_FragColor=vec4(0.5,0.0,0.0,1.0);  
    }
`;

// 2. 创建着色器
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// 绑定着色器
gl.shaderSource(vertexShader, vertex_shader);
gl.shaderSource(fragmentShader, fragment_shader);
// 编译着色器
gl.compileShader(vertexShader);
gl.compileShader(fragmentShader);

// 3. 创建着色器程序
var shaderProgram = gl.createProgram();

// 着色器添加到程序上
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);

// 4. 把着色器链接到一个完整的程序上
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

// 绘制点
gl.drawArrays(gl.POINTS, 0, 1);
