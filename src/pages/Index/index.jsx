// import styles from './index.scss';
import InitiativeRow from '../../components/InitiativeRow'
import { useState } from 'react';

export default function() {

  const [ activeTurn, setActiveTurn ] = useState(0)
  const [ numRows, setNumRows ] = useState(3)
  let rows = []

  for (var i = 1; i <= numRows; i++) {
    rows.push(
      <InitiativeRow active={activeTurn == i - 1} />
    )
  }

  const onNextTurnClick = () => {
    let newTurn = activeTurn + 1
    if (newTurn >= numRows) newTurn = 0
    setActiveTurn(newTurn)
  }

  return (
    <div style={{ padding: '30px' }}>
      <p>Test</p>
      <button onClick={() => setNumRows(numRows + 1)}>add row</button>
      <button onClick={onNextTurnClick}>next turn</button>
      <p>ACTIVE TURN: { activeTurn }</p>
      { rows }
    </div>
  );
}
