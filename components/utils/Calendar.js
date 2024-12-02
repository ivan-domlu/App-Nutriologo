import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalendarScreen = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const getBackgroundColor = (day, dayIndex) => {
    if (day === selectedDate) {
      return '#576E40'; // Verde oscuro para la fecha seleccionada
    }

    const dayOfWeek = dayIndex % 7;
    if (dayOfWeek === 0 || dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
      return '#BCD09F'; // Colores para domingo, martes, jueves, sábado
    } else {
      return '#F1EAC0'; // Colores para lunes, miércoles, viernes
    }
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    if (onDateSelect) {
      onDateSelect(day);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dayHeader}>DO.</Text>
        <Text style={styles.dayHeader}>LU.</Text>
        <Text style={styles.dayHeader}>MA.</Text>
        <Text style={styles.dayHeader}>MI.</Text>
        <Text style={styles.dayHeader}>JU.</Text>
        <Text style={styles.dayHeader}>VI.</Text>
        <Text style={styles.dayHeader}>SA.</Text>
      </View>

      <View style={styles.grid}>
        {daysInMonth.map((day, index) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.day,
              { backgroundColor: getBackgroundColor(day, index) },
            ]}
            onPress={() => handleDateSelect(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}

        {/* Alinear los días 30 y 31 */}
        {Array.from({ length: (7 - (daysInMonth.length % 7)) % 7 }).map((_, index) => (
          <View key={`empty-${index}`} style={styles.emptyDay} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 350, 
  },
  day: {
    flexBasis: '14.28%', // (1/7 del container)
    height: 82.65,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    paddingTop: 5,
  },  
  dayText: {
    font: 'inter',
    fontSize: 15, 
    fontWeight: 'bold', 
    color: '#000',
  },
  emptyDay: { //Para los días 30 y 31
    flexBasis: '14.28%', 
    height: 82.65, 
  },
});

export default CalendarScreen;