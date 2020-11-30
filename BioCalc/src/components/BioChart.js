import React from 'react';
import dayjs from 'dayjs';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from 'recharts';
import {calcBioRySeries} from '../calculations';
import './BioChart.css';

/* const data = [
  {date: '2020-02-01', physical: 0.99, emotional: 0.50, intellectual: -0.25},
  {date: '2020-02-02', physical: 0.90, emotional: -0.50, intellectual: -0.44},
  {date: '2020-02-03', physical: -0.88, emotional: 0.50, intellectual: 0.99},
]; test data */

function formatDate(isoString){
  return dayjs(isoString).format('D MMM');
}

function BioChart({birthDate, targetDate}) {
  const startDate = dayjs(targetDate).subtract(15,'days').toISOString();
  const data = calcBioRySeries(birthDate, startDate, 31)
  .map((item) =>({...item, date: formatDate(item.date)}));
  return (
    <ResponsiveContainer className="bio-chart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey='date'
          ticks={[data[2].date, data[15].date, data[28].date]}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line type="natural" dot={false} dataKey="physical" className="physical"/>
        <Line type="natural" dot={false} dataKey="emotional" className="emotional" />
        <Line type="natural" dot={false} dataKey="intellectual" className="intellectual" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BioChart;
