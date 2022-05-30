import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const SecondScreen = ({ navigation }) => {
    const onPressHandler = () => navigation.goBack();

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Second Screen</Text>
            <CustomButton pressFunction={onPressHandler} title='Go First' />
        </View>
    )
}

export default SecondScreen

const styles = StyleSheet.create({
    body: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 40, fontWeight: 'bold', margin: 10 },
})