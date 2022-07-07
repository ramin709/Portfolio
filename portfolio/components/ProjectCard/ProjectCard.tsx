import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../../type'
import style from './ProjectCard.module.css'

type ProjectCardProps = {
    project: IProject
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {

    const { name, description, github_url, deploy_url, image_src, tags, category } = project;
    const [show, setShow] = useState(false);

    return (
        <>
            <div onClick={() => setShow(true)}>
                <img src={image_src} alt={name} className={style.imgProject} />
                <p className={style.title}>{name}</p>
            </div>

            {
                show &&
                <div className={style.card}>
                    <img src={image_src} alt={name} className={style.imgProjectCard} />
                    <p className={style.title}>{name}</p>
                    <p>{description}</p>
                    <div>
                        <a href={github_url}>
                            Github
                        </a> <AiFillGithub />

                        <a href={deploy_url}>
                            Project
                        </a> <AiFillProject />
                    </div>

                    <div className={style.tagContainer}>
                        {
                            tags.map(tag => (<div>{tag}</div>)
                                )
                        }
                    </div>

                    <MdClose onClick={() => setShow(false)} className={style.icon}/>
                </div>
            }
        </>
    )
}

export default ProjectCard