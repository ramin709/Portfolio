import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign , AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {IProject, IServices , Category} from './type'
import {ISkill} from './type'


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
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text',
        icon: RiComputerLine
    }
]

export const skills: ISkill[] = [
    {
        name: 'HTML',
        level: '70%'
    },
    {
        name: 'CSS',
        level: '70%'
    },
    {
        name: 'JavaScript',
        level: '60%'
    },
    {
        name: 'ReactJS',
        level: '50%'
    },
    {
        name: 'TypeScript',
        level: '40%'
    },
    {
        name: 'Bootstrap',
        level: '60%'
    },
    {
        name: 'ExpressJS',
        level: '50%'
    },
    {
        name: 'NodeJS',
        level: '50%'
    },
]

export const tools: ISkill[] = [
    {
        name: 'Framer',
        level: '30%'
    },
    {
        name: 'Axios',
        level: '60%'
    },
    {
        name: 'Figma',
        level: '50%'
    },
    {
        name: 'Mongo', 
        level: '30%'
    },
]

export const projects: IProject[] = [
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/1.png",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/2.jpg",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/3.jpg",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/4.jpg",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/5.jpg",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/6.jpg",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/7.png",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/8.png",
        tags: ["ReactJs" , "Material_UI"]
    },
    {
        name: "new project",
        category: ['react'],
        deploy_url: "#",
        github_url: "https://github.com/ramin709?tab=repositories",
        description: "This project represents a hotel site which you can reserve as much room as you want for holiday",
        image_src: "/images/9.jpg",
        tags: ["ReactJs" , "Material_UI"]
    },
]