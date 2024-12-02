import { StyleSheet } from 'react-native';

const verdeOscuro = '#576E40';
const verdeClaro = '#BCD09F';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    screen: {
      flex: 1,      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    backButtonContainer: {
      position: 'absolute', 
      top: '6%', 
      left: 8, 
      zIndex: 10, 
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
    },
    lista: {
      width: '100%',          
      flexGrow: 1,
      justifyContent: 'center', 
      alignItems: 'center',     
    },
    pacienteContainer: {      
      width: '90%',             
      justifyContent: 'space-between',       
      backgroundColor: '#f9f9f9',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      borderColor: '#ddd',
      borderWidth: 1,
    },
    fotoPaciente: {
      width: 50,
      height: 50,
      borderRadius: 50,                        
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',      
    },  
    nombrePaciente: {
      fontSize: 16,
      color: verdeOscuro,
      fontWeight: '500',
      marginLeft: 10,
    },    
    title: {
      fontSize: 32,
      fontWeight: '600',
      color: verdeOscuro,       
      marginHorizontal: 'auto',
    },    
    logoImage: {
      width: 160,
      height: 160,            
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonLargePrimary: {
      backgroundColor: verdeOscuro,
      width: 280,
      height: 38,
      paddingVertical: 8,      
      borderRadius: 30,      
    },
    buttonMediumPrimary: {
      backgroundColor: verdeOscuro,
      width: 208,
      height: 38,
      paddingVertical: 8,      
      borderRadius: 30,      
    },
    buttonShortPrimary: {
      backgroundColor: verdeOscuro,
      width: 182,
      height: 26,
      justifyContent: 'center',     
      borderRadius: 30,      
    },
    buttonPrimaryText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonLargeSecondary: {
      width: 280,
      height: 38,
      borderWidth: 2,
      borderColor: verdeOscuro, 
      paddingVertical: 8,      
      borderRadius: 30,      
    },
    buttonSecondaryText: {
      color: verdeOscuro, 
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    card: {
      width: '100%',
      backgroundColor: '#E6E6D9',
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#576E40',
      marginBottom: 10,
    },
    cardContent: {
      position: 'relative',
    },
    cardSubtitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    cardDescription: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
    editButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    contentModificarDieta: {
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    titleModificarDieta: {
      fontSize: 24,
      marginBottom: 20,
    },
    loginContainer: {
      width: 280,
      height: 320,
      backgroundColor: verdeClaro,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',      
    },
    labelLogin: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    inputLogin: {
      width: 240,
      height: 24,
      backgroundColor: 'white',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 40,
    },
    labelRegister: {
      width: '90%',
      fontSize: 16,
      marginBottom: 8,
      color: verdeOscuro,
      fontWeight: 'bold'
    },
    inputRegister: {
      width: '90%',
      borderBottomWidth: 1,
      borderBottomColor: verdeOscuro,       
      padding: 5,
      marginBottom: 24,
      fontSize: 16,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32      
    },
    checkbox: {
      fontSize: 24,
      marginRight: 10,
      marginBottom: 16
    },
    termsText: {
      fontSize: 16,
      color: verdeOscuro,
      marginBottom: 16
    },
    imageComida: {
      width: 200,
      height: 200,
      marginBottom: 16
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
  
    profileContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 40,
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    button: {
      marginVertical: 10,
      alignSelf: 'center',
    },
    buttonSecondary: {
      marginVertical: 10,
      alignSelf: 'center',
      borderWidth: 2,
    }

  });

export default styles;