import { StyleSheet, Text, View, SafeAreaView, ScrollView, SectionList, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Alignments from './components/Alignments'

const App = () => {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const data = await response.json()
  //     setData(data)
  //   }
  //   getData()
  // },[])

  const DATA = [
    { title: 'Learn React Native', data: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Learn PostgreSQL', data: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Learn NodeJS', data: ['Item 1'] },
    { title: 'Learn ExpressJS', data: ['Item 1', 'Item 2'] },
  ]

  // const languages = [
  //   { name: 'JavaScript', key: '1' },
  //   { name: 'Java', key: '2' },
  //   { name: 'Python', key: '3' },
  //   { name: 'C#', key: '4' },
  //   { name: 'C++', key: '5' },
  //   { name: 'C', key: '6' },
  //   { name: 'PHP', key: '7' },
  //   { name: 'Ruby', key: '8' },
  //   { name: 'Swift', key: '9' },
  //   { name: 'Go', key: '10' }
  // ];

  // const [title, setTitle] = useState('TWD')
  // const [items, setItems] = useState([
  //   { id: 1, text: 'Learn React Native' },
  //   { id: 2, text: 'Learn PostgreSQL' },
  //   { id: 3, text: 'Learn Swift' },
  //   { id: 4, text: 'Learn Flutter' },
  //   { id: 5, text: 'Learn React' },
  //   { id: 6, text: 'Learn Solidity' },
  //   { id: 7, text: 'Learn Java' },
  //   { id: 8, text: 'Learn Python' },
  //   { id: 9, text: 'Learn C++' },
  //   { id: 10, text: 'Learn C#' }
  // ])

  // const [refresh, setRefresh] = useState(false);

  // const onRefresh = () => {
  //   setRefresh(true);
  //   setItems([...items, { id: items.length + 1, text: `Learn Tech No ${items.length}` }]);
  //   setRefresh(false);
  // }

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={styles.container}>
    //     <Text style={styles.titleText}>{title}</Text>
    //     <Button title='TWD YT' onPress={() => setTitle('TWD YT Channel')} />
    //   </View>
    // </SafeAreaView>

    // <>
    //   <Alignments />
    // </>

    <SafeAreaView style={styles.container}>
      {/* <ScrollView 
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* <FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )} /> */}
      <SectionList 
        keyExtractor={index => index.toString()} 
        sections={DATA} 
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        renderSectionHeader={( { section }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'lightblue'},
  item: { margin: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'darkmagenta' },
  text: { fontSize: 40, fontWeight: 'bold', color: 'white', padding: 10 }
  // container: {
  //   width: '100%',
  //   height: 120,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 10,
  //   borderColor: 'darkmagenta',
  //   borderRadius: 5,
  //   backgroundColor: 'lightblue',
  // },
  // titleText: {
  //   fontSize: 30,
  //   margin: 10,
  //   textTransform: 'uppercase'
  // }
})

export default App