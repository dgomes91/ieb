import React from 'react'
import Script from 'next/script'

const gaId = process.env.GA_MEASUREMENT_ID;
const Analytics = () => (
    <>
        <Script
            strategy='lazyOnload'
            src='https://www.googletagmanager.com/gtag/js?id=${gaId}'
        />
        <Script
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${gaId}');
                    `
            }}
        />
    </>
  );

export default Analytics