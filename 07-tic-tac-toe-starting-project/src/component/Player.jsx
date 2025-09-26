import { useState } from "react";

export default function Player({ initalName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

    btnCaption = "Save";
  }

  function handleEditClick() {
    // setIsEditing(!isEditing); // not recommended
    // problem :: while react schedule the state update,
    // it happens in future and not immidiately
    //  So if two line of updating the state written side by side,
    //  react will not be able to correctly update state.

    setIsEditing((editing) => !editing);

    // other way is to pass function to update state
    // the function will automatically be called by React
    // and receive the guaranteed latest state value
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
