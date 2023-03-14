import { Flex } from "../Flex";
import { FontWeight, Text } from "../Text";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type IControlButtonProps = {
  onClick?: () => void;
  label: string;
};

const textStyles = {
  color: "#fff",
};

const ControlButtonContainer = styled(Flex)`
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export function ControlButton(props: IControlButtonProps) {
  const { onClick, label } = props;
  const navigate = useNavigate();
  return (
      <>
    <ControlButtonContainer alignItems={"center"} justifyContent={"center"} flexGrow={1} onClick={onClick}>
      <Text fontWeight={FontWeight.heavy} fontSize={"24px"} fontStyles={textStyles}>
        {label}
      </Text>
    </ControlButtonContainer></>
  );
}
