import { calcBioRys } from './calculations';

it('calculates bio rythem', () => {
  const {physical} = calcBioRys('1995-01-01', '2020-02-18');
  expect(physical).toBeCloseTo(0.5195);
});

it('calculates bio rythem', () => {
  const {emotional} = calcBioRys('1995-01-01', '2020-02-18');
  expect(emotional).toBeCloseTo(-0.9010);
});

it('calculates bio rythem', () => {
  const {intellectual} = calcBioRys('1995-01-01', '2020-02-18');
  expect(intellectual).toBeCloseTo(0.8146);
});
