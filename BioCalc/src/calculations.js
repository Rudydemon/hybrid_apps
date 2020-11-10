import dayjs from 'dayjs';

export function calcBioRy(birthDate, targetDate, cycle){
  const birthDay = dayjs(birthDate).startOf('day');
  const targetDay = dayjs(targetDate).startOf('day');
  const diff = targetDay.diff(birthDay, 'days');
  return Math.sin(2 * Math.PI * diff / cycle);
}

export function calcBioRys(birthDate, targetDate){
  return {
    physical: calcBioRy(birthDate, targetDate, 23),
    emotional: calcBioRy(birthDate, targetDate, 28),
    intellectual: calcBioRy(birthDate, targetDate, 33),
  };
}
