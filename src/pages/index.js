import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {OutboundLink} from '../components/outbound-link';
import email from '../assets/iconmonstr-email-11.svg';
import twitter from '../assets/iconmonstr-twitter-5.svg';
import github from '../assets/iconmonstr-github-5.svg';
import linkedin from '../assets/iconmonstr-linkedin-5.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! I&apos;m Ian Remmel</h1>
    <p>
      If you landed here, you probably met me at a conference or a meetup. Maybe
      I was talking about{' '}
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

    <OutboundLink href="https://www.twitter.com/ianwremmel">
      <img alt="Twitter Logo" src={twitter} title="Twitter" />
    </OutboundLink>

    <OutboundLink href="https://github.com/ianwremmel">
      <img alt="GitHub Logo" src={github} title="GitHub" />
    </OutboundLink>

    <OutboundLink href="https://www.linkedin.com/pub/ian-remmel/3/a32/208">
      <img alt="LinkedIn Logo" src={linkedin} title="LinkedIn" />
    </OutboundLink>

    <a href="mailto:hello@ianwremmel.com">
      <img alt="Email Icon" src={email} title="Email Me" />
    </a>
  </Layout>
);

export default IndexPage;
