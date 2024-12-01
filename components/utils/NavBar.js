import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ComidaPacienteScreen from '../ComidaPacienteScreen'
import DietaPacienteScreen from '../DietaPacienteScreen';
import ChatScreen from '../ChatScreen';
import CuentaScreen from '../CuentaScreen';
import styles from '../../css/styles';
import AgendaNutriologoScreen from '../AgendaNutriologoScreen';
import PacientesNutriologoScreen from '../PacientesNutriologoScreen';
import MensajeriaNutriologoScreen from '../MensajeriaNutriologoScreen';


const Tab = createBottomTabNavigator();

const Navbar = ({ isNutriologo }) => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false, 
            tabBarStyle: styles.tabBar,
          }}
        >
          {isNutriologo ? (
            // Vistas específicas para nutriólogos
            <>
                <Tab.Screen name="Agenda" component={AgendaNutriologoScreen} />
                <Tab.Screen name="Pacientes" component={PacientesNutriologoScreen} />
                <Tab.Screen name="Mensajería" component={MensajeriaNutriologoScreen} />
            </>
            ) : (
            // Vistas específicas para pacientes
            <>
                <Tab.Screen name="Comida" component={ComidaPacienteScreen} />
                <Tab.Screen name="Dieta" component={DietaPacienteScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
            </>
            )}          
          <Tab.Screen name="Cuenta" component={CuentaScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default Navbar;