/**
 * Author: Chandana
 * Component: Geo Location plugin
 * Screen: RescueMed
 * Description: This screen captures the location of the user using Geolocation plugin.
 * Only Latitude and logitute data is fetched
 * Future Scope: Integrating google maps
 */

import React, { useState, useEffect } from "react";
import { locate, helpBuoy } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import { getHelpDetails } from "../mockapi/getHelpDetails";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import {
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonItemDivider,
  IonImg,
  IonText,
  IonContent,
} from "@ionic/react";

const GeolocationHome: React.FC<RouteComponentProps> = ({ history }) => {
  const [position, setPosition] = useState<Geoposition>();
  useEffect(() => {
    const helperDetails = getHelpDetails();
    console.log(helperDetails, "helperDetails");
    if (helperDetails.isLocationSubmitted) {
      history.push("/page/Confirmation");
    } else {
      getLocation();
    }
  }, []);

  const getLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setPosition(position);
      console.log(position);
    } catch (e) {
      console.log("GetLocation Error", e);
    }
  };

  return (
    <IonContent>
      <IonItemDivider></IonItemDivider>
      <IonItemDivider color="secondary">
        <IonItem color="secondary">
          <IonIcon slot="start" icon={locate} />
          <IonLabel>Your current Location </IonLabel>
        </IonItem>
      </IonItemDivider>
      <IonItem color="light">
        <IonLabel>
          Latitude:{" "}
          <IonText color="secondary">
            {position ? position.coords.latitude : ""}
          </IonText>
        </IonLabel>
      </IonItem>
      <IonItem color="light">
        <IonLabel>
          Longitude:
          <IonText color="secondary">
            {position ? position.coords.longitude : ""}
          </IonText>
        </IonLabel>
      </IonItem>
      <IonCard className="ion-fixed">
        <IonImg
          src="assets/icon/maps.png"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <IonCardSubtitle>Your Location will be shared! </IonCardSubtitle>
        <IonLabel>
          <IonText>
            On Click on get help, you agree to share your location with us so
            that the nearest Hospital get notified. Please click on get help to
            continue.
          </IonText>
        </IonLabel>
      </IonCard>

      <IonButton
        color="danger"
        href="/page/Medical"
        expand="block"
        style={{ position: "fixed", bottom: "2em", right: "0", left: "0" }}
      >
        Get Help <IonIcon slot="end" icon={helpBuoy} />
      </IonButton>
    </IonContent>
  );
};

export default GeolocationHome;
