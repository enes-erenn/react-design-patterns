import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingDataApp from "./components/Higher-OrderComponents/LoadingDataApp";
import UserFormApp from "./components/Higher-OrderComponents/UserFormApp";
import Lists from "./components/LayoutComponents/Lists";
import Modal from "./components/LayoutComponents/Modal";
import { SplitScreen } from "./components/LayoutComponents/SplitScreen";
import LeftHandComponent from "./components/LayoutComponents/SplitScreen/components/LeftHandComponent";
import RightHandComponent from "./components/LayoutComponents/SplitScreen/components/RightHandComponent";
import Provider from "./components/ProviderComponents";
import RecursiveComponentApp from "./components/RecursiveComponents/RecursiveComponentApp";
import ControlledOnboardingFlowApp from "./components/UncontrolledComponents/ControlledOnboardingFlowApp";
import UncontrolledOnboardingFlowApp from "./components/UncontrolledComponents/UncontrolledOnboardingFlowApp";
import styled from "styled-components";
import "./App.css";
import Home from "./components/LayoutComponents/Home";

const Background = styled.div`
  width: 100%;
  height: 93vh;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const List = styled.ul`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Text = styled.span`
  font-weight: 600;
  color: #000814;
  padding: 1rem;
  transition: all ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

function App() {
  return (
    <Router>
      <List>
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Home</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/split-screen"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Split Screen</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/lists"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Lists</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/modal"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Modal</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Provider</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/uncontrolled-onboardingflow"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Uncontrolled Onboarding Flow</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/controlled-onboardingflow"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Controlled Onboarding Flow</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/higher-order-component-with-user"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Higher Order Component with User</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/user-form"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>User Form</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/recursive-component"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Recursive Component</Text>
          </Link>
        </li>
      </List>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          exact
          path="/higher-order-component-with-user"
          element={<LoadingDataApp />}
        />
        <Route exact path="/user-form" element={<UserFormApp />} />
        <Route
          exact
          path="/recursive-component"
          element={<RecursiveComponentApp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
