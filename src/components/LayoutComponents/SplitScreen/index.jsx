import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
  background-color: ${(props) => props.bg};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
  leftBG,
  rightBG,
}) => {
  const [left, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight} bg={leftBG}>
        {left}
      </Pane>
      <Pane weight={rightWeight} bg={rightBG}>
        {right}
      </Pane>
    </Container>
  );
};
