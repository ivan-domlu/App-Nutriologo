import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from '../../css/styles';

const ButtonLargePrimary = ({children, style, onPress}) => {
    return (                    
        <TouchableOpacity style={[styles.buttonLargePrimary, style]} onPress={onPress}>
            <Text style={styles.buttonPrimaryText}>{children}</Text>
        </TouchableOpacity>
    );
  }

export default ButtonLargePrimary;