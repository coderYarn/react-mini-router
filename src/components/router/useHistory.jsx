import { RouterContext } from "./Router";
import { useContext } from "react";
function useHistory() {

  return useContext(RouterContext).history;
}
export default useHistory;
