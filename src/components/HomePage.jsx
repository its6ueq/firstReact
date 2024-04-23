import React from 'react';

function HomePage() {
  return (
    <>
      <div>
        <button onClick={() => window.location.href = './tictactoe'}>Tic Tac Toe</button>
      </div>
      <div>
        <button onClick={() => window.location.href = './todolist'}>To-do List</button>
      </div>
      <div>
        <button onClick={() => window.location.href = './producttable'}>Product Table</button>
      </div>
    </>
  );
}

export default HomePage;
