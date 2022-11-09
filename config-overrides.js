module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "url": require.resolve("url/"),
        "querystring": require.resolve("querystring-es3"),
        "util": require.resolve("util/"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert/"),
        "os": require.resolve("os-browserify/browser"),
        "zlib": require.resolve("browserify-zlib"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "console": require.resolve("console-browserify"),
        "async_hooks": false,
        "net": false,
        "tls": false,
        "stream/web": false,
        "util/types": false,
        "worker_threads": false,
        "perf_hooks": false
    }
    
    return config
}