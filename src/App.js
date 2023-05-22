import {Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { Header } from './Components/Main/Header'
import { AddNews } from './Pages/AddNews';
import { Sport } from './Pages/Sport';
import { HotNews } from './Pages/HotNews';
import { Settings } from './Pages/Settings'
import { CriminalPage } from './Pages/Criminal';
import { PoliticPage } from './Pages/Politic';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  AOS.init();

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/add_news' element={ <AddNews /> } />
            <Route path='/sport' element={<Sport />} />
            <Route path="/hot_news" element={<HotNews />} />
            <Route path="/settings" element={<Settings />} />
            <Route path='/criminal' element={<CriminalPage />} />
            <Route path='/politic' element={<PoliticPage />} />
        </Routes>
    </div>
  );
}

export default App;
