import React, { useState, useRef } from "react";
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
import { Redirect } from "react-router";

import { RouteComponentProps } from "react-router";
import { setHelpDetails } from "../mockapi/setHelpDetails";

interface OwnProps extends RouteComponentProps {}
interface LoginProps extends OwnProps {}

const ConfirmationScreen: React.FC<LoginProps> = ({ history }) => {
  // const ConfirmationScreen: React.FC = ({history}) => {
  const [number, setNumber] = useState<number>();
  const [donationAlert, setdonationAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [revokeAction, setRevokeAction] = useState<boolean>(false);
  console.log("DonameMoney : Confirmation");
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
              console.log("Revoke clicked");
              setRevokeAction(true);

              setHelpDetails({}, "", false);
              history.push("/page/RescueMed", { direction: "none" });
            },
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ]}
      ></IonActionSheet>
    </IonContent>
  );
};

export default ConfirmationScreen;
