import { Container, InputContainer } from "./styles";

const Input = ({
  label,
  register,
  height,
  name,
  icon: Icon,
  error = "",
  ...rest
}) => {
  return (
    <Container>
      <div>
        <p>
          {label} {!!error && <span> - {error}</span>}
        </p>
      </div>
      <InputContainer isErrored={!!error}>
        <input {...rest} {...register(name)} autoComplete="off" />
        {Icon && <Icon size={10} />}
      </InputContainer>
    </Container>
  );
};

export default Input;
