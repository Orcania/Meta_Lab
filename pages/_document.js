import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet" />
                <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" />

                <link rel="prefetch" href="/Media/hero.png" />
            </Head>
            <body className="has-navbar-fixed-top">
                <Main />
                <NextScript />
                <script src="https://www.recaptcha.net/recaptcha/api.js" async defer />
            </body>
        </Html>
    );
}
