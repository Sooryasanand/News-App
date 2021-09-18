import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from './components/header/header';
import WebView from './components/WebViewComponent';


export default App = () => {

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

const getNews = async () => {
    try {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=au&apiKey=d4605a66fb094096a1e1c355607162ff');
    const json = await response.json();
    setData(json.articles);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  getNews();
}, []);



  return (
    <View>
      <Header />
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.container}>  
                    <View style={styles.text}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.author}>{item.author}</Text>
                        <Text style={styles.time}>{item.publishedAt}</Text>
                    </View>
                    <View style={styles.image}>
                      <Image style={styles.image} source={{uri: item.urlToImage}}/> 
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        borderBottomColor: '#f2f2f2',
                        width: '80%',
                        marginTop: 20,
                        marginLeft: 40,
                        borderBottomWidth: 1
                    }}
                />
              </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10
  },
  text: {
      width: '60%'
  }, 
  title:{
      color: 'black',
      fontSize: 20,
      marginTop: 10
  },
  time: {
      marginTop: 10
  },
  image: {
      marginTop: 15,
      width: 140,
      height: 100,
      marginRight: 10
  },
  author: {
    marginTop: 10,
    fontWeight: 'bold'
  }
});