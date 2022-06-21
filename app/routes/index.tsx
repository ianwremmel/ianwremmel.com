import {Hyperlink} from '../components/atoms/hyperlink';
import {OutboundLink} from '../components/atoms/outbound-link';
import {SocialLinks} from '../components/organisms/social-links';

export default function Index() {
  return (
    <>
      <div className="wrapper landing-page">
        <SocialLinks />

        <main>
          <h1>Hi! I'm Ian Remmel.</h1>

          <p>
            If you landed here, you probably met me at a conference or a meetup.
            Maybe I was talking about{' '}
            <OutboundLink
              href="https://www.linkedin.com/in/ianwremmel/"
              title="My LinkedIn profile, which describes my current employment status"
            >
              what I do at work
            </OutboundLink>
            , or I was excited about something I'm doing with one of my side
            projects (probably{' '}
            <OutboundLink
              href="https://www.check-run-reporter.com/?utm_source=https%3A%2F%2Fwww.ianwremmel.com&utm_medium=website&utm_campaign=none"
              title="Check Run Reporter helps you fix your CI failures faster by reducing the need to dig through poorly formatted logs."
            >
              check-run-reporter.com
            </OutboundLink>
            ).
          </p>

          <p>
            Recently, I started a <Hyperlink href="/blog">blog</Hyperlink>. It's
            still super early, but you can see what I've got in mind for it over
            on{' '}
            <OutboundLink
              href={
                'https://timeline.ianwremmel.com/ianwremmel/highlights/604baf8c-daee-4133-a10e-cef7e5a379ff'
              }
              title=""
            >
              Polywork
            </OutboundLink>
            .
          </p>
        </main>
      </div>
    </>
  );
}
