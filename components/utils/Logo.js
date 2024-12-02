import React from 'react';
import { View, Image} from 'react-native';
import styles from '../../css/styles';

const Logo = ({style}) => {
    return (                    
        <View style={style}>
            <Image 
                source={require('../../assets/Logo.png')} // Asegúrate de poner la ruta correcta del archivo PNG
                style={styles.logoImage}
                resizeMode="contain" // Ajusta cómo se escala la imagen
            />
        </View>
    );
  }

export default Logo;




