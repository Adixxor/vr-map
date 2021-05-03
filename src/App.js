import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout";
import Main from "./components/Main";

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  background-color: blue;
`;

function App() {
  return (
    <Container>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/test-page" component={Main} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </Container>
  );
}

export default App;
