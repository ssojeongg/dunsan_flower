import '../assets/css/MainIntro.css'
import '../assets/responsive/R_MainIntro.css'

import useSideMenuStore from '../store/sideMenuStore'
import MobileMore from './MobileMore';

const MainIntro = () => {
  const { sideMenuOpen } = useSideMenuStore();
  return (
    <div className={`MainIntro ${sideMenuOpen ? 'width' : ''}`}>
      <div className="inner">
        <div className="main_intro_video">
          <iframe src="https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=153D6F64932A9E74F35CBB16F34AC9175D92&outKey=V1256f640932a9e74f35cbb16f34ac9175d926910168df1adfaddbb16f34ac9175d92&width=544&height=306"></iframe>
        </div>
      </div>
        <MobileMore />
    </div>
  )
}

export default MainIntro