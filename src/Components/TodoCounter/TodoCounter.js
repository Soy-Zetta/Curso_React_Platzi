import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1>
        Haz Completado {completed} de {total} Todo´s
    </h1>
  );
}

export {TodoCounter}