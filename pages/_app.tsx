import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

// All the components of my app will pass through here
function MyApp({ Component, pageProps }: AppPropsWithLayout) {  
    
  
  const getLayout = Component.getLayout || (( page ) => page);

  return getLayout(<Component {...pageProps} />)    
}

export default MyApp
