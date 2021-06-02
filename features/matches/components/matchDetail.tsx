import LoadingView from "@features/common/loadingView";
import { Row, Result, Button } from "antd";
import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import MatchHeader from "./matchHeader";
import MatchLineup from "./matchLineup";
import MatchStats from "./matchStats";
import MatchTimeline from "./matchTimeline";

const MatchDetail = () => {
    const router = useRouter();
    const { matchid } = router.query;

    const { data, error } = useSWR(
        `https://cors.bridged.cc/https://www.fotmob.com/matchDetails?matchId=${matchid}`
    );

    if (error)
        return (
            <div>
                <Result
                    status="error"
                    title={error}
                    extra={<Button type="primary">Back Home</Button>}
                />
            </div>
        );
    else if (!data || !matchid) return <LoadingView />;

    return (
        <Container>
            <MatchHeader matchData={data} />
            {data.header.status.started && (
                <>
                    <MatchTimeline matchData={data} />
                    <MatchLineup matchData={data} />
                    <MatchStats statData={data.content.stats} />
                </>
            )}
        </Container>
    );
};

export default MatchDetail;

const Container = styled.div`
    width: 100%;
    padding: 5%;

    @media screen and (max-width: 768px) {
        padding: 0;
        padding-top: 5%;
    }
`;
