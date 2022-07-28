import React, { FunctionComponent, MouseEvent } from 'react'
import { Category } from '../../type'
import style from './ProjectNavbar.module.css'

export type NavbarItemProps = {
    label: Category | 'all'
    handler: Function
}

type ProjectNavbarProps = {
    handler: Function,
}

const NavbarItem:FunctionComponent<NavbarItemProps> = ({label , handler}) => {
  return (
    <li className={style.item} onClick={() => handler(label)}>{label}</li>
  )
}

const ProjectNavbar: FunctionComponent<ProjectNavbarProps> = (props) => {
  return (
    <ul className={style.list}>
        <NavbarItem label="all" {...props}/>
        <NavbarItem label="react" {...props}/>
        <NavbarItem label="mongo" {...props}/>
        <NavbarItem label="next" {...props}/>
        <NavbarItem label="node" {...props}/>
    </ul>
  )
}

export default ProjectNavbar