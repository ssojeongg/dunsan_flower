import { FaPhone, FaMapMarkerAlt, FaChevronUp, FaEllipsisV, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faGift, faB } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/FloatingBtn.css';
import '../assets/responsive/R_FloatingBtn.css';

import useSideMenuStore from '../store/sideMenuStore';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FloatingBtn = () => {
  const [isFabOpen, setIsFabOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFab = () => setIsFabOpen(prev => !prev);

  const { sideMenuOpen } = useSideMenuStore();

  // resize 이벤트로 모바일 상태 체크
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const handleCallClick = () => {
    window.location.href = 'tel:0507-1455-6771';
  };

  return (
    <div className="FloatingBtn">
      {/* 오버레이 */}
      <div className="fab_overlay_area">
        <div className={`fab_overlay ${isFabOpen ? 'show' : ''}`} onClick={toggleFab} />
      </div>

      {/* Mobile FAB */}
      <div className="fab_container">
        {isMobile && (
          <button className="fab_main" onClick={toggleFab}>
            {isFabOpen ? <FaTimes /> : <FaEllipsisV />}
          </button>
        )}
        {isMobile && (
          <div className={`fab_buttons ${isFabOpen ? "show" : "close"}`}>
            <button className="fab_item">
              <div className="fab_pc_icon" onClick={handleCallClick}>
                <FaPhone />
                <span className="fab_text">대표번호</span>
              </div>
            </button>
            <button className="fab_item" onClick={() => setIsFabOpen(false)}>
              <Link to="/sub/10">
                <div className="fab_icon">
                  <FaMapMarkerAlt />
                  <span className="fab_text">오시는길</span>
                </div>
              </Link>
            </button>
            <button className="fab_item" onClick={() => { window.open("https://blog.naver.com/an-news/223733586157"); setIsFabOpen(false); }}>
              <div className="fab_pc_icon">
                <FontAwesomeIcon icon={faPen} />
                <span className="fab_text">포스트</span>
              </div>
            </button>
            <button className="fab_item" onClick={() => setIsFabOpen(false)}>
              <Link to="/sub/9">
                <div className="fab_icon">
                  <FontAwesomeIcon icon={faB} />
                  <span className="fab_text">블로그</span>
                </div>
              </Link>
            </button>
          </div>
        )}
      </div>

      {/* PC FAB */}
      <div className={`fab_pc_container ${sideMenuOpen ? 'width' : ''}`}>
        <div className="fab_pc_buttons">
          <button className="fab_pc_item" onClick={openModal}>
            <div className="fab_pc_icon">
              <FaPhone />
              <span className="fab_pc_text">대표번호</span>
            </div>
          </button>
          <button className="fab_pc_item">
            <Link to="/sub/10">
              <div className="fab_pc_icon">
                <FaMapMarkerAlt />
                <span className="fab_pc_text">오시는길</span>
              </div>
            </Link>
          </button>
          <button className="fab_pc_item" onClick={() => window.open("https://blog.naver.com/an-news/223733586157")}>
            <div className="fab_pc_icon">
              <FontAwesomeIcon icon={faPen} />
              <span className="fab_pc_text">포스트</span>
            </div>
          </button>
          <button className="fab_pc_item">
            <Link to="/sub/9">
              <div className="fab_pc_icon">
                <FontAwesomeIcon icon={faB} />
                <span className="fab_pc_text">블로그</span>
              </div>
            </Link>
          </button>
        </div>
        <button className="fab_pc_main" onClick={scrollToTop}>
          <FaChevronUp />
          <span>TOP</span>
        </button>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <>
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal">
            <div className="modal_area">
              <div className="modal_header">전화번호</div>
              <div className="modal_content">
                <p><strong>" 대전꽃배달 둔산플라워 "</strong> 입니다.</p>
                <p className="phone_number">0507-1455-6771</p>
                <p>전화연결은 모바일에서 가능합니다.</p>
              </div>
              <div className="modal_footer">
                <button className="close_btn" onClick={closeModal}>확인</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingBtn;