import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, Pressable, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from './components/CustomButton'

const App = () => {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const onPressHandler = () => setSubmitted(!submitted)

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/45/ce/29/45ce2986d79fc7cd05014bd522a88834.jpg'}} style={styles.container}>
        <Text style={styles.text}>Enter Name: </Text>
        <TextInput 
          style={styles.inputBox}
          placeholder='Enter your four digit OTP'
          onChangeText={text => setName(text)}
          keyboardType='numeric'
          maxLength={4}
          secureTextEntry={true}
        />
        <CustomButton pressFunction={onPressHandler} title={submitted ? 'Clear' : 'Submit'}/>
        {submitted ?
          <View style={styles.container}>
            <Text style={styles.text}>You Entered - {name}</Text>
            <Image style={styles.image} source={require('./assets/done.png')} resizeMode='cover' />
          </View>
          :
          <Image style={styles.image} source={require('./assets/error.png')} resizeMode='contain' />
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  inputBox: { width: 300, borderWidth: 1, borderColor: '#555', borderRadius: 5, textAlign: 'center', fontSize: 20, padding: 10, marginBottom: 10 },
  text: { fontSize: 30, fontWeight: 'bold', padding: 10 },
  image: { width: 100, height: 100, margin: 10 }
})

export default App