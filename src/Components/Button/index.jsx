import { Container } from "./styles";

const Button = ({ children, redSchema, ...rest }) => {
  <Container redSchema={redSchema} type="button" {...rest}>
    {children}
  </Container>;
};

export default Button;
