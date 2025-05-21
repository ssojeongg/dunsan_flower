import '../assets/css/Header.css'

import menus from '../data/menu'

import logo from '../assets/img/logo.jpeg'

const Header = () => {
  return (
    <div className="Header">
      <div className="header_bg">
        <div className="inner">
          <div className="header_gnb">
            <div className="header_nav">
              {
                menus.map((item) => (
                  <li key={item.id}>
                    {item.title}
                  </li>
                ))
              }
            </div>
            <div className="header_menu">
              <ul>
                <li>☰ 전체보기</li>
                <li>로그인</li>
              </ul>
            </div>
          </div>
          <div className="site_info">
            <div className="site_logo">
              <img src={logo} />
            </div>
            <div className="site_sub">
              <p className="site_name">대전꽃배달 둔산플라워</p>
              <p className="site_des">대전꽃배달 서구꽃배달 둔산동꽃배달 전국꽃배달 화환</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header