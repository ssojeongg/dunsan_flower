import NaverMap from "./NaverMap"

import '../assets/css/MainMap.css'
import '../assets/responsive/R_MainMap.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDiamondTurnRight, faClock, faPhone, faUser, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import MobileMore from "./MobileMore";


const MainMap = () => {
  return (
    <div className="MainMap">
      <div className="inner">
        <NaverMap />
        <div className="map_area">
          <div className="map_address">
            <div className="map_address_area">
            <h2>주소</h2>
            <p>대전광역시 서구 둔산동 1391</p>
            <h2>서림빌딩 1층 105호</h2>
          </div>          
            <div className="map_btn">
              <button><FontAwesomeIcon icon={faDiamondTurnRight} />&nbsp;&nbsp;길찾기</button>
              <button><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;지도에서보기</button>
            </div>
          </div>
          <div className="map_tel">
            <p><FontAwesomeIcon color="#ccc" icon={faPhone} />전화번호</p>
            <ul>
              <li>0507-1455-6771</li>
              <li>010-6788-6771</li>
            </ul>
          </div>
          <div className="map_time">
            <p><FontAwesomeIcon color="#ccc" icon={faClock} />이용시간</p>
            <p className='gray'>매일</p>
            <ul>
              <li>09:00~20:00</li>
              <li className="gray">일요일 휴무</li>
            </ul>
          </div>
        </div>
      </div>
      <MobileMore />
    </div>
  )
}

export default MainMap