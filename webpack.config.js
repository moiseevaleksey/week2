
const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
};
