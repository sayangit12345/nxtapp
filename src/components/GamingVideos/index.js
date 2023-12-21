import './index.css'
import {Link} from 'react-router-dom'
import FunctionaliContext from '../Context/FunctionaliContext'

const GamingVideos = props => (
  <FunctionaliContext.Consumer>
    {value => {
      const {lightMode} = value

      const {gaminfVideoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = gaminfVideoDetails
      return (
        <li className="gaming-list-item">
          <Link to={`/videos/${id}`}>
            <img src={thumbnailUrl} alt="gaming-icon" className="gaming-icon" />
          </Link>
          <h1 className={lightMode ? 'gaming-heading' : 'gaming-heading-dark'}>
            {title}
          </h1>
          <p
            className={
              lightMode ? 'gaming-description' : 'gaming-description-dark'
            }
          >
            {viewCount} Watching Worldwide
          </p>
        </li>
      )
    }}
  </FunctionaliContext.Consumer>
)
export default GamingVideos
