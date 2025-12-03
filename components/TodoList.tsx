import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Todo } from '../types/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export default function TodoList({ todos, onToggleTodo, onRemoveTodo }: TodoListProps) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggle={onToggleTodo} onRemove={onRemoveTodo} />
      )}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
