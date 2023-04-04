import { Text } from "native-base";

interface IHeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: IHeadingProps) => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center" mt={20}>
        {title}
      </Text>
      <Text fontSize="lg" fontWeight="medium" color="white" textAlign="center" mt={2} px={10}>
        {subtitle}
      </Text>
    </>
  );
};

export default Heading;
