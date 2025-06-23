export interface Incident {
  id: string;
  title: string;
  date: string;
  location: {
    state: string;
    lga?: string;
    town?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  perpetrator: string;
  victims: {
    killed: number;
    injured: number;
    kidnapped?: number;
  };
  description: string;
  type: string[];
  sources: {
    name: string;
    url: string;
  }[];
  relatedIncidents?: string[];
}

const mockIncidents: Incident[] = [
  {
    id: "incident-001",
    title: "Boko Haram Attack on Baga",
    date: "2015-01-03",
    location: {
      state: "Borno",
      town: "Baga",
      coordinates: {
        lat: 13.1135,
        lng: 13.6981,
      },
    },
    perpetrator: "Boko Haram",
    victims: {
      killed: 2000,
      injured: 350,
      kidnapped: 0,
    },
    description:
      "Boko Haram militants carried out a series of massacres in Baga, Borno State. The attack began on January 3 when Boko Haram overran a military base used by a multinational force. After taking control of the base, Boko Haram fighters stormed Baga and surrounding settlements, killing civilians, burning homes and businesses, and displacing thousands of people.",
    type: ["Armed Attack", "Massacre"],
    sources: [
      {
        name: "BBC News",
        url: "https://www.bbc.com/news/world-africa-30987043",
      },
      {
        name: "Amnesty International",
        url: "https://www.amnesty.org/en/latest/news/2015/01/nigeria-boko-haram-deadliest-massacre/",
      },
    ],
  },
  {
    id: "incident-002",
    title: "Chibok Schoolgirls Kidnapping",
    date: "2014-04-14",
    location: {
      state: "Borno",
      town: "Chibok",
      coordinates: {
        lat: 10.8681,
        lng: 12.8481,
      },
    },
    perpetrator: "Boko Haram",
    victims: {
      killed: 0,
      injured: 0,
      kidnapped: 276,
    },
    description:
      "Boko Haram terrorists abducted 276 female students from the Government Girls Secondary School in Chibok, Borno State. The incident occurred during the night when armed militants entered the school, pretending to be guards. They subsequently loaded the girls into trucks and fled to the Sambisa Forest. Some of the girls managed to escape by jumping from the vehicles, while others were later released following negotiations or rescued by security forces.",
    type: ["Kidnapping"],
    sources: [
      {
        name: "The Guardian",
        url: "https://www.theguardian.com/world/2014/apr/15/nigeria-girls-kidnapped-boko-haram-chibok",
      },
      {
        name: "CNN",
        url: "https://www.cnn.com/2018/04/13/africa/chibok-girls-four-years-on-intl/index.html",
      },
    ],
  },
  {
    id: "incident-003",
    title: "Abuja UN Headquarters Bombing",
    date: "2011-08-26",
    location: {
      state: "Federal Capital Territory",
      town: "Abuja",
      coordinates: {
        lat: 9.0765,
        lng: 7.3986,
      },
    },
    perpetrator: "Boko Haram",
    victims: {
      killed: 21,
      injured: 60,
    },
    description:
      "A suicide bomber drove a car loaded with explosives into the United Nations headquarters in Abuja. The car rammed through two security gates and detonated in the reception area of the building. The blast caused significant destruction to the lower floors of the building. Boko Haram claimed responsibility for the attack, marking one of their first major attacks on an international target.",
    type: ["Bombing", "Suicide Attack"],
    sources: [
      {
        name: "Reuters",
        url: "https://www.reuters.com/article/us-nigeria-bombing-idUSTRE77P10520110826",
      },
      {
        name: "Al Jazeera",
        url: "https://www.aljazeera.com/news/2011/8/26/deadly-blast-hits-un-building-in-nigerian-capital",
      },
    ],
  },
  {
    id: "incident-004",
    title: "Zabarmari Massacre",
    date: "2020-11-28",
    location: {
      state: "Borno",
      town: "Zabarmari",
      coordinates: {
        lat: 11.7899,
        lng: 13.1365,
      },
    },
    perpetrator: "Boko Haram/ISWAP",
    victims: {
      killed: 76,
      injured: 0,
      kidnapped: 0,
    },
    description:
      "Armed men on motorcycles attacked farmers who were harvesting rice fields in Zabarmari, a rural community in Borno State. The assailants tied up the farmers and slit their throats. The United Nations initially reported that 110 people were killed, but the Nigerian government later confirmed 76 deaths. The attack was believed to be in retaliation for the farmers' cooperation with security forces against the terrorists.",
    type: ["Armed Attack", "Massacre"],
    sources: [
      {
        name: "CNN",
        url: "https://www.cnn.com/2020/11/29/africa/nigeria-attack-borno-intl/index.html",
      },
      {
        name: "BBC News",
        url: "https://www.bbc.com/news/world-africa-55099016",
      },
    ],
    relatedIncidents: ["incident-001"],
  },
  {
    id: "incident-005",
    title: "Kuje Prison Attack",
    date: "2022-07-05",
    location: {
      state: "Federal Capital Territory",
      town: "Kuje",
      coordinates: {
        lat: 8.8791,
        lng: 7.2365,
      },
    },
    perpetrator: "ISWAP",
    victims: {
      killed: 1,
      injured: 16,
      kidnapped: 0,
    },
    description:
      "Heavily armed terrorists attacked the Kuje Medium Security Custodial Centre in Abuja using explosives and sophisticated weapons. The attack resulted in the escape of over 800 inmates, including high-profile Boko Haram commanders. The Islamic State West Africa Province (ISWAP) claimed responsibility for the attack, which highlighted significant security vulnerabilities in Nigeria's prison system.",
    type: ["Armed Attack", "Prison Break"],
    sources: [
      {
        name: "Premium Times",
        url: "https://www.premiumtimesng.com/news/headlines/541207-kuje-prison-attack-879-inmates-escaped-443-recaptured-still-at-large-minister.html",
      },
      {
        name: "Al Jazeera",
        url: "https://www.aljazeera.com/news/2022/7/6/gunmen-free-hundreds-of-prisoners-in-nigeria-jail-attack",
      },
    ],
  },
  {
    id: "incident-006",
    title: "St. Francis Catholic Church Attack",
    date: "2022-06-05",
    location: {
      state: "Ondo",
      town: "Owo",
      coordinates: {
        lat: 7.1905,
        lng: 5.5869,
      },
    },
    perpetrator: "Unknown (Suspected ISWAP)",
    victims: {
      killed: 40,
      injured: 87,
      kidnapped: 0,
    },
    description:
      "Gunmen attacked St. Francis Catholic Church in Owo, Ondo State during Sunday Mass. The attackers detonated explosives within the church and opened fire on worshippers as they attempted to flee. The federal government later attributed the attack to the Islamic State West Africa Province (ISWAP), although some security experts questioned this attribution due to the attack's location being far from ISWAP's usual area of operations.",
    type: ["Armed Attack", "Religious Target", "Mass Shooting"],
    sources: [
      {
        name: "The Guardian Nigeria",
        url: "https://guardian.ng/news/how-terrorists-killed-40-in-ondo-church-attack/",
      },
      {
        name: "CNN",
        url: "https://www.cnn.com/2022/06/05/africa/nigeria-church-attack-intl/index.html",
      },
    ],
  },
];

export default mockIncidents;
