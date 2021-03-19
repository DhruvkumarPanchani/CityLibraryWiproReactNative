import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

// Author Dhruv Panchani

export default class Tab extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
  
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
        
        <Button
          onPress={() => this.props.navigation.navigate('CityLibraryHomeBookList')}
          title="ALL BOOKS"
        />
        <Button
          onPress={() => this.props.navigation.navigate('CityLibraryLogin')}
          title="AVAILABLE"
        />
        <Button
           onPress={() => this.props.navigation.navigate('CityLibraryLogin')}
          title="READ"
        />
        <Button
          onPress={() => this.props.navigation.navigate('CityLibraryLogin')}
          title="Logout"
        />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });