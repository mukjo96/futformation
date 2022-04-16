type TeamListTypes = {
  label: string;
  leagueId: number;
  children: Array<any>;
}[];

export const teamList: TeamListTypes = [
  {
    label: 'PL',
    leagueId: 47,
    children: [
      {
        teamId: 8456,
        teamNameLong: 'Manchester City',
        teamName: 'MNC',
        teamColor: '#6CABDD',
        teamSubColor: '#1C2C5B',
      },
      {
        teamId: 8586,
        teamNameLong: 'Tottenham',
        teamName: 'TOT',
        teamColor: '#132257',
        teamSubColor: '#f7f7f7',
      },
      {
        teamId: 8455,
        teamNameLong: 'Chelsea',
        teamName: 'CHE',
        teamColor: '#034694',
        teamSubColor: '#6A7AB5',
      },
      {
        teamId: 8650,
        teamNameLong: 'Liverpool',
        teamName: 'LIV',
        teamColor: '#C8102E',
        teamSubColor: '#00B2A9',
      },
      {
        teamId: 10260,
        teamNameLong: 'Manchster United',
        teamName: 'MAN',
        teamColor: '#DA291C',
        teamSubColor: '#FBE122',
      },

      {
        teamId: 8197,
        teamNameLong: 'Leicester City',
        teamName: 'LEI',
        teamColor: '#003090',
        teamSubColor: '#FDBE11',
      },

      {
        teamId: 9825,
        teamNameLong: 'Arsenal',
        teamName: 'ARS',
        teamColor: '#EF0107',
        teamSubColor: '#9C824A',
      },
      {
        teamId: 8654,
        teamNameLong: 'West Ham',
        teamName: 'WHU',
        teamColor: '#7A263A',
        teamSubColor: '#F3D459',
      },
      {
        teamId: 8668,
        teamNameLong: 'Brentford',
        teamName: 'BRN',
        teamColor: '#e30613',
        teamSubColor: '#f7f7f7',
      },
      {
        teamId: 9817,
        teamNameLong: 'Watford',
        teamName: 'WAT',
        teamColor: '#11210C',
        teamSubColor: '#FBEE23',
      },
      {
        teamId: 10204,
        teamNameLong: 'Brighton',
        teamName: 'BHA',
        teamColor: '#0057B8',
        teamSubColor: '#FFCD00',
      },

      {
        teamId: 10252,
        teamNameLong: 'Aston Villa',
        teamName: 'AVL',
        teamColor: '#670E36',
        teamSubColor: '#95BFE5',
      },
      {
        teamId: 8191,
        teamNameLong: 'Burnley',
        teamName: 'BUR',
        teamColor: '#6C1D45',
        teamSubColor: '#99D6EA',
      },

      {
        teamId: 8602,
        teamNameLong: 'Wolverhamton',
        teamName: 'WOL',
        teamColor: '#231F20',
        teamSubColor: '#FDB913',
      },
      {
        teamId: 10261,
        teamNameLong: 'Newcastle United',
        teamName: 'NEW',
        teamColor: '#241F20',
        teamSubColor: '#FFFFFF',
      },
      {
        teamId: 8466,
        teamNameLong: 'Southamton',
        teamName: 'SOU',
        teamColor: '#D71920',
        teamSubColor: '#130C0E',
      },

      {
        teamId: 9826,
        teamNameLong: 'Crystal Palace',
        teamName: 'CRY',
        teamColor: '#1B458F',
        teamSubColor: '#A7A5A6',
      },
      {
        teamId: 9850,
        teamNameLong: 'Norwich City',
        teamName: 'NOR',
        teamColor: '#00A650',
        teamSubColor: '#FFF200',
      },
      {
        teamId: 8463,
        teamNameLong: 'Leeds United',
        teamName: 'LEE',
        teamColor: '#1D428A',
        teamSubColor: '#AC944D',
      },
    ],
  },
  {
    label: 'La Liga',
    leagueId: 87,
    children: [
      {
        teamId: 8633,
        teamNameLong: 'Real Madrid',
        teamName: 'MAD',
        teamColor: '#FEBE10',
        teamSubColor: '#00529F',
      },
      {
        teamId: 9906,
        teamNameLong: 'Ateltico Madrid',
        teamName: 'ATL',
        teamColor: '#272E61',
        teamSubColor: '#CB3524',
      },
      {
        teamId: 8634,
        teamNameLong: 'Barcelona',
        teamName: 'BAR',
        teamColor: '#A50044',
        teamSubColor: '#004D98',
      },
      {
        teamId: 10267,
        teamNameLong: 'Valencia',
        teamName: 'VAL',
        teamColor: '#AA2D2A',
        teamSubColor: '#FFDF1C',
      },
      {
        teamId: 8661,
        teamNameLong: 'Mallorca',
        teamName: 'MAL',
        teamColor: '#E20613',
        teamSubColor: '#FFE200',
      },
    ],
  },

  {
    label: 'Etc',
    leagueId: 0,
    children: [
      {
        teamId: 9847,
        teamNameLong: 'Paris Saint Germain',
        teamName: 'PSG',
        teamColor: '#004170',
        teamSubColor: '#DA291C',
      },
      {
        teamId: 9823,
        teamNameLong: 'Bayern München',
        teamName: 'FCB',
        teamColor: '#DC052D',
        teamSubColor: '#0066B2',
      },
      {
        teamId: 9789,
        teamNameLong: 'Borussia Dortmund',
        teamName: 'BVB',
        teamColor: '#FDE100',
        teamSubColor: '#000000',
      },
      {
        teamId: 9885,
        teamNameLong: 'Juventus',
        teamName: 'JUV',
        teamColor: '#000000',
        teamSubColor: '#FFFFFF',
      },
      {
        teamId: 8636,
        teamNameLong: 'Internazionale Milano',
        teamName: 'INT',
        teamColor: '#A29161',
        teamSubColor: '#221F20',
      },
      {
        teamId: 9773,
        teamNameLong: 'Porto',
        teamName: 'POR',
        teamColor: '#00428C',
        teamSubColor: '#FFFFFF',
      },
    ],
  },
  {
    label: 'EURO',
    leagueId: 50,
    children: [
      {
        label: 'Group A',
        children: [
          {
            teamId: 8204,
            teamNameLong: 'Italy',
            teamName: 'ITA',
            teamColor: '#008c45',
            teamSubColor: '#f4f5f0',
          },
          {
            teamId: 6717,
            teamNameLong: 'Switzerland',
            teamName: 'SWI',
            teamColor: '#ff0000',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 6595,
            teamNameLong: 'Turkey',
            teamName: 'TUR',
            teamColor: '#e30a17',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 5790,
            teamNameLong: 'Wales',
            teamName: 'WAL',
            teamColor: '#00ad36',
            teamSubColor: '#ffffff',
          },
        ],
      },
      {
        label: 'Group B',
        children: [
          {
            teamId: 8263,
            teamNameLong: 'Belgium',
            teamName: 'BEL',
            teamColor: '#000000',
            teamSubColor: '#FDDA24',
          },
          {
            teamId: 8238,
            teamNameLong: 'Denmark',
            teamName: 'DEN',
            teamColor: '#C60C30',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 7871,
            teamNameLong: 'Finland',
            teamName: 'FIN',
            teamColor: '#003580',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 8713,
            teamNameLong: 'Russia',
            teamName: 'RUS',
            teamColor: '#0033A0',
            teamSubColor: '#DA291C',
          },
        ],
      },
      {
        label: 'Group C',
        children: [
          {
            teamId: 8255,
            teamNameLong: 'Austria',
            teamName: 'AUS',
            teamColor: '#ed2939',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 6708,
            teamNameLong: 'Netherlands',
            teamName: 'NET',
            teamColor: '#AE1C28',
            teamSubColor: '#21468B',
          },
          {
            teamId: 8260,
            teamNameLong: 'North Macedonia',
            teamName: 'NMA',
            teamColor: '#d20000',
            teamSubColor: '#ffe600',
          },
          {
            teamId: 6718,
            teamNameLong: 'Ukraine',
            teamName: 'UKR',
            teamColor: '#005bbb',
            teamSubColor: '#ffd500',
          },
        ],
      },
      {
        label: 'Group D',
        children: [
          {
            teamId: 10155,
            teamNameLong: 'Croatia',
            teamName: 'CRO',
            teamColor: '#ff0000',
            teamSubColor: '#0093dd',
          },
          {
            teamId: 8496,
            teamNameLong: 'Czech Republic',
            teamName: 'CZE',
            teamColor: '#d7141a',
            teamSubColor: '#11457e',
          },
          {
            teamId: 8491,
            teamNameLong: 'England',
            teamName: 'ENG',
            teamColor: '#CF081F',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 8498,
            teamNameLong: 'Scotland',
            teamName: 'SCO',
            teamColor: '#0065BF',
            teamSubColor: '#ffffff',
          },
        ],
      },
      {
        label: 'Group E',
        children: [
          {
            teamId: 8568,
            teamNameLong: 'Poland',
            teamName: 'POL',
            teamColor: '#dc143c',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 8497,
            teamNameLong: 'Slovakia',
            teamName: 'SLO',
            teamColor: '#034DA3',
            teamSubColor: '#ffffff',
          },

          {
            teamId: 6720,
            teamNameLong: 'Spain',
            teamName: 'ESP',
            teamColor: '#bb0215',
            teamSubColor: '#ffbb00',
          },
          {
            teamId: 8498,
            teamNameLong: 'Sweden',
            teamName: 'SWE',
            teamColor: '#004B87',
            teamSubColor: '#FFCD00',
          },
        ],
      },
      {
        label: 'Group F',
        children: [
          {
            teamId: 6723,
            teamNameLong: 'France',
            teamName: 'FRA',
            teamColor: '#001489',
            teamSubColor: '#EF3340',
          },
          {
            teamId: 8570,
            teamNameLong: 'Germany',
            teamName: 'GER',
            teamColor: '#000000',
            teamSubColor: '#dd0000',
          },

          {
            teamId: 8565,
            teamNameLong: 'Hungary',
            teamName: 'HUN',
            teamColor: '#cd2a3e',
            teamSubColor: '#436f4d',
          },
          {
            teamId: 8361,
            teamNameLong: 'Portugal',
            teamName: 'POR',
            teamColor: '#006600',
            teamSubColor: '#FF0000',
          },
        ],
      },
    ],
  },
  {
    label: 'COPA AMERICA',
    leagueId: 44,
    children: [
      {
        label: 'ZONA SUR',
        children: [
          {
            teamId: 6706,
            teamNameLong: 'Argentina',
            teamName: 'ARG',
            teamColor: '#74ACDF',
            teamSubColor: '#F6B40E',
          },
          {
            teamId: 5797,
            teamNameLong: 'Bolivia',
            teamName: 'BOL',
            teamColor: '#DA291C',
            teamSubColor: '#007A33',
          },
          {
            teamId: 9762,
            teamNameLong: 'Chile',
            teamName: 'CHI',
            teamColor: '#D52B1E',
            teamSubColor: '#0039A6',
          },
          {
            teamId: 6724,
            teamNameLong: 'Paraguay',
            teamName: 'PAR',
            teamColor: '#d52b1e',
            teamSubColor: '#0038a8',
          },
          {
            teamId: 5796,
            teamNameLong: 'Uruguay',
            teamName: 'URU',
            teamColor: '#fcd116',
            teamSubColor: '#0038a8',
          },
        ],
      },
      {
        label: 'ZONA NORTE',
        children: [
          {
            teamId: 8256,
            teamNameLong: 'Brazil',
            teamName: 'BRA',
            teamColor: '#009c3b',
            teamSubColor: '#ffdf00',
          },
          {
            teamId: 8258,
            teamNameLong: 'Colombia',
            teamName: 'COL',
            teamColor: '#FFCD00',
            teamSubColor: '#003087',
          },
          {
            teamId: 6707,
            teamNameLong: 'Ecuador',
            teamName: 'ECU',
            teamColor: '#FFDD00',
            teamSubColor: '#034EA2',
          },
          {
            teamId: 5798,
            teamNameLong: 'Peru',
            teamName: 'PER',
            teamColor: '#D91023',
            teamSubColor: '#ffffff',
          },
          {
            teamId: 5800,
            teamNameLong: 'Venezuela',
            teamName: 'VEN',
            teamColor: '#ffcc00',
            teamSubColor: '#00247D',
          },
        ],
      },
    ],
  },
];
