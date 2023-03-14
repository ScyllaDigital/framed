import { Flex } from "../Flex";
import { FontWeight, Text } from "../Text";
import {SlideCounter} from "../SlideCounter/SlideCounter";

export type IControlButtonProps = {
  label: string;
};

const textStyles = {
  color: "#fff",
};

export function ControlLabel(props: IControlButtonProps) {
  const { label } = props;

  return (
    <Flex alignItems={"center"} justifyContent={"center"} flexGrow={1} flexDirection={'column'} flexGap={'0.25rem'}>
      <Text fontWeight={FontWeight.heavy} fontSize={"24px"} fontStyles={textStyles}>
        {label}
      </Text>
        <SlideCounter/>
    </Flex>
  );
}
