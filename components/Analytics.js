import React from 'react'
import Script from 'next/script'

const gaId = 'G-81KZDW9XLM';
const Analytics = () => (
    <>
        <Script
            id="google-analytics-path"
            strategy='lazyOnload'
            src='https://www.googletagmanager.com/gtag/js?id=${gaId}'
        />
        <Script
            id="google-analytics-config"
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