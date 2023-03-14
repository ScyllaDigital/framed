import { Flex } from "../Flex";
import { ControlButton } from "./ControlButton";
import { ControlLabel } from "./ControlLabel";
import { useSlideContext } from "../../hooks/useSlideContext";

const styles = {
  background: "rgb(252, 186, 17)",
  height: "75px",
  flexGrow: "1",
};

interface IControlsProps {
  slideCount: number;
}

export function Controls(props: IControlsProps) {
  const { slideCount } = props;

  const { slideName, nextSlide, prevSlide, currentSlide } = useSlideContext();

  return (
    <Flex flexStyles={styles}>
      <ControlButton label={"Back"} onClick={nextSlide} />
      <ControlLabel label={slideName ?? "Unknown Slide"} />
      <ControlButton label={"Forward"} onClick={prevSlide} />
    </Flex>
  );
}
