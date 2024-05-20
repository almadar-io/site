import ReactDOM from "react-dom";
import React from "react";
import Loadable from "react-loadable";
import Loading from "Templates/_shared/Loading/Loading";
import { HashRouter as Router } from "react-router-dom";
const App = Loadable({
  loader: () => import(/* webpackChunkName: "App" */ "./App.js"),
  loading: err => <Loading err={err} />
});
const MyApp = props => {
  return (
    <div>
      <Router>
        <App />
      </Router>
    </div>
  );
};
ReactDOM.render(<MyApp />, document.getElementById("app"));
export default MyApp;
