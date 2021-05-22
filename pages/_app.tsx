import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import moment from "moment";
import { wrapper } from "../redux/configureStore";

import Foot from "@features/common/Footer/Foot";
import NavBar from "@features/navigation/NavBar";

function MyApp({ Component, pageProps }) {
    moment.locale("ko");
    return (
        <>
            <Head>
                <title>Manchester City Unofficial Site</title>
                <link rel="shortcut icon" href="/image/favicon.ico" />
            </Head>
            <NavBar />
            <Component {...pageProps} />
            <Foot />
        </>
    );
}

export default wrapper.withRedux(MyApp);
