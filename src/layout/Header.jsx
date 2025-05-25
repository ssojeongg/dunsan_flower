import '../assets/css/Header.css';

import menus from '../data/menu';
import logo from '../assets/img/logo.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const navigate = useNavigate();
   const [selectedMenu, setSelectedMenu] = useState(null);
   const [sideMenuOpen, setSideMenuOpen] = useState(false);


   useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleMenuClick = (menuId) => {
    const selectedMenu = menus.find((m) => m.id === menuId);
    if (selectedMenu) {
      setSelectedMenu(menuId);
      if (selectedMenu.title.length > 0) {
        navigate(`/sub/${menuId}`);
      } 
    }
  };
  const openMenu = () => {
    setSideMenuOpen(true);
  };

  const closeMenu = () => {
    setSideMenuOpen(false)
  }
  return (
    <div className="Header">
      <div className={scrollPosition < 100 ? "header_gnb" : "change header_gnb"}>
        <div className="header_gnb_inner">
          <div className="header_nav">
            {menus.map((item) => (
              <li key={item.id} onClick={() => handleMenuClick(item.id)} className={selectedMenu === item.id ? 'green' : ''}>{item.title}</li>
            ))}
          </div>
          <div className="header_menu">
            <ul>
              <li onClick={() => openMenu()}>☰ 전체보기</li>
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
      {sideMenuOpen && (
      <div className="side_menu_bar">
        <div className="inner">
          <div className="logo_area">
            <p className="logo">
              대전꽃배달 둔산 플라워
            </p>
             <button onClick={() => closeMenu()} ><FontAwesomeIcon icon={faXmark} size='2x' /></button>
          </div>
          <div className="header_nav">
            <ul>
              {menus.map((item) => (
                <li key={item.id} onClick={() => handleMenuClick(item.id)} className={selectedMenu === item.id ? 'white' : ''} >{item.title}</li>
              ))}
            </ul>
          </div>   
        </div>
      </div>
    )}
    </div>
  );
};

export default Header;
