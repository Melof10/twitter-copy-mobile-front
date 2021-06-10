import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Login = () => {    
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Twitter Copy</Text>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="#003f5c"            
                />
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({password:text})}
                />
            </View>        
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );  
}

export default Login;