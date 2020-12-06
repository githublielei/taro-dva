import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'

export default class More extends Component {
  config = {
    navigationBarTitleText: '更多'
  }
  render () {
    return (
      <View className='more'><Text>更多</Text></View>
    )
  }
}

