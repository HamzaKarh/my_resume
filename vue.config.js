
module.exports = {
    publicPath: `${process.env.APP_URL}`,
    outputDir: './dist/',

    // devServer: {
    //     // proxy: {
    //     //     "^/api":{
    //     //         port: process.env.PORT,
    //     //         target: `http://localhost:${process.env.SERVER_PORT}`
    //     //     }
    //     // }
    // },

    chainWebpack: config => {

        config.optimization
            .splitChunks(false)

        // config
        //     .plugin('BundleTracker')
        //     .use(BundleTracker, [{ filename: '../frontend/webpack-stats.json' }])

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            .public(`${process.env.APP_URL}`)
            .host('127.0.0.1')
            .port(`${process.env.PORT}`)
            .hotOnly(true)
            .watchOptions({ poll: 1000 })
            .https(false)
            .headers({ "Access-Control-Allow-Origin": ["\*"] })
    }
};