import {
  IonContent,
  IonIcon,
  IonButton,
  IonLabel,
  IonButtons,
  IonBackButton,
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
    } finally {
      console.log("Finally");
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
            <>
              <IonLabel>Picture is mandatory</IonLabel>
              <IonButton
                expand="block"
                onClick={() => {
                  this.takePicture();
                }}
              >
                <IonIcon slot="start" icon={camera} />
                Take Picture
              </IonButton>
            </>
          )}
        </IonContent>
      </>
    );
  }
}
export default CameraScreen;
