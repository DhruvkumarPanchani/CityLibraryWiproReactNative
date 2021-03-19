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
import {ButtonGroup} from 'react-bootstrap';
import Tab from './CityLibraryTab';
import {
    getBook, 
    getBookById,
    addBook,
    updateBook,
    deleteBook
} from './service/CityLibraryAPI';

// Author Dhruv Panchani

const defaultBook =[];    

const CityLibraryAddBook = ({route,navigation}) => {

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

  var loadBook = async (bookId) =>{
    let currentBook = await getBookById(bookId);
      setId(currentBook.id);
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setPublisher(currentBook.publisher);
      setIsbn(currentBook.isbn);
      setYear(currentBook.year);
      setCover(currentBook.cover);

      setLabel("Update");
  }

  useEffect(()=>{
    if(route.params && route.params.id){
        loadBook(route.params.id);
    }
  },[]);

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
    
  }

  // Logic : If id == 0 ADD else EDIT
  var addUpdateBook = async() =>{
    if(id == "0"){ 
      
      let book ={id:Math.floor(Math.random() * 100) +'e',title,author,publisher,isbn,year,cover};
      await addBook(book);
      relaodBook();
      
    }else{ 
        
        let book ={id:Math.floor(Math.random() * 100) +'e',title,author,publisher,isbn,year,cover};
        await updateBook(book);
        relaodBook();
    }
    navigation.navigate('CityLibraryHomeBookList');  
  }

  // Delete record
  var deleteBook = (id) =>{
    let delUsers = books.filter((book)=>(book.id != id));
    setBooks(delUsers);
    navigation.navigate('CityLibraryHomeBookList');
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
            <View>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:20 }}
            placeholder="Enter Title"
            onChangeText={text => setTitle(text)}
            value={title}
            />
            <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setAuthor(text)}
            placeholder="Enter Author"
            value={author}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setPublisher(text)}
            placeholder="Enter Publisher"
            value={publisher}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setIsbn(text)}
            placeholder="Enter International Standard Book Number"
            value={isbn}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setYear(text)}
            placeholder="Enter Year"
            value={year}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setCover(text)}
            placeholder="Enter Cover"
            value={cover}
            />

            <ButtonGroup aria-label="Basic example">
            <Button variant="primary" 
            title={label} 
            onPress={addUpdateBook}></Button>       
            <Button variant="secondary"
            onPress={addUpdateBook} >
               UPDATE
            </Button>
            <Button variant="danger" 
            onPress={deleteBook} >
               DELETE
            </Button>
            </ButtonGroup>
           
            
            </View>
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
  
  export default CityLibraryAddBook;
  