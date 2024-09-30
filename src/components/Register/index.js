import Header from '../Header'
import MeetContext from '../../context/MeetContext'

import {
  RegisterContainer,
  Image,
  Form,
  InputContainer,
  Label,
  Input,
  Heading,
  Select,
  Button,
  ErrorMessage,
} from './styledComponent'

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

const Register = props => (
  <MeetContext.Consumer>
    {value => {
      const {
        userName,
        topic,
        showError,
        changeName,
        changeTopic,
        registerName,
        updateError,
      } = value

      const submitForm = event => {
        event.preventDefault()

        if (userName !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }
      const onChangeNmae = event => {
        changeName(event.target.value)
      }
      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      return (
        <>
          <Header />
          <RegisterContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Form onSubmit={submitForm}>
              <Heading>Let us join</Heading>
              <InputContainer>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={userName}
                  onChange={onChangeNmae}
                  placeholder="Your name"
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="topics">Topics</Label>
                <Select id="topics" value={topic} onChange={onChangeTopic}>
                  {topicsList.map(eachTopic => (
                    <option value={eachTopic.id} key={eachTopic.id}>
                      {eachTopic.displayText}
                    </option>
                  ))}
                </Select>
              </InputContainer>
              <Button type="submit">Register Now</Button>
            </Form>
          </RegisterContainer>
          {showError === true ? (
            <ErrorMessage>Please enter your name</ErrorMessage>
          ) : (
            ''
          )}
        </>
      )
    }}
  </MeetContext.Consumer>
)
export default Register
