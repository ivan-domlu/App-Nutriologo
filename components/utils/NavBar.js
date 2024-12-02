import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import ComidaPacienteScreen from '../ComidaPacienteScreen';
import DietaPacienteScreen from '../DietaPacienteScreen';
import ChatScreen from '../ChatScreen';
import CuentaScreen from '../CuentaScreen';
import AgendaNutriologoScreen from '../AgendaNutriologoScreen';
import PacientesNutriologoScreen from '../PacientesNutriologoScreen';
import MensajeriaNutriologoScreen from '../MensajeriaNutriologoScreen';
import styles from '../../css/styles';

// Importa tus íconos personalizados
import comidaIcon from '../../assets/icons/Comida.png';
import dietaIcon from '../../assets/icons/Dieta.png';
import agendaIcon from '../../assets/icons/Agenda.png';
import pacientesIcon from '../../assets/icons/Pacientes.png';
import mensajesIcon from '../../assets/icons/Mensajes.png';
import cuentaIcon from '../../assets/icons/Cuenta.png';
import comidaIconSelected from '../../assets/icons/ComidaSelected.png'; // Ícono seleccionado
import dietaIconSelected from '../../assets/icons/DietaSelected.png';
import agendaIconSelected from '../../assets/icons/AgendaSelected.png';
import pacientesIconSelected from '../../assets/icons/PacientesSelected.png';
import mensajesIconSelected from '../../assets/icons/MensajesSelected.png';
import cuentaIconSelected from '../../assets/icons/CuentaSelected.png';

const Tab = createBottomTabNavigator();

const Navbar = ({ isNutriologo }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            ...styles.tabBar,
            height: '10%',
          },
          tabBarActiveTintColor: '#576E40', 
          tabBarInactiveTintColor: '#BCD09F', 
          tabBarLabelStyle: {
            fontSize: 10, 
            fontWeight: 'bold', 
          },
        }}
      >
        {isNutriologo ? (
          // Vistas específicas para nutriólogos
          <>
            <Tab.Screen
              name="Agenda"
              component={AgendaNutriologoScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={focused ? agendaIconSelected : agendaIcon}
                    style={{ width: 25, height: 25 }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Pacientes"
              component={PacientesNutriologoScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={focused ? pacientesIconSelected : pacientesIcon}
                    style={{ width: 25, height: 25 }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Mensajería"
              component={MensajeriaNutriologoScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={focused ? mensajesIconSelected : mensajesIcon}
                    style={{ width: 25, height: 25 }}
                  />
                ),
              }}
            />
          </>
        ) : (
          // Vistas específicas para pacientes
          <>
            <Tab.Screen
              name="Comida"
              component={ComidaPacienteScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={focused ? comidaIconSelected : comidaIcon}
                    style={{ width: 25, height: 25 }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Dieta"
              component={DietaPacienteScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={focused ? dietaIconSelected : dietaIcon}
                    style={{ width: 25, height: 25 }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Chat"
              component={ChatScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={focused ? mensajesIconSelected : mensajesIcon}
                    style={{ width: 25, height: 25 }}
                  />
                ),
              }}
            />
          </>
        )}
        <Tab.Screen
          name="Cuenta"
          component={CuentaScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? cuentaIconSelected : cuentaIcon}
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
