import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom"
import AppBar from "./AppBar"
import AppFooter from "./AppFooter"
import Routes from "./routes"

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <AppBar />
          </Header>
          <Content>
            <Routes />
          </Content>
          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
