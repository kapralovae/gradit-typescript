import { ThemeProvider } from 'styled-components';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
// import { useEffect } from 'react';
// import { loadAllQuests } from '../../action';
// import { useAppDisptach } from '../../hooks';
import NotFound from '../not-found/not-found';

const App = () => {

  // const dispatch = useAppDisptach();

//   useEffect(() => {
//     fetch('http://localhost:3001/quests/')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     dispatch(loadAllQuests(data));});
// }, []);

  return(
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/quest/:id"
        element={<DetailedQuest />}>

        </Route>
        <Route path="/contacts"
        element={<Contacts />}>

        </Route>
        <Route path="/"
          element={<Home />}>
         </Route>

         <Route path='*' element={
          <NotFound />
        }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
