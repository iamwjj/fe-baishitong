import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import logoImg from '@/assets/img/logo.png';
import './index.less';


export default class MessageCard extends Component {
  render() {
    return (
      <View className='message-card'>
        <View className='user-info'>
          <View className='avatar'>
            <Image className='img' src={logoImg}></Image>
          </View>
          <View className='info'>
            <View className='name'>官方小助手</View>
            <View className='time'>2022-01-09 22:49发布</View>
          </View>
        </View>
        <View className='content'>
          <Text className='text'>车找人，广州天河回龙村登畲，有顺路的老乡请联系18819423695</Text>
        </View>
        <View className='footer'>
          <View className='btn-group'>
            <View className='collect'>打电话</View>
          </View>
        </View>
      </View>
    )
  }
}
