import Page from '@components/Page/Page';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  );
};

export default AppLayout;
