import Loading from "@features/common/Loading";
import { Row, Result, Button } from "antd";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import useSWR from "swr";
import MatchHeader from "./matchHeader";

const MatchDetail = () => {
    const router = useRouter();
    const { matchid } = router.query;

    const { data, error } = useSWR(
        `https://thingproxy.freeboard.io/fetch/https://www.fotmob.com/matchDetails?matchId=${matchid}`
    );

    console.log(data);
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
        </Container>
    );
};

export default MatchDetail;

const Container = styled.div`
    padding: 56px;
`;
