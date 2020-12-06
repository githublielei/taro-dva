import Taro, {Component} from '@tarojs/taro'
import {View, ScrollView, Input, Image, Swiper, SwiperItem, Text, Icon} from '@tarojs/components'
import './index.scss'
import {create} from 'dva-core';
import {connect} from '@tarojs/redux'
import action from '../../utils/action'
import img1 from "../../asset/images/24213.jpg";
import img2 from "../../asset/images/24280.jpg";
import img3 from "../../asset/images/1444983318907-_DSC1826.jpg";

const citys = ['武汉', '北京', '上海', '杭州', '南京', '贵州']

@connect(({feeds, loading}) => ({
  ...feeds,
  isLoad: loading.effects["feeds/load"],
  isLoadMore: loading.effects["feeds/loadMore"],
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
    tab: 1,
  };

  constructor() {
    super(...arguments);
    this.state = {
      city: '武汉',
      imgUrls: [img1,img2,img3],
      visibleCity: false,
    }
  }

  componentDidMount(){
    this.props.dispatch(action("feeds/load"));
  };

  onPullDownRefresh(){
    this.props.dispatch(action("feeds/load"));
  };

  onReachBottom(){
    this.props.dispatch(action("feeds/loadMore"));
  };

  updateList(){
    this.props.dispatch(action("feeds/search",true));
  };

  handleOpenLocation(){
    this.setState(({visibleCity})=> ({visibleCity: !visibleCity}));
  }

  onSelectedLocation(city){
    this.setState({city});
    this.handleOpenLocation();
  }

  changeTab(tab){
    this.setState({tab});
  }

  open(url){

  }

  render() {
    const {visibleCity, city, tab} = this.state;

    return (
      <View className='home'>
        <View className='topTab' style='flex-direction:row;'>
          <View className='location' onClick={this.handleOpenLocation}>
            <Text>{city}</Text>
            <Icon size='20' type='download' />
          </View>
          <View className='search'>
              <Input placeholder='搜索框' />
          </View>
          <View className='message'>
            <Icon type='search' />
          </View>
        </View>
        <View className='banner'>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className='demo-text-1'>
                <Image mode='aspectFill' src={img1} />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-1'>
                <Image mode='aspectFill' src={img2} />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-1'>
                <Image mode='aspectFill' src={img3} />
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        <View className='meuWrap'>
          <View className='meu'>
            <View className='item' onClick={()=>this.open('/pages/pet/pet')}>
              <Icon size='60' type='success' />
              <Text>我的宠物</Text>
            </View>
            <View className='item'>
              <Icon size='60' type='success' />
              <Text>我的提醒</Text>
            </View>
            <View className='item'>
              <Icon size='60' type='success' />
              <Text>发现需求</Text>
            </View>
            <View className='item'>
              <Icon size='60' type='success' />
              <Text>宠物趣事</Text>
            </View>
          </View>
        </View>
        <View className='content'>
          <View className='head'>
            <View className={tab === 1 ? 'item selected' : 'item'} onClick={()=>this.changeTab(1)}>
              <Text className='title'>推介</Text>
            </View>
            <View className={tab === 2 ? 'item selected' : 'item'} onClick={()=>this.changeTab(2)}>
              <Text className='title'>需求</Text>
            </View>
            <View className={tab === 3 ? 'item selected' : 'item'} onClick={()=>this.changeTab(3)}>
              <Text className='title'>宠物趣事</Text>
            </View>
            <View className={tab === 4 ? 'item selected' : 'item'} onClick={()=>this.changeTab(4)}>
              <Text className='title'>聚会</Text>
            </View>
          </View>
          <View className='body'>
            <View className='listItem'>
              <View className='left'><Image mode='aspectFill' src={img1} /></View>
              <View className='center'>
                  <View class='info'><Text>【卖】</Text><Text>一只博美犬</Text></View>
                  <View className='dateTime'>
                    <Text>2018-12-22</Text>
                    <Text className='time'>17:55</Text>
                  </View>
              </View>
              <View className='right'><Text>500m</Text></View>
            </View>
            <View className='listItem'>
              <View className='left'><Image mode='aspectFill' src={img2} /></View>
              <View className='center'>
                <View class='info'><Text>领养】</Text><Text>一只小猫咪</Text></View>
                <View className='dateTime'>
                  <Text>2018-12-22</Text>
                  <Text className='time'>17:55</Text>
                </View>
              </View>
              <View className='right'><Text>800m</Text></View>
            </View>
            <View className='listItem'>
              <View className='left'><Image mode='aspectFill' src={img3} /></View>
              <View className='center'>
                <View class='info'><Text>【配种】</Text><Text>寻求一只泰迪配种</Text></View>
                <View className='dateTime'>
                  <Text>2018-12-22</Text>
                  <Text className='time'>17:55</Text>
                </View>
              </View>
              <View className='right'><Text>5km</Text></View>
            </View>
          </View>
        </View>


        {visibleCity && (<View className='citySelector'>
          {
            citys.map(n=> (
              <View className='city' onClick={()=>this.onSelectedLocation(n)}><Text className='text'>{n}</Text></View>
            ))
          }
        </View>)}
      </View>
    )
  }
}

