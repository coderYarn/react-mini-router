import React, { useContext } from "react";
import { RouterContext } from "./Router";
import { matchPath } from "react-router";
function Route(props) {
  const context = useContext(RouterContext);
  const location = props.location || context.location;
  // match 路由 数据
  const match = props.computedMatch
    ? props.computedMatch
    : props.path
    ? matchPath(location.pathname, props)
    : context.match;
  const newRouterProps = { ...context, location, match };
  let { children, component } = props;
  if (Array.isArray(children) && children.length === 0) children = null;
  //let renderChildren =typeof children === 'function'?children(newRouterProps):children;
  let renderChildren = React.createElement(component, newRouterProps);
  return (
    <RouterContext.Provider value={newRouterProps}>
      {renderChildren}
    </RouterContext.Provider>
  );
}

export default Route;
