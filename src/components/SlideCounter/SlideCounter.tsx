import { Flex } from "../Flex";
import styled, { css } from "styled-components";
import {useMemo} from "react";
import {useSlideContext} from "../../hooks/useSlideContext";

export interface ISlideCounter {
  active?: boolean;
}

const SlideCounterItem = styled.div<ISlideCounter>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  ${(props) =>
    props.active
      ? css`
              border: solid 3px #1a1a1a;
            `
      : css`
          border: solid 3px #fff;
        `};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;

  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    border: solid 3px #747474;
    color: #747474;
  }
`;

export function SlideCounter() {
    const {currentSlide, slideCount} = useSlideContext();


    const slideCounterItems = useMemo(() => {
        const items = [];
        for (let i = 0; i < slideCount; i++) {
            items.push(<SlideCounterItem key={i} active={i === currentSlide}>{i + 1}</SlideCounterItem>);
        }
        return items;
    }, [currentSlide, slideCount]);

  return (
    <Flex flexGap={"0.5rem"}>
        {slideCounterItems}
    </Flex>
  );
}
