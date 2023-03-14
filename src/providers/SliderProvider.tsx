import { useSliderNavigation } from "../hooks/useSliderNavigation";
import { IFrameProps } from "../components/Frames/Frame";
import React from "react";
import SlideContext from "../context/SlideContext";

export interface ISliderProvider {
  children: React.ReactNode;
  slides: React.ReactElement<IFrameProps>[];
}

export const SliderProvider = ({ children, slides }: ISliderProvider) => {
  const { prevSlide, nextSlide, currentSlide, slideName, slideCount } = useSliderNavigation(slides);

  return <SlideContext.Provider value={{ slideName, nextSlide, slideCount, prevSlide, currentSlide }}>{children}</SlideContext.Provider>;
};
