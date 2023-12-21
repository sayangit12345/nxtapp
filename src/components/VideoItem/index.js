import './index.css'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import FunctionaliContext from '../Context/FunctionaliContext'

const VideoItem = props => (
  <FunctionaliContext.Consumer>
    {value => {
      const {lightMode} = value

      const {videoDetails} = props
      const {
        id,
        title,
        publishedAt,
        thumbnailUrl,
        viewCount,
        channel,
      } = videoDetails
      return (
        <li className="video-list-items">
          <Link to={`/videos/${id}`}>
            <img src={thumbnailUrl} alt="video-icon" className="video-image" />
          </Link>
          <div className="video-description-container">
            <div className="profile-description-container">
              <img
                src={channel.profileImageUrl}
                alt="profile-icon"
                className="profile-image"
              />
              <div>
                <p
                  className={
                    lightMode
                      ? 'profile-description'
                      : 'profile-description-dark'
                  }
                >
                  {title}
                </p>
                <p
                  className={
                    lightMode
                      ? 'profile-description'
                      : 'profile-description-dark'
                  }
                >
                  {channel.name}
                </p>
                <div className="followers-container">
                  <p
                    className={
                      lightMode ? 'profile-views' : 'profile-views-dark'
                    }
                  >
                    {viewCount} views
                  </p>
                  <p
                    className={
                      lightMode
                        ? 'profile-description'
                        : 'profile-description-dark'
                    }
                  >
                    {formatDistanceToNow(new Date(publishedAt))} ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      )
    }}
  </FunctionaliContext.Consumer>
)
export default VideoItem
