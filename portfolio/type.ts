import {IconType} from 'react-icons'

export interface IServices {
    title : string,
    about: string,
    icon: IconType
}

export interface ISkill {
    name: string,
    level: string
}

export type Category = "react" | "node" | "mongo" | "express" | "next"

export interface IProject {
    name: string,
    deploy_url: string,
    github_url: string,
    image_src: string,
    description: string,
    category: Category[],
    tags: string[]
}