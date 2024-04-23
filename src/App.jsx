
import "./styles.css"
import HomePage from './components/HomePage.jsx';
import TicTacToe from './components/TicTacToe.jsx';
import TodoList from './components/ToDoList.jsx';
import ProductTable from './components/ProductTable.jsx';
import test from './components/test.jsx';
function App() {
  const currentPath = window.location.pathname;

  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/tictactoe' && <TicTacToe />}
      {currentPath === '/todolist' && <TodoList />}
      {currentPath === '/producttable' && <ProductTable />}
      {currentPath === '/test' && <test />}
    </>
  );
}


export default App;
