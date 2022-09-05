import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          
          <Link
            className="button button--secondary button--lg"
            style={{ textAlign: 'center', margin: "16px"}}
            to="/docs/aris/intro">
            <span style={{ display: "block", textDecoration: "underline", fontWeight: "bolder", width: "100%", textAlign: "left" }}><span style={{ color: "#2e8555"}}>Featured</span> product</span>
            <img
              src="/img/aris-banner-small.png"
              alt="Aris - Elegant & Powerful Personal Website"
              style={{ maxWidth: "280px", display: "block", marginLeft:"auto", marginRight:"auto", paddingTop: "16px", paddingBottom: "8px"}}
            />
            Aris - Powerful Serverless App (29$)
          </Link>

          <Link
            className="button button--secondary button--lg"
            style={{ textAlign: 'center', margin: "16px"}}
            to="/docs/baris-a/intro">
            <span style={{ display: "block", textDecoration: "underline", fontWeight: "bolder", width: "100%", textAlign: "left" }}><span style={{ color: "#2e8555"}}>Latest</span> product</span>
            <img
              src="/img/baris-a-banner-small.png"
              alt="Aris - Elegant & Powerful Personal Website"
              style={{ maxWidth: "280px", display: "block", marginLeft:"auto", marginRight:"auto", paddingTop: "16px", paddingBottom: "8px"}}
            />
            Baris-A - Serverless Template (19$)
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Documentation for all products of Chasoft Labs">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
