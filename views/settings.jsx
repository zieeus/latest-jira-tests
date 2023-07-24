import React, { useEffect, useState } from "react";

import PageHeader from "@atlaskit/page-header";
import Toggle from "@atlaskit/toggle";
import Spinner from "@atlaskit/spinner";

// const startAllJS = (callback) => {
//     const ConnectCdn = document.getElementById("connect-cdn");
//
//     if (!ConnectCdn) {
//         const script = document.createElement("script");
//         script.src = "https://connect-cdn.atl-paas.net/all.js";
//         script.id = "connect-cdn";
//         document.body.appendChild(script);
//         script.onload = () => callback();
//         script.onerror = () => {
//             throw new Error(
//                 "Atlassian Javascript API (AP) is not available, please verify if you have added a reference to `all.js`"
//             );
//         };
//     } else callback();
// };

export default function Settings() {
    const [userName, setUserName] = useState();

    const getCurrentUser = () => {
        AP.request("/rest/api/3/myself")
            .then((data) => setUserName(JSON.parse(data.body).displayName))
            .catch((e) => console.log(e.err));
    };

    useEffect(() => {
        startAllJS(getCurrentUser);
    }, []);

    return (
        <>
            {!userName ? (
                <div className="spinerCenter">
                    <Spinner size="xlarge" />
                </div>
            ) : (
                <div className="mainPage">
                    <div className="headStyle">
                        <PageHeader>{userName}, Welcome to Teamlead Task Settings.</PageHeader>
                    </div>
                    <h1>Personal Settings</h1>
                    <label htmlFor="toggle-show-avatar" className="toggleLabe">
                        <Toggle id="toggle-show-avatar" /> Show avatar
                    </label>
                    <label htmlFor="toggle-show-email" className="toggleLabe">
                        <Toggle id="toggle-show-email" /> Show email
                    </label>
                    <label htmlFor="toggle-show-last-name" className="toggleLabe">
                        <Toggle id="toggle-show-last-name" /> Show last name
                    </label>
                    <label htmlFor="toggle-show-nickname" className="toggleLabe">
                        <Toggle id="toggle-show-nickname" /> Show nickname
                    </label>
                </div>
            )}
        </>
    );
}