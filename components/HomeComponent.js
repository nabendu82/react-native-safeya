import { StyleSheet, TextInput, View, Text } from 'react-native'
import React, { useState, useEffect }  from 'react'
import CustomButton from './CustomButton'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase({ name: 'MainDB', location: 'default' }, () => {}, error => console.log(error))

const HomeComponent = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT Name, Email FROM Users",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    if(len > 0){
                        const userName = results.rows.item(0).Name;
                        const userEmail = results.rows.item(0).Email;
                        setName(userName);
                        setEmail(userEmail);
                    }
                }
            )
        })
    }

    const updateData = async () => {}

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Welcome - {name}</Text>
            <Text style={styles.text}>Email is - {email}</Text>
            <TextInput style={styles.input} placeholder='Enter name' value={name} onChangeText={value => setName(value)} />
            <CustomButton title='Update' pressFunction={updateData} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: { flex: 1, alignItems: 'center', backgroundColor: 'lightyellow' },
    input: { width: '80%', borderColor: 'black', borderWidth: 1, marginBottom: 10, padding: 10, fontSize: 20 },
    text: { fontSize: 40, margin: 10 }
})

export default HomeComponent