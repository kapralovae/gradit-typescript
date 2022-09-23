import App from './components/app/app';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { requestQuests } from './action';
import { changeFilteredQuests } from './store/quests-data/reducer-data';
import { useAppDisptach } from './hooks';
import { getQuestsFromServer } from './store/quests-process/selectors';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


store.dispatch(requestQuests());
store.dispatch(changeFilteredQuests());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
