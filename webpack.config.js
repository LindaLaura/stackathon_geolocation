
module.exports = {
    entry: ['./client/index.js'],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
        sourceMapFilename: "./public/bundle.js.map"
    },
    devtool:"source-map",
    mode: 'development',
    // module: {
    //     loaders: [{
    //       test: /.jsx?$/,
    //       loader: 'babel-loader',
    //       exclude: /node_modules/
    //     }, {
    //       test: /\.css$/,
    //       loader: "style-loader!css-loader"
    //     }, {
    //       test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    //       loader: 'url-loader?limit=100000' }]
    //   },
   module: {
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader', 
                options:{
                    presets: ['@babel/preset-react']
                },
            }
        ]
   }
}