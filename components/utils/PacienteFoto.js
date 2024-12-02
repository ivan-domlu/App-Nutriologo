import React from 'react';
import { View, Image} from 'react-native';
import styles from '../../css/styles';

const PacienteFoto = ({}) => {
    return (                    
        <View>
            <Image 
                source={require('../../assets/FotoPaciente.jpg')} 
                style={styles.fotoPaciente}
                resizeMode="cover" 
            />
        </View>
    );
  }

export default PacienteFoto;