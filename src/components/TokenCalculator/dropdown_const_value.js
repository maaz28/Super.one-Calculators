export const price_sales = [
  {
    value: 3,
    label: '3 - SuperOne - low case'
  },
  {
    value: 3.5,
    label: '3.5 -   King - gaming'
  },
  {
    value: 4,
    label: '4 -  SuperOne - base case (deafult)'
  },
  {
    value: 4.5,
    label: '4.5 - Spotify - music'
  },
  {
    value: 5,
    label: '5 - Zynga - gaming'
  },
  {
    value: 5.2,
    label: '5.2 - Activision Blizzard - gaming'
  },
  {
    value: 5.5,
    label: '5.5 - Electronic Arts - gaming'
  },
  {
    value: 5.5,
    label: '5.5 - Google - ads'
  },
  {
    value: 7.5,
    label: '7.5 - Netflix - streaming'
  },
  {
    value: 7.5,
    label: '7.5 - Tinder - dating'
  },
  {
    value: 8.5,
    label: '8.5 - Facebook - social media'
  },
  {
    value: 8.9,
    label: "8.9 - William Hill casino and betting"
  },
  {
    value: 10,
    label: '10 - LeoVegas casino and betting'
  },
  {
    value: 10,
    label: '10 - SuperOne - high case'
  },
  {
    value: 18,
    label: '18 - SnapChat - social media'
  },
  {
    value: 19,
    label: '19 - Pinterest - social media'
  },
  {
    value: 20,
    label: '20 - Very high'
  },
  {
    value: 30,
    label: '30 - Dangerously high'
  }
];

export const annual_arpu = [
  {
    value: 6,
    label: '$6 Candy Crush - gaming'
  },
  {
    value: 8,
    label: '$8 SnapChat - ads'
  },
  {
    value: 10,
    label: '$10 Zynga - gaming'
  },
  {
    value: 10,
    label: '$10 SuperOne - ads only'
  },
  {
    value: 10,
    label: '$10 SuperOne - services only'
  },
  {
    value: 12,
    label: '$12 Facebook Asia - ads'
  },
  {
    value: 16,
    label: '$16 Tinder - premium'
  },
  {
    value: 28,
    label: '$28 Facebook globally - ads'
  },
  {
    value: 30,
    label: '$30 SuperOne - gaming only'
  },
  {
    value: 42,
    label: '$42 Facebook - Europe - ads'
  },
  {
    value: 50,
    label: "$50 SuperOne - ads, gaming, services"
  },
  {
    value: 64,
    label: '$64 Spotify - premium'
  },
  {
    value: 131,
    label: '$131 Netflix - premium'
  },
  {
    value: 133,
    label: '$133 Facebook US/Canada - ads'
  },
  {
    value: 137,
    label: '$137 Google globally - ads'
  },
  {
    value: 256,
    label: '$256 Google US - ads'
  },
  {
    value: 650,
    label: ' $650 William Hill casino and betting'
  },
  {
    value: 1000,
    label: '$1000 LeoVegas casino and betting'
  }
];

export const price_values = () => {
  return price_sales;
}

export const annualARPU_values = () => {
  return annual_arpu;
}

export const user_values = () => {
  let users = [
    {
      value: 100000,
      label: '100,000'
    }
  ];
  for (let i = 1; i <= 9; i++) {
    users.push({ value: Number(i + "000000"), label: i + " million" });
  }
  for (let i = 10; i <= 100; i = i + 10) {
    users.push({ value: Number(i + "000000"), label: i + " million" });
  }
  users.push({
    value: 200000000,
    label: '200 million'
  })
  users.push({
    value: 300000000,
    label: '300 million'
  })
  return users;
}

export const token_values = () => {
  let tokens = [];
  for (let i = 1; i <= 9; i++) {
    tokens.push({ value: Number(i + "000"), label: i + " ,000" });
  }
  for (let i = 10; i <= 90; i = i + 10) {
    tokens.push({ value: Number(i + "000"), label: i + ",000" });
  }
  for (let i = 100; i <= 900; i = i + 100) {
    tokens.push({ value: Number(i + "000"), label: i + ",000" });
  }
  for (let i = 1; i <= 10; i++) {
    tokens.push({ value: Number(i + "000000"), label: i + " ,000,000" });
  }
  tokens.push({
    value: 100000000,
    label: '100 ,000,000'
  })
  return tokens;
}