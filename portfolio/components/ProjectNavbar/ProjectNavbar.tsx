import React, { FunctionComponent, MouseEvent } from 'react'
import { Category } from '../../type'
import style from './ProjectNavbar.module.css'

export type NavbarItemProps = {
    label: Category | 'all'
    onClick: Function
}

type ProjectNavbarProps = {
    handler: Function,
}

const NavbarItem:FunctionComponent<NavbarItemProps> = ({label}) => {
  return (
    <li className={style.item}>{label}</li>
  )
}

const ProjectNavbar: FunctionComponent<ProjectNavbarProps> = ({handler}) => {
  return (
    <ul className={style.list}>
        <NavbarItem label="all" onClick={() => handler('all')}/>
        <NavbarItem label="react" onClick={() => handler('react')}/>
        <NavbarItem label="mongo" onClick={() => handler('mongo')}/>
        <NavbarItem label="next" onClick={() => handler('next')}/>
        <NavbarItem label="node" onClick={() => handler('node')}/>
    </ul>
  )
}

export default ProjectNavbar