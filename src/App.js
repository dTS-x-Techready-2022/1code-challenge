import logo from "./logo.svg";
import "./App.css";
import { Container, Grid } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar></Navbar>
        <Content></Content>
      </Container>
    </div>
  );
}

export default App;
