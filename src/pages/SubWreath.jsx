import '../assets/css/SubWreath.css'
import TitleTheme from '../components/TitleTheme'

import subWreathData from '../data/subWreathData'

const SubWreath = () => {
  return (
    <div className='SubWreath'>
      <div className="inner">
        <TitleTheme  title={"축하근조화환"} />
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