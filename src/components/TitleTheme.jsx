import '../assets/css/TitleTheme.css'

const TitleTheme = ({title, more}) => {
  return (
    <div className="TitleTheme">
      <div className="inner">
        <div className="main_intro_title">
          <p className='title'>{title}</p>
          <p className="more">{more}</p>
        </div>
      </div>
    </div>
  )
}

export default TitleTheme