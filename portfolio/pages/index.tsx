import { GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import { IServices } from '../type'
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { motion } from 'framer-motion'
import style from '../styles/About.module.css'

const index = ({ services }) => {
  const Icons = [RiComputerLine, FaServer, AiOutlineApi, MdDeveloperMode, AiOutlineAntDesign, RiComputerLine]

  const outerAnimation = {
    initial: {
        
    },

    animate: {
      transition: {
        staggerChildren: 0.4
      }
    }
  }

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

  return (
    <div className={style.container}>
      <p className={style.description}>I am pursing B.Tech Degree(Final year) in computer science engineering from the University of Washington.
        I have +3 years of experience in web development and I have many certificates about the computer and web programming.
      </p>
      <h4 className={style.skillTitle}>What i can offer?</h4>
      <motion.div className={style.skillsContainer} initial="initial" animate="animate" variants={outerAnimation}>
        {
          services.map((service: IServices, index: number) =>
            <motion.div className={style.cardContainer} key={index} variants={animation}>
              <ServiceCard Icon={Icons[index]} service={service} />
            </motion.div>)
        }
      </motion.div>
    </div>
  )
}

export default index

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  return {
    props: {
      services: data
    }
  }
}