import React from 'react';
import HistoryRouter from "./history-router";
import browserHistory from "../const/history";
import {Route, Routes} from "react-router-dom";
import {AppRouter} from "../const/consts";
import {MainPage} from "../../pages/main-page";



function App() {
  return (
      <HistoryRouter history={browserHistory}>
          <Routes>
              <Route index path={AppRouter.MAIN} element={<MainPage/>}/>
              <Route path={AppRouter.CATALOG}/>
              <Route path={AppRouter.SALE}/>
              <Route path={AppRouter.BASKET}/>
              <Route path={AppRouter.PROFILE}/>
              <Route path={'*'}/>
          </Routes>
      </HistoryRouter>
  );
}

export default App;
