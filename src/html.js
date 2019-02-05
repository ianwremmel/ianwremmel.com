import React from 'react';
import PropTypes from 'prop-types';

// The only meaningful change here was the removal of the noscript tags
export default function HTML(props) {
  // Just to make the linter happy
  const {lang, ...rest} = props.htmlAttributes;
  return (
    <html lang={lang} {...rest}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.shape({
    lang: PropTypes.string.isRequired
  }),
  postBodyComponents: PropTypes.array,
  preBodyComponents: PropTypes.array
};
