import React from 'react';
import HistoryRouter from "./history-router";
import browserHistory from "../const/history";
import {Route, Routes} from "react-router-dom";
import {AppRouter} from "../const/consts";
import {MainPage} from "../../pages/main-page";
import {CatalogPage} from "../../pages/catalog-page";
import {SalePage} from "../../pages/sale-page";
import {BasketPage} from "../../pages/basket-page";
import {ProfilePage} from "../../pages/profile-page";



function App() {
  return (
      <HistoryRouter history={browserHistory}>
          <Routes>
              <Route index path={AppRouter.MAIN} element={<MainPage/>}/>
              <Route path={AppRouter.CATALOG} element={<CatalogPage/>}/>
              <Route path={AppRouter.SALE} element={<SalePage/>}/>
              <Route path={AppRouter.BASKET} element={<BasketPage/>}/>
              <Route path={AppRouter.PROFILE} element={<ProfilePage/>}/>
              <Route path={'*'}/>
          </Routes>
      </HistoryRouter>
  );
}

export default App;
