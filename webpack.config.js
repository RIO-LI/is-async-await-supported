const path = require('path');
const webpack = require('webpack');

const args = process.argv.splice(2);
let filename = 'is-async-await-supported';
let productionBuild = false;
if (args && args[0] == '--mode=production') {
    filename = `${filename}.min`;
    productionBuild = true;
}
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: `${filename}.js`,
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    optimization: {
        minimize: productionBuild ? true : false
    }
};