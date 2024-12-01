import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../css/styles';
import Navbar from './utils/NavBar';

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
      <Navbar isNutriologo={true}/>
    </View>
  );