/**
 * Author: Chandana
 * Component: Camera Screen
 * Screen: Medical
 * Description: This screen appears to take a picture of the accident/ emergency scene when the user presses the Get Help button
 *              on the home screen of the app. Uses Camera plugin and makes the picture mandatory to move to confirmation screen.
 */
import {
  IonContent,
  IonIcon,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCard,
  IonText,
} from "@ionic/react";
import React, { Component } from "react";
import { Plugins, CameraResultType } from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { send, camera } from "ionicons/icons";

import { setHelpDetails } from "../mockapi/setHelpDetails";

const { Camera } = Plugins;

const INITIAL_STATE = {
  photo: "",
};
export class CameraScreen extends Component {
  state: any = {};

  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
    defineCustomElements(window);
    setTimeout(() => {
      this.takePicture();
    }, 100);
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });
      var imageUrl = image.webPath;
      this.setState({
        photo: imageUrl,
      });
      setHelpDetails({}, this.state.photo, true);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { photo } = this.state;

    return (
      <>
        {console.log("Render Camera")}
        <IonContent className="ion-padding">
          <IonButtons slot="start">
            <IonBackButton text="Back" icon="back" />
          </IonButtons>
          {photo ? (
            <>
              <div
                style={{
                  border: "1px solid black",
                  height: "75%",
                  backgroundSize: "cover",
                  backgroundImage: "url(" + photo + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50% center",
                }}
              ></div>
              <IonButton
                expand="block"
                onClick={() => {}}
                href="/page/Confirmation"
              >
                <IonIcon slot="start" icon={send} />
                Share Location
              </IonButton>
            </>
          ) : (
            <IonCard>
              <IonButton
                expand="block"
                onClick={() => {
                  this.takePicture();
                }}
              >
                <IonIcon slot="start" icon={camera} />
                Take Picture
              </IonButton>
              <IonText color="danger">*Picture is mandatory</IonText>
            </IonCard>
          )}
        </IonContent>
      </>
    );
  }
}
export default CameraScreen;
