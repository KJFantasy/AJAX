const express = require('express');

const app = express();

//创建路由规则,加/server表示到url地址栏中输入/server时会执行后面的回调函数
app.get('/server', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO AJAX 222');
});

app.post('/server', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO AJAX POST');
});

app.all('/server', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('HELLO AJAX POST');
});

app.all('/json-server', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //由于send方法不能直接放入对象，所以需要将对象进行转换
    const data = {
        name: 'peter'
    };
    let str = JSON.stringify(data);
    response.send(str);
});

app.all('/jquery', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('HELLO AJAX jquery');
    const data = {
        name: 'peter'
    };
    // setTimeout(() => {
    //     response.send(JSON.stringify(data));
    // }, 1000);
    response.send(JSON.stringify(data));
});

app.all('/axios', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('HELLO AJAX jquery');
    const data = {
        name: 'peter'
    };
    // setTimeout(() => {
    //     response.send(JSON.stringify(data));
    // }, 1000);
    response.send(JSON.stringify(data));
});

app.all('/fetch', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: 'peter'
    };
    // setTimeout(() => {
    //     response.send(JSON.stringify(data));
    // }, 1000);
    response.send(JSON.stringify(data));
});

app.all('/jquery-jsonp', (request, response) => {
    //设置响应头，运行跨域，即从一个网站跳转到另一个网站

    const data = {
        name: 'peter'
    };
    // setTimeout(() => {
    //     response.send(JSON.stringify(data));
    // }, 1000);
    let str = JSON.stringify(data);
    let cd = request.query.callback;
    response.end(`${cd}(${str})`);
});
//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
});