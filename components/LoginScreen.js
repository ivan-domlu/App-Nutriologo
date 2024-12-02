import React from 'react';
import { View, Text } from 'react-native';
import ButtonBack from './utils/ButtonBack';
import Logo from './utils/Logo';
import styles from '../css/styles';

const LoginScreen = ({navigation}) => {
    return (                
        <View style={styles.screen}>            
            <ButtonBack navigation={navigation}/>
            <Text style={styles.title}>Inicio de Sesión</Text>
            <Logo style={{marginBottom: 80}}/>
            <View style={styles.loginContainer}>
                
            </View>
        </View>
    );
  }

export default LoginScreen;