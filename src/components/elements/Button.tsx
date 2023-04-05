import { Button as Btn } from "native-base";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <Btn onPress={() => onPress} mt={5} _text={{ fontWeight: "bold", fontSize: "lg" }} size="lg">
      {text}
    </Btn>
  );
};

export default Button;
