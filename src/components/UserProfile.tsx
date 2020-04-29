import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonAlert,
  IonInput,
  IonLabel,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonImg,
  IonHeader,
  IonButton,
  IonIcon,
} from "@ionic/react";

import { getUserData } from "../mockapi/getUserData";
import { setUserData } from "../mockapi/setUserData";
import { pencil } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import { setHelpDetails } from "../mockapi/setHelpDetails";

interface OwnProps extends RouteComponentProps {}
interface UserProfileProps extends OwnProps {}

const UserProfile: React.FC<UserProfileProps> = ({ history }) => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [donationAlert, setdonationAlert] = useState(false);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setpassword] = useState<string>();
  const [userName, setuserName] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  };

  const setValue = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, password);

    // if (!username) {
    //   setUsernameError(true);
    // }
    // if (!password) {
    //   setPasswordError(true);
    // }
    if (name && password && email) {
      setUserData(true, name, password, "", email, "");
    }
  };
  useEffect(() => {
    console.log("team");
    const userdata = getUserData();

    userdata.username ? setName(userdata.username) : setName(" ");
    userdata.password ? setpassword(userdata.password) : setpassword(" ");
    userdata.email ? setEmail(userdata.email) : setEmail(" ");
    // userdata.email ? setEmail(userdata.email) : setEmail("");
    console.log(userdata);
  }, []);
  console.log("User Profile");
  return (
    <IonContent>
      <IonCard>
        <IonHeader>
          <img
            src="assets/icon/user.png"
            alt="avatar"
            style={{
              width: "10em",
              height: "10em",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <IonCardSubtitle className="ion-text-center">{name}</IonCardSubtitle>
          {/* <IonCardSubtitle className="ion-text-center">{email}</IonCardSubtitle> */}
        </IonHeader>
        <form noValidate onSubmit={setValue}>
          <IonList>
            <IonCardContent>
              <IonItem
                onClick={(EventTarget) => {
                  setuserName(true);
                }}
              >
                <IonLabel position="stacked" color="primary">
                  Username
                </IonLabel>

                <IonInput
                  value={name}
                  onIonChange={(e) => {
                    setName((e.target as HTMLInputElement).value);
                  }}
                ></IonInput>
                <IonIcon icon={pencil} slot="end"></IonIcon>
              </IonItem>
              <IonItem onClick={() => clicked("Change Password")}>
                <IonLabel position="stacked" color="primary">
                  Password
                </IonLabel>
                <IonInput
                  value={password}
                  onIonChange={(e) => {
                    setpassword((e.target as HTMLInputElement).value);
                  }}
                ></IonInput>
                <IonIcon icon={pencil} slot="end"></IonIcon>
              </IonItem>
              <IonItem onClick={() => clicked("update email")}>
                <IonLabel position="stacked" color="primary">
                  Email
                </IonLabel>
                <IonInput
                  value={email}
                  onIonChange={(e) => {
                    setEmail((e.target as HTMLInputElement).value);
                  }}
                ></IonInput>
                <IonIcon icon={pencil} slot="end"></IonIcon>
              </IonItem>
              <IonItem>
                <IonButton
                  type="submit"
                  onClick={() => {
                    console.log("Profile updated");
                  }}
                  size="small"
                  className="ion-text-center"
                >
                  Update
                </IonButton>
              </IonItem>

              <IonItem
                onClick={() => {
                  setUserData(false, "", "", "", "", "");
                  // setHelpDetails({}, "", false);
                  window.location.href = "/LocalLogin";
                  // history.push("/LocalLogin");
                }}
              >
                Logout
              </IonItem>
            </IonCardContent>
          </IonList>
        </form>
      </IonCard>

      {/* <IonAlert
        isOpen={userName}
        header="Change Username"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: () => {
              console.log("cancel");
            },
          },
        ]}
        inputs={[
          {
            type: "text",
            name: "username",
            value: name,
            placeholder: "username",
          },
        ]}
        onDidDismiss={() => {
          setuserName(false);
        }}
      /> */}
    </IonContent>
  );
};

export default UserProfile;
