import './assets/css/App.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import SubMap from './pages/SubMap'
import SubBlog from './pages/SubBlog'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/dunsan_flower/' element={<Main />} />
        <Route path='/map' element={<SubMap />} />
        <Route path='/blog' element={<SubBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
