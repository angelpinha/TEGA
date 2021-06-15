import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import {
  Redirect
} from '@docusaurus/router';

// Main redirect HOME

function Home() {
  return <Redirect to = {
    useBaseUrl('/docs/prefacio')
  }
  />;
}

export default Home;