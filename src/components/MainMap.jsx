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
              <button onClick={() => window.open("https://map.naver.com/p/directions/-/14180938.05727241,4349344.189872286,%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EB%91%94%EC%82%B0%EB%8F%99%201391,,/-/transit?c=14180938.05727241,4349344.189872286,15,0,0,0,dh?c=,,15,0,0,0,dh")}><FontAwesomeIcon icon={faDiamondTurnRight} />&nbsp;&nbsp;길찾기</button>
              <button onClick={() => window.open("https://map.naver.com/p/?title=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EB%91%94%EC%82%B0%EB%8F%99%201391&lng=127.389534&lat=36.3532982&zoom=13&type=0")}><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;지도에서보기</button>
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