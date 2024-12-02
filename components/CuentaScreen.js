import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../css/styles';
import ButtonLargePrimary from './utils/ButtonLargePrimary';
import PacienteFoto from './utils/PacienteFoto';

const CuentaScreen = () => {
    return (
      <View style={styles.container}>
      <View style={profileStyles.profileContainer}>
        <PacienteFoto/>
      </View>
      <ButtonLargePrimary style={profileStyles.button}>Cambiar foto de perfil</ButtonLargePrimary>
      <ButtonLargePrimary style={profileStyles.button}>Cambiar contraseña</ButtonLargePrimary>
      <ButtonLargePrimary style={[profileStyles.buttonSecondary, { borderColor: 'red' }]}>Salir de la cuenta</ButtonLargePrimary>
    </View>
  );
};

export default CuentaScreen;