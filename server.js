const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

// proxy middleware options

// proxy middleware options
const options = {
    target: 'http://localhost:3001', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    //ws: true,                         // proxy websockets
   /* pathRewrite: {
        '^/api/old-path' : '/api/new-path',     // rewrite path
        '^/api/remove/path' : '/path'           // remove base path
    },*/
    /*router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000' : 'http://localhost:8000'
    }*/
};

// create the proxy (without context)
const exampleProxy = proxy(options);



// mount `exampleProxy` in web server
app.use('/api/*', exampleProxy);

app.get('*', function(req,res){
    //res.send("node启动成功")
    res.sendfile("./dist/index.html");
    /*let options = {
        headers: {
            'Content-type': 'text/html',
            'Connection':'keep-alive'
        }
    };

    let fileName = path.join(__dirname, 'dist/index.html');
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });*/
});


app.listen(9000, () => {
    console.log('node服务器监听9000端口成功');
})