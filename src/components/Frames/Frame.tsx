import styled, { keyframes } from "styled-components";
import { Flex } from "../Flex";

const FrameAnimationForward = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export interface IFrameProps {
  name: string;
}

export const Frame = styled(Flex)`
  transform: translateX(100%);
  animation-name: ${FrameAnimationForward};
  animation-duration: 500ms;
  animation-iteration-count: 1;
  transition: transform 500ms;
  animation-fill-mode: forwards;
  height: 100%;
  flex-grow: 1;
`;


