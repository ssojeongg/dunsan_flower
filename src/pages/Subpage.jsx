import { useParams } from 'react-router-dom';
import '../assets/css/Subpage.css';
import '../assets/responsive/R_SubPage.css';

import subData from '../data/subData';
import TitleTheme from '../components/TitleTheme';

import useSideMenuStore from '../store/sideMenuStore';
import useIsMobile from '../assets/hooks/useIsMobile';

const Subpage = () => {
  const { id } = useParams();
  const pageId = parseInt(id, 10);
  const currentData = subData.find(item => item.id === pageId);
  const { sideMenuOpen } = useSideMenuStore();
  const isMobile = useIsMobile();

  // ✅ 여기에 className 조건 추가
  const className = `Subpage ${sideMenuOpen ? 'width' : ''} ${
    isMobile && [4, 5, 6, 7].includes(pageId) ? 'mobile_common' : `mobile_${pageId}`
  }`;

  return (
    <div className={className}>
      {currentData && <TitleTheme title={currentData.menu} />}
      <div className="inner">
        <div className="subpage_img">
          {currentData && currentData.img.length > 0 ? (
            currentData.img.map((imgSrc, index) => (
              <div className="img_wrap" key={index}>
                <div className="img_box">
                  <img src={imgSrc} alt={currentData.title?.[index] || `이미지${index + 1}`} />
                </div>
                <div className="txt_box">
                  <div className="top_row">
                    <p className="img_name">{currentData.title?.[index] || ''}</p>
                    <p className="img_price">{currentData.price?.[index] || ''}</p>
                  </div>
                  <p className="img_des">{currentData.des?.[index] || ''}</p>
                </div>
              </div>
            ))
          ) : (
            <p>해당 데이터가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subpage;
