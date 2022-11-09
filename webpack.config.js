const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  resolve: {
    fallback: {
        "url": require.resolve("url/"),
        "querystring": require.resolve("querystring-es3"),
        "util": require.resolve("util/"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert/"),
        "os": require.resolve("os-browserify/browser"),
        "zlib": require.resolve("browserify-zlib"),
        "http": require.resolve("stream-http"),
        "console": require.resolve("console-browserify"),
        "async_hooks": false,
        "net": false,
        "tls": false,
        "stream/web": false,
        "util/types": false,
        "worker_threads": false,
        "perf_hooks": false
    }
  }
};