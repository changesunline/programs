const path = require('path')

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js/')
    },
    devServer: {
      contentBase: path.join(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/,
        //   use: [{
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8192
        //     }
        //   }]
        // },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    }
}