import '../assets/css/MainBlog.css'
import '../assets/responsive/R_MainBlog.css'

import mainBlogData from '../data/mainBlogData'
import MobileMore from './MobileMore'

import blogLogo from '../assets/img/bloglogo.png'

const MainBlog = () => {
  return (
    <div className="MainBlog">
      <div className="inner">
        <div className="blog_card_wrap">
            <div className="card_area" >
          {mainBlogData.map((item, idx) => (
              <div className="card_bg" key={idx}>
                <div className="card_box">
                  <div className="card_txt">
                    <h3>{item.title}</h3>
                    <p className='content'>{item.content}</p>
                    <div className="hashtags">
                      {item.hashtags.map((tag, i) => (
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

export default MainBlog