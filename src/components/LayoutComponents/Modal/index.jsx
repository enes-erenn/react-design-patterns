import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 93vh;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid lightgray;
  border-radius: 2rem;
  padding: 2rem;
  width: 12rem;
  height: 2rem;
  color: #fff;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShow(false)}>X</CloseButton>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </Container>
  );
};

export default Modal;
