import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  width: 40%;
  height: 60%;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  transition: all 0.1s ease-out;
  &:hover {
    background-color: lightgray;
    font-weight: 400;
  }
  width: 2rem;
  font-weight: 300;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <Body>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShow(false)}>X</CloseButton>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </Body>
  );
};

export default Modal;
