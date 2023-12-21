import './index.css'
import Cookies from 'js-cookie'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillDislike,
  AiFillLike,
} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Header from '../Header'
import LeftBar from '../LeftNavbar'
import FunctionaliContext from '../Context/FunctionaliContext'

class VideoPlay extends Component {
  state = {videoList: [], like: true, dislike: true}

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState(prevState => ({like: !prevState.like}))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({dislike: !prevState.dislike}))
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, option)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = {
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({videoList: fetchedData})
    }
  }

  render() {
    const {videoList, like, dislike} = this.state
    const {description, publishedAt, title, videoUrl, viewCount} = videoList

    return (
      <FunctionaliContext>
        {value => {
          const {lightMode} = value

          return (
            <div
              className={
                lightMode ? 'video-play-container' : 'video-play-container-dark'
              }
            >
              <Header />
              <div className="video-play-details-container">
                <LeftBar />
                <div className="video-play-description-details-container">
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="1200px"
                    height="500px"
                  />
                  <p
                    className={
                      lightMode ? 'video-description' : 'video-description-dark'
                    }
                  >
                    {title}
                  </p>
                  <div className="followers-and-like-container">
                    <div className="followers">
                      <p
                        className={
                          lightMode
                            ? 'followers-description'
                            : 'followers-description-dark'
                        }
                      >
                        {viewCount} views
                      </p>
                      <p
                        className={
                          lightMode
                            ? 'followers-description'
                            : 'followers-description-dark'
                        }
                      >
                        {publishedAt}
                      </p>
                    </div>
                    <div className="like-share-comment">
                      <div className="like-dislike">
                        {like ? (
                          <button
                            type="button"
                            aria-label="btc"
                            className="like-button"
                            onClick={this.onClickLike}
                          >
                            <AiOutlineLike
                              className={
                                lightMode
                                  ? 'followers-icon'
                                  : 'followers-icon-dark'
                              }
                            />
                          </button>
                        ) : (
                          <button
                            type="button"
                            aria-label="btc"
                            className="like-button"
                            onClick={this.onClickLike}
                          >
                            <AiFillLike
                              className={
                                lightMode
                                  ? 'followers-icon'
                                  : 'followers-icon-dark'
                              }
                            />
                          </button>
                        )}
                        <p
                          className={
                            lightMode
                              ? 'followers-details'
                              : 'followers-details-dark'
                          }
                        >
                          Like
                        </p>
                      </div>
                      <div className="like-dislike">
                        {dislike ? (
                          <button
                            type="button"
                            aria-label="btc"
                            className="like-button"
                            onClick={this.onClickDisLike}
                          >
                            <AiOutlineDislike
                              className={
                                lightMode
                                  ? 'followers-icon'
                                  : 'followers-icon-dark'
                              }
                            />
                          </button>
                        ) : (
                          <button
                            type="button"
                            aria-label="btc"
                            className="like-button"
                            onClick={this.onClickDisLike}
                          >
                            <AiFillDislike
                              className={
                                lightMode
                                  ? 'followers-icon'
                                  : 'followers-icon-dark'
                              }
                            />
                          </button>
                        )}
                        <p
                          className={
                            lightMode
                              ? 'followers-details'
                              : 'followers-details-dark'
                          }
                        >
                          Dislike
                        </p>
                      </div>
                      <div className="like-dislike">
                        <BiListPlus
                          className={
                            lightMode ? 'followers-icon' : 'followers-icon-dark'
                          }
                        />
                        <p
                          className={
                            lightMode
                              ? 'followers-details'
                              : 'followers-details-dark'
                          }
                        >
                          Save
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="hr-line" />
                  <div className="video-profile-container">
                    <div>
                      <p
                        className={
                          lightMode
                            ? 'followers-description'
                            : 'followers-description-dark'
                        }
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </FunctionaliContext>
    )
  }
}
export default VideoPlay
