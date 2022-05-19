import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBasics = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <View style={styles.box2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lavender',
        flexDirection: 'row',
    },
    box1: {
        backgroundColor: 'darkblue',
        width: 100,
        height: 100,
        margin: 2,
        flex: 1
    },
    box2: {
        backgroundColor: 'darkmagenta',
        width: 100,
        height: 100,
        margin: 2,
        flex: 2
    }
})

export default FlexBasics