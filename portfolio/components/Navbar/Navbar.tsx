import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import style from './Navbar.module.css'

type NavbarItemProps = {
    name: string,
    activeItem: string,
    setActiveItem: Function,
    route: string
}


const NavbarItem: React.FunctionComponent<NavbarItemProps>  = ({activeItem , name , setActiveItem, route}) => {
    return name !== activeItem ?
    <Link href={route}>
        <a onClick={() => setActiveItem(name)} className={style.Links}>{name}</a>
    </Link> : null
}




const Navbar = () => {

    const {pathname} = useRouter();
    useEffect(() => {
    
        if(pathname === '/') setActiveItem('About')
        else if (pathname === 'projects') setActiveItem('Projects')
        else if (pathname === 'resume') setActiveItem('Resume')
    } , [])

    const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div className={style.navContainer}>
        <span className={style.currentLink}>{activeItem}</span>
        <div>
            <NavbarItem name="About" activeItem={activeItem} setActiveItem={setActiveItem} route="/"/>
            <NavbarItem name="Projects" activeItem={activeItem} setActiveItem={setActiveItem} route="/projects"/>
            <NavbarItem name="Resume" activeItem={activeItem} setActiveItem={setActiveItem} route="/resume"/>
        </div>

    </div>
  )
}

export default Navbar