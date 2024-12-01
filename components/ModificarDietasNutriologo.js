import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import styles from '../css/styles';
import Logo from './utils/Logo';

const renderPaciente = () => (
    <View style={styles.pacienteContainer}>
      <View style={styles.infoContainer}>
        <Logo/>
        <Text style={styles.nombre}>Texto default</Text>
      </View>
      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>Modificar dieta</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderPaciente}
        contentContainerStyle={styles.lista}
      />
    </View>
  );