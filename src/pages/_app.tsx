import '../styles/global.css';

import { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

const PuzleMarketingApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Puzle Consultora</title>
      </Head>
      <Component {...pageProps} />
    </>
    // <Layout>
    // </Layout>
  );
};

export default appWithTranslation(PuzleMarketingApp);
