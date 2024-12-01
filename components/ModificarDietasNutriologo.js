import React from 'react';
import { View, Text, FlatList,TouchableOpacity, Image } from 'react-native';
import styles from '../css/styles';

const renderPaciente = ({ item }) => (
    <View style={styles.pacienteContainer}>
      <View style={styles.infoContainer}>
        <Image source={require('../assets/icon.png')} style={styles.icon} />
        <Text style={styles.nombre}>{item.nombre}</Text>
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
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );