export const package_values = [
  {
    value: 0.50,
    label: '$25'
  },
  {
    value: 0.83,
    label: '$100'
  },
  {
    value: 1.40,
    label: '$250'
  },
  {
    value: 1.75,
    label: '$500'
  },
  {
    value: 2.09,
    label: '$1,000'
  },
  {
    value: 2.44,
    label: '$2,500'
  },
  {
    value: 2.67,
    label: '$5,000'
  }
];

export const average_purchases_values = [
  {
    value: 1,
    label: '$25'
  },
  {
    value: 4,
    label: '$100'
  },
  {
    value: 10,
    label: '$250'
  },
  {
    value: 20,
    label: '$500'
  },
  {
    value: 40,
    label: '$1,000'
  },
  {
    value: 100,
    label: '$2,500'
  },
  {
    value: 200,
    label: '$5,000'
  }
];

export const referral_values = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: '4'
  },
  {
    value: 5,
    label: '5'
  },
  {
    value: 6,
    label: '6'
  },
  {
    value: 7,
    label: '7'
  },
  {
    value: 8,
    label: '8'
  },
  {
    value: 9,
    label: '9'
  },
  {
    value: 10,
    label: '10'
  },
  {
    value: 20,
    label: '20'
  },
  {
    value: 30,
    label: '30'
  },
  {
    value: 40,
    label: '40'
  },
  {
    value: 50,
    label: '50'
  },
  {
    value: 60,
    label: '60'
  },
  {
    value: 70,
    label: '70'
  },
  {
    value: 80,
    label: '80'
  },
  {
    value: 90,
    label: '90'
  },
  {
    value: 100,
    label: '100'
  },
];

export const virality_values = () => {
  let virality = [];
  for (let i = 1.5; i <= 5; i = i + 0.5) {
    virality.push({ value: i, label: String(i) });
  }
  return virality;
}

export const levels_values = () => {
  let levels = [];
  for (let i = 2; i <= 10; i++) {
    levels.push({ value: i, label: String(i) });
  }
  return levels;
}