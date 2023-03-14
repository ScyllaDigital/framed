import { IFrameProps } from "../components/Frames/Frame";
import React from "react";

export interface ISlideContext {
  slideName?: string;
  nextSlide: () => void;
  prevSlide: () => void;
  currentSlide: number;
  slideCount: number;
}

const SlideContext: React.Context<ISlideContext | undefined> = React.createContext<ISlideContext | undefined>(undefined);

export default SlideContext;