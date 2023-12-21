import './index.css'
import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import LeftBar from '../LeftNavbar'

import FunctionaliContext from '../Context/FunctionaliContext'

const SavedVideos = () => (
  <FunctionaliContext.Consumer>
    {value => {
      const {lightMode} = value

      return (
        <div
          className={
            lightMode ? 'saved-videos-container' : 'saved-videos-container-dark'
          }
        >
          <Header />
          <div className="saved-videos-video-container">
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
                  <BiListPlus
                    className={
                      lightMode ? 'trending-icons' : 'trending-icons-dark'
                    }
                  />
                </button>
                <h1
                  className={
                    lightMode ? 'trending-headings' : 'trending-headings-dark'
                  }
                >
                  Saved Videos
                </h1>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </FunctionaliContext.Consumer>
)

export default SavedVideos
