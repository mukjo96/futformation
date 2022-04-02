import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import '../styles/global.css';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </QueryClientProvider>
);

export default appWithTranslation(MyApp);
