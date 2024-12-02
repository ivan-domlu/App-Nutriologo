import React from 'react';
import { View, Text } from 'react-native';
import styles from '../css/styles';
import Card from './utils/Card'
import ButtonBack from './utils/ButtonBack';

const ModificarDietasScreen = ({navigation}) => {
  return (    
    <View style={[styles.screen]}>
      <ButtonBack navigation={navigation}/>
      <Text style={[styles.title, {marginBottom: 60}]}>Modificar dieta</Text>

      <Card title="Día Desayuno" subtitle="Comida" description="Descripción" />
      <Card title="Día Comida" subtitle="Comida" description="Descripción" />
      <Card title="Día Cena" subtitle="Comida" description="Descripción" />
    </View>    
  );
};

export default ModificarDietasScreen;
