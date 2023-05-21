import { ButtonText, StyledButton, StyledIcon } from "./styled";

const Button = ({ text, align, rotate }) => {
  const rotateValue = rotate ? "true" : "false";
  return (
    <StyledButton>
      {align === "left" && <StyledIcon />}
      <ButtonText>{text}</ButtonText>
      {align === "right" && <StyledIcon rotate={rotateValue} />}
    </StyledButton>
  );
};

export default Button;
