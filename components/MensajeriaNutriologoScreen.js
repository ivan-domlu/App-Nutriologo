import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const MensajeriaNutriologoScreen = () => {
  const pacientes = [
    { id: '1', nombre: 'Paciente', ultimoMensaje: 'Último mensaje' },
    { id: '2', nombre: 'Paciente', ultimoMensaje: 'Último mensaje' },
    { id: '3', nombre: 'Paciente', ultimoMensaje: 'Último mensaje' },
    { id: '4', nombre: 'Paciente', ultimoMensaje: 'Último mensaje' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={require('../assets/avatarGris.png')} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.nombre}</Text>
        <Text style={styles.message}>{item.ultimoMensaje}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensajería</Text>
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
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
    color: '#576E40',
    marginBottom: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 15,
    paddingLeft: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#576E40',
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  avatar: {
    width: 50,
    paddingLeft: 10,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#576E40',
  },
  message: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
});

export default MensajeriaNutriologoScreen;