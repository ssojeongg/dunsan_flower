import '../assets/css/SubWreath.css'
import TitleTheme from '../components/TitleTheme'

import subWreathData from '../data/subWreathData'

import useSideMenuStore from '../store/sideMenuStore'

const SubWreath = () => {
  const { sideMenuOpen } = useSideMenuStore();
  return (
    <div className={`SubWreath ${sideMenuOpen ? 'width' : ''}`}>
      <TitleTheme  title={"축하근조화환"} />
      <div className="inner">
        <div className="sub_wreath_area">
          {
            subWreathData && subWreathData.map((item, index) => (
              <div className="sub_wreath_box" key={index}>
                <img src={item.img}  />
                <p>{item.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SubWreath