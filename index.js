import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { createRoot } from "react-dom/client";
import './index.css';
import theme from "./theme";
import store from "./src/Store/reduxStore";
import { Provider } from "react-redux";
import App from "./src/App";
const FireApp = (props) => {
  const MyApp = (props) => (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Router>
        <Route
          path="/"
          render={(routeProps) => {
            return (
              <Provider store={store}>
                <ThemeProvider theme={theme}>
                  <App {...props} {...routeProps} />
                </ThemeProvider>
              </Provider>
            );
          }}
        />
      </Router>
    </MuiPickersUtilsProvider>
  );
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<MyApp />);
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    FireApp();
  },
};

app.onDeviceReady();