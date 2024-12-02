import React from 'react';
import { View, Image} from 'react-native';
import styles from '../../css/styles';

const PacienteFoto = ({style}) => {
    return (                    
        <View>
            <Image 
                source={require('../../assets/FotoPaciente.jpg')} 
                style={[styles.fotoPaciente, style]}
                resizeMode="cover" 
            />
        </View>
    );
  }

export default PacienteFoto;