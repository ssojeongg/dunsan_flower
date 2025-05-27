import '../assets/css/SubBlog.css'
import '../assets/responsive/R_SubBlog.css'

import subBlogData from '../data/subBlogData.js'

import blogLogo from '../assets/img/bloglogo.png'
import MobileMore from '../components/MobileMore'
import TitleTheme from '../components/TitleTheme'

const SubBlog = () => {
  return (
    <div className="SubBlog">
      <TitleTheme title={"블로그"} more={"블로그 에서 더보기 >"} />
      <div className="inner">
        <div className="blog_card_wrap">
            <div className="card_area" >
          {subBlogData && subBlogData.map((item, idx) => (
              <div className="card_bg" key={idx}>
                <div className="card_box">
                  <div className="card_txt">
                    <h3>{item.title}</h3>
                    <p className='content'>{item.content}</p>
                    <div className="hashtags">
                      {item.hashtags && item.hashtags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  </div>
                <img className='content_img' src={item.image} alt={item.title} />
                </div>
                <div className="blog_des">
                  <div className="blog_tit_area">
                    <div className="blog_logo_area">
                      <img className='blog_logo' src={blogLogo} />
                    </div>
                    <p className="name">{item.blogName}</p>
                    <p className="mobile_name">sunja456123</p>
                  </div>
                  <small>{item.date}</small>
                </div>
              </div>
          ))}
          </div>
        </div>
      </div>
      <MobileMore />
    </div>
  )
}

export default SubBlog
