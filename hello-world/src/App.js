import React, {useState} from 'react';
import { play as playIcon } from 'ionicons/icons';
import {
  IonButton,
  IonToast,
  IonIcon,
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle
} from '@ionic/react';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Peri's First Hybrid App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent clasName="ion-padding">
        <p>Here is a Button</p>
        <IonButton color="primary" onClick={handleClick}>
        <IonIcon icon={playIcon} slot="start" />
        CLICK
        </IonButton>
        <IonToast isOpen={showToast} message="Hello World" />
      </IonContent>
    </IonApp>
  );
}

export default App;
