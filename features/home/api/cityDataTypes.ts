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

export type matchDataTypes = {
    id: number;
    pageUrl: string;
    monthYearKey: string;
    opponent: {
        id: number;
        name: string;
        score: string;
    };
    home: {
        id: number;
        name: string;
        score: number;
    };
    away: {
        id: number;
        name: string;
        score: number;
    };
    displayTournament: boolean;
    isPastMatch: boolean;
    lastPlayedMatch: boolean;
    lnameArr: Array<string>;
    color: string;
    notStarted: boolean;
    tournament: {
        name: string;
    };
    status: {
        finished: boolean;
        started: boolean;
        cancelled: boolean;
        scoreStr?: string;
        startTimeStr?: string;
        startDateStr: string;
        startDateStrShort: string;
        liveTime?: {
            short: string;
            long: string;
        };
        reason?: {
            short: string;
            long: string;
        };
    };
};

export type playerListDataTypes = [string, Array<playerTypes>];

export type playerTypes = {
    id: number;
    name: string;
    ccode: string;
    cname: string;
    role?: string;
};

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

export type playerStatDataTypes = [topPlayersDataTypes, tableDataTypes];

export type topPlayersDataTypes = {
    byRating: { players: Array<statPlayer>; seeAllLink?: "string" };
    byGoals: { players: Array<statPlayer>; seeAllLink?: "string" };
    byAssists: { players: Array<statPlayer>; seeAllLink?: "string" };
};

export type tableDataTypes = {
    tables: Array<any>;
    teamForms: any;
    nextOpponent: any;
    tableHeader: any;
};

export type statPlayer = {
    id: 169200;
    name: string;
    goals: number;
    assists: number;
    rating: number;
    positionId: number;
    ccode: string;
    cname: string;
    teamId: number;
    teamName: number;
    showRole: boolean;
    showCountryFlag: boolean;
    showTeamFlag: boolean;
};
