export type newsDataTypes = {
    imageUrl: string;
    title: string;
    sourceStr: string;
    lead: string;
    sourceIconUrl: string;
    page: {
        url: string;
    };
};

export type playerListDataTypes = [
    string,
    Array<{
        id: number;
        name: string;
        ccode: string;
        cname: string;
        role: string;
    }>
];

export type playerInfoDataTypes = {
    id: number;
    name: string;
    origin: any;
    playerProps: any;
    injuryInformation: any;
    lastLeague: any;
    recentMatches: any;
    careerStatistics: any;
    careerHistory: any;
    relatedNews: any;
    meta: any;
};
