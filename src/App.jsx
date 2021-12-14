import React from "react";
import {
  Router,
  Route,
  Switch,
  useListen,
  useLocation,
  useHistory,
} from "./components/router";
const menusList = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "列表",
    path: "/about",
  },
  {
    name: "详情",
    path: "/new",
  },
];
function Home() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}
function New() {
  return <h1>New</h1>;
}
function Top() {
  const history = useHistory();
  const location = useLocation()

  const goPush = (path) => {
    history.push(path);
  };
  return (
    <div>
      {menusList.map((item) => {
        return (
          <button key={item.path} onClick={() => goPush(item.path)}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
function App() {
  useListen((loaction) => {
    console.log(loaction);
  });
  return (
    <div className="App">
      <Router>
        <Top></Top>
        <Switch>
          <Route component={Home} path="/" />
          <Route component={About} path="/about" />
          <Route component={New} path="/new" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
