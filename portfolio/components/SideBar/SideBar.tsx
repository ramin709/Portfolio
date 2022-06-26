import React from 'react'
import style from './SideBar.module.css'
import Image from 'next/image'
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const SideBar = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/avatar.jpg" alt="avatar" width={150} height={150} className={style.image}></Image>
      </div>
      <h3 className={style.name}>
        <span className={style.firstName}>John </span>
        Doe
      </h3>

      <p className={style.title}>Web developer</p>


      <div className={style.resume}>
        <GiTie className={style.icons} />
        <a href="" className={style.resumeLink}>Download Resume</a>
      </div>

      <div className={style.socialMediaLinks}>
        <a href="">
          <AiFillGithub className={style.socialMediaIcons} />
        </a>

        <a href="">
          <AiFillLinkedin className={style.socialMediaIcons} />
        </a>

        <a href="">
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
        <button className={style.btn}>Email Me</button>
        <button className={style.btn}>Toggle theme</button>
      </div>
    </div>
  )
}

export default SideBar