import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About Me',
    Svg: require('@site/static/img/profile_details.svg').default,
    description: (
      <>
        Shangar Arivazhagan (Keys) &mdash; Technical Lead - AI &amp; Software Development. <br></br>
        I design and ship backend systems and agentic AI solutions.<br></br>
        <strong>Focus:</strong> AI Systems, Backend Engineering<br></br>
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    Svg: require('@site/static/img/taking_notes.svg').default,
    description: (
      <>
        My collection of technical notes, engineering decisions, and learnings across AI,
        backend systems, and Python. Written to be useful long after the initial exploration.
      </>
    ),
  },
  {
    title: 'Project Gallery',
    Svg: require('@site/static/img/my_personal_files.svg').default,
    description: (
      <>
        Personal and professional projects spanning agentic AI, backend services, and developer tooling.
        Built for showcasing my work and contributions.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
