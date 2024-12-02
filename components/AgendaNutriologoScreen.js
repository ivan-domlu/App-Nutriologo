import React, { useState } from 'react';
import { View, Text} from 'react-native';
import styles from '../css/styles';
import Calendar from '../components/utils/Calendar.js';

const AgendaNutriologoScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const getDayOfWeek = (day) => {
    if ([1, 8, 15, 22, 29].includes(day)) return 'Domingo';
    if ([2, 9, 16, 23, 30].includes(day)) return 'Lunes';
    if ([3, 10, 17, 24, 31].includes(day)) return 'Martes';
    if ([4, 11, 18, 25].includes(day)) return 'Miércoles';
    if ([5, 12, 19, 26].includes(day)) return 'Jueves';
    if ([6, 13, 20, 27].includes(day)) return 'Viernes';
    if ([7, 14, 21, 28].includes(day)) return 'Sábado';
    return '';
  };

  return (
    <>
      <View style={styles.AgendaContainer}>
        <Text style={styles.AgendaTitle}>Agenda de Pacientes</Text>
        <Text style={styles.Month}>MES, AÑO</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar onDateSelect={setSelectedDate} />
      </View>

      {selectedDate && (
        <View style={styles.dateInfo}>
          <Text style={styles.dateText}>
            {`${getDayOfWeek(selectedDate)} ${selectedDate} de MES, AÑO`}
          </Text>
          <Text style={styles.PacientePrimaria}>Hora de cita - Nombre del Paciente</Text>
          <Text style={styles.PacienteSecundaria}>Síntomas:</Text>
          <Text style={styles.PacientePrimaria}>Hora de cita - Nombre del Paciente</Text>
          <Text style={styles.PacienteSecundaria}>Nuevo diagnóstico</Text>
        </View>
      )}
    </>
  );
};

export default AgendaNutriologoScreen;