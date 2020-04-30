/**
 * Author: Chandana
 * Component: User profile
 * Screen: UserProfile
 * Description: This screen helps the user to edit their details and update the details.
 * Also, the user can logout of the app using Logout option in the screen.
 */

import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonItem,
  IonList,
  IonInput,
  IonAlert,
  IonCardContent,
  IonCard,
  IonCardSubtitle,
  IonHeader,
  IonButton,
  IonIcon,
} from "@ionic/react";

import { getUserData } from "../mockapi/getUserData";
import { setUserData } from "../mockapi/setUserData";
import { personCircle, lockOpen, mail } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import { setHelpDetails } from "../mockapi/setHelpDetails";

interface OwnProps extends RouteComponentProps {}
interface UserProfileProps extends OwnProps {}

const UserProfile: React.FC<UserProfileProps> = ({ history }) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setpassword] = useState<string>();
  const [updateProfile, setupdateProfile] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  };

  const setValue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && password && email) {
      setUserData(true, name, password, "", email, "");
    }
  };
  useEffect(() => {
    const userdata = getUserData();
    userdata.username ? setName(userdata.username) : setName(" ");
    userdata.password ? setpassword(userdata.password) : setpassword(" ");
    userdata.email ? setEmail(userdata.email) : setEmail(" ");
  }, []);
  console.log("User Profile");
  return (
    <IonContent>
      <IonCard style={{ backgroundColor: "transparent" }}>
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
        </IonHeader>
        <form noValidate onSubmit={setValue}>
          <IonList>
            <IonCardContent>
              <IonItem>
                {/* <IonLabel position="stacked" color="primary">
                      Username
                    </IonLabel> */}

                <IonIcon icon={personCircle} slot="start"></IonIcon>
                <IonInput
                  value={name}
                  onIonChange={(e) => {
                    setName((e.target as HTMLInputElement).value);
                  }}
                ></IonInput>
              </IonItem>
              <IonItem onClick={() => clicked("Change Password")}>
                {/* <IonLabel position="stacked" color="primary">
                      Password
                    </IonLabel> */}

                <IonIcon icon={lockOpen} slot="start"></IonIcon>
                <IonInput
                  value={password}
                  onIonChange={(e) => {
                    setpassword((e.target as HTMLInputElement).value);
                  }}
                ></IonInput>
              </IonItem>
              <IonItem onClick={() => clicked("update email")}>
                {/* <IonLabel position="stacked" color="primary">
                      Email
                    </IonLabel> */}
                <IonIcon icon={mail} slot="start"></IonIcon>
                <IonInput
                  value={email}
                  placeholder="abc@gmail.com"
                  onIonChange={(e) => {
                    setEmail((e.target as HTMLInputElement).value);
                  }}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonButton
                  type="submit"
                  onClick={() => {
                    setupdateProfile(true);
                  }}
                >
                  Update
                </IonButton>
                <IonAlert
                  isOpen={updateProfile}
                  onDidDismiss={() => setupdateProfile(false)}
                  header={"Success"}
                  message={"Your changes are updated"}
                  buttons={["OK"]}
                />
              </IonItem>

              <IonItem
                onClick={() => {
                  setUserData(false, "", "", "", "", "");
                  setHelpDetails({}, "", false);
                  window.location.href = "/LocalLogin";
                }}
              >
                Logout
              </IonItem>
            </IonCardContent>
          </IonList>
        </form>
      </IonCard>
    </IonContent>
  );
};

export default UserProfile;
