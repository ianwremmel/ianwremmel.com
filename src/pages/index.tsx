import {Layout} from '../components/layout';
import {OutboundLink} from '../components/outbound-link';

import styles from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.socialRow}>
        <OutboundLink
          href="https://www.twitter.com/ianwremmel"
          title="Follow me on Twitter"
        >
          <img alt="Twitter logo" src="/assets/twitter.svg" />
        </OutboundLink>

        <OutboundLink
          href="https://github.com/ianwremmel"
          title="My GitHub profile"
        >
          <img alt="GitHub logo" src="/assets/github.svg" />
        </OutboundLink>

        <OutboundLink
          href="https://www.linkedin.com/pub/ian-remmel/3/a32/208"
          title="That thing recruiters use to spread spam"
        >
          <img alt="LinkedIn logo" src="/assets/linkedin.svg" />
        </OutboundLink>

        <a href="mailto:hello@ianwremmel.com" title="Send me an email">
          <img alt="An envelope" src="/assets/mail.svg" />
        </a>
      </div>

      <div className={styles.headingRow}>
        <h1>Hi! I&apos;m Ian Remmel.</h1>
      </div>

      <div className={styles.bodyRow}>
        <p>
          If you landed here, you probably met me at a conference or a meetup.
          Maybe I was talking about{' '}
          <a
            href="https://www.linkedin.com/in/ianwremmel/"
            rel="noopener noreferrer"
            target="_blank"
          >
            what I do at work
          </a>
          , or I was excited about something I&apos;m doing with one of my side
          projects (probably{' '}
          <a
            href="https://www.check-run-reporter.com/?utm_source=https%3A%2F%2Fwww.ianwremmel.com&utm_medium=website&utm_campaign=none"
            rel="noopener noreferrer"
            target="_blank"
          >
            check-run-reporter.com
          </a>
          ).
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
