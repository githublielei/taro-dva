import '@tarojs/async-await'
import action from './utils/action'
import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'
import dva from './dva'
import models from './model'
import {Provider} from '@tarojs/redux'


import './app.scss'


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/pet/pet',
      'pages/more/more',
      'pages/party/party',
      'pages/me/me'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTitleText: '萌宠',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#ffffff",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_focus.png"
      }, {
        pagePath: "pages/pet/pet",
        text: "萌宠圈",
        iconPath: "./asset/images/pet.png",
        selectedIconPath: "./asset/images/pet.png"
      },
        {
          pagePath: "pages/more/more",
          iconPath: "./asset/images/plus.png",
          selectedIconPath: "./asset/images/plus.png"
        },
        {
          pagePath: "pages/party/party",
          text: "聚会",
          iconPath: "./asset/images/party.png",
          selectedIconPath: "./asset/images/party.png"
        },
        {
          pagePath: "pages/me/me",
          text: "我的",
          iconPath: "./asset/images/me.png",
          selectedIconPath: "./asset/images/me.png"
        },

        ]
    }
  }

  componentDidMount() {
    dvaApp.dispatch({type: 'sys/test'})
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentCatchError() {
  }

  render() {
    return (<Provider store={store}>
      <Index/>
    </Provider>);
  }
}

Taro.render(<App/>, document.getElementById('app'))
