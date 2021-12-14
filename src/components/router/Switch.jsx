import React, { useContext } from "react";
import { RouterContext } from "./Router";
import { matchPath } from "react-router";

export default function Switch(props) {
  const context = useContext(RouterContext);

  const location =
    props.location ||
    context.location.pathname ||
    context.location.location.pathname;
  let Child = null;
  React.Children.forEach(props.children, (child) => {
    const pathname = matchPath(location, { ...child.props});
    if (pathname) {
      Child = React.cloneElement(child, { ...context ,key:child.props.path });
    }
  });
  return Child;
}
