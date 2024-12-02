import React from 'react';
import { View, Text } from 'react-native';
import styles from '../css/styles';
import Card from './utils/Card'

const ModificarDietaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.screen, customStyles.contentModificarDieta]}>
        <Text style={[styles.titleModificarDieta, customStyles.titleModificarDieta]}>Modificar dieta</Text>

        <Card title="Día Desayuno" subtitle="Comida" description="Descripción" />
        <Card title="Día Comida" subtitle="Comida" description="Descripción" />
        <Card title="Día Cena" subtitle="Comida" description="Descripción" />
      </View>
    </View>
  );
};

export default ModificarDietaScreen;
