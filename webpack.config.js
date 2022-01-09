/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2022-01-09 22:44:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-09 22:59:33
 * @Description: 文件描述
 */
const path = require('path');
module.exports ={
    entry: './main.ts',
    output:{
        filename: 'text.js',
        path: path.join(__dirname, 'dist')
    },
    mode:'development',
    module:{
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts']
    }
}