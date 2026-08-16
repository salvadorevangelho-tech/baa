import '../styles/globals.css';
import { Tokens } from '../components/Tokens';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Tokens />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
