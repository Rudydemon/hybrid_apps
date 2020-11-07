import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  IonCardHeader
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [bDay, setBDay] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bio - Rhythems</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked"> Date of Birth: </IonLabel>
          <IonDatetime
            value={bDay}
            onIonChange={(event) => setBDay(event.detail.value)}
          />
        </IonItem>
        <IonCard>
          <IonCardHeader>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
