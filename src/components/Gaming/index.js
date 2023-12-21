import './index.css'
import {IoLogoGameControllerB} from 'react-icons/io'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import LeftBar from '../LeftNavbar'
import GamingVideos from '../GamingVideos'
import FunctionaliContext from '../Context/FunctionaliContext'

class Gaming extends Component {
  state = {gamingList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, option)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = data.videos.map(eachVideos => ({
        id: eachVideos.id,
        title: eachVideos.title,
        thumbnailUrl: eachVideos.thumbnail_url,
        viewCount: eachVideos.view_count,
      }))
      this.setState({gamingList: fetchedData})
    }
  }

  render() {
    const {gamingList} = this.state

    return (
      <FunctionaliContext.Consumer>
        {value => {
          const {lightMode} = value

          return (
            <div
              className={
                lightMode ? 'gaming-container' : 'gaming-container-dark'
              }
            >
              <Header />
              <div className="gaming-navbar-video-container">
                <LeftBar />
                <div className="trending-navbar">
                  <div
                    className={
                      lightMode
                        ? 'trending-heading-bar'
                        : 'trending-heading-bar-dark'
                    }
                  >
                    <button
                      type="button"
                      aria-label="btc"
                      className={
                        lightMode ? 'trending-button' : 'trending-button-dark'
                      }
                    >
                      <IoLogoGameControllerB
                        className={
                          lightMode ? 'trending-icons' : 'trending-icons-dark'
                        }
                      />
                    </button>
                    <h1
                      className={
                        lightMode
                          ? 'trending-headings'
                          : 'trending-headings-dark'
                      }
                    >
                      Gaming
                    </h1>
                  </div>
                  <ul className="gaming-videos-container">
                    {gamingList.map(eachItem => (
                      <GamingVideos
                        gaminfVideoDetails={eachItem}
                        key={eachItem.id}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        }}
      </FunctionaliContext.Consumer>
    )
  }
}
export default Gaming
