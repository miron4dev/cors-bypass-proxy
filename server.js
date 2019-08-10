const proxy = require('./cors-proxy');
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

proxy.createServer({
    originWhitelist: [], // Allow all origins
}).listen(port, host, function () {
    console.log('Running CORS Proxy on ' + host + ':' + port);
});