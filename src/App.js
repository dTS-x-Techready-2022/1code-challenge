import { Container } from "@mui/system";
import "./App.css";
import Description from "./components/Description";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";

const App = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Landing />
        <Description />
        <Photos />
      </Container>
    </div>
  );
};

export default App;
