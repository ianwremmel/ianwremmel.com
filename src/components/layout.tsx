import Head from 'next/head';

export interface LayoutProps {
  author?: string;
  description?: string;
  title?: string;
}

export const Layout = ({
  author = 'Ian W. Remmel',
  children,
  description = '',
  title = 'Ian W. Remmel'
}: React.PropsWithChildren<LayoutProps>) => (
  <>
    <Head>
      <meta content={description} name="description"></meta>
      <meta content={title} name="og:title"></meta>
      <meta content={description} name="og:description"></meta>
      <meta content={author} name="twitter:creator"></meta>
      <meta content={title} name="twitter:title"></meta>
      <meta content={description} name="twitter:description"></meta>
    </Head>
    <main>{children}</main>
  </>
);
