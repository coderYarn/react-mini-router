import { RouterContext } from "./Router";
import { useContext } from "react";
function useLocation() {
  return useContext(RouterContext).location;
}
export default useLocation;
