import React, { useEffect } from 'react'
import { NativeModules, SafeAreaView, Text, View } from 'react-native'

const App = () => {
  useEffect(() => {
    ;(async () => {
      console.log('NativeModules.Toast', NativeModules.Toast.multiply)
      console.log(
        'NativeModules.Toast res',
        await NativeModules.Toast.multiply(1, 2),
      )
    })()
  }, [])
  async function onShowToast() {
    console.log('onShowToast')
  }
  return (
    <SafeAreaView>
      <View>
        <Text>hello world</Text>
      </View>
    </SafeAreaView>
  )
}

export default App
