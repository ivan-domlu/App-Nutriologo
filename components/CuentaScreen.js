import React from 'react';
import { View } from 'react-native';
import ButtonLargeSecondary from './utils/ButtonLargeSecondary';
import PacienteFoto from './utils/PacienteFoto';
import styles from '../css/styles';

const CuentaScreen = () => {
    return (
      <View style={styles.screen}>
        <View style={[styles.profileContainer, {marginBottom: 100}]}>
          <PacienteFoto style={{width: 120, height:120}}/>
        </View>
        <ButtonLargeSecondary style={styles.button}>Cambiar foto de perfil</ButtonLargeSecondary>
        <ButtonLargeSecondary style={styles.button}>Cambiar contraseña</ButtonLargeSecondary>
        <ButtonLargeSecondary style={[styles.buttonSecondary, { borderColor: 'red'}]} textColor={'red'}>Salir de la cuenta</ButtonLargeSecondary>
      </View>
    );
};

export default CuentaScreen;