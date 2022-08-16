import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #66BFBF;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Discounts by 50%</Container>;
};

export default Announcement;
