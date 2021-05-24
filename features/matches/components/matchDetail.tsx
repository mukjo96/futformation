import Loading from "@features/common/Loading";
import { Row, Result, Button } from "antd";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import useSWR from "swr";
import MatchHeader from "./matchHeader";
import MatchLineup from "./matchLineup";
import MatchStats from "./matchStats";

const MatchDetail = () => {
    const router = useRouter();
    const { matchid } = router.query;

    const { data, error } = useSWR(
        `https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/matchDetails?matchId=${matchid}`
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
            <div>
                <Loading />
            </div>
        );

    return (
        <Container>
            <MatchHeader matchData={data} />
            <MatchLineup matchData={data} />
            {data.header.status.started && (
                <MatchStats statData={data.content.stats} />
            )}
        </Container>
    );
};

export default MatchDetail;

const Container = styled.div`
    padding: 56px;
`;
