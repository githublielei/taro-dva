import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'



export default class Pet extends Component {
    config = {
        navigationBarTitleText: '萌宠'
    }
    constructor() {
        super(...arguments)
    }

    navigateTo(url) {
        Taro.navigateTo({ url: url })
    }
    render() {
        return (
          <View className='answer_container'>
            <Text>我的萌宠</Text>
          </View>
        )
    }
}

