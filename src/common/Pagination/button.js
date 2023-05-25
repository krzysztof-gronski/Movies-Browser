import { ButtonText, StyledButton, StyledIcon } from "./styled";

const Button = ({ text, align, rotate, onClick, disabled }) => {
  const rotateValue = rotate ? "true" : "false";
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {align === "left" && <StyledIcon />}
      <ButtonText>{text}</ButtonText>
      {align === "right" && <StyledIcon rotate={rotateValue} />}
    </StyledButton>
  );
};

export default Button;
