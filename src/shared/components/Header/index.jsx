import PropTypes from 'prop-types'
import Styles from './styles.module.scss'

const Header = ({ title, children }) => {
  return (
    <div className={Styles.headerContainer}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}
