import style from './SideBar.module.css'
import Image from 'next/image'
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

const SideBar = () => {

  const {theme , setTheme} = useTheme();


  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/avatar.webp" alt="avatar" width="200px" height="200px" layout="fixed" className={style.image} ></Image>
      </div>
      <h3 className={style.name}>
        <span className={style.firstName}>John </span>
        Doe
      </h3>

      <p className={style.title}>Web developer</p>


      <div className={style.resume}>
        <GiTie className={style.icons} />
        <a href="/empty.pdf" download="empty.pdf" className={style.resumeLink}>Download Resume</a>
      </div>

      <div className={style.socialMediaLinks}>
        <a href="#" aria-label="github">
          <AiFillGithub className={style.socialMediaIcons} />
        </a>

        <a href="#" aria-label="linkedIn">
          <AiFillLinkedin className={style.socialMediaIcons} />
        </a>

        <a href="#" aria-label="youtube">
          <AiFillYoutube className={style.socialMediaIcons} />
        </a>
      </div>

      <div className={style.contactInfo}>
        <div className={style.location}>
          <GoLocation className={style.icons} />
          <span className={style.info}>Berlin , Germany</span>
        </div>
        <span className={style.info}>JohnDoe@gmail.com</span>
        <span className={style.info}>87392133 / 32532312</span>
      </div>

      <div className={style.buttons}>
        <button className={style.btn} onClick = {() => window.open('mailto: rsafdart@gmail.com')}>Email Me</button>
        <button className={style.btn} onClick = {changeTheme}>Toggle theme</button>
      </div>
    </div>
  )
}

export default SideBar