import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import MeetContext from './context/MeetContext'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    userName: '',
    topic: 'Arts and Culture',
    showError: false,
    isRegistered: false,
  }

  changeName = userName => {
    this.setState({userName})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {userName, topic, showError, isRegistered} = this.state

    return (
      <MeetContext.Provider
        value={{
          userName,
          topic,
          showError,
          isRegistered,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </MeetContext.Provider>
    )
  }
}
export default App
