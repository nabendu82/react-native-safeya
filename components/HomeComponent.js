import { StyleSheet, TextInput, View, Text, Alert, FlatList } from 'react-native'
import React, { useState, useEffect }  from 'react'
import CustomButton from './CustomButton'
import SQLite from 'react-native-sqlite-storage'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setName, getUsers } from '../redux/actions'

const db = SQLite.openDatabase({ name: 'MainDB', location: 'default' }, () => {}, error => console.log(error))

const HomeComponent = ({ navigation }) => {
    const { name, email, users } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
        dispatch(getUsers())
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
                        dispatch(setName(userName));
                        dispatch(setEmail(userEmail));
                    }
                }
            )
        })
    }

    const updateData = async () => {
        if(name.length === 0) {
            Alert.alert('Please enter your name')
        } else {
            dispatch(setName(name))
            await db.transaction(tx => {
                tx.executeSql(
                    "UPDATE Users SET Name = ?", [name], () => Alert.alert('Successfully updated'), error => console.log(error)
                )})               
            }
        }
    
    console.log(users)
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Welcome - {name}</Text>
            <Text style={styles.text}>Email is - {email}</Text>
            <TextInput style={styles.input} placeholder='Enter name' value={name} onChangeText={value => dispatch(setName(value))} />
            <CustomButton title='Update' pressFunction={updateData} />
            <FlatList 
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.subtitle}>{item.email}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: { flex: 1, alignItems: 'center', backgroundColor: 'lightyellow' },
    input: { width: '80%', borderColor: 'black', borderWidth: 1, marginBottom: 10, padding: 10, fontSize: 20 },
    text: { fontSize: 40, margin: 10 },
    item: { marginVertical: 10, marginHorizontal: 20, backgroundColor: 'lightblue', padding: 20, borderRadius: 10 },
    title: { fontSize: 20, margin: 5 },
    subtitle: { fontSize: 15, margin: 5, color: 'grey' }
})

export default HomeComponent