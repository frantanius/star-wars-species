import PropTypes from 'prop-types'
import logo from 'shared/assets/img/logo.png'
import Styles from './styles.module.scss'

const Header = ({ children }) => {
  return (
    <div className={Styles.headerContainer}>
      <img src={logo} alt="logo" />
      {children}
    </div>
  )
}

Header.propTypes = {
  // title: PropTypes.string,
  children: PropTypes.element,
}

export default Header
