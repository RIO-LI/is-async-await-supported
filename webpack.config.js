const path = require('path');
const argv = require('process-argv')();

const isProdMode = argv.options.mode == 'production' ? true : false

module.exports = {
    mode: isProdMode ? 'production' : 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: `is-async-await-supported${isProdMode ? '.min' : ''}.js`,
        libraryTarget: 'umd',
        globalObject: 'typeof self !== "undefined" ? self : this'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: !!isProdMode
    }
};