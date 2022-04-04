// This is a file that convers jsx to Javascript on the server side
// We need this for server side rendering

const path = require('path');

module.exports = {

    // Tell webpack the root file of our server application
    entry: './src/client/client.js',

    // Tell webpack where to put
    // the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}