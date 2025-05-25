import '../assets/css/MainProps2.css';

import useSideMenuStore from '../store/sideMenuStore'

const MainProps2 = ({title, name1, img1, name2, img2}) => {
  const { sideMenuOpen } = useSideMenuStore();
  return (
      <div className={`MainProps2 ${sideMenuOpen ? 'width' : ''}`}>
      <div className="inner">
        <div className="main_props_title">
          <p className='title'>{title}</p>
          <p className="more">더보기 &gt;</p>
        </div>
        <div className="main_props_img">
          <div className="img_wrap2">
            <div className="img_box2">
              <img src={img1}/>
            </div>
            <div className="txt_box">
              <div className="img_name">{name1}</div>
            </div>
          </div>
          <div className="img_wrap2">
            <div className="img_box2">
              <img src={img2}/>
            </div>
            <div className="txt_box">
              <div className="img_name">{name2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainProps2