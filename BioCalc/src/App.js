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
  const [bDay, setBDay] = useState(''); //birthday
  const [tDay, setTDay] = useState(''); //target date
  // const targetDate = new Date().toISOString(); original target date for "todays date"
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
        <IonItem>
            <IonLabel position="stacked"> Target Date : </IonLabel>
            <IonDatetime
              value={tDay}
              onIonChange={(event) => setTDay(event.detail.value)}
          />
        </IonItem>
        {bDay && //Show card only when bday is chosen
          <BioCard birthDate={bDay} targetDate={tDay}/>
        }
      </IonContent>
    </IonApp>
  );
}

export default App;
