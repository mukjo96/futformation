import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import NavBar from '@/components/header/navBar';

import '../styles/global.css';
import 'react-circular-progressbar/dist/styles.css';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default appWithTranslation(MyApp);
