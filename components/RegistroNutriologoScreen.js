import React from 'react';
import { View, Text } from 'react-native';
import ButtonBack from './utils/ButtonBack';
import styles from '../css/styles';

const RegistroNutriologoScreen = ({navigation}) => {
    return (                    
        <View style={styles.screen}>
            <ButtonBack navigation={navigation}/>
            <Text style={styles.text}>Registro Nutriólogo Screen</Text>
        </View>
    );
  }

export default RegistroNutriologoScreen;