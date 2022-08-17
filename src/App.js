import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Lists from "./components/LayoutComponents/Lists";
import { SplitScreen } from "./components/LayoutComponents/SplitScreen";
import LeftHandComponent from "./components/LayoutComponents/SplitScreen/components/LeftHandComponent";
import RightHandComponent from "./components/LayoutComponents/SplitScreen/components/RightHandComponent";

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
        <Route exact path="/lists" element={<Lists />} />
      </Routes>
    </Router>
  );
}

export default App;
