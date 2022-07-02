import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign , AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {IServices} from './type'


export const servieces: IServices[] = [
    {
        title: 'Frontend development',
        about: 'I can build beautiful and scaleable single page applications using HTML , CSS , JavaScript , React.js and bootstrap.',
        icon: RiComputerLine
    },
    {
        title: 'Backend development',
        about: 'Handle databases like MongoDB and MySQL, Code server side and developing Api using Express.js and Node.js',
        icon: FaServer
    },
    {
        title: 'Api development',
        about: 'I can develope Restful Api and work with libraries which provide a RESTful API like axios and more.',
        icon: AiOutlineApi
    },
    {
        title: 'Compatitive Coder',
        about: 'A daily problem solver in famous sites like CodeWars, Code Leer , HackerRank and so on.',
        icon: MdDeveloperMode
    },
    {
        title: 'UI/UX development',
        about: 'Stunning user interface designer using Framer and Figma and a professional user experience developer',
        icon: AiOutlineAntDesign
    },
    {
        title: 'Whatever',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: RiComputerLine
    }
]