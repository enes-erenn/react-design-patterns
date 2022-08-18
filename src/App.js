import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Lists from "./components/LayoutComponents/Lists";
import Modal from "./components/LayoutComponents/Modal";
import { SplitScreen } from "./components/LayoutComponents/SplitScreen";
import LeftHandComponent from "./components/LayoutComponents/SplitScreen/components/LeftHandComponent";
import RightHandComponent from "./components/LayoutComponents/SplitScreen/components/RightHandComponent";
import Provider from "./components/ProviderComponents";
import ControlledOnboardingFlowApp from "./components/UncontrolledComponents/ControlledOnboardingFlowApp";
import UncontrolledOnboardingFlowApp from "./components/UncontrolledComponents/UncontrolledOnboardingFlowApp";

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
        <Route exact path="/modal" element={<Modal />} />
        <Route exact path="/user" element={<Provider />} />
        <Route
          exact
          path="/uncontrolled-onboardingflow"
          element={<UncontrolledOnboardingFlowApp />}
        />
        <Route
          exact
          path="/controlled-onboardingflow"
          element={<ControlledOnboardingFlowApp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
