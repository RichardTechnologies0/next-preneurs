import { MyContextProvider } from './context/MyContext';
import '../styles/globals.css'; // Votre CSS global

export default function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
          <Component {...pageProps} />
    </MyContextProvider>
      
  );
}
