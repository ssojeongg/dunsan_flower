import '../assets/css/MainProps.css';

const MainProps = ({title, name1, img1, des1, name2, img2, small, des2, name3, img3, des3}) => {
  return (
    <div className="MainProps">
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
    </div>
  )
}

export default MainProps