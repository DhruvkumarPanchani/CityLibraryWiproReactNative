import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';
import CityLibraryBookList from './CityLibraryBookList';
import Tab from './CityLibraryTab';

import {
        getBook,
        addBook,
        updateBook,
        deleteBook
    } from './service/CityLibraryAPI';

// Author Dhruv Panchani

const defaultBook =[];    

const CityLibraryHomeBookList = ({navigation}) => {

  const [id, setId] = React.useState('0');
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [publisher, setPublisher] = React.useState("");
  const [isbn, setIsbn] = React.useState("");
  const [year, setYear] = React.useState("");
  const [cover, setCover] = React.useState("");
  const [books, setBooks] = React.useState(defaultBook);
  const [label, setLabel] = React.useState("Add");

  var relaodBook = async() =>{
    var books = await getBook();
    setBooks(books); 
  }

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', (data) => {
        if(data.target.startsWith("CityLibrary")){
            relaodBook();
        }
      });
      return unsubscribe;
  },[navigation]);

  var resetForm = () =>{
    setId('0');
    setTitle('');
    setAuthor('');
    setPublisher('');
    setIsbn('');
    setYear('');
    setCover('');
    setLabel('Add');
  }

  var editBook = (id) =>{
    //navigation.navigate('Add Book');        
  }

  var deleteBook = (id) =>{
    let delBooks = books.filter((book)=>(book.id != id));
    setBooks(delBooks);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
          <Tab navigation={navigation}/>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>City Library</Text>
            <CityLibraryBookList books={books} 
            deleteBook={deleteBook} 
            navigation = {navigation}
            editBook={(id)=>{
                // navigation.navigate('Add Book');  
            }}></CityLibraryBookList>
            <View/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );



};


const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: 'white',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
      marginBottom:20
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  
  export default CityLibraryHomeBookList;