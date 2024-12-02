import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    tabBar: {
      backgroundColor: '#fff',
      borderTopColor: '#ddd',
      borderTopWidth: 1,
      height: 60,
    },


    //AgendaNutriologo
    AgendaContainer: {
      flex: 0,
      paddingTop: 40,
      paddingLeft: 25,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },

    calendarContainer: {
      flex: 0,
      padding: 0,
      marginTop: 5,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    AgendaTitle: {
      font: 'inter',
      fontSize: 30, 
      fontWeight: 'semi bold', 
      textAlign: 'center', 
      color: '#576e40', 
      marginBottom: 5,
    },

    Month: {
      font: 'inter',
      fontSize: 24, 
      fontWeight: 'semi bold', 
      textAlign: 'center', 
      color: '#576e40', 
      marginTop: 0,
      marginBottom: 5,
    },

    //Dia seleccionado NUTRIOLOGO
    scrollAgenda: {
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    dateInfo: {
      padding: 10,
      marginTop: 10,
      paddingLeft: 25,
      alignItems: 'flex-start', 
    },
    dateText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#576E40',
      marginBottom: 10,
    },
    PacientePrimaria: {
      fontSize: 12,
      paddingLeft: 25,
      fontWeight: 'bold',
      color: '#576E40',
      marginBottom: 5,
    },
    PacienteSecundaria: {
      fontSize: 12,
      paddingLeft: 25,
      color: '#bcd09f', 
      marginBottom: 5,
      fontStyle: 'italic', 
    },

    //AgendaPaciente
    foodContainer: {
      marginTop: 20,
      paddingLeft: 25,
      paddingRight: 20,
    },
    selectedDateText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#576E40',
      marginBottom: 10,
    },
    mealRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mealCard: {
      height: 150,
      flex: 1,
      backgroundColor: '#BCD09F',
      margin: 5,
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    mealTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#576E40',
      marginBottom: 5,
    },
    mealDescription: {
      fontSize: 14,
      color: '#6D6D6D',
    },
    mealContainer: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },


  });

export default styles;