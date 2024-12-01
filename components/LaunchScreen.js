import React from 'react';
import { View, Text } from 'react-native';
import styles from '../css/styles';
import ButtonLargePrimary from './utils/ButtonLargePrimary';
import ButtonLargeSecondary from './utils/ButtonLargeSecondary';
import Logo from './utils/Logo';

const LaunchScreen = ({ navigation }) => {
    return (                    
        <View style={styles.screen}>
            <Text style={styles.title}>Bienvenido</Text>
            <Logo />
            <ButtonLargePrimary 
                style={{ marginBottom: 16 }} 
                onPress={() => navigation.navigate('Login')}
            >
                Iniciar Sesión
            </ButtonLargePrimary>
            <ButtonLargeSecondary 
                style={{ marginBottom: 16 }} 
                onPress={() => navigation.navigate('Registro Paciente')}
            >
                Registrarse como paciente
            </ButtonLargeSecondary>
            <ButtonLargeSecondary 
                onPress={() => navigation.navigate('Registro Nutriólogo')}
            >
                Registrarse como nutriólogo
            </ButtonLargeSecondary>            
        </View>
  );
};

export default LaunchScreen;
