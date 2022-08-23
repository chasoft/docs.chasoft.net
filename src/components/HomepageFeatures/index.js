import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Individuals',
        Svg: require('@site/static/img/proud_coder.svg').default,
        description: (
            <>
                Build your edge skill to make your life easier. Do whatever you want.
            </>
        ),
    },
    {
    title: 'Schools',
    Svg: require('@site/static/img/back_to_school.svg').default,
    description: (
      <>
        Supply your class with a new skill that could change his/her life afterward.
      </>
    ),
  },
    {
    title: 'Enterprises',
    Svg: require('@site/static/img/interaction_design.svg').default,
    description: (
      <>
        Invest in your employees with coding skills to speed up your business activities.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
