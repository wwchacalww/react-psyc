import { InputHTMLAttributes, useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  let errorMsg = "";
  if (errors?.[name]) {
    if (errors[name]?.message) {
      errorMsg = errors[name]?.message as string;
    }
  }

  const handInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      style={containerStyle}
      isErrored={false}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <input onFocus={handInputFocus} {...register(name)} {...rest} />
      {errorMsg !== "" && (
        <Error title={errorMsg}>
          <FiAlertCircle color="#C53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export { Input };
