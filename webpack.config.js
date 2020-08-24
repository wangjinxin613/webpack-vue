/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === 'development';  // 判断当前环境是否为开发环境
const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } = require('webpack');
const Jarvis = require('webpack-jarvis');
const { join } = path;

const config = {
  // eslint-disable-next-line no-undef
  entry: join(__dirname, 'src/index.ts'),
  output: {
    filename: 'app.js',
    // eslint-disable-next-line no-undef
    path: join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', //配置别名 确保webpack可以找到.vue文件
      // eslint-disable-next-line no-undef
      '@': path.join(__dirname, '..','src')
    },
     extensions: ['.js', '.jsx', '.json', '.ts']
   },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            esModule: false,
            limit: 40960
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        // eslint-disable-next-line no-undef
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
            formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      title: '使用webpack搭建一个vue应用'
    }),
    new Jarvis({
      port: 1337 // optional: set a port
    })
  ],
};

if (isDev) {
  Object.assign(config, {
    // 调试代码时可以看到自己原本的代码，而不是编译后的
    devtool: '#cheap-module-eval-source-map',
    devServer: {
      port: 8000,
      host: '0.0.0.0',
      overlay: {
        errors: true // 将webpack编译的错误显示在网页上面
      },
      open: true, // 在启用webpack-dev-server时，自动打开浏览器
      hot: true
    },
    plugins: [
      new HotModuleReplacementPlugin(), //热加载插件
      // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。对于所有资源，统计资料(stat)的 emitted 标识都是 false
      new NoEmitOnErrorsPlugin()
    ],
  });
}

module.exports = config;