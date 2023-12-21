import './index.css'

import {HiFire} from 'react-icons/hi'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import LeftBar from '../LeftNavbar'
import TrendingVideos from '../TrendingVideos'
import FunctionaliContext from '../Context/FunctionaliContext'

class Trending extends Component {
  state = {trendingList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: eachVideos.published_at,
        thumbnailUrl: eachVideos.thumbnail_url,
        viewCount: eachVideos.view_count,
        channel: {
          name: eachVideos.channel.name,
          profileImageUrl: eachVideos.channel.profile_image_url,
        },
      }))
      this.setState({trendingList: fetchedData})
    }
  }

  render() {
    const {trendingList} = this.state

    return (
      <FunctionaliContext.Consumer>
        {value => {
          const {lightMode} = value
          return (
            <div
              className={
                lightMode ? 'trending-container' : 'trending-container-dark'
              }
            >
              <Header />
              <div className="trending-navbar-video-container">
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
                      <HiFire
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
                      Trending
                    </h1>
                  </div>
                  <ul className="trending-videos-container">
                    {trendingList.map(eachItem => (
                      <TrendingVideos
                        trendingVideoDetails={eachItem}
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
export default Trending
