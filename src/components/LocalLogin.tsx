/**
 * Author: Chandana
 * Component: LocalLogin
 * Screen: LocalLogin
 * Description: Login screen for the app, uses Local storage for demo purpose
 */

import React, { useState } from "react";
import {
  IonContent,
  IonImg,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  //   IonIcon,
  //   IonCardSubtitle,
  IonGrid,
} from "@ionic/react";
import { setUserData } from "../mockapi/setUserData";
// import { personCircle, lockClosed } from "ionicons/icons";

import { RouteComponentProps } from "react-router";

interface OwnProps extends RouteComponentProps {}
interface LoginProps extends OwnProps {}

const LocalLogin: React.FC<LoginProps> = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [success, setSuccess] = useState<string>();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (username && password) {
      setUserData(true, username, password, "", "", "");
      setSuccess("true");
      history.push("/page/RescueMed", { direction: "none" });
    }
  };

  return (
    <IonContent>
      <IonGrid
        style={{
          height: "100%",
          backgroundColor: "#3dc2ff",
          backgroundImage:
            "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)",
        }}
      >
        <IonRow
          style={{ height: "100%" }}
          className="justify-content-center align-items-center"
        >
          <IonCard style={{ width: "100%" }}>
            <IonCardHeader>
              <IonCardTitle
                color="secondary"
                className="ion-text-center"
                style={{ fontFamily: "Special Elite" }}
              >
                LOGIN
              </IonCardTitle>
            </IonCardHeader>
            <IonImg
              src="assets/icon/IconLogin.png"
              style={{
                width: "10em",
                height: "10em",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />

            <IonCardContent>
              <form noValidate onSubmit={login}>
                <IonList>
                  <IonItem>
                    <IonLabel position="stacked" color="secondary">
                      Username
                    </IonLabel>

                    {/* <IonIcon slot="start" icon={personCircle}></IonIcon> */}
                    <IonInput
                      name="username"
                      type="text"
                      value={username}
                      spellCheck={false}
                      autocapitalize="off"
                      onIonChange={(e) => setUsername(e.detail.value!)}
                      required
                    ></IonInput>
                  </IonItem>

                  {usernameError && (
                    <IonText color="danger">
                      <p className="ion-padding-start">Username is required</p>
                    </IonText>
                  )}

                  <IonItem>
                    <IonLabel position="stacked" color="secondary">
                      Password
                    </IonLabel>
                    <IonInput
                      name="password"
                      type="password"
                      value={password}
                      onIonChange={(e) => setPassword(e.detail.value!)}
                    >
                      {/* <IonIcon slot="start" icon={lockClosed}></IonIcon> */}
                    </IonInput>
                  </IonItem>

                  {passwordError && (
                    <IonText color="danger">
                      <p className="ion-padding-start">Password is required</p>
                    </IonText>
                  )}
                </IonList>

                <IonRow>
                  <IonCol>
                    <IonButton
                      color="secondary"
                      type="submit"
                      expand="block"
                      onClick={() => {
                        console.log(success);
                      }}
                    >
                      Login
                    </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton color="light" expand="block" disabled>
                      Signup
                    </IonButton>
                  </IonCol>
                </IonRow>
              </form>
            </IonCardContent>
          </IonCard>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default LocalLogin;
