import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="container">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="main">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
