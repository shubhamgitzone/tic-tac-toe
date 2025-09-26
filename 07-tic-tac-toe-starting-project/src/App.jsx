import Player from "./component/Player.jsx";
import Gameboard from "./component/Gameboard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName="Player 1" symbol="X" />
          <Player initalName="Player 2" symbol="O" />
        </ol>
        <Gameboard />
      </div>
      log
    </main>
  );
}

export default App;
