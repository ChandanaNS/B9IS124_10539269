import React, { useState } from "react";
import {
  IonText,
  IonInput,
  IonItem,
  IonButton,
  IonList,
  IonCard,
  IonCardContent,
  IonIcon,
  IonAlert,
  IonCardTitle,
  IonCardHeader,
} from "@ionic/react";
import { logoUsd } from "ionicons/icons";
import { Redirect } from "react-router";

const DonateMoney: React.FC = () => {
  const [success, setSuccess] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [donationAlert, setdonationAlert] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [donationError, setdonationError] = useState(false);

  const checkDonation = () => {
    console.log("check Donation");
    setFormSubmitted(true);
    if (!number) {
      setdonationError(true);
    } else {
      setdonationAlert(true);
    }
  };
  console.log("DonameMoney");
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color="secondary">Enter the Amount</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem color="secondary">
            <IonIcon icon={logoUsd}></IonIcon>
            <IonInput
              type="number"
              value={number}
              placeholder="0"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>
          {formSubmitted && donationError && (
            <IonText color="danger">
              <p className="ion-padding-start">Enter positive Amount</p>
            </IonText>
          )}
          <IonButton
            color="primary"
            onClick={() => {
              checkDonation();
            }}
            expand="full"
          >
            Donate
          </IonButton>

          <IonAlert
            isOpen={donationAlert}
            onDidDismiss={() => setdonationAlert(false)}
            header={"Success!"}
            subHeader={"Thank you!"}
            message={"Your donation is successful."}
            buttons={[
              {
                text: "OK",
                handler: () => {
                  console.log("Confirm Okay");
                  setSuccess("true");
                },
              },
            ]}
          />
          {success ? <Redirect to="/page/RescueMed" exact /> : ""}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default DonateMoney;
