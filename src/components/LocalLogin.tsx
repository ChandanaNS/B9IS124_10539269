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
  IonIcon,
  IonCardSubtitle,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import { setUserData } from "../mockapi/setUserData";
import { personCircle, lockClosed } from "ionicons/icons";

import { RouteComponentProps } from "react-router";

interface OwnProps extends RouteComponentProps {}
interface LoginProps extends OwnProps {}

const LocalLogin: React.FC<LoginProps> = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [success, setSuccess] = useState<string>();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username, password);

    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (username && password) {
      setFormSubmitted(true);
      setUserData(true, username, password, "", "", "");
      setSuccess("true");
      history.push("/page/RescueMed", { direction: "none" });
    }
  };

  return (
    <IonContent>
      {/* <div className="login-logo">
        <img src="https://www.gravatar.com/avatar?d=mm&s=140" alt="Ionic logo" />
      </div> */}
      {/* <IonImg src={} /> */}
      <IonCard>
        <IonCardHeader>
          <IonCardTitle
            color="secondary"
            className="ion-text-center"
            style={{ fontFamily: "Special Elite" }}
          >
            RescueMed
          </IonCardTitle>
          <IonCardSubtitle className="ion-text-center">Login</IonCardSubtitle>

          {/* <IonImg src={"https://www.gravatar.com/avatar?d=mm&s=140"} /> */}
        </IonCardHeader>
        <IonImg
          src="assets/icon/iconT.png"
          style={{
            border: "2px solid black",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "50%",
            width: "10em",
            height: "10em",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <IonCardContent>
          {/* <IonLabel>Enter your details</IonLabel> */}

          <form noValidate onSubmit={login}>
            <IonList>
              <IonItem>
                <IonLabel position="stacked" color="primary">
                  Username
                </IonLabel>
                <IonInput
                  name="username"
                  type="text"
                  value={username}
                  spellCheck={false}
                  autocapitalize="off"
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  required
                >
                  <IonIcon slot="start" icon={personCircle}></IonIcon>
                </IonInput>
              </IonItem>

              {usernameError && (
                <IonText color="danger">
                  <p className="ion-padding-start">Username is required</p>
                </IonText>
              )}

              <IonItem>
                <IonLabel position="stacked" color="primary">
                  Password
                </IonLabel>
                <IonInput
                  name="password"
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                >
                  <IonIcon slot="start" icon={lockClosed}></IonIcon>
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
                <IonButton color="light" expand="block">
                  Signup
                </IonButton>
              </IonCol>
            </IonRow>
          </form>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

// export default connect<OwnProps, {}, DispatchProps>({
//   mapDispatchToProps: {
//     setIsLoggedIn,
//     setUsername
//   },
//   component: Login
// })

export default LocalLogin;
