import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import { routeList } from "./Routes";
import config from "Config";
const logo =
  "https://orbital-clients.s3.amazonaws.com/_Main/Markab-logo-only.svg";
import offlineStorage from "./OfflineStorage/OfflineStorage";
import { Notification } from "@markab.io/react";
import rootStore from "./Store/rootStore";
import Portfolio from "./Portfolio/Portfolio";
class App extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  render() {
    let { user } = this.props;
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            render={(props) => {
              return (
                <Notification
                  notificationDomainStore={rootStore.notificationDomainStore}
                >
                  <Portfolio
                    title={<>Markab</>}
                    config={config}
                    user={user}
                    offlineStorage={offlineStorage}
                    logo={logo}
                    rootStore={rootStore}
                    routeList={routeList}
                    {...props}
                  />
                </Notification>
              );
            }}
          />
          <Route
            path="*"
            render={({ location, match, history }) => {
              return <NotFound />;
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
  componentWillReceiveProps(nextProps) {}
}
export default App;
