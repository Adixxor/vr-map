import styled from "styled-components";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  background-color: blue;
`;

function App() {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
}

export default App;
