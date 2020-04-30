/**
 * Author: Chandana
 * Component: App
 * GitHub: https://github.com/ChandanaNS/B9IS124_10539269
 * Description: Rescue Med app helps the user to seek help by sending the location and photos to the nearest hospital
 */
import Menu from "./components/Menu";
import Page from "./pages/Page";
import React, { useEffect, useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/*Local storage API methods */
import { getUserData } from "./mockapi/getUserData";
import { getHelpDetails } from "./mockapi/getHelpDetails";

import LocalLogin from "./components/LocalLogin";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLocationSubmitted, setLocationSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const userdata = getUserData();
    const helperDetails = getHelpDetails();
    console.log(helperDetails, "helperDetails");
    setLocationSubmitted(helperDetails.isLocationSubmitted);
    console.log(userdata, "userdata");
    setIsLoggedIn(userdata.isLoggedin);
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/LocalLogin" component={LocalLogin} exact />
            <Route path="/page/:name" component={Page} exact />
            {isLoggedIn ? (
              isLocationSubmitted ? (
                <Redirect from="/" to="/page/Confirmation" exact />
              ) : (
                <Redirect from="/" to="/page/RescueMed" exact />
              )
            ) : (
              <Redirect from="/" to="/LocalLogin" exact />
            )}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
