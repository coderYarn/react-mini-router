import { createContext, useState, useMemo, useEffect } from "react";
import { createBrowserHistory } from "history";
export const RouterContext = createContext(null);
export let rootHistory = null;
function Router(props) {
  const history = useMemo(() => {
    rootHistory = createBrowserHistory();
    return rootHistory;
  }, []);

  const [location, setLocation] = useState(history.location);
  useEffect(() => {
    const unlisten = history.listen((location) => {
      setLocation(location.location);
    });
    return () => {
      unlisten && unlisten();
    };
  });



  return (
    <RouterContext.Provider
      value={{
        location,
        history,
        match: {
          path: "/",
          url: "/",
          params: {},
          isExact: location.pathname === "/",
        },
      }}
    >
      {props.children}
    </RouterContext.Provider>
  );
}

export default Router;
