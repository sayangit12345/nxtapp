import './index.css'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import FunctionaliContext from '../Context/FunctionaliContext'

const TrendingVideos = props => (
  <FunctionaliContext.Consumer>
    {value => {
      const {lightMode} = value

      const {trendingVideoDetails} = props
      const {
        id,
        title,
        publishedAt,
        thumbnailUrl,
        viewCount,
        channel,
      } = trendingVideoDetails
      return (
        <li className="trending-list-item">
          <Link to={`/videos/${id}`}>
            <img
              src={thumbnailUrl}
              alt="trending-icon"
              className="trending-icon"
            />
          </Link>
          <div className="trending-video-details">
            <h1
              className={
                lightMode ? 'trending-heading' : 'trending-heading-dark'
              }
            >
              {title}
            </h1>
            <p
              className={
                lightMode ? 'trending-description' : 'trending-description-dark'
              }
            >
              {channel.name}
            </p>
            <div className="tredning-followets-container">
              <p
                className={
                  lightMode
                    ? 'trending-description'
                    : 'trending-description-dark'
                }
              >
                {viewCount} views
              </p>
              <p
                className={
                  lightMode
                    ? 'trending-description'
                    : 'trending-description-dark'
                }
              >
                {formatDistanceToNow(new Date(publishedAt))} ago
              </p>
            </div>
          </div>
        </li>
      )
    }}
  </FunctionaliContext.Consumer>
)
export default TrendingVideos
