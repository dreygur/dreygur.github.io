import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div >
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
