import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { RouteObjectWithRef } from "../../routes";
import { Flex } from "../Flex";

export interface ISliderProps {
  routes: RouteObjectWithRef<any>[];
}

export function Slider(props: ISliderProps) {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = props.routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <Flex flexGrow={1} flexDirection={"row"} flexStyles={{height:"100%"}}>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={0} classNames="page" unmountOnExit>
          {(state) => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Flex>
  );
}
