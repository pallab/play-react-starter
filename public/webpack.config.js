module.exports = {
    entry: './javascripts/app.jsx',
    output: {
        path: __dirname,
        filename: './javascripts/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Message: 'javascripts/components/Message.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};