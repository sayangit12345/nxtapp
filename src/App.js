import './App.css'

import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import VideoPlay from './components/VideoPlayContainer'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import FunctionaliContext from './components/Context/FunctionaliContext'

class App extends Component {
  state = {lightMode: true}

  changeTheme = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    return (
      <FunctionaliContext.Provider
        value={{
          lightMode,
          changeTheme: this.changeTheme,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/videos/:id" component={VideoPlay} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/gaming" component={Gaming} />
            <Route exact path="/saved-videos" component={SavedVideos} />
          </Switch>
        </BrowserRouter>
      </FunctionaliContext.Provider>
    )
  }
}

export default App
