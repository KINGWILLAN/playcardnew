import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import PlayerList from "./PlayerList";

function App() {
  return (
    <div className="Container mb-5">
      <Container>
        <h1 className="text-center mt-5">FOOTBALLER LIST</h1>
        <PlayerList />
      </Container>
    </div>
  );
}

export default App;
