import { StyleSheet } from 'react-native';

const verdeOscuro = '#576E40';

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
    }
  });

export default styles;