const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        }
        return config
    },
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
}
