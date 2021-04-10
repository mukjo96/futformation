import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import moment from "moment";

import Foot from "@features/common/Footer/Foot";
import TopBar from "@features/Navigation/TopBar";

function MyApp({ Component, pageProps }) {
    moment.locale("ko");
    return (
        <>
            <Head>
                <title>Movie App</title>
                <link rel="shortcut icon" href="/image/favicon.ico" />
            </Head>
            <TopBar />
            <Component {...pageProps} />
            <Foot />
        </>
    );
}

export default MyApp;
