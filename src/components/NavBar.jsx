import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const NavBar = () => {
  const [isServerUp, setIsServerUp] = useState(null);

  useEffect(() => {
    const handleServer = async () => {
      try {
        await axios
          .get("http://localhost:8080/test")
          .then((res) =>
            res.data.status === "success"
              ? setIsServerUp(true)
              : setIsServerUp(false)
          );
      } catch (err) {
        console.log(err);
      }
    };
    handleServer();
  }, []);

  return (
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
      {isServerUp && (
        <>
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
              to="/higher-order-component-with-user"
              style={{
                textDecoration: "none",
              }}
            >
              <Text>Higher Order Component with User</Text>
            </Link>
          </li>
        </>
      )}
    </List>
  );
};

export default NavBar;
