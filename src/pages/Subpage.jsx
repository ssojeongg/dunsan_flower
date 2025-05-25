import { useParams } from 'react-router-dom';
import '../assets/css/Subpage.css';
import subData from '../data/subData';
import TitleTheme from '../components/TitleTheme'; // TitleTheme import 추가

import useSideMenuStore from '../store/sideMenuStore'

const Subpage = () => {
  const { id } = useParams();
  const pageId = parseInt(id, 10);
  const currentData = subData.find(item => item.id === pageId);
  const { sideMenuOpen } = useSideMenuStore();

  return (
    <div className={`Subpage ${sideMenuOpen ? 'width' : ''}`}>
      <div className="inner">
        {currentData && <TitleTheme title={currentData.menu} />}

        <div className="subpage_img">
          {currentData && currentData.img.length > 0 ? (
            currentData.img.map((imgSrc, index) => (
              <div className="img_wrap" key={index}>
                <div className="img_box">
                  <img src={imgSrc} alt={currentData.title?.[index] || `이미지${index + 1}`} />
                </div>
                <div className="txt_box">
                  <p className="img_name">{currentData.title?.[index] || ''}</p>
                  <p className="img_price">{currentData.price?.[index] || ''}</p>
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
