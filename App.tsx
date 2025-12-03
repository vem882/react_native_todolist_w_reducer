import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useTodos } from './hooks/useTodos';

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>Todo</Text>
        </View>
      </SafeAreaView>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    backgroundColor: '#6366f1',
  },
  header: {
    backgroundColor: '#6366f1',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
