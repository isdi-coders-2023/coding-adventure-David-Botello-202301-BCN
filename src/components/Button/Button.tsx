import ButtonStyled from "../ButtonStyled";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <>
      <ButtonStyled value="Sign up" type="submit">
        {text}
      </ButtonStyled>
    </>
  );
};
export default Button;
