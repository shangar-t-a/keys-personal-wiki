import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CardGrid from '@site/src/components/core/CardGrid';
import FeatureCard from '@site/src/components/core/FeatureCard';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroContainer}>
      {/* Premium Ambient Background Mesh & Orbs */}
      <div className={styles.orbContainer}>
        <div className={styles.meshBg}></div>
        <div className={styles.orbBlue}></div>
        <div className={styles.orbCyan}></div>
      </div>

      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.title}>
          Hi. I'm Shangar.
        </Heading>
        <p className={styles.subtitle}>
          Technical Lead &mdash; AI &amp; Software Development
        </p>
        <p className={styles.description}>
          I design and ship production backend systems, agentic AI solutions, and robust Python code bases that solve real enterprise problems.
        </p>
        <div className={styles.buttons}>
          <Link
            className={styles.primaryButton}
            to="/docs/intro">
            About Me
          </Link>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Technical Lead (AI & Software Development) — Portfolio, Learning hub and more.">
      <HomepageHeader />
      <main className={styles.mainSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore the Wiki</h2>
          <div className={styles.sectionUnderline}></div>
        </div>

        <CardGrid>
          <FeatureCard
            title="About Me"
            badge="Profile"
            href="/docs/intro"
            tags={['Lead', 'AI Systems', 'Backend']}
            description="Explore my technical background, delivery guidelines, and areas of engineering expertise."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />
          <FeatureCard
            title="Knowledge Base"
            badge="Learnings"
            href="/docs/knowledge-base/home"
            tags={['Python', 'AI', 'DevOps']}
            description="Structured notes, resolutions, and architectural deep-dives across backend systems and modern AI paradigms."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            }
          />
          <FeatureCard
            title="Projects Gallery"
            badge="Showcase"
            href="/docs/projects/home"
            tags={['FastAPI', 'LangGraph', 'Clean Code']}
            description="A list of utility applications, backend services, and interactive experiments built to solve practical needs."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            }
          />
        </CardGrid>
      </main>
    </Layout>
  );
}
