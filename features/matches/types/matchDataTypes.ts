export type matchDetailTypes = {
    header: {
        teams: {
            name: string;
            score: number;
            imageUrl: string;
            pageUrl: string;
        }[];
        status: {
            finished: boolean;
            started: boolean;
            cancelled: boolean;
            scoreStr: string;
            startDateStr: string;
            startDateStrShort: string;
            reason: {
                short: string;
                long: string;
            };
            whoLostOnPenalties?: any;
            whoLostOnAggregated: string;
        };
    };
    nav: Array<string>;
    ongoing: boolean;
    content: matchContentTypes;
    seo: {
        path: string;
    };
};

export type matchContentTypes = {
    matchFacts: matchFactsTypes;
    liveticker: {
        url: string;
        teams: Array<string>;
        superLiveUrl: string;
        showSuperLive: boolean;
    };
    stats: matchStatsTypes;
    lineup: matchLineupTypes;
    playoff: boolean;
    table: {
        url: string;
        teams: Array<number>;
    };
    h2h: matchH2HTypes;
};
export type matchFactsTypes = {
    matchId: number;
    highlights: {
        image: string;
        url: string;
        source: string;
    };
    playerOfTheMatch: {
        id: number;
        name: {
            firstName: string;
            lastName: string;
        };
        teamName: string;
        teamId: number;
        rating: {
            num: string;
            isTop: {
                isTopRating: boolean;
                isMatchFinished: boolean;
            };
        };
        pageUrl: string;
        stats: Array<any>;
        role: string;
    };
    events: {
        ongoing: boolean;
        events: Array<matchEventTypes>;
    };
    infoBox: {
        "Match Date": string;
        Attendance: number | null;
        Tournament: {
            id: number;
            link: string;
            text: string;
        };
        Stadium: {
            name: string;
            lat: number;
            long: number;
        };
        Referee: {
            imgUrl: string;
            text: string;
        };
    };
    teamForm: {
        result: number;
        imageUrl: string;
        linkToMatch: string;
        teamPageUrl: string;
        tooltipText: string;
    }[][];
    odds: any;
    poll: any;
};

export type matchEventTypes = {
    reactKey: string;
    timeStr: string;
    type: string;
    time: number;
    overloadTime: number | null;
    eventId: number;
    profileUrl: string;
    overloadTimeStr: string | boolean;
    isHome: boolean;
    nameStr: string;
    card?: string;
    ownGoal?: boolean | null;
    newScore?: Array<number>;
    assistStr?: string;
    assistProfileUrl?: string;
    minutesAddedStr?: string;
    swap?: { name: string; profileUrl: string }[];
};

export type matchStatsTypes = {
    stats: {
        title: string;
        stats: statTypes[];
    }[];
    teamColors: {
        home: string;
        away: string;
    };
};

export type statTypes = {
    title: string;
    stats: Array<any>;
    type: string;
    highlighted: string;
};

export type matchLineupTypes = {
    lineup: {
        teamId: number;
        teamName: string;
        bench: Array<matchPlayerTypes>;
        coach: Array<matchPlayerTypes>;
        players: matchPlayerTypes[][];
        lineup: string;
        nonAvailablePlayers: Array<matchPlayerTypes>;
    }[];
    bench: {
        sides: Array<string>;
        benchArr: matchPlayerTypes[][];
    };
    naPlayers: {
        sides: Array<string>;
        naPlayersArr: matchPlayerTypes[][];
    };
    coaches: {
        sides: Array<string>;
        coachesArr: matchPlayerTypes[][];
    };
    teamRatings: {
        home: {
            num: number;
            bgcolor: string;
        };
        away: {
            num: number;
            bgcolor: string;
        };
    };
    hasFantasy: boolean;
};

export type matchPlayerTypes = {
    id: number;
    usingOptaId?: boolean;
    name: {
        firstName: string;
        lastName: string;
    };
    imageUrl: string;
    pageUrl: string;
    shirt?: number;
    timeSubbedOn: number | null;
    usualPosition?: number;
    positionRow: number | null;
    role?: string;
    isCaptain?: boolean;
    events?: {
        sub?: {
            time?: number;
            isOut?: boolean;
        };
        g?: boolean;
    };
    rating?: {
        num: number | null;
        bgcolor: string;
        isTop: {
            isTopRating: boolean;
            isMatchFinished: boolean;
        };
    };
    fantasyScore?: {
        num: string | null;
        bgcolor: string;
    };
    stats?: Array<any>;
    naInfo?: {
        id: number;
        name: string;
        naReason: string;
        suspended: boolean;
    };
};

export type matchH2HTypes = {
    summary: Array<number>;
    matches: {
        time: string;
        matchUrl: string;
        league: {
            name: string;
            pageUrl: string;
        };
        home: {
            name: string;
            id: number;
        };
        status: {
            started: boolean;
            cancelled: boolean;
            finished: boolean;
            startTimeStr: string;
            startDateStr: string;
            startDateStrShort: string;
        };
        finished: boolean;
        away: {
            name: string;
            id: number;
        };
    }[];
};
