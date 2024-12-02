import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Image, TextInput, Platform, TouchableOpacity} from 'react-native';
import ButtonBack from './utils/ButtonBack';
import styles from '../css/styles';
import ButtonLargePrimary from './utils/ButtonLargePrimary';

const RegistroPacienteScreen = ({navigation}) => {
    // Estado para manejar el checkbox
    const [isChecked, setIsChecked] = useState(false);

    // Función para manejar el cambio del checkbox
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (                    
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >     
            <ButtonBack navigation={navigation} />
            <Text style={[styles.title, {fontSize: 24, marginBottom: 16}]}>Bienvenido a tu nueva vida</Text>
            <Image
                source={require('../assets/Logo.png')}
                style={styles.imageComida}
                resizeMode="cover"
            />
            <Text style={styles.labelRegister}>Nombre *</Text>
            <TextInput
                style={styles.inputRegister}
                placeholder="Ingrese su nombre"
            />
            <Text style={styles.labelRegister}>Email *</Text>
            <TextInput
                style={styles.inputRegister}
                placeholder="Ingrese su email"
                keyboardType="email-address"
            />
            <Text style={styles.labelRegister}>Contraseña *</Text>
            <TextInput
                style={styles.inputRegister}
                placeholder="Ingrese su contraseña"
                secureTextEntry
            />
            <Text style={styles.labelRegister}>Fecha de nacimiento *</Text>
            <TextInput
                style={styles.inputRegister}
                placeholder="DD/MM/AAAA"                
            />
            <View style={styles.checkboxContainer}>                
                <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
                    <Text>{isChecked ? "☑️" : "⬜️"}</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>Acepto los términos y condiciones</Text>
            </View>
            <ButtonLargePrimary>Registrarse</ButtonLargePrimary>
        </KeyboardAvoidingView>
    );
  }

export default RegistroPacienteScreen;