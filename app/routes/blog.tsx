import {Outlet} from '@remix-run/react';

import {Navbar} from '../components/organisms/navbar';

export default function BlogLayout() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
}
