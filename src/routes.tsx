import React, { createRef, ReactElement } from "react";
import { Slider } from "./components/Slider/Slider";
import { RouteObject } from "react-router-dom";

export type RouteObjectWithRef<T> = {
  nodeRef: React.RefObject<T>;
} & RouteObject;

export const generateRenderable = (routes: ReactElement[]): RouteObjectWithRef<any>[] => {
  return routes.map((route, index) => {
    return {
      path: `/${index}`,
      element: route,
      nodeRef: createRef<any>(),
    };
  });
};

export const generateRoutes = (routes: RouteObjectWithRef<any>[]): RouteObject[] => {
  return [
    {
      path: "/",
      element: <Slider routes={routes} />,
      children: routes,
    },
  ];
};
