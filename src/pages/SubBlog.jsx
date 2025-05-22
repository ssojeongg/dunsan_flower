import '../assets/css/MainBlog.css'
import TitleTheme from '../components/TitleTheme'

import subBlogData from '../data/subBlogData'

const SubBlog = () => {
  return (
    <div className="MainBlog">
      <div className="inner">
        <TitleTheme title={"블로그"}/>
        <div className="blog_card_wrap">
            <div className="card_area sub" >
          {subBlogData.map((item, idx) => (
              <div className="card_bg" key={idx}>
                <div className="card_box">
                  <div className="card_txt">
                    <h3>{item.title}</h3>
                    <p className='content'>{item.content}</p>
                    <div className="hashtags">
                      {Array.isArray(item.hashtags) && item.hashtags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                  </div>
                  </div>
                <img src={item.image} alt={item.title} />
                </div>
                <div className="blog_des">
                  <p className="name">{item.blogName}</p>
                  <small>{item.date}</small>
                </div>
              </div>
          ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SubBlog
