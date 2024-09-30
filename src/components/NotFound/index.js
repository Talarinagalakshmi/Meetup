import {NotFoundContainer, Image, Heading, Text} from './styledComponent'

const NotFound = () => (
  <NotFoundContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page not Found</Heading>
    <Text>We are sorry, the page you requested could not be found</Text>
  </NotFoundContainer>
)
export default NotFound
