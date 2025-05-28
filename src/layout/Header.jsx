import '../assets/css/Header.css';
import '../assets/responsive/R_Header.css'

import menus from '../data/menu';
import logo from '../assets/img/logo.jpeg';

import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faGift, faB, faXmark, faPhone, faCircleExclamation, faPowerOff,faArrowUpFromBracket, faMessage } from '@fortawesome/free-solid-svg-icons';

import useSideMenuStore from '../store/sideMenuStore';


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { sideMenuOpen, openMenu, closeMenu } = useSideMenuStore();

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

  const goToMain = () => {
    setSelectedMenu(null); // 메인일 경우 선택 메뉴 해제
    navigate('/dunsan_flower/');
  };

  const handleShowClick = () => {
    setShow(true);
  }
  const handleHideClick = () => {
    setShow(false);
  }
  
  const handleCallClick = () => {
    window.location.href = 'tel:0507-1455-6771';
  };

  return (
    <div className={sideMenuOpen ? 'Header width' : 'Header'}>
      <div className={`header_gnb ${scrollPosition >= 100 ? 'change' : ''} ${sideMenuOpen ? 'shift' : ''} ${selectedMenu !== null && selectedMenu !== 1 ? 'bg_change' : ''}`}>
        <div className="header_gnb_inner">
          <p onClick={openMenu}>☰</p>
          <p onClick={goToMain} className={selectedMenu && selectedMenu !== 1 ? 'logo show' : 'logo'}>
              대전꽃배달 둔산플라워
          </p>
          <div className="header_nav">
            <ul>
            {menus.map((item) => (
              <li
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`
                  ${selectedMenu === item.id ? 'green' : ''}
                  ${selectedMenu && selectedMenu !== 1 && selectedMenu !== String(item.id) ? 'gray' : ''}
                `}
              >
                {item.title}
              </li>
            ))}
            </ul>
          </div>
          <div className="header_menu">
            <ul>
              <li className={selectedMenu && selectedMenu !== 1 ? 'black' : ''} onClick={openMenu}>
                ☰ 전체보기
              </li>
              <li className={selectedMenu && selectedMenu !== 1 ? 'gray' : ''}>로그인</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={selectedMenu && selectedMenu !== 1 ? 'header_bg none' : 'header_bg'}>
        <div className="inner">
          <div className="site_info">
            <div className="site_logo">
              <img src={logo} alt="로고" />
            </div>
            <div className="site_sub">
              <p className="site_name">대전꽃배달 둔산플라워</p>
              <p className="site_des">대전꽃배달 서구꽃배달 둔산동꽃배달 전국꽃배달 화환</p>
            </div>
            <div className="site_icon">
              <div className="site_buttons">
                <button className="site_item" onClick={handleCallClick}>
                  <div className="site_img_box">
                    <FaPhone />
                  </div>
                    <span className="site_text">전화</span>
                </button>
                  <Link to="/sub/10">
                <button className="site_item" onClick={() => setIsFabOpen(false)}>
                    <div className="site_img_box">
                      <FaMapMarkerAlt />
                    </div>  
                      <span className="site_text">오시는길</span>
                </button>
                  </Link>
                  <button className="site_item" onClick={() => { window.open("https://blog.naver.com/an-news/223733586157"); setIsFabOpen(false); }}>
                    <div className="site_img_box">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <span className="site_text">포스트</span>
                </button>
                <button className="site_item" >
                  <div className="site_img_box">
                    <FontAwesomeIcon icon={faGift} />
                  </div>
                  <span className="site_text">쇼핑몰</span>
                </button>
                  <Link to="/sub/9">
                <button className="site_item">
                    <div className="site_img_box">
                      <FontAwesomeIcon icon={faB} />
                    </div>
                    <span className="site_text">블로그</span>
                </button> 
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={selectedMenu && selectedMenu !== 1 ? 'header_dummy none' : 'header_dummy'} />

      {sideMenuOpen && (
        <div className="side_menu_bar open">
            <div className="logo_area">
              <p onClick={goToMain} className="side_logo">대전꽃배달 둔산 플라워</p>
              <button onClick={closeMenu}>
                <FontAwesomeIcon icon={faXmark} size="2x" />
              </button>
            </div>
            <div className="mob_logo_area">
              <div className="mob_top">
              <div className="logo_img_box">
                  <img src={logo} />
              </div>
                <div className="close">
                  <button onClick={() => closeMenu()}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
              </div>
              <div className="title_area">
                <div className="logo_txt">
                  <small>꽃집</small>
                  <p>대전꽃배달 둔산플라워</p>
                </div>
              </div>
              <div className="icon_area">
                <p><FontAwesomeIcon icon={faPowerOff} className='fab'/>로그인</p>
                <p><FontAwesomeIcon icon={faArrowUpFromBracket} className='fab' />공유하기</p>
                <p><FontAwesomeIcon icon={faMessage} className='fab' />톡톡하기</p>
                <p onClick={handleCallClick}><FaPhone className='fab' />전화하기</p>
              </div>
              <div className="click_area">
                <div className="show_btn_area">
                  <p onClick={handleShowClick} className={`${show ? 'mob_hide' : '' }`}>▼</p>
                </div>
                <div className={`${show ? 'show_area mob_show' : 'show_area' }`}>
                  <p className="bold">입금계좌</p>
                  <div className="show_des_area">
                    <ul>
                      <li className='gray'>예금주</li>
                      <li className='gray'>하나은행</li>
                    </ul>
                    <ul>
                      <li>윤동진</li>
                      <li>637-175894-00108</li>
                    </ul>
                  </div>
                  <ul>
                    <li><FontAwesomeIcon color="#ccc" icon={faCircleExclamation} />&nbsp;&nbsp;사업자정보를 꼭 확인 후 이체하세요.</li>
                  </ul>
                  <div className="hide_area">
                    <p onClick={handleHideClick} className={`${show ? 'mob_show' : '' }`}>▲</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_nav">
              <ul>
                {menus.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={selectedMenu === item.id ? 'white' : ''}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      )}
    </div>
  );
};

export default Header;
