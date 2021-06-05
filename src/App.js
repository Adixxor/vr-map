import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout";
import Main from "./components/Main";
import StereoView from "./components/StereoView";
import Tutorial from "./components/tutorial/Tutorial";
import "./App.css";
import { AppContextProvider } from "./context/appContext";
import { colors } from "./consts/colors";

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  background-color: ${colors.gray100};
`;

function App() {
  return (
    <Container>
      <AppContextProvider>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/test-page" component={Main} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path="/stereo-view" component={StereoView} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </AppContextProvider>
    </Container>
  );
}

export default App;
