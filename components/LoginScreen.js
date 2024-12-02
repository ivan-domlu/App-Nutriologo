import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import ButtonBack from './utils/ButtonBack';
import Logo from './utils/Logo';
import ButtonMediumPrimary from './utils/ButtonShortPrimary';
import styles from '../css/styles';

const FieldLogin = () => {
    return (
        <View>
            <Text style={styles.labelLogin}>Email</Text>
            <TextInput
                style={styles.inputLogin}
                placeholder="Ingrese su email"
                keyboardType="email-address"
            />
            <Text style={styles.labelLogin}>Contraseña</Text>
            <TextInput
                style={styles.inputLogin}
                placeholder="Ingrese su contraseña"
                secureTextEntry
            />
        </View>
    );
}

const LoginScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >            
                <ButtonBack navigation={navigation} />
                <Text style={[styles.title, { marginBottom: 32 }]}>Inicio de Sesión</Text>
                <Logo style={{ marginBottom: 80 }} />
                <View style={styles.loginContainer}>
                    <FieldLogin />
                    <ButtonMediumPrimary>Iniciar Sesión</ButtonMediumPrimary>
                </View>            
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;
