import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../../type'
import Image from 'next/image'
import {motion} from 'framer-motion'
import style from './ProjectCard.module.css'

type ProjectCardProps = {
    project: IProject
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {

    const { name, description, github_url, deploy_url, image_src, tags, category } = project;
    const [show, setShow] = useState(false);

    const animation = {
        initial: {
          y: 100,
          opacity: 0
        },
    
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          }
        }
      }

      const outerAnimation = {
        initial: {
            
        },
    
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }

    return (
        <>
            <div onClick={() => setShow(true)}>
                <Image src={image_src} alt={name} width="300px" height="200px" className={style.imgProject} loading="lazy"/>
                <p className={style.title}>{name}</p>
            </div>

            {
                show &&
                <motion.div className={style.card} initial="initial" animate="animate" variants={outerAnimation}>
                    <div className={style.cardTop}>
                        <Image src={image_src} width="400px" height="200px" alt={name} className={style.imgProjectCard} loading="lazy" />
                        <div className={style.infoSection}>
                            <motion.p className={style.title}  variants={animation}>{name}</motion.p>
                            <motion.p  variants={animation}>{description}</motion.p>

                            <div className={style.tagContainer}>
                                {
                                    tags.map(tag => (<motion.div className={style.tag} key={tag}  variants={animation}>{tag}</motion.div>)
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className={style.cardDown}>
                        <motion.div  variants={animation} className={style.button}>
                            <a href={github_url}>
                                Github
                            </a> <AiFillGithub />
                        </motion.div>

                        <motion.div  variants={animation} className={style.button}>
                            <a href={deploy_url}>
                                Project
                            </a> <AiFillProject />
                        </motion.div>
                    </div>


                    <MdClose onClick={() => setShow(false)} className={style.icon} />
                </motion.div>
            }
        </>
    )
}

export default ProjectCard