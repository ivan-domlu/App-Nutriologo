import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './components/utils/NavBar';
import LaunchScreen from './components/LaunchScreen';
import LoginScreen from './components/LoginScreen';
import RegistroPacienteScreen from './components/RegistroPacienteScreen';
import RegistroNutriologoScreen from './components/RegistroNutriologoScreen';

const isNutriologo = true;
const userLogedIn = null;
const Stack = createStackNavigator();

const App = () => {  
  return (
    <>
      {userLogedIn ? (      
        <Navbar isNutriologo = {isNutriologo}/>      
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Inicio"
            screenOptions={{
              headerShown: false,              
            }}
          >
            <Stack.Screen name="Inicio" component={LaunchScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro Paciente" component={RegistroPacienteScreen} />
            <Stack.Screen name="Registro Nutriólogo" component={RegistroNutriologoScreen} />
          </Stack.Navigator>
        </NavigationContainer>     
      )}
    </>
  );
}

export default App;



