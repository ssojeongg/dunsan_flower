import './assets/css/App.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import SubMap from './pages/SubMap'
import SubBlog from './pages/SubBlog'
import Subpage from './pages/Subpage'
import SubIntro from './pages/SubIntro'
import SubWreath from './pages/SubWreath'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dunsan_flower/" element={<Main />} />
        <Route path="/sub/1" element={<Main />} />
        <Route path="/sub/2" element={<SubIntro />} />
        <Route path="/sub/:id" element={<Subpage />} />
        <Route path='/sub/8' element={<SubWreath />} />
        <Route path='/sub/9' element={<SubBlog />} />
        <Route path='/sub/10' element={<SubMap />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
