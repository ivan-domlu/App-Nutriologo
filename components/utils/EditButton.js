import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../css/styles';

const EditButton = () => {
  return (
    <TouchableOpacity style={styles.editButton}>
      <Icon name="pencil" size={20} color="#333" />
    </TouchableOpacity>
  );
};

export default EditButton;
