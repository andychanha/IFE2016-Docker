/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/3/14
 *  Time:  15:28
 */
module.exports = {
    entry: "./task1-3/js/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=40000'}
        ]
    }
};