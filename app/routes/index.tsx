import {SocialLink} from '../components/molecules/social-link';

export default function Index() {
  return (
    <>
      <div className="container">
        <div className="social-row">
          <SocialLink
            alt="Twitter logo"
            href="https://www.twitter.com/ianwremmel"
            src="/assets/twitter.svg"
            title="Follow me on Twitter"
          />

          <SocialLink
            alt="GitHub logo"
            href="https://github.com/ianwremmel"
            src="/assets/github.svg"
            title="My GitHub profile"
          />

          <SocialLink
            alt="LinkedIn logo"
            href="https://www.linkedin.com/pub/ian-remmel/3/a32/208"
            src="/assets/linkedin.svg"
            title="That thing recruiters use to spread spam"
          />

          <SocialLink
            alt="An envelope"
            href="mailto:hello@ianwremmel.com"
            src="/assets/mail.svg"
            title="Send me an email"
          />
        </div>

        <div className="heading-row">
          <h1>Hi! I&apos;m Ian Remmel.</h1>
        </div>

        <div className="body-row">
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
            , or I was excited about something I&apos;m doing with one of my
            side projects (probably{' '}
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
    </>
  );
}
