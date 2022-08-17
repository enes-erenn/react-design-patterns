import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SplitScreen } from "./components/SplitScreen";
import LeftHandComponent from "./components/SplitScreen/components/LeftHandComponent";
import RightHandComponent from "./components/SplitScreen/components/RightHandComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<h1>Hi there</h1>} />
        <Route
          exact
          path="/split-screen"
          element={
            <SplitScreen
              leftWeight={3}
              rightWeight={7}
              leftBG={"lightgray"}
              rightBG={"lightblue"}
            >
              <LeftHandComponent message="I am a flex component of the layout" />
              <RightHandComponent message="I am also a flex component of the layout" />
            </SplitScreen>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
