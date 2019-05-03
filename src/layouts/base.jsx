import styles from './base_layout.scss'
import { Layout, Menu, Icon } from 'antd'
import { useState } from 'react';

const {
  Header,
  Content,
  Sider,
} = Layout


function BasicLayout(props) {
  const [ collapsed, setCollapsed ] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div className={styles.logo}>
          <p>5E Tracker</p>
        </div>
        <Menu theme='dark' mode="inline">
          <Menu.Item key='1'>
            <span>Hello</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
        </Header>
        <Content>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
