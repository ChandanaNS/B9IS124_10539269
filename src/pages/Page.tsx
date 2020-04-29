import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import "./Page.css";

import { IonRouterOutlet } from "@ionic/react";

import { Route, Switch } from "react-router-dom";
import GeolocationButton from "../components/GeoLocationButton";
import CameraScreen from "../components/CameraScreen";
import DonateMoney from "../components/DonateMoney";
// import LocalLogin from "../components/LocalLogin";
import ConfirmationScreen from "../components/ConfirmationScreen";
import MedicalHelp from "../components/MedicalHelp";
import UserProfile from "../components/UserProfile";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <Switch>
          <Route
            exact
            path="/page/RescueMed"
            component={GeolocationButton}
          ></Route>
          <Route path="/page/Medical" exact>
            <CameraScreen />
          </Route>
          <Route path="/page/Donate" exact>
            <DonateMoney />
          </Route>
          <Route
            path="/page/Confirmation"
            component={ConfirmationScreen}
            exact
          ></Route>
          {/* <Route path="/page/LocalLogin" exact>
              <LocalLogin />
            </Route> */}
          <Route path="/page/MedicalHelp" exact>
            <MedicalHelp />
          </Route>
          <Route path="/page/UserProfile" component={UserProfile} exact></Route>
        </Switch>
      </IonContent>
    </IonPage>
  );
};

export default Page;