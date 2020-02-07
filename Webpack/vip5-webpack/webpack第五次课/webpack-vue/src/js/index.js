// import "@babel/polyfill";
import 'lodash';
console.log('hello world!')
// import config from './config.js';
// console.log(config);
import  ABC from 'images/ABC.jpg';

console.log(configCommon['environment'][sceneParam]);
console.log(sceneParam)
console.log('----------')

if(sceneParam=='prod') {
    import('styles/main.less');
} else {
    import('styles/test.less');
}
document.addEventListener('click', () => { 
    
    //预先拉取 preftch
    import('./click.js'
    /*  webpackPrefetch:true */
    ).then(({default:func})=>{
        func();
    })

})

const arr = [new Promise(() => {}), new Promise(() => {})];
arr.map(item => {  console.log(item); });

var isCol = ['11','22'].includes('11');
console.log(isCol);