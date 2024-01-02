import { Fragment } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MongoDB from '@/server/lib/Mongoose';

import 'react-toastify/dist/ReactToastify.css';
// import '../styles/globals.css';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { SessionProvider } from 'next-auth/react';

MongoDB.connect();

function AppPage({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const baseTheme = useTheme();

  return (
    <Fragment>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Head>
            <title>My Devlet</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/images/near-east-university.png" />
          </Head>

          {/* <SessionProvider session={session}> */}
          <ThemeProvider theme={baseTheme}>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
            <CssBaseline />
            <Component {...pageProps} />
            {/* </LocalizationProvider> */}
          </ThemeProvider>
          {/* </SessionProvider> */}
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
            style={{
              width: 'auto',
              minWidth: '300px',
            }}
          />
        </LocalizationProvider>
      </Provider>
    </Fragment>
  );
}

export default AppPage;
