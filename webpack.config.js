const  path = require("path"),
	webpack = require("webpack"),
	vue = require("vue-loader"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	ROOT_PATH = path.resolve(__dirname),               //当前目录
	APP_PATH = path.resolve(ROOT_PATH,'src/main.js'),  //入口文件
	BUILD_PATH = path.resolve(ROOT_PATH,'views/system');      //打包目录


//部署plugin
const plugins = [
	//提取公用js到common.js
	new webpack.optimize.CommonsChunkPlugin('common.js'),
	//将样式统一发布到style.css中
	new ExtractTextPlugin("style.css",{
		allChunks : true
	}),
	// 使用ProvidePlugin,加载使用率高的依赖库
	new webpack.ProvidePlugin({
		$: 'webpack-zepto'
	})
];

module.exports = {
	//文件入口，可以写成多数组形式
	entry :[APP_PATH],
	//输出
	output :{
		//输出路径
		path : BUILD_PATH,
		//打包的js命名
		filename: 'build.js',
		//指向异步加载的路径
		publicPath : 'views/system/',
		//非主文件的命名规则，加缓存用到md5
		chunkFilename : '[id].build.js?[chunkhash]'

	},
	module : {
		loaders : [
			{
				test:/\.vue$/,
				loader:'vue',
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader",'css-loader','postcss-loader') 
			},
			{
				test:/\.(jpg|png|jpeg)$/,
				loader: 'url?limit=40000'
			},
			{
	            test: /\.js$/,
	            exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
	            loader: 'babel'
	        }
		]
	},
	vue:{
		loaders:{
			postcss: () => {
				return [autoprefixer,cssnext,cssgrade,require('postcss-nested')(), require('postcss-advanced-variables')(), require('postcss-extend')(), require('postcss-base64')({extensions: ['.png', '.jpg']})]
			},
			css: ExtractTextPlugin.extract("vue-style-loader","css!sass")
		}
	},
	babel: {
		presets:['es2015','stage-3'],
		plugins: ['transform-runtime']
	},
	plugins: plugins
}

module.exports.devtool = '#source-map'