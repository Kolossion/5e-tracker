import styles from './index.scss';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}

export default BasicLayout;
