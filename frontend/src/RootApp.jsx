import './style/app.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App as AntdApp, ConfigProvider } from 'antd'; // ← import from antd

import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';

const IdurarOs = lazy(() => import('./apps/IdurarOs'));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider>
          <AntdApp>
            <Suspense fallback={<PageLoader />}>
              <IdurarOs />
            </Suspense>
          </AntdApp>
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  );
}
