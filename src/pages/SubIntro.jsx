import '../assets/css/SubIntro.css'
import TitleTheme from '../components/TitleTheme'

import subIntroSlideData from '../data/subIntroSlideData'

import { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Thumbs } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/thumbs"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faGift } from '@fortawesome/free-solid-svg-icons';
import subIntroData from '../data/subIntroData'

const SubIntro = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="SubIntro">
      <TitleTheme title={"꽃매장 소개"} />
      <div className="inner">
        {/* 메인 슬라이드 */}
        <Swiper
          modules={[Autoplay, Pagination, Thumbs]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mainSwiper"
        >
          {subIntroSlideData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="intro_img_area">
                <div className="img_box">
                  <img src={item.img} alt={`슬라이드 이미지 ${index + 1}`} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 썸네일 슬라이드 */}
        <div className="thumbSwiper">
          {subIntroSlideData.map((item, index) => (
            <div 
              key={`thumb-${index}`} 
              className={`thumbnail_img_box ${activeIndex === index ? 'active' : ''}`}
              onClick={() => {
                if (thumbsSwiper) {
                  thumbsSwiper.slideToLoop(index)
                }
              }}
            >
              <img src={item.img} alt={`썸네일 ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="btn_area">
          <p className="btn order"><FontAwesomeIcon color='#fff' icon={faLocationDot} />&nbsp;&nbsp;주문예약</p>
          <p className="btn shopping"><FontAwesomeIcon color='#fff' icon={faGift} />&nbsp;&nbsp;쇼핑몰</p>
          <p className="btn order"><FontAwesomeIcon color="#fff" icon={faPhone} />&nbsp;&nbsp;오시는길</p>
        </div>
        <div className="sub_intro_video">
          <iframe src="https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=153D6F64932A9E74F35CBB16F34AC9175D92&outKey=V1256f640932a9e74f35cbb16f34ac9175d926910168df1adfaddbb16f34ac9175d92&width=544&height=306"></iframe>
        </div>
        <div className="sub_intro_img">
          {
            subIntroData && subIntroData.map ((item, index) => (
              <img src={item.img} key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SubIntro