import { Button as Btn } from "native-base";

interface IButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: IButtonProps) => {
  return (
    <Btn onPress={() => onPress} mt={5} _text={{ fontWeight: "bold", fontSize: "lg" }} size="lg">
      {text}
    </Btn>
  );
};

export default Button;
