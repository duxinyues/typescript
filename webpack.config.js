/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-09 22:44:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-16 17:30:28
 * @Description: 文件描述
 */
const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}