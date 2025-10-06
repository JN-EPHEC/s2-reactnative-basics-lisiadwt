import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TodoItemProps = {
  text: string;
};

export default function TodoItem({ text }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3f2fd',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196f3', 
  },
  text: {
    fontSize: 16,
    color: '#0d47a1',
  },
});