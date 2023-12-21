import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import FunctionaliContext from '../Context/FunctionaliContext'

const Header = props => (
  <FunctionaliContext.Consumer>
    {value => {
      const {changeTheme, lightMode} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChagneTheme = () => {
        changeTheme()
      }

      return (
        <div
          className={lightMode ? 'navbar-container' : 'navbar-container-dark'}
        >
          <Link to="/" className="nav-link">
            <img
              src={
                lightMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="header logo"
              className="header-image"
            />
          </Link>
          <ul className="navbar-option-container">
            <li>
              <button
                type="button"
                aria-label="btc"
                className="theme-change-button"
                onClick={onChagneTheme}
              >
                <FaMoon
                  className={lightMode ? 'profile-image' : 'profile-image-dark'}
                />
              </button>
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile logo"
                className="profile-image"
              />
            </li>
            <li>
              <Popup
                modal
                trigger={
                  <button type="button" className="logout-button">
                    Logout
                  </button>
                }
                className="popup-content"
              >
                {close => (
                  <div className="popup-container">
                    <p className="popup-description">
                      Are you sure, you want to logout?
                    </p>
                    <div className="popup-button-container">
                      <button
                        type="button"
                        className="popup-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="popup-button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </li>
          </ul>
        </div>
      )
    }}
  </FunctionaliContext.Consumer>
)
export default withRouter(Header)
