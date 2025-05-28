import '../assets/responsive/R_MainCenter.css'

import mainGalleryImg from '../data/mainGalleryImg'
import g1 from '../assets/img/g1.jpeg' 
import g2 from '../assets/img/g2.jpeg' 
import g3 from '../assets/img/g3.jpeg' 

import { useState } from 'react'

const MainCenter = () => {
  const [openImg, setOpenImg] = useState(false)
  const [selectedImgIndex, setSelectedImgIndex] = useState(null)

  const openImgClick = () => {
    setOpenImg(true)
  }

  const closeImgClick = () => {
    setOpenImg(false)
    setSelectedImgIndex(null)
  }

  const selectImage = (index) => {
    setSelectedImgIndex(index)
  }

  return (
    <div className="MainCenter">
      
      <div className="inner">
        {/* 첫 이미지 박스 */}
        <div onClick={openImgClick} className="first_img_box">
          <img src={g1} alt="대표 이미지" />
          <div className="right_img_box">
            <img src={g2} alt="서브 이미지 1" />
            <img src={g3} alt="서브 이미지 2" />
          </div>
        </div>

        {/* 갤러리 이미지들 */}
        <div className={`second_img_box ${openImg ? 'show' : ''}`}>
          <div className="btn_img_area">
            <button className="close_btn" onClick={closeImgClick}>
              ×<p>&nbsp;&nbsp;홈</p>
            </button>
          </div>

          {mainGalleryImg.map((img, idx) => (
            <div
              key={idx}
              className={`img_box img${idx + 1}`}
              onClick={() => selectImage(idx)}
            >
              <img src={img} alt={`갤러리 이미지 ${idx + 1}`} />
            </div>
          ))}

          {/* 상세 이미지 오버레이 */}
          {selectedImgIndex !== null && (
            <div className="detail_overlay" onClick={() => setSelectedImgIndex(null)}>
              <div className="detail_img_container">
                <img
                  src={mainGalleryImg[selectedImgIndex]}
                  alt={`상세 이미지 ${selectedImgIndex + 1}`}
                />
              </div>
            </div>
          )}
        </div>

        {/* 하단 정보 영역 */}
        {openImg && (
          <div className="bottom_info_area">
            <div className="info_right">
              {selectedImgIndex !== null ? (
                <span>
                  <span style={{ color: 'var(--color-green, #00ff00)' }}>
                    {selectedImgIndex + 1}
                  </span>
                  {' / '}{mainGalleryImg.length}
                </span>
              ) : (
                <span>0 / {mainGalleryImg.length}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainCenter
