import Cookies from 'js-cookie'
import './index.css'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {Component} from 'react'
import VideoItem from '../VideoItem'

class HomeVideos extends Component {
  state = {videoList: [], hide: true, searchInput: ''}

  componentDidMount() {
    this.getVideoDetails()
  }

  hideImage = () => {
    this.setState({hide: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchInput = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({videoList: fetchedData})
    }
  }

  render() {
    const {videoList, hide} = this.state
    return (
      <div className="video-plus-getit-container">
        <div className={hide ? 'getit-now-container' : 'hide-container'}>
          <div className="get-it-down-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="header logo"
              className="getit-image"
            />
            <p className="buy-description">
              Buy Nxt Watch Premium Prepaid Plans With Upi
            </p>
            <button type="button" className="get-it-button">
              GET IT NOW
            </button>
          </div>
          <button
            type="button"
            aria-label="btc"
            className="hide-button"
            onClick={this.hideImage}
          >
            <AiOutlineClose className="hide-icon" />
          </button>
        </div>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <button
            type="button"
            data-testid="searchButton"
            aria-label="btc"
            onClick={this.onClickSearchInput}
            className="search-button"
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
        <ul className="video-list-container">
          {videoList.map(eachMap => (
            <VideoItem key={eachMap.id} videoDetails={eachMap} />
          ))}
        </ul>
      </div>
    )
  }
}
export default HomeVideos
