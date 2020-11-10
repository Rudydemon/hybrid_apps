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
} from '@ionic/react';

import React, { useState } from 'react';
import BioCard from './components/BioCard';

function App() {
  const [bDay, setBDay] = useState('');
  const targetDate = new Date().toISOString();
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
        {bDay && //Show card only when bday is chosen
          <BioCard birthDate={bDay} targetDate={targetDate}/>
        }
      </IonContent>
    </IonApp>
  );
}

export default App;
