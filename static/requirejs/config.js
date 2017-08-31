/**
 * 前端模块配置
 * @author 向军 <2300071698@qq.com>
 */
if (!window.hdjs) {
    window.hdjs = {node_modules: '', base: '', uploader: '', filesLists: ''};
}
if (!window.hdjs.base) {
    window.hdjs.base = '/node_modules/hdjs';
}
require.config({
    baseUrl: window.hdjs.base,
    paths: {
        util: window.hdjs.base + '/dist/hdjs',
        css: window.hdjs.base + '/dist/static/requirejs/css.min',
        domReady: window.hdjs.base + '/dist/static/requirejs/domReady',
        vue: 'https://cdn.bootcss.com/vue/2.4.2/vue',
        jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
    },
    shim: {
        'util': {
            deps: ['css!dist/hdjs.css']
        },
        'jquery': {
            exports: '$',
        }
    },
    waitSeconds: 30
});











