import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Container, Divider} from "@mui/material";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Divider></Divider>
        <Overview></Overview>
    </div>
  );
}

export default App;
