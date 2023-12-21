import './index.css'
import Header from '../Header'
import LeftBar from '../LeftNavbar'
import HomeVideos from '../HomeVideos'
import FunctionaliContext from '../Context/FunctionaliContext'

const Home = () => (
  <FunctionaliContext.Consumer>
    {value => {
      const {lightMode} = value

      return (
        <>
          {lightMode ? (
            <div className="home-container">
              <Header />
              <div className="home-navbar-video-container">
                <LeftBar />
                <HomeVideos />
              </div>
            </div>
          ) : (
            <div className="home-container-dark">
              <Header />
              <div className="home-navbar-video-container">
                <LeftBar />
                <HomeVideos />
              </div>
            </div>
          )}
        </>
      )
    }}
  </FunctionaliContext.Consumer>
)
export default Home
