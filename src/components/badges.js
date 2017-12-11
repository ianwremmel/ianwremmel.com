import React from 'react';
import classNames from 'class-names';
import PropTypes from 'prop-types';

import styles from './badges.module.css';

export const GKStatus = ({repoSlug}) => <a href={'https://greenkeeper.io/'}>
  <img className={classNames(styles.img)} alt="Greenkeeper badge" src={`https://badges.greenkeeper.io/${repoSlug}.svg`}/>
</a>;

GKStatus.propTypes = {repoSlug: PropTypes.string.isRequired};

export const GKIssues = ({repoSlug}) => <a href={`https://github.com/${repoSlug}/issues?q=is%3Aopen+is%3Aissue+label%3Agreenkeeper`}>
  <img className={classNames(styles.img)} alt="Greenkeeper Issues" src={`https://img.shields.io/github/issues/${repoSlug}/greenkeeper.svg?label=Issues`}/>
</a>;

GKIssues.propTypes = {repoSlug: PropTypes.string.isRequired};

export const GKPRs = ({repoSlug}) => <a href={`https://github.com/${repoSlug}/pulls?q=is%3Aopen+is%3Aissue+label%3Agreenkeeper`}>
  <img className={classNames(styles.img)} alt="Greenkeeper PRs" src={`https://img.shields.io/github/issues-pr/${repoSlug}/greenkeeper.svg?label=PRs`}/>
</a>;

GKPRs.propTypes = {repoSlug: PropTypes.string.isRequired};

export const BadgeNPMDownloads = ({packageName}) =>
  <a href={`https://www.npmjs.com/package/${packageName}`}>
    <img className={classNames(styles.img)} alt="npm" src={`https://img.shields.io/npm/dw/${packageName}.svg`}/>
  </a>;

BadgeNPMDownloads.propTypes = {packageName: PropTypes.string.isRequired};
