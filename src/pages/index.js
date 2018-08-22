import classNames from 'class-names';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import twitter from '../content/iconmonstr-twitter-5.svg';
import github from '../content/iconmonstr-github-5.svg';
import linkedin from '../content/iconmonstr-linkedin-5.svg';

import styles from './index.module.css';

const IndexPage = ({data}) => (
  <main className={classNames(styles.main)}>
    <div
      className={classNames(styles['header-image'])}
      style={{backgroundImage: `url("${data.file.childImageSharp.sizes.src}")`}}
    >
      <div className={classNames(styles['header-image-image'])}>
        <Image sizes={data.file.childImageSharp.sizes} />
      </div>
    </div>
    <article className={classNames(styles.article)}>
      <h1>Ian W. Remmel</h1>
      <h2>Software Engineer in San Francisco</h2>

      <section>
        <ul className={styles['social-links']}>
          <li>
            <a href="https://www.twitter.com/ianwremmel">
              <img alt="Twitter Logo" src={twitter} title="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ianwremmel">
              <img alt="GitHub Logo" src={github} title="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/pub/ian-remmel/3/a32/208">
              <img alt="LinkedIn Logo" src={linkedin} title="LinkedIn" />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <p>
          Afflicted with The Knack at an early age, I’ve always been a fixer and
          a builder. Growing up, I built things with snow, sand, dirt, or Legos
          (my parents preferred the Legos). In high school, I fixed PCs (wipe
          and reload, the Windows 9x cure-all). In grad school, I tried to fix
          Microsoft Outlook for home use (that’s a gross oversimplification -
          read my thesis or send me a message for more details); when market
          forces made that project impractical, I turned to web development.
        </p>
        <p>
          Today, I write web apps to help teams - big and small - collaborate
          effectively. In April 2013, I joined Collaborate.com as Lead Web
          Developer. In December 2013, we were acquired by Cisco and I’ve become
          a software engineer in the Cloud Collaboration Technology Group.
        </p>
      </section>
      <section className={styles['education-and-work']}>
        <section className={styles.work}>
          <h3>
            <small className="text-muted">Work</small>
          </h3>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="https://www.urbandoor.com/">UrbanDoor</a>
            </li>
          </ul>
        </section>

        <section className={styles.education}>
          <h3>
            <small className="text-muted">Education</small>
          </h3>
          <ul className="list-group">
            <li className="list-group-item">Pennsylvania State University</li>
          </ul>
        </section>
      </section>

      <section>
        <h3>
          <small className="text-muted">Public GPG Key</small>
        </h3>
        <p>
          Verified at{' '}
          <a href="https://keybase.io/ianwremmel">keybase.io/ianwremmel</a>
        </p>
        <p>8786 E221 4560 8429 2781 B327 C9DA 1EE9 CCF2 1B28</p>
      </section>
    </article>
  </main>
);

IndexPage.propTypes = {data: PropTypes.object.isRequired};

export default IndexPage;

export const query = graphql`
  query AboutMeBackground {
    file(relativePath: {eq: "content/IMG_2774.JPG"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
