const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    plugins:[
        new HtmlWebpackPlugin({
            hash:true,
            title:'Webpack Example App',
            header:'Webpack header title',
            metaDesc:'Webpack tutorial',
            template:'./src/index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    mode:'development',
    output:{
        clean:true
    },
   devServer: { 
     static: {
      directory: path.join(__dirname, 'dist'),
    },
     open:true
   }
}