import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonShortPrimary from './utils/ButtonShortPrimary';
import PacienteFoto from './utils/PacienteFoto';
import ModificarDietasScreen from './ModificarDietasNutriologo';
import styles from '../css/styles';


const pacientes = [
  { id: '1', nombre: 'Paciente 1' },
  { id: '2', nombre: 'Paciente 2' },
  { id: '3', nombre: 'Paciente 3' },
  { id: '4', nombre: 'Paciente 4' },
  { id: '5', nombre: 'Paciente 5' },
  { id: '6', nombre: 'Paciente 6' },
  { id: '7', nombre: 'Paciente 7' },
  { id: '8', nombre: 'Paciente 8' },
  { id: '9', nombre: 'Paciente 9' },    
];

const Stack = createStackNavigator();

const renderPaciente = ({ item, navigation }) => (
  <View style={styles.pacienteContainer}>
    <View style={styles.infoContainer}>
      <PacienteFoto />
      <Text style={styles.nombrePaciente}>{item.nombre}</Text>
    </View>
    <ButtonShortPrimary 
      style={{ marginLeft: '50%' }}
      onPress={() => navigation.navigate('ModificarDieta')}
    >
      Modificar dieta
    </ButtonShortPrimary>
  </View>
);

const ListaPacientes = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={[styles.title, { marginTop: '15%' }]}>Pacientes</Text>
      <FlatList
        data={pacientes}
        renderItem={({ item }) => renderPaciente({ item, navigation })}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const PacientesNutriologoScreen = ({}) => {
  return (
    
    <Stack.Navigator initialRouteName="PacientesScreen">
      <Stack.Screen 
        name="PacientesScreen" 
        component={ListaPacientes}        
        options={{
          headerShown: false,              
        }}
      />
      <Stack.Screen 
        name="ModificarDieta" 
        component={ModificarDietasScreen}
        options={{
          headerShown: false,              
        }}
      />
    </Stack.Navigator>
  );
};

export default PacientesNutriologoScreen;
