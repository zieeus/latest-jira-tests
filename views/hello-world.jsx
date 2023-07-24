import SectionMessage from '@atlaskit/section-message';
import React, {useEffect, useState} from 'react';

import Button from '@atlaskit/button';
import Spinner from "@atlaskit/spinner";
import {Label} from '@atlaskit/form';
import Select from '@atlaskit/select';
import PageHeader from "@atlaskit/page-header";
import New from "./new";


export default function HelloWorld() {
    const [userName, setUserName] = useState();
    const [projects, setProjects] = useState(null);


    const getCurrentUser = () => {
        const ConnectCdn = document.getElementById("connect-cdn");

        if (!ConnectCdn) {
            const script = document.createElement("script");
            script.src = "https://connect-cdn.atl-paas.net/all.js";
            script.id = "connect-cdn";
            document.body.appendChild(script);
            // script.onload = () => {};
            script.onerror = () => {
                throw new Error(
                    "Atlassian Javascript API (AP) is not available, please verify if you have added a reference to `all.js`"
                );
            };
        } else console.log('AAAAAAAAAAAAAAYYYYYYYY');
        AP.request("/rest/api/3/myself")
            .then((data) => setUserName(JSON.parse(data.body).displayName))
            .catch((e) => console.log(e.err));
        AP.request("/rest/api/3/project/search")
            .then((data) => setProjects((JSON.parse(data.body)).values))
            .catch((e) => console.log(e.err));
    };
    useEffect(() => {
        getCurrentUser();
    }, []);


    return (

        <div>
            <New/>
            <SectionMessage>
                <p>{!userName ? (
                    <div className="spinerCenter">
                        LOADIIING
                        <Spinner size="xlarge"/>
                    </div>
                ) : (
                    <div className="headStyle">
                        <PageHeader>Bonjour user : {userName}</PageHeader>
                    </div>
                )}</p>
                <Button appearance="primary" onClick={() => {
                    AP.dialog.create({
                        key: 'dialog-example',
                        chrome:false
                    }).on("close", (data) => {
                        console.log('8888888888888888888888888888\nClosing\n', data)
                    })
                }

                }> Afficher un flag</Button>
                <Button appearance="warning" onClick={() => AP.dialog.create({
                    width: '500px',
                    height: '200px',
                    chrome: true
                })}>Afficher un dialog</Button>
            </SectionMessage>
            <SectionMessage>
                <Label htmlFor="single-select-example">Projets disponibles</Label>
                {
                    console.log("******************************")
                }
                {
                    console.log(projects)
                }
                <Select
                    inputId="single-select-example"
                    className="single-select"
                    classNamePrefix="react-select"
                    options={projects ? [
                        {label: projects[0].name, value: projects[0].name}
                    ] : []}
                    placeholder="Choisis un projet"
                />
            </SectionMessage>
        </div>
    );
}
