import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 4px 4px 19px rgba(0, 0, 0, 0.25);
  display: inline-block;
`;

export default Card;
