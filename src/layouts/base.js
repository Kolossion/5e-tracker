import styles from './base_layout.scss'
import { Layout } from 'antd'

const {
  Header,
  Content,
} = Layout

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header>
        <div className={styles.logo}>
          <p>5E Tracker</p>
        </div>
      </Header>
      <Content>
        {props.children}
      </Content>
    </div>
  );
}

export default BasicLayout;
