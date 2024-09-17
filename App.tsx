import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './style'
import Form from './components/Form'
import List from './components/List'


const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Form/>
      <List/>
    </SafeAreaView>
  )
}

export default App