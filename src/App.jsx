import './assets/css/App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import FloatingBtn from './components/FloatingBtn';
import Footer from './layout/Footer';
import SubMap from './pages/SubMap';
import SubBlog from './pages/SubBlog';
import Subpage from './pages/Subpage';
import SubIntro from './pages/SubIntro';
import SubWreath from './pages/SubWreath';

import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

// 스와이프 페이지 순서 정의
const subPageOrder = [
  "/sub/1",
  "/sub/2",
  "/sub/3",
  "/sub/4",
  "/sub/5",
  "/sub/6",
  "/sub/7",
  "/sub/8",
  "/sub/9",
  "/sub/10"
];

// 스와이프 핸들러 컴포넌트
const SwipeHandler = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = subPageOrder.indexOf(location.pathname);

  const goToNextPage = () => {
    if (currentIndex !== -1 && currentIndex < subPageOrder.length - 1) {
      navigate(subPageOrder[currentIndex + 1]);
    }
  };

  const goToPrevPage = () => {
    if (currentIndex > 0) {
      navigate(subPageOrder[currentIndex - 1]);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNextPage,
    onSwipedRight: goToPrevPage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} style={{ height: '100%', width: '100%' }}>
      {children}
    </div>
  );
};

// App 컴포넌트
function App() {
  return (
    <BrowserRouter basename='/dunsan_flower/'>
      <SwipeHandler>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sub/1" element={<Main />} />
            <Route path="/sub/2" element={<SubIntro />} />
            <Route path="/sub/8" element={<SubWreath />} />
            <Route path="/sub/9" element={<SubBlog />} />
            <Route path="/sub/10" element={<SubMap />} />
            <Route path="/sub/:id" element={<Subpage />} />
          </Routes>
          <FloatingBtn />
          <Footer />
        </div>
      </SwipeHandler>
    </BrowserRouter>
  );
}

export default App;
