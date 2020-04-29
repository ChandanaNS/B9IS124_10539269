import React, { useState } from "react";
import {
  IonContent,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonInput,
  IonItem,
  IonButton,
  IonList,
  IonIcon,
  IonRadioGroup,
  IonListHeader,
  IonRadio,
  IonItemDivider,
  IonLabel,
  IonDatetime,
  IonRow,
  IonCol,
  IonAlert,
  IonText,
} from "@ionic/react";
import { water, body } from "ionicons/icons";

import { Redirect } from "react-router";

const checkboxList = [
  { val: "Any part of the body", isChecked: true },
  { val: "Eyes", isChecked: false },
  { val: "Kidney", isChecked: false },
  { val: "Hear", isChecked: false },
  { val: "Lungs", isChecked: false },
  { val: "Liver", isChecked: false },
  { val: "Pancrease", isChecked: false },
];

const MedicalHelp: React.FC = () => {
  const [selected, setSelected] = useState<string>("Donate Blood");
  const [name, setNext] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phNo, setPhNo] = useState<number>();
  const [age, setAge] = useState<number>();
  const [bloodGroup, setbloodGroup] = useState<string>();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState<string>();

  const [submitAlert, setsubmitAlert] = useState(false);

  const [formError, setformError] = useState(false);
  //   const [checked, setChecked] = useState(false);
  const checkForm = () => {
    console.log("check Donation");
    setFormSubmitted(true);
    if (!name || !email || !phNo || !age) {
      setformError(true);
    } else {
      setsubmitAlert(true);
    }
  };
  console.log("DonameMoney");
  return (
    <IonContent>
      <IonList>
        <IonRadioGroup
          value={selected}
          onIonChange={(e) => setSelected(e.detail.value)}
        >
          <IonListHeader>
            <IonLabel>Donate</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Blood</IonLabel>
            <IonIcon slot="start" icon={water} />
            <IonRadio slot="end" value="Donate Blood" />
          </IonItem>

          <IonItem>
            <IonLabel>Organs</IonLabel>

            <IonIcon slot="start" icon={body} />
            <IonRadio slot="end" value="Donate Organs" />
          </IonItem>
        </IonRadioGroup>
        {/* <IonItemDivider><IonLabel className="ion-padding">Your Selection</IonLabel></IonItemDivider> */}
        <IonItem color="warning">{selected ?? "(none selected"}</IonItem>
      </IonList>
      <IonList>
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput
            value={name}
            placeholder="FirstName LastName"
            onIonChange={(e) => setNext(e.detail.value!)}
            clearInput
            required
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput
            value={email}
            placeholder="abc@gmail.com"
            onIonChange={(e) => setEmail(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Phone Number</IonLabel>
          <IonInput
            type="number"
            value={phNo}
            placeholder="99999999"
            onIonChange={(e) => setPhNo(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Age</IonLabel>
          <IonInput
            type="number"
            value={age}
            placeholder=">18"
            onIonChange={(e) => setAge(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>
        {selected === "Donate Organs" ? (
          <>
            <IonItemDivider>Donate after my death</IonItemDivider>
            {checkboxList.map(({ val, isChecked }, i) => (
              <IonItem key={i}>
                <IonLabel>{val}</IonLabel>
                <IonCheckbox
                  color="secondary"
                  slot="end"
                  value={val}
                  checked={isChecked}
                />
              </IonItem>
            ))}
            <IonItemDivider>Date</IonItemDivider>
            <IonDatetime
              value="2020-05-03T15:43:40.394Z"
              display-timezone="utc"
            ></IonDatetime>
          </>
        ) : (
          <IonItem>
            <IonLabel>Blood Group</IonLabel>
            <IonSelect
              value={bloodGroup}
              okText="Okay"
              cancelText="Dismiss"
              onIonChange={(e) => setbloodGroup(e.detail.value)}
            >
              <IonSelectOption value="A+">A+</IonSelectOption>
              <IonSelectOption value="A-">A-</IonSelectOption>
              <IonSelectOption value="B+">B+</IonSelectOption>
              <IonSelectOption value="B-">B-</IonSelectOption>
              <IonSelectOption value="O+">O+</IonSelectOption>
              <IonSelectOption value="O-">O-</IonSelectOption>
              <IonSelectOption value="AB+">AB+</IonSelectOption>
              <IonSelectOption value="AB-">AB-</IonSelectOption>
            </IonSelect>
          </IonItem>
        )}
        <IonRow>
          <IonCol>
            {formSubmitted && formError && (
              <IonText color="danger">
                <p className="ion-padding-start">Enter all the details</p>
              </IonText>
            )}
            <IonButton type="submit" expand="block" onClick={() => checkForm()}>
              Submit Form
            </IonButton>
            <IonAlert
              isOpen={submitAlert}
              onDidDismiss={() => setsubmitAlert(false)}
              header={"Success!"}
              subHeader={"Your form has been submitted."}
              message={"Our executive will contact you soon."}
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
          </IonCol>
        </IonRow>
      </IonList>
    </IonContent>
  );
};

export default MedicalHelp;
