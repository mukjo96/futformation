import LoadingView from "@features/common/loadingView";
import { Row, Result, Button } from "antd";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useSelector } from "react-redux";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { RootStateInterface } from "redux/interfaces/ifRootState";
import styled from "styled-components";
import useSWR from "swr";
import MatchHeader from "../components/matchHeader";
import MatchLineup from "../components/matchLineup";
import MatchStats from "../components/matchStats";
import MatchTimeline from "../components/matchTimeline";

const MatchInfoPage = () => {
    const router = useRouter();
    const { matchid } = router.query;

    const { data, error } = useSWR(
        `https://cors.bridged.cc/https://www.fotmob.com/matchDetails?matchId=${matchid}`
    );

    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
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
    else if (!data || !matchid)
        return (
            <LoadingContainer>
                <LoadingView />
            </LoadingContainer>
        );

    return (
        <Container>
            <MatchHeader matchData={data} />
            {data.header.status.started && (
                <>
                    <MatchTimeline
                        matchData={data}
                        teamColor={team.teamColor}
                    />
                    <MatchLineup matchData={data} />
                    <MatchStats statData={data.content.stats} />
                </>
            )}
        </Container>
    );
};

export default MatchInfoPage;

const Container = styled.div`
    width: 100%;
    padding: 5%;

    @media screen and (max-width: 768px) {
        padding: 0;
        padding-top: 5%;
    }
`;

const LoadingContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`;
