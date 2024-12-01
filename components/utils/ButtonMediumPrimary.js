import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from '../../css/styles';

const ButtonMediumPrimary = ({children, style, onPress}) => {
    return (                    
        <TouchableOpacity style={[styles.buttonMediumPrimary, style]} onPress={onPress}>
            <Text style={styles.buttonPrimaryText}>{children}</Text>
        </TouchableOpacity>
    );
  }

export default ButtonMediumPrimary;