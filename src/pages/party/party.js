import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'


import img2 from '../../asset/images/good-bad.png'
import img3 from '../../asset/images/flag.png'
import img4 from '../../asset/images/heart2.png'
import img5 from '../../asset/images/star2.png'
import img6 from '../../asset/images/comment.png'
import img7 from '../../asset/images/icon1.jpeg'


export default class Pet extends Component {
    config = {
        navigationBarTitleText: '聚会'
    }
    constructor() {
        super(...arguments)
    }

    navigateTo(url) {
        Taro.navigateTo({ url: url })
    }
    render() {
        return (
          <View className='answer_container'><Text>聚会</Text></View>
        )
    }
}

