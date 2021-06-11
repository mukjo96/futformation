import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";

type teamListTypes = {
    label: string;
    children: any;
}[];

export const teamList: teamListTypes = [
    {
        label: "EURO",
        children: [
            {
                label: "Group A",
                children: [
                    {
                        teamId: 8204,
                        teamName: "ITA",
                        teamColor: "#008c45",
                        teamSubColor: "#f4f5f0",
                    },
                    {
                        teamId: 6717,
                        teamName: "SWI",
                        teamColor: "#ff0000",
                        teamSubColor: "#ffffff",
                    },
                    {
                        teamId: 6595,
                        teamName: "TUR",
                        teamColor: "#e30a17",
                        teamSubColor: "#ffffff",
                    },
                    {
                        teamId: 5790,
                        teamName: "WAL",
                        teamColor: "#00ad36",
                        teamSubColor: "#ffffff",
                    },
                ],
            },
            {
                label: "Group B",
                children: [
                    {
                        teamId: 8263,
                        teamName: "BEL",
                        teamColor: "#000000",
                        teamSubColor: "#FDDA24",
                    },
                    {
                        teamId: 8238,
                        teamName: "DEN",
                        teamColor: "#C60C30",
                        teamSubColor: "#ffffff",
                    },
                    {
                        teamId: 7871,
                        teamName: "FIN",
                        teamColor: "#003580",
                        teamSubColor: "#ffffff",
                    },
                    {
                        teamId: 8713,
                        teamName: "RUS",
                        teamColor: "#0033A0",
                        teamSubColor: "#DA291C",
                    },
                ],
            },
            {
                label: "Group C",
                children: [
                    {
                        teamId: 8255,
                        teamName: "AUS",
                        teamColor: "#ed2939",
                        teamSubColor: "#ffffff",
                    },
                    {
                        teamId: 6708,
                        teamName: "NET",
                        teamColor: "#AE1C28",
                        teamSubColor: "#21468B",
                    },
                    {
                        teamId: 8260,
                        teamName: "NMA",
                        teamColor: "#d20000",
                        teamSubColor: "#ffe600",
                    },
                    {
                        teamId: 6718,
                        teamName: "UKR",
                        teamColor: "#005bbb",
                        teamSubColor: "#ffd500",
                    },
                ],
            },
            {
                label: "Group D",
                children: [
                    {
                        teamId: 10155,
                        teamName: "CRO",
                        teamColor: "#ff0000",
                        teamSubColor: "#0093dd",
                    },
                    {
                        teamId: 8496,
                        teamName: "CZE",
                        teamColor: "#d7141a",
                        teamSubColor: "#11457e",
                    },
                    {
                        teamId: 8491,
                        teamName: "ENG",
                        teamColor: "#CF081F",
                        teamSubColor: "#ffffff",
                    },
                    {
                        teamId: 8498,
                        teamName: "SCO",
                        teamColor: "#0065BF",
                        teamSubColor: "#ffffff",
                    },
                ],
            },
            {
                label: "Group E",
                children: [
                    {
                        teamId: 8568,
                        teamName: "POL",
                        teamColor: "#dc143c",
                        teamSubColor: "#ffffff",
                    },
                    {
                        teamId: 8497,
                        teamName: "SLO",
                        teamColor: "#034DA3",
                        teamSubColor: "#ffffff",
                    },

                    {
                        teamId: 6720,
                        teamName: "ESP",
                        teamColor: "#bb0215",
                        teamSubColor: "#ffbb00",
                    },
                    {
                        teamId: 8498,
                        teamName: "SWE",
                        teamColor: "#004B87",
                        teamSubColor: "#FFCD00",
                    },
                ],
            },
            {
                label: "Group F",
                children: [
                    {
                        teamId: 6723,
                        teamName: "FRA",
                        teamColor: "#001489",
                        teamSubColor: "#EF3340",
                    },
                    {
                        teamId: 8570,
                        teamName: "GER",
                        teamColor: "#000000",
                        teamSubColor: "#dd0000",
                    },

                    {
                        teamId: 8565,
                        teamName: "HUN",
                        teamColor: "#cd2a3e",
                        teamSubColor: "#436f4d",
                    },
                    {
                        teamId: 8361,
                        teamName: "POR",
                        teamColor: "#006600",
                        teamSubColor: "#FF0000",
                    },
                ],
            },
        ],
    },
    {
        label: "La Liga",
        children: [
            {
                teamId: 8633,
                teamName: "RMCF",
                teamColor: "#FEBE10",
                teamSubColor: "#00529F",
            },
            {
                teamId: 9906,
                teamName: "ATM",
                teamColor: "#272E61",
                teamSubColor: "#CB3524",
            },
            {
                teamId: 8634,
                teamName: "BARCA",
                teamColor: "#A50044",
                teamSubColor: "#004D98",
            },
        ],
    },
    {
        label: "PL",
        children: [
            {
                teamId: 8456,
                teamName: "CITY",
                teamColor: "#6CABDD",
                teamSubColor: "#1C2C5B",
            },
            {
                teamId: 8650,
                teamName: "LFC",
                teamColor: "#C8102E",
                teamSubColor: "#00B2A9",
            },
            {
                teamId: 8586,
                teamName: "SPURS",
                teamColor: "#132257",
                teamSubColor: "#f7f7f7",
            },
            {
                teamId: 8455,
                teamName: "BLUES",
                teamColor: "#034694",
                teamSubColor: "#6A7AB5",
            },
        ],
    },
    {
        label: "Etc",
        children: [
            {
                teamId: 9847,
                teamName: "PSG",
                teamColor: "#004170",
                teamSubColor: "#DA291C",
            },
            {
                teamId: 9823,
                teamName: "FCB",
                teamColor: "#DC052D",
                teamSubColor: "#0066B2",
            },
            {
                teamId: 9789,
                teamName: "BVB",
                teamColor: "#FDE100",
                teamSubColor: "#000000",
            },
            {
                teamId: 9885,
                teamName: "JUVE",
                teamColor: "#000000",
                teamSubColor: "#FFFFFF",
            },
            {
                teamId: 8636,
                teamName: "INTER",
                teamColor: "#A29161",
                teamSubColor: "#221F20",
            },
            {
                teamId: 9773,
                teamName: "PORTO",
                teamColor: "#00428C",
                teamSubColor: "#FFFFFF",
            },
        ],
    },
];
