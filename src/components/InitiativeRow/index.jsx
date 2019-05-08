import styles from './styles.scss'

export default function(props) {
  return (
    <div className={props.active ? styles.activeRow : styles.row}>
      { props.active ? <i className="game-icon game-icon-anchor" /> : null }
      HELLO
    </div>
  )
}