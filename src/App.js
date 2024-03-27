import React from 'react';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { TodoButton } from './Components/TodoButtom/TodoButton';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false},
  { text: 'tomar curso react', completed: false},
  { text: 'llorar con la llorona', completed: false},
  { text: 'cortar tomate', completed: false},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter total ={28} completed ={15}  />
      <TodoSearch />

      <TodoList>
      {defaultTodos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed} 
        />
      ))}
      </TodoList>

      <TodoButton />
    </React.Fragment>
  );
}

export default App;
