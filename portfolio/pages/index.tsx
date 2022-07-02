import { GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import { IServices } from '../type'
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import style from '../styles/About.module.css'

const index = ({ services }) => {
  const Icons = [RiComputerLine, FaServer, AiOutlineApi, MdDeveloperMode, AiOutlineAntDesign, RiComputerLine]
  return (
    <div className={style.container}>
      <p className={style.description}>I am pursing B.Tech Degree(Final year) in computer science engineering from the University of Washington.
        I have +3 years of experience in web development and I have many certificates about the computer and web programming.
      </p>
        <h4 className={style.skillTitle}>What i can offer?</h4>
      <div className={style.skillsContainer}>
        {
          services.map((service: IServices, index: number) => 
          <div className={style.cardContainer}>
            <ServiceCard Icon={Icons[index]} service={service} />
          </div>)
        }
      </div>
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