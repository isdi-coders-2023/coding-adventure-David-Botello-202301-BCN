import styled from "styled-components";

const ButtonStyled = styled.button`
  background: var(--primary-color);
  width: 32.3rem;
  height: 4rem;
  left: 82.4rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 2rem;
  font-family: var(--primary-font);

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 41.5rem) {
    height: 5.7rem;
  }
`;

export default ButtonStyled;
