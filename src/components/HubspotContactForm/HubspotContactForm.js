import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const HubspotContactForm = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '21841890',
                    formId: '9763932b-6c20-4b60-b80b-409e78876768',
                    target: '#hubspotForm',
                    region: 'na1'
                })
            }
        });
    }, []);

    return (
        <>
            <Helmet>
                <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
            </Helmet>

            <div>
                <div id="hubspotForm"></div>
            </div>
        </>
    );
};

export default HubspotContactForm;