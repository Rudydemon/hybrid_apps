import dayjs from 'dayjs';
import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
}from '@ionic/react';
import {calcBioRys} from '../calculations';
import BioChart from './BioChart';
import './BioCard.css';

function formatDate(isoString){
  return dayjs(isoString).format('D MMM YYYY');
}

function BioCard({birthDate, targetDate}) {
  const {physical, emotional, intellectual} = calcBioRys(birthDate, targetDate);
  return(
    <IonCard className="bio-card ion-text-center">
      <IonCardHeader>
        <IonCardTitle> {formatDate(targetDate)} </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        < BioChart birthDate={birthDate} targetDate={targetDate}/>
        <p className='physical'> Physical: {physical.toFixed(4)}</p>
        <p className='emotional'> Emotional: {emotional.toFixed(4)}</p>
        <p className='intellectual'> Intellectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  )
}

export default BioCard;
