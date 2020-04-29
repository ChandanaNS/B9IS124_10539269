import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  home,
  homeSharp,
  medical,
  cash,
  cashSharp,
  medicalSharp,
  create,
  createSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "RescueMed",
    url: "/page/RescueMed",
    iosIcon: home,
    mdIcon: homeSharp,
  },
  // {
  //   title: "Medical",
  //   url: "/page/Medical",
  //   iosIcon: medical,
  //   mdIcon: medalSharp,
  // },
  // {
  //   title: "Call",
  //   url: "/page/Call",
  //   iosIcon: call,
  //   mdIcon: callSharp,
  // },

  {
    title: "Medical Help",
    url: "/page/MedicalHelp",
    iosIcon: medical,
    mdIcon: medicalSharp,
  },
  {
    title: "Donate",
    url: "/page/Donate",
    iosIcon: cash,
    mdIcon: cashSharp,
  },
  {
    title: "User Details",
    url: "/page/UserProfile",
    iosIcon: create,
    mdIcon: createSharp,
  },
  // {
  //   title: "Logout",
  //   url: "/page/Logout",
  //   iosIcon: logOut,
  //   mdIcon: logInSharp,
  // },
];

const labels = ["User Details"];

const Menu: React.FC = () => {
  const location = useLocation();
  // alert(location.pathname);
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="home-list">
          <IonListHeader>Rescue Med</IonListHeader>
          <IonNote>user@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Account</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={create} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
