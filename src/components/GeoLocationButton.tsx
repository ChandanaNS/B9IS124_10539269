/**
 * Author: Chandana
 * Component: Geo Location plugin
 */

import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import {
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonItemDivider,
  IonCard,
  IonCardContent,
  IonText,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import CameraScreen from "./CameraScreen";
import {
  locate,
  navigate,
  navigateCircle,
  helpCircle,
  helpBuoy,
} from "ionicons/icons";

import { RouteComponentProps } from "react-router";
import { getHelpDetails } from "../mockapi/getHelpDetails";

interface LocationError {
  showError: boolean;
  message?: string;
}

const GeolocationButton: React.FC<RouteComponentProps> = ({ history }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<LocationError>({ showError: false });
  const [position, setPosition] = useState<Geoposition>();
  // const [isLocationSubmitted, setLocationSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const helperDetails = getHelpDetails();

    console.log(helperDetails, "helperDetails");
    // setLocationSubmitted(helperDetails.isLocationSubmitted);
    if (helperDetails.isLocationSubmitted) {
      history.push("/page/Confirmation");
    } else {
      getLocation();
    }
  }, []);

  const getLocation = async () => {
    setLoading(true);
    try {
      const position = await Geolocation.getCurrentPosition();
      setPosition(position);
      setLoading(false);
      setError({ showError: false });
      console.log(position);
    } catch (e) {
      setError({ showError: true, message: e.message });
      setLoading(false);
    }
  };

  return (
    <IonCard>
      <IonCardContent>
        <IonItemDivider color="secondary">
          <IonItem color="secondary">
            <IonIcon slot="start" icon={locate} />
            <IonLabel>Your current Location </IonLabel>
          </IonItem>
        </IonItemDivider>
        <IonItem color="light">
          <IonLabel>
            Latitude: {position ? position.coords.latitude : ""}
          </IonLabel>
        </IonItem>
        <IonItem color="light">
          <IonLabel>
            Longitude: {position ? position.coords.longitude : ""}
          </IonLabel>
        </IonItem>
        <IonText>Your Location will be shared.</IonText>
        &nbsp;
        <IonButton color="danger" href="/page/Medical" expand="block">
          Get Help <IonIcon slot="end" icon={helpBuoy} />
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default GeolocationButton;
