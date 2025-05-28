import { FaPhone, FaMapMarkerAlt, FaChevronUp,FaEllipsisV,FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faGift, faB } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/FloatingBtn.css'
import '../assets/responsive/R_FloatingBtn.css'


import useSideMenuStore from '../store/sideMenuStore'
import { useState } from "react";

const FloatingBtn = () => {
  const { sideMenuOpen } = useSideMenuStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const openModal = () => setIsOpen(true);
const closeModal = () => setIsOpen(false);

const toggleFab = () => {
    setIsOpen(prev => !prev);
  };

  return (
  <div className="FloatingBtn">

    {/* 배경 블러 오버레이 */}
      <div className={`fab_overlay ${isOpen ? 'show' : ''}`} onClick={toggleFab} />

    <div className="fab_container">
      {isMobile && (
          <button className="fab_main" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaEllipsisV />}
          </button>
        )}
        {isMobile && (
        <div className={`fab_buttons ${isOpen ? "show" : "close"}`}>
          <button className="fab_item">
            <FaPhone />
            <span className="fab_text">대표번호</span>
          </button>
          <button className="fab_item">
            <FaMapMarkerAlt />
            <span className="fab_text">오시는길</span>
          </button>
          <button className="fab_item">
            <FontAwesomeIcon icon={faPen} />
            <span className="fab_text">포스트</span>
          </button>
          <button className="fab_item">
            <FontAwesomeIcon icon={faGift} />
            <span className="fab_text">쇼핑몰</span>
          </button>
          <button className="fab_item">
            <FontAwesomeIcon icon={faB} />
            <span className="fab_text">블로그</span>
          </button>
        </div>
        )}
    </div>

    


      {/* pc 버전 */}
      <div className={`fab_pc_container ${sideMenuOpen ? 'width' : ''}`}>
      <div className="fab_pc_buttons">
        {/* 대표번호 버튼 */}
        <button className="fab_pc_item">
          <div className="fab_pc_icon">
            <FaPhone />
            <span className="fab_pc_text">대표번호</span>
          </div>
        </button>
        <button className="fab_pc_item">
          <div className="fab_pc_icon">
            <FaMapMarkerAlt />
            <span className="fab_pc_text">오시는길</span>
          </div>
        </button>
        <button className="fab_pc_item">
          <div className="fab_pc_icon">
            <FontAwesomeIcon icon={faPen} />
            <span className="fab_pc_text">포스트</span>
          </div>
        </button>
        <button className="fab_pc_item">
          <div className="fab_pc_icon">
            <FontAwesomeIcon icon={faGift} />
            <span className="fab_pc_text">쇼핑몰</span>
          </div>
        </button>
        <button className="fab_pc_item">
          <div className="fab_pc_icon">
            <FontAwesomeIcon icon={faB} />
            <span className="fab_pc_text">블로그</span>
          </div>
        </button>
      </div>
      <button className="fab_pc_main" onClick={scrollToTop}>
        <FaChevronUp /><span>TOP</span>
      </button>
    </div>
  </div>
  );
};

export default FloatingBtn;
