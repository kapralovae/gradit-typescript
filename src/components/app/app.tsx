import { ThemeProvider } from 'styled-components';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFound from '../not-found/not-found';
import DetailedQuest from '../detailed-quest/detailed-quest';
import { useAppSelector } from '../../hooks';
import { getIsDataLoader } from '../../store/quests-process/selectors';
import { SpinerLoading } from '../common/spiner-loading/spiner-laoding';

function App () {

  const isDataLoaded = useAppSelector(getIsDataLoader);

  return(
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/detailed-quest/:id"
        element={isDataLoaded ? <SpinerLoading /> : <DetailedQuest />}>

        </Route>
        <Route path="/contacts"
        element={<Contacts />}>

        </Route>
        <Route path="/"
          element={isDataLoaded ? <SpinerLoading /> : <Home />}>
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
