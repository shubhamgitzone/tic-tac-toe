export default function Gameboard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSqaure(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // prevGameBoard [rowIndex][colIndex]= 'X';
  //     // return prevGameBoard;

  //     // here we're updating the user object by getting refernce value
  //     // So, it will update the value immidiately even before the
  //     // state update is scheduled

  //     // So, the better way to do it is to create a deep copy before updating
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
