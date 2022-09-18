import { ThemeProvider } from 'styled-components';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/quest" 
        element={<DetailedQuest />}>
          
        </Route>
        <Route path="/contacts" 
        element={<Contacts />}>
          
        </Route>
        <Route path="/" 
          element={<Home />}>
         </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
