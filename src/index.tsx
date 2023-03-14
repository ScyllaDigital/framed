import React, { ReactElement } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MemoryRouter as Router, useRoutes } from "react-router-dom";
import { IFrameProps } from "./components/Frames/Frame";
import { generateRenderable, generateRoutes } from "./routes";
import { SliderProvider } from "./providers/SliderProvider";
import { Flex } from "./components/Flex";
import { Controls } from "./components/Controls/Controls";

export interface IFramedProps {
  SliderConfig: ReactElement<IFrameProps>[];
}

export function Framed(props: IFramedProps) {
  const { SliderConfig } = props;

  const childRoutes = generateRenderable(SliderConfig);
  const renderable = useRoutes(generateRoutes(childRoutes));
  return (
    <Router>
      <SliderProvider slides={SliderConfig}>
        <Flex flexDirection={"column"} flexStyles={{ height: "100%" }}>
          <Flex flexGrow={1}>{renderable}</Flex>
          <Flex>
            <Flex flexGrow={1}>
              <Controls slideCount={childRoutes.length} />
            </Flex>
          </Flex>
        </Flex>
      </SliderProvider>
      )
    </Router>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
