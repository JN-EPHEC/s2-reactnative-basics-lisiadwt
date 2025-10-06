import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoItem from '../../components/TodoItem';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <View style={styles.list}>
        <TodoItem text="Learn React Native" />
        <TodoItem text="Build a static UI" />
        <TodoItem text="Practice with StyleSheet" />
        <TodoItem text="Commit to GitHub" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
  list: {
    marginTop: 8,
  },
});