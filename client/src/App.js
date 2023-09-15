import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import './app.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Subscription from './components/Subscription';
import AboutPage from './pages/AboutPage/AboutPage';
import BasketPage from './pages/basketPage/BasketPage';
import CatalogPage from './pages/catalogPage/CatalogPage';
import ComparePage from './pages/comparePage/ComparePage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import FavouritesPage from './pages/favouritesPage/FavoritesPagePage';
import MainPage from './pages/mainPage/MainPage';
import MyPage from './pages/myPage/MyPage';
import NewsPage from './pages/newsPage/NewsPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import RegisterPageStageSecond from './pages/registerPage/RegisterPageStageSecond';
import RegisterPageStageThird from './pages/registerPage/RegisterPageStageThird';
import RulesPage from './pages/RulesPage/RulesPage';
import { getMe } from './redux/auth-reducer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContainer = (props) => {
  return (
    <App getMe={props.getMe} />
  )
}


const App = ({ getMe }) => {
  useEffect(() => {
    getMe()
  }, [getMe])
  return (
    <div className='app'>
      <Header />
      <div className='app__main'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/rules' element={<RulesPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/my' element={<MyPage />} />
          <Route path='/favourites' element={<FavouritesPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/register/stage2' element={<RegisterPageStageSecond />} />
          <Route path='/register/stage3' element={<RegisterPageStageThird />} />
        </Routes>
        <ToastContainer position='bottom-right' />
      </div>
      <div className='app__footer' >
        <Subscription />
        <Footer />
      </div>
    </div>
  );
}

export default connect(null, { getMe })(AppContainer);

