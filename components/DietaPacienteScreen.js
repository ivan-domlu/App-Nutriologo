import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../css/styles';
import Calendar2 from '../components/utils/Calendar2';

const DietaPacienteScreen = () => {
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
    <ScrollView contentContainerStyle={styles.scrollAgenda}>
      <View style={styles.AgendaContainer}>
        <Text style={styles.AgendaTitle}>Agenda de Dietas</Text>
        <Text style={styles.Month}>MES, AÑO</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar2 onDateSelect={setSelectedDate} />
      </View>
      
      
      {selectedDate && (
        <View style={styles.foodContainer}>
          <Text style={styles.selectedDateText}>
            Alimentos para {`${getDayOfWeek(selectedDate)} ${selectedDate} de MES, AÑO`}
          </Text>

          <View style={styles.mealRow}>
            <View style={styles.mealCard}>
              <Text style={styles.mealTitle}>Desayuno</Text>
                <View style={styles.mealContainer}>
                <Text style={styles.mealDescription}>Descripción</Text>
                </View>
            </View>
            <View style={styles.mealCard}>
              <Text style={styles.mealTitle}>Comida</Text>
              <View style={styles.mealContainer}>
                <Text style={styles.mealDescription}>Descripción</Text>
                </View>
            </View>
            <View style={styles.mealCard}>
              <Text style={styles.mealTitle}>Cena</Text>
              <View style={styles.mealContainer}>
                <Text style={styles.mealDescription}>Descripción</Text>
                </View>
            </View>
          </View>
        </View>
      
      )}
      </ScrollView>
    </>
  );
};

export default DietaPacienteScreen