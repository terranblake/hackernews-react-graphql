import Link from 'next/link';
import * as React from 'react';

interface IHeaderNavProps {
  userId?: string;
  currentUrl: string;
  isNavVisible: boolean;
  title: string;
}

export function HeaderNav(props: IHeaderNavProps): JSX.Element {
  const { userId, isNavVisible, title } = props;

  return isNavVisible ? (
    <span className="pagetop">
      <b className="hnname">
        <Link href="/" as="/news">
          <a>{title}</a>
        </Link>
      </b>
      &nbsp;
      {userId && ' | '}
      <Link href="/blog">
        <a className='blog'>blog</a>
      </Link>
      {' | '}
      <Link href="/projects">
        <a className='projects'>projects</a>
      </Link>
      {' | '}
      <Link href="/about">
        <a className='about'>about</a>
      </Link>
      {' | '}
      <Link href="/resume'>">
        <a className='resume'>resume</a>
      </Link>
    </span>
  ) : (
    <span className="pagetop">
      <b>{title}</b>
    </span>
  );
}
