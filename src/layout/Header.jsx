import '../assets/css/Header.css';

import menus from '../data/menu';
import logo from '../assets/img/logo.jpeg';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const navigate = useNavigate();

   useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleMenuClick = (id) => {
    if (id === 1) {
      navigate('/dunsan_flower/');
    }
    else if (id === 9) {
      navigate('/blog');
    }
    else if (id === 10) {
      navigate('/map');
    } 
  };

  return (
    <div className="Header">
      <div className={scrollPosition < 100 ? "header_gnb" : "change header_gnb"}>
        <div className="header_gnb_inner">
          <div className="header_nav">
            {menus.map((item) => (
              <li key={item.id} onClick={() => handleMenuClick(item.id)}>{item.title}</li>
            ))}
          </div>
          <div className="header_menu">
            <ul>
              <li>☰ 전체보기</li>
              <li>로그인</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header_bg">
        <div className="inner">
          <div className="site_info">
            <div className="site_logo">
              <img src={logo} alt="로고" />
            </div>
            <div className="site_sub">
              <p className="site_name">대전꽃배달 둔산플라워</p>
              <p className="site_des">
                대전꽃배달 서구꽃배달 둔산동꽃배달 전국꽃배달 화환
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
