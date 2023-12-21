import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import FunctionaliContext from '../Context/FunctionaliContext'

const LeftBar = () => (
  <FunctionaliContext.Consumer>
    {value => {
      const {lightMode} = value

      return (
        <>
          {lightMode ? (
            <div className="left-navbar-container">
              <ul className="menu-container">
                <li>
                  <Link to="/" className="list-option">
                    <AiFillHome className="menu-icon" />
                    <p className="menu-option">Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/trending" className="list-option">
                    <HiFire className="menu-icon" />
                    <p className="menu-option">Trending</p>
                  </Link>
                </li>
                <li>
                  <Link to="/gaming" className="list-option">
                    <IoLogoGameControllerB className="menu-icon" />
                    <p className="menu-option">Gaming</p>
                  </Link>
                </li>
                <li>
                  <Link to="/saved-videos" className="list-option">
                    <BiListPlus className="menu-icon" />
                    <p className="menu-option">Saved videos</p>
                  </Link>
                </li>
              </ul>
              <div className="contact-container">
                <h1 className="contact-heading">CONTACT US</h1>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="contact-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="contact-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="contact-logo"
                  />
                </div>
                <p className="contact-paragraph">
                  Enjoy! Now to see your channels and recommendations!
                </p>
              </div>
            </div>
          ) : (
            <div className="left-navbar-container-dark">
              <ul className="menu-container">
                <li>
                  <Link to="/" className="list-option">
                    <AiFillHome className="menu-icon-dark" />
                    <p className="menu-option-dark">Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/trending" className="list-option">
                    <HiFire className="menu-icon-dark" />
                    <p className="menu-option-dark">Trending</p>
                  </Link>
                </li>
                <li>
                  <Link to="/gaming" className="list-option">
                    <IoLogoGameControllerB className="menu-icon-dark" />
                    <p className="menu-option-dark">Gaming</p>
                  </Link>
                </li>
                <li>
                  <Link to="/saved-videos" className="list-option">
                    <BiListPlus className="menu-icon-dark" />
                    <p className="menu-option-dark">Saved videos</p>
                  </Link>
                </li>
              </ul>
              <div className="contact-container">
                <h1 className="contact-heading-dark">CONTACT US</h1>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="contact-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="contact-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="contact-logo"
                  />
                </div>
                <p className="contact-paragraph-dark">
                  Enjoy! Now to see your channels and recommendations!
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </FunctionaliContext.Consumer>
)
export default LeftBar
