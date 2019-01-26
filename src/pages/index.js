import React from 'react';

import {Card} from '../components/card';
import {Column} from '../components/column';
import {OutboundLink} from '../components/outbound-link';
import email from '../content/iconmonstr-email-11.svg';
import twitter from '../content/iconmonstr-twitter-5.svg';
import github from '../content/iconmonstr-github-5.svg';
import linkedin from '../content/iconmonstr-linkedin-5.svg';

const UrbanDoorCard = () => (
  <Card className="h-100" title="UrbanDoor" titleTag="h2">
    <p className="card-text">
      I&apos;m a Senior Software Engineer splitting my time between frontend and
      devops. My mission is Happiness Through Engineering.
    </p>
    <a className="card-link" href="https://www.urbandoor.com/">
      Check us out!
    </a>
  </Card>
);

const SideProjectsCard = () => (
  <Card className="h-100" title="Side Projects" titleTag="h2">
    <p className="lead">
      I tend to go off a bit about my side projects. Though usually more about
      the tech than the actual project.
    </p>

    <OutboundLink href="https://www.relayhook.io">relayhook.io</OutboundLink>
  </Card>
);

const PrivateKeyCard = () => (
  <Card className="h-100" title="Public GPG Key" titleTag="h2">
    <p className="card-text">
      Verified at{' '}
      <a href="https://keybase.io/ianwremmel">keybase.io/ianwremmel</a>
    </p>
    <p className="card-text">
      8786 E221 4560 8429 2781 B327 C9DA 1EE9 CCF2 1B28
    </p>
  </Card>
);

const BusinessCardPage = () => (
  <div>
    <div className="jumbotron">
      <div className="container">
        <h1>Hi! I&apos;m Ian Remmel</h1>
        <p className="lead">
          If you landed on this page, you probably met me at conference or
          meetup. Maybe I was talking about what we do at UrbanDoor or I was
          excited about technology I&apos;m playing with in my side projects.
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
      </div>
    </div>

    <div className="container">
      <div className="row mb-4">
        <Column>
          <UrbanDoorCard />
        </Column>

        <Column>
          <SideProjectsCard />
        </Column>
      </div>
    </div>

    <div className="container">
      <div className="row mb-4">
        <Column>
          <PrivateKeyCard />
        </Column>
      </div>
    </div>
  </div>
);

export default BusinessCardPage;
