import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.scss';
import Routing from './Components/Features/Routing/Routing';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Toast from './Components/Shared/Toast/Toast';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <Routing />
        <Footer />
      </div>
      <Toast />
    </ThemeProvider>
  );
}

export default App;
