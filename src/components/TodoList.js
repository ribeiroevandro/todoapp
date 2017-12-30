import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import * as todoActions from '../actions/todos';

import { colors, metrics } from '../styles';
import TodoItem from './TodoItem';

class TodoList extends Component {

  state = {
    newTodoText: '',
  };

  newTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Digite seu todo"
          value={this.state.newTodoText}
          onChangeText={(text) => { this.setState({ newTodoText: text }) }}
        />
        <TouchableOpacity onPress={this.newTodo}>
          <Text>Adicionar novo todo</Text>
        </TouchableOpacity>

        { this.props.todos.map(todo => (
          <TodoItem key={todo.id} title={todo.text} />
        )) }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

const mapStateToProps = state => ({
  todos: state.todos,
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
