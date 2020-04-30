/**
 * Author: Chandana
 * Component: Confirmation screen
 * Screen: Confirmation
 * Description: This screen helps the user to notify that their request is under process.
 *              On click of revoke the request can be reverted.
 */

import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonActionSheet,
  IonProgressBar,
} from "@ionic/react";
import { trash, close } from "ionicons/icons";

import { RouteComponentProps } from "react-router";
import { setHelpDetails } from "../mockapi/setHelpDetails";

interface OwnProps extends RouteComponentProps {}
interface LoginProps extends OwnProps {}

const ConfirmationScreen: React.FC<LoginProps> = ({ history }) => {
  useEffect(() => {
    //Redirect after 50 sec
    const timer = setTimeout(() => {
      console.info("Revoke action");
      setHelpDetails({}, "", false);
      history.push("/page/RescueMed", { direction: "none" });
    }, 50000);
    return () => clearTimeout(timer);
  }, []);

  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Nearest Hospitals are notified!</IonCardSubtitle>
          <IonCardTitle>Request Accepted.</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Hospital H has accepted your request and Emergency executive is on the
          way. Incase if you want no longer need the service, click on revoke
          help button below.
        </IonCardContent>

        <IonProgressBar type="indeterminate"></IonProgressBar>
        <br />
      </IonCard>
      <IonButton
        color="warning"
        onClick={() => setShowActionSheet(true)}
        expand="block"
      >
        Revoke Request
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: "Revoke",
            role: "destructive",
            icon: trash,
            handler: () => {
              console.info("Revoke clicked");
              setHelpDetails({}, "", false);
              history.push("/page/RescueMed", { direction: "none" });
            },
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              console.info("Cancel clicked");
            },
          },
        ]}
      ></IonActionSheet>
    </IonContent>
  );
};

export default ConfirmationScreen;
