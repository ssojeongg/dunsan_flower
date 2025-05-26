import '../assets/css/MainGallery.css';
import mainGalleryImg from '../data/mainGalleryImg';

import { useState } from 'react';

const MainGallery = () => {
  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(true);
  }

  return (
    <div className="MainGallery">
      <div className="inner">
        <div className={`${show ? 'img_area show' : 'img_area' }`}>
          {mainGalleryImg.map((img, idx) => (
            <div key={idx} className={`img_box img${idx + 1}`}>
              <img src={img} alt={`갤러리 이미지 ${idx + 1}`} />
            </div>
          ))}
        </div>
        {!show && (
        <div className="main_gallery_btn">
          <button onClick={handleShowClick}>더보기</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default MainGallery;
