import SubNaverMap from "../components/SubNaverMap"

import '../assets/css/SubMap.css'
import '../assets/responsive/R_SubMap.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDiamondTurnRight, faClock, faPhone, faUser, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import TitleTheme from "../components/TitleTheme";

import useSideMenuStore from '../store/sideMenuStore'

const SubMap = () => {
  const { sideMenuOpen } = useSideMenuStore();
  return (
    <div className={`SubMap ${sideMenuOpen ? 'width' : ''}`}>
        <TitleTheme title={"오시는 길"} />
      <div className="inner">
        <SubNaverMap />
        <div className="map_area">
          <div className="map_address">
            <div className="map_address_area">
            <h2>주소</h2>
            <p>대전광역시 서구 둔산동 1391</p>
            <h2>서림빌딩 1층 105호</h2>
          </div>          
            <div className="map_btn">
              <button><FontAwesomeIcon icon={faDiamondTurnRight} />길찾기</button>
              <button><FontAwesomeIcon icon={faLocationDot} />지도에서보기</button>
            </div>
          </div>
          <div className="map_visit">
            <p><FontAwesomeIcon color="#ccc" icon={faLocationDot} />오시는길</p>
            <p className="gray">주차정보</p>
            <p>1시간 무료</p>
          </div>  
          <div className="map_time">
            <p><FontAwesomeIcon color="#ccc" icon={faClock} />이용시간</p>
            <p className='gray'>매일</p>
            <ul>
              <li>09:00~20:00</li>
              <li className="gray">일요일 휴무</li>
            </ul>
          </div>
          <div className="map_tel">
            <p><FontAwesomeIcon color="#ccc" icon={faPhone} />&nbsp;&nbsp;전화번호</p>
            <ul>
              <li>0507-1455-6771</li>
              <li>010-6788-6771</li>
            </ul>
          </div>
          <div className="map_info">
            <p><FontAwesomeIcon color="#ccc" icon={faUser} />&nbsp;&nbsp;입금계좌</p>
            <div className="map_info_area">
            <ul className='gray'>
              <li>예금주</li>
              <li>입금은행</li>
              <li>계좌번호</li>
            </ul>
            <ul>
              <li>윤동진</li>
              <li>하나은행</li>
              <li>637-175894-00108</li>
              <li>bc1592@naver.com</li>
            </ul>
          </div>
          </div>
          <ul>
            <li><FontAwesomeIcon color="#ccc" icon={faCircleExclamation} />&nbsp;&nbsp;사업자정보를 꼭 확인 후 이체하세요.</li>
            <li>계좌 신고여부 확인</li>
          </ul>
        </div>
        <div className="mob_map_area">
          <div className="mob_map_address">
            <div className="map_address_area">
              <p className="bold">대전광역시 서구 둔산동 1391</p>
              <h2>서림빌딩 1층 105호</h2>
            </div>          
          </div> 
          <div className="mob_map_tel">
            <p className="bold">전화번호</p>
            <ul>
              <li>0507-1455-6771</li>
              <li>010-6788-6771</li>
            </ul>
          </div>
          <div className="mob_map_time">
            <p className="bold">이용시간</p>
            <div className="time_box">
              <p className='gray'>매일</p>
              <ul>
                <li>09:00~20:00</li>
                <li className="gray">일요일 휴무</li>
              </ul>
            </div>  
          </div>
          <div className="mob_map_visit">
            <p className="bold">주차정보</p>
            <p>1시간 무료</p>
          </div> 
          <div className="mob_map_info">
            <p className="bold">입금계좌</p>
            <div className="mob_map_info_area">
            <ul>
              <li className="gray">예금주</li>
              <li className="gray">하나은행</li>
            </ul>
            <ul>
              <li>윤동진</li>
              <li>637-175894-00108</li>
            </ul>
          </div>
          </div>
          <ul>
            <li className="gray"><FontAwesomeIcon color="#ccc" icon={faCircleExclamation} />&nbsp;&nbsp;사업자정보를 꼭 확인 후 이체하세요.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubMap