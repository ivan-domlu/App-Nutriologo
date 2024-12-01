import React from 'react';
import { View, Text } from 'react-native';
import ButtonBack from './utils/ButtonBack';
import styles from '../css/styles';

const LoginScreen = ({navigation}) => {
    return (                
        <View style={styles.screen}>
            <ButtonBack navigation={navigation}/>
            <Text style={styles.text}>Login Screen</Text>
        </View>
    );
  }

export default LoginScreen;