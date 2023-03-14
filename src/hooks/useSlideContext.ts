import SlideContext from "../context/SlideContext";
import { useContext } from "react";

export function useSlideContext() {
  const context = useContext(SlideContext);

  if (context === undefined) {
    throw new Error("useSlideContext must be used within a SlideProvider");
  }
  return context;
}
