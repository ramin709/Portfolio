import React from 'react'
import style from './SideBar.module.css'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <Image src="/avatar.jpg" alt="avatar" width={300} height={300}  ></Image>
      </div>
      <h3 className="name">
        <span className="firstName">John</span>
        Doe
      </h3>

      <p className="title">Web developer</p>
      <p className="title">Download Resume</p>

      <div className={style.contactInfo}>
        <span className={style.info}>Berlin , Germany</span>
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