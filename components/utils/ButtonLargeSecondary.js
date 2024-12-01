import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from '../../css/styles';

const ButtonLargeSecondary = ({children, style, onPress}) => {
    return (                    
        <TouchableOpacity style={[styles.buttonLargeSecondary, style]} onPress={onPress}>
            <Text style={styles.buttonSecondaryText}>{children}</Text>
        </TouchableOpacity>
    );
  }

export default ButtonLargeSecondary;