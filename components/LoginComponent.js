import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import CustomButton from './CustomButton'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase({ name: 'MainDB', location: 'default' }, () => {}, error => console.log(error))

const LoginComponent = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        createTable();
    }, [])

    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT)",
            )
        })
    }

    const setData = async () => {
        if(name === '' || email === '') {
            alert('Please enter a name and email')
        } else {
            try {
                await db.transaction(async tx => {
                    await tx.executeSql("INSERT INTO Users (Name, Email) VALUES (?, ?)", [name, email])
                })
                navigation.navigate('Home');
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <View style={styles.body}>
            <TextInput style={styles.input} placeholder='Enter name' value={name} onChangeText={value => setName(value)} />
            <TextInput style={styles.input} placeholder='Enter email' value={email} onChangeText={value => setEmail(value)} />
            <CustomButton title='Login' pressFunction={setData} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightyellow' },
    input: { width: '80%', borderColor: 'black', borderWidth: 1, marginBottom: 10, padding: 10, fontSize: 20 }
})

export default LoginComponent