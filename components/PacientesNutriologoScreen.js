import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import ButtonShortPrimary from './utils/ButtonShortPrimary';
import PacienteFoto from './utils/PacienteFoto';
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

const renderPaciente = () => (  
    <View style={styles.pacienteContainer}>
      <View style={styles.infoContainer}>
        <PacienteFoto/>
        <Text style={styles.nombrePaciente}>Texto default</Text>
      </View>
      <ButtonShortPrimary style={{marginLeft: '50%'}}>Modificar dieta</ButtonShortPrimary>
    </View>
  );

const PacientesNutriologoScreen = () => {
    return (
      <View style={styles.screen}>
        <Text style={[styles.title, {marginTop: '15%'}]}>Pacientes</Text>
        <FlatList
          data={pacientes}
          renderItem={renderPaciente}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}          
        />
      </View>
    );
  }

export default PacientesNutriologoScreen;