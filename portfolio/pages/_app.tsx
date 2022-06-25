import SideBar from '../components/SideBar/SideBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <div className="container">
    <div className="sideBar">
      <SideBar />
    </div>
    <div className="main">
      <Component {...pageProps} />
    </div>
  </div>
  )
}

export default MyApp
