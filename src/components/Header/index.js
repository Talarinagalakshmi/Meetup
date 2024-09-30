import {Link} from 'react-router-dom'

import {Navbar, Image} from './styledComponent'

const Header = () => (
  <Navbar>
    <Link to="/">
      <Image
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
        alt="website logo"
      />
    </Link>
  </Navbar>
)

export default Header
