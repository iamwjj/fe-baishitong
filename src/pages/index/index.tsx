import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import MessageCard from './components/message-card'

export default class Index extends Component {

  componentDidMount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home'>
        <View className='message-list'>
          <MessageCard></MessageCard>
        </View>
      </View>
    )
  }
}
