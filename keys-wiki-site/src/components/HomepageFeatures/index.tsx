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
        Shangar Arivazhagan <br></br>
        Software Engineer (Python) <br></br>
        <strong>Interests:</strong> Web Development, GenAI & Automation <br></br>
        <strong>Skills:</strong> Django, FastAPI, Pytest, GenAI (Beginner) & Backend Developer (Python - Intermediate) <br></br>
      </>
    ),
  },
  {
    title: 'Personal Blog / Wiki',
    Svg: require('@site/static/img/taking_notes.svg').default,
    description: (
      <>
        My Personal Blog / Wiki primarily focussing Python. The blogs helps me to refer back to the concepts and also
        to share my learnings with the community. The blogs cover various tasks and tools that I use in my day to day
        work as a Python backend developer.
      </>
    ),
  },
  {
    title: 'Gallery',
    Svg: require('@site/static/img/my_personal_files.svg').default,
    description: (
      <>
        Project Gallery: This section is yet to be updated. This section will contain the projects that I have worked
        on to upskill myself.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
