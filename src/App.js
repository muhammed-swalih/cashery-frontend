
import './App.css';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TabPage from './pages/TabPage';
import SalesPage from './pages/SalesPage';
import MarketingPage from './pages/MarketingPage';
import FinancialPage from './pages/FinancialPage';
import PurchasePage from './pages/PurchasePage';
import InventoryPage from './pages/InventoryPage';
import PosterOnePage from './pages/PosterOnePage';
import PosterTwo from './components/posterPopUps/PosterTwo';
import PosterThree from './components/posterPopUps/PosterThree';
import PosterFour from './components/posterPopUps/PosterFour';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUpPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/sidetab' element={<TabPage/>}/>
          <Route path='/sales' element={<SalesPage/>}/>
          <Route path='/marketing' element={<MarketingPage/>}/>
          <Route path='/financial' element={<FinancialPage/>}/>
          <Route path='/purchase' element={<PurchasePage/>}/>
          <Route path='/inventory' element={<InventoryPage/>}/>
          <Route path='/posterone' element={<PosterOnePage/>}/>
          <Route path='/postertwo' element={<PosterTwo/>}/>
          <Route path='/posterthree' element={<PosterThree/>}/>
          <Route path='/posterfour' element={<PosterFour/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
