import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ModificarDietaNutriologo = () => {
  const pacientes = [
    { id: '1', nombre: 'Paciente' },
    { id: '2', nombre: 'Paciente' },
    { id: '3', nombre: 'Paciente' },
    { id: '4', nombre: 'Paciente' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avatarGris.png')} style={styles.avatar} />
        <Text style={styles.name}>{item.nombre}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Modificar dieta</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pacientes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40, //espacio entre tarjetas
    padding: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#576E40',
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    color: '#576E40',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#576E40',
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ModificarDietaNutriologo;
