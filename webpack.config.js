const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/shop.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'shop.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
        
        {
            test: /\.vue$/,
            use: [
                { loader: 'vue-loader' }                    
            ]
        }
    ]
},
plugins: [
    new VueLoaderPlugin()
]
}