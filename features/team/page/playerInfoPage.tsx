import LoadingView from "@features/common/loadingView";
import { Row, Result, Button, Avatar } from "antd";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useSelector } from "react-redux";
import { RootStateInterface } from "redux/interfaces/ifRootState";
import styled from "styled-components";
import useSWR from "swr";
import PlayerDetailTab from "../components/playerDetailTab";
import PlayerHeader from "../components/playerHeader";

const PlayerInfoPage = () => {
    const router = useRouter();
    const { playerid } = router.query;
    const teamColor = useSelector(
        (state: RootStateInterface): string => state.rdcExample.teamColor
    );

    const { data, error } = useSWR(
        `https://cors.bridged.cc/https://www.fotmob.com/playerData?id=${playerid}`
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
    else if (!data || !playerid)
        return (
            <LoadingContainer>
                <LoadingView />
            </LoadingContainer>
        );

    return (
        <Container>
            <PlayerHeader playerData={data} />
            <PlayerDetailTab playerData={data} teamColor={teamColor} />
        </Container>
    );
};

export default PlayerInfoPage;

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
