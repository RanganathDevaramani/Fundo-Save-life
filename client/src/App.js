import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom"
import AppBar from "./AppBar"
// import AppFooter from "./AppFooter"
import Routes from "./routes"

const { Header, Content } = Layout;

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <AppBar />
          </Header>
          <Content style={{ backgroundColor: "white"}}>
            <Routes />
          </Content>
          {/* <Footer>
            <AppFooter />
          </Footer> */}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
