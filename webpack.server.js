// This is a file that convers jsx to Javascript on the server side
// We need this for server side rendering

const path = require('path');

module.exports = {
    // Inform webpack that we're building a bunlde
    // for node.js not for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put
    // the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
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

