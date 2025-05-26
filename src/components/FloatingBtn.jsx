import { FaPhone, FaMapMarkerAlt, FaChevronUp } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faGift, faB } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/FloatingBtn.css'

import useSideMenuStore from '../store/sideMenuStore'

const FloatingBtn = () => {
const { sideMenuOpen } = useSideMenuStore();

 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
  <div className="FloatingBtn">
    <div className="fab_container">
        <div className="fab_buttons">
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
