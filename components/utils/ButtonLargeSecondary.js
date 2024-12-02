import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from '../../css/styles';

const ButtonLargeSecondary = ({children, style, onPress, textColor}) => {
    return (                    
        <TouchableOpacity style={[styles.buttonLargeSecondary, style]} onPress={onPress}>
            <Text style={[styles.buttonSecondaryText, textColor ? {color:textColor} : null]}>{children}</Text>
        </TouchableOpacity>
    );
  }

export default ButtonLargeSecondary;