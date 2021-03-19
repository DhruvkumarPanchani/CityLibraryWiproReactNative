import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Author Dhruv Panchani

export default class CityLibraryLogin extends Component {

    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'City Library'
    };
    state = {
        email: 'Dhruv',
        password: 'Dhruv'
    }

    onLoginButton = () => {

        
        // Login API
        fetch("http://training.pyther.com:3000/login", {
            method: 'post',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                  },
                body:JSON.stringify({email: this.state.email, password:this.state.password})
            })
          .then(response => response.json())
          .then(response => {
            console.log(JSON.stringify(response));
            if(response.result == "success"){
                alert('Login success.');
                AsyncStorage.setItem('email', this.state.email);
                this.props.navigation.navigate('CityLibraryHomeBookList', { name: this.state.email });
            } else {
                alert('Username and Password should be same.');
            }
            }).catch(function(error) {
                console.log(error);
            });
        
    
    }

    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});