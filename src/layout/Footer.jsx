import "../assets/css/Footer.css"

import logo from "../assets/img/logo.jpeg"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inner">
        <div className="ft_top">
          <div className="search_area">
            <p className="keyword">
              대전꽃배달 둔산플라워@
            </p>
            <div className="ft_bottom">
          <div className="ft_left">
            <ul className="list_info">
              <li>둔산플라워</li>
              <li>윤동진</li>
              <li>대전광역시 서구 둔산로 137번길44 서림빌딩105호</li>
              <li>사업자등록번호 : 314-91-19236 </li>
            </ul>
            <ul className="list_info">
              <li>통신판매업 신고번호 : 제2013-대전서구-0310호 </li>
              <li>전화번호 : 042-483-5877 </li>
              <li>이메일 : sunja456123@naver.com </li>
            </ul>
          </div>
        </div>
          </div>
          <div className="ft_right">
            <p>계좌정보</p>
            <table>
              <tr>
                <th>예금주</th>
                <td>윤동진</td>
              </tr>
              <tr>
                <th>입금은행</th>
                <td>하나은행</td>
              </tr>
              <tr>
                <th>계좌번호</th>
                <td>637-175894-00108</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="search_logo">
            <img src={logo}/>
        </div>
      </div>
    </div>
  )
}

export default Footer