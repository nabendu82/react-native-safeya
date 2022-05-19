import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Alignments = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <Text style={[styles.textStyle, styles.textStyle1]}>1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={[styles.textStyle, styles.textStyle2]}>2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={[styles.textStyle, styles.textStyle3]}>3</Text>
            </View>
            <View style={styles.box4}>
                <Text style={[styles.textStyle, styles.textStyle4]}>4</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightpink',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    box1: { backgroundColor: 'darkblue', alignSelf: 'flex-start' },
    box2: { backgroundColor: 'darkmagenta', alignSelf: 'flex-end' },
    box3: { backgroundColor: 'darkgreen', alignSelf: 'center' },
    box4: { backgroundColor: 'darkred' },
    textStyle: { textAlign: 'center', fontSize: 'bold', color: 'white', padding: 30 },
    textStyle1: { fontSize: 30 },
    textStyle2: { fontSize: 30 },
    textStyle3: { fontSize: 30 },
    textStyle4: { fontSize: 30 }
})

export default Alignments