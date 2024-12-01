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
      height: 60,
    },
    lista: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    pacienteContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f9f9f9',
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      borderColor: '#ddd',
      borderWidth: 1,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#ccc',
      marginRight: 12,
    },
    nombre: {
      fontSize: 16,
      color: '#4a4a4a',
    },
    boton: {
      backgroundColor: '#6b8e23', // Color verde oliva
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
    textoBoton: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 32,
      fontWeight: '600',
      color: verdeOscuro, 
      marginBottom: 30,
    },
    logoContainer: {
      marginBottom: 160      
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
    }
  });

export default styles;