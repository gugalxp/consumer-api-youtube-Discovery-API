// MyApp.js
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 500);
  }, []);

  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
