import { useParams } from 'react-router-dom';
import '../assets/css/Subpage.css';
import '../assets/responsive/R_SubPage.css';

import subData from '../data/subData';
import TitleTheme from '../components/TitleTheme';

import useSideMenuStore from '../store/sideMenuStore';
import useIsMobile from '../assets/hooks/useIsMobile';
import { useState } from 'react';

const Subpage = () => {
  const { id } = useParams();
  const pageId = parseInt(id, 10);
  const currentData = subData.find(item => item.id === pageId);
  const { sideMenuOpen } = useSideMenuStore();
  const isMobile = useIsMobile();

  const className = `Subpage ${sideMenuOpen ? 'width' : ''} ${
    isMobile && [4, 5, 6, 7].includes(pageId) ? 'mobile_common' : `mobile_${pageId}`
  }`;

  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const openImgClick = (index) => {
    setSelectedImgIndex(index);
  };

  const closeImgClick = () => {
    setSelectedImgIndex(null);
  };

  return (
    <div className={className}>
      {currentData && <TitleTheme title={currentData.menu} />}
      <div className="inner">
        <div className="subpage_img">
          {currentData && currentData.img.length > 0 ? (
            currentData.img.map((imgSrc, index) => {
              const isBest = pageId === 3 && [2, 10, 13, 16, 21].includes(index);
              const isBest2 = pageId === 4 && [0, 5, 14].includes(index);
              const isBest3 = pageId === 6 && [5].includes(index);
              const isBest4 = pageId === 7 && [7, 9].includes(index);

              return (
                <div className="img_wrap" key={index}>
                  <div 
                    className="img_box" 
                    onClick={() => openImgClick(index)}
                  >
                    <img src={imgSrc} alt={currentData.title?.[index] || `이미지${index + 1}`} />
                    {(isBest || isBest2 || isBest3 || isBest4) && <span className="best_badge">BEST</span>}
                  </div>
                  <div className="txt_box">
                    <div className="top_row">
                      <p className="img_name">{currentData.title?.[index] || ''}</p>
                      <p className="img_price">{currentData.price?.[index] || ''}</p>
                    </div>
                    <p className="img_des">{currentData.des?.[index] || ''}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>해당 데이터가 없습니다.</p>
          )}
        </div>

        {/* 상세 이미지 모달 */}
        {selectedImgIndex !== null && (
          <div className="detail_overlay" onClick={closeImgClick}>
            <div className="detail_img_container" onClick={(e) => e.stopPropagation()}>
              <div className="button_area">
                <button className="close_btn" onClick={closeImgClick}>
                  ×
                </button>
              </div>
              <img
                src={currentData.img[selectedImgIndex]}
                alt={currentData.title?.[selectedImgIndex] || `상세 이미지 ${selectedImgIndex + 1}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subpage;