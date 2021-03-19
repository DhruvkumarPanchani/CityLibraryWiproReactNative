import React from 'react';
import { SafeAreaView, Image,View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';

// Author Dhruv Panchani

const Item = ({ id, title,author,publisher,isbn,year,cover}) => (
    <View style={styles.item}>
    <View style={{flex: 1, flexDirection:'row'}}>
      <View style={{flex: 5}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableHighlight onPress={()=>{
          //navigation.navigate('Edit Book',{id:id});  
        }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'http://training.pyther.com/icons/edit.png?9',
          }}
        />
        </TouchableHighlight>
      </View>

      <View style={{flex: 1}}>
        <TouchableHighlight onPress={()=>{
         deleteBook(id);
        }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'http://training.pyther.com/icons/delete.png?9',
          }}
        />
        </TouchableHighlight>
      </View>
    </View>
    <View>
      <Text style={styles.publisher}>{publisher}</Text>
      <Text style={styles.isbn}>{isbn}</Text>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.cover}>{cover}</Text>
      


    </View>
  </View>

);

const CityLibraryBookList = ({books, deleteBook, editBook , navigation}) => {
    const renderItem = ({ item }) => (
      <Item id={item.id} title={item.title} author={item.author} publisher={item.publisher} isbn={item.isbn} year={item.year} cover={item.cover} deleteBook={deleteBook} editBook={editBook} navigation={navigation}/>
    );

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 24,
    },
    email: {
      fontSize:16,
    },
    others: {
      fontSize: 10,
    },
    tinyLogo: {
      width: 30,
      height: 30,
    },
  });
  

export default CityLibraryBookList;