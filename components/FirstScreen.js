import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const FirstScreen = ({ navigation }) => {
    const onPressHandler = () => navigation.navigate('Second');

    return (
        <View style={styles.body}>
            <Text style={styles.text}>First Screen</Text>
            <CustomButton pressFunction={onPressHandler} title='Go Second' />
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    body: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 40, fontWeight: 'bold', margin: 10 },
})