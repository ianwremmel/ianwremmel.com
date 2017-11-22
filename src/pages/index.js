import PropTypes from 'prop-types';
import React from 'react';

import PageBackgroundImage from '../components/page-background';

import './index.css';

const IndexPage = ({data}) =>
  <main>
    <PageBackgroundImage sizes={data.file.childImageSharp.sizes} />
    <article>
      <h1>Ian W. Remmel</h1>
      <h2>Software Engineer in San Francisco</h2>
      <section>
        <p>Afflicted with The Knack at an early age, I’ve always been a fixer and a builder. Growing up, I built things with snow, sand, dirt, or Legos (my parents preferred the Legos). In high school, I fixed PCs (wipe and reload, the Windows 9x cure-all). In grad school, I tried to fix Microsoft Outlook for home use (that’s a gross oversimplification - read my thesis or send me a message for more details); when market forces made that project impractical, I turned to web development.</p>
        <p>Today, I write web apps to help teams - big and small - collaborate effectively. In April 2013, I joined Collaborate.com as Lead Web Developer. In December 2013, we were acquired by Cisco and I’ve become a software engineer in the Cloud Collaboration Technology Group.</p>
      </section>
      <section>
        <section>
          <h3>Work</h3>
          <ul>
            <li>Cisco</li>
          </ul>
        </section>

        <section>
          <h3>Education</h3>
          <ul>
            <li>Pennsylvania State University</li>
          </ul>
        </section>

        <section>
          <ul>
            <li><a href="https://www.twitter.com/ianwremmel">Twitter</a></li>
            <li><a href="https://github.com/ianwremmel">GitHub</a></li>
            <li><a href="https://www.linkedin.com/pub/ian-remmel/3/a32/208">LinkedIn</a></li>
          </ul>
        </section>
      </section>
    </article>
  </main>;

IndexPage.propTypes = {data: PropTypes.object.isRequired};

export default IndexPage;

export const query = graphql`
  query AboutMeBackground {
    file(relativePath: { eq: "content/IMG_2774.JPG"}) {
      childImageSharp {
        sizes(maxWidth:1920) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
