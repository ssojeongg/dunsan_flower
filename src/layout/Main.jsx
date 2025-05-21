import TitleTheme from '../components/TitleTheme';
import MainIntro from '../components/MainIntro';
import MainProps from '../components/MainProps';
import MainProps2 from '../components/MainProps2';
import MainBlog from '../components/MainBlog';
import MainMap from '../components/MainMap';

import mainImg1 from '../data/mainImg1';
import mainImg2 from '../data/mainImg2';

const Main = () => {
  return (
    <div className="Main">
      <TitleTheme title={"꽃매장 소개"} />
      <MainIntro />
      {mainImg1.map((section, idx) => (
        <MainProps
          key={idx}
          title={section.title}
          img1={section.items[0]?.img}
          name1={section.items[0]?.name}
          des1={section.items[0]?.des}
          img2={section.items[1]?.img}
          name2={section.items[1]?.name}
          des2={section.items[1]?.des}
          img3={section.items[2]?.img}
          name3={section.items[2]?.name}
          des3={section.items[2]?.des}
        />
      ))}
      <MainProps2
        title={mainImg2.title}
        img1={mainImg2.items[0].img}
        name1={mainImg2.items[0].name}
        img2={mainImg2.items[1].img}
        name2={mainImg2.items[1].name}
      />
      <TitleTheme title={"블로그"} />
      <MainBlog />
      <TitleTheme title={"오시는 길"} />
      <MainMap />
      <TitleTheme title={"이미지 갤러리"} />
    </div>
  );
};

export default Main;
