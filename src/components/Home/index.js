import {Link} from 'react-router-dom'
import Header from '../Header'

import MeetContext from '../../context/MeetContext'

import {
  HomeContainer,
  Heading,
  SubText,
  Image,
  Description,
  Button,
} from './styledComponent'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <MeetContext.Consumer>
      {value => {
        const {userName, topic, isRegistered} = value
        return (
          <>
            <Header />
            {isRegistered === true ? (
              <HomeContainer>
                <Heading>Hello {userName}</Heading>
                <SubText>Welcome to {topic}</SubText>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Welcome to meetup</Heading>
                <Description>Please register for the topic</Description>
                <Link to="/register">
                  <Button onClick={onClickRegister}>Register</Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </>
        )
      }}
    </MeetContext.Consumer>
  )
}

export default Home
