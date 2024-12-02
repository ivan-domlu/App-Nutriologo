import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditButton from './EditButton';
import styles from '../../css/styles';

const Card = ({ title, subtitle, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <EditButton />
      </View>
    </View>
  );
};
export default Card;
