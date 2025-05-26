import '../assets/css/MainProps.css';
import '../assets/responsive/R_MainProps.css'

import useIsMobile from '../assets/hooks/useIsMobile';

import useSideMenuStore from '../store/sideMenuStore'
import MobileMore from './MobileMore';


const MainProps = ({pageKey, title, name1, img1, des1, name2, img2, small, des2, name3, img3, des3}) => {
  const { sideMenuOpen } = useSideMenuStore();
  const isMobile = useIsMobile();
  return (
    <div className={`MainProps ${sideMenuOpen ? 'width' : ''}${isMobile ? `mobile_${pageKey}` : ''}`}>
      <div className="inner">
        <div className="main_props_title">
          <p className='title'>{title}</p>
          <p className="more">더보기 &gt;</p>
        </div>
        <div className="main_props_img">
          <div className="img_wrap">
            <div className="img_box">
              <img src={img1}/>
            </div>
            <div className="txt_box">
              <div className="img_name">{name1}</div>
              <div className="img_des">{des1}</div>
            </div>
          </div>
          <div className="img_wrap">
            <div className="img_box">
              <img src={img2}/>
            </div>
            <div className="txt_box">
              <div className="img_name">{name2}</div>
              <div className="img_small">{small}</div>
              <div className="img_des">{des2}</div>
            </div>
          </div>
          <div className="img_wrap">
            <div className="img_box">
              <img src={img3}/>
            </div>
            <div className="txt_box">
              <div className="img_name">{name3}</div>
              <div className="img_des">{des3}</div>
            </div>
          </div>
        </div>
      </div>
      <MobileMore />
    </div>
  )
}

export default MainProps