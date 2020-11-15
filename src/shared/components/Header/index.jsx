import PropTypes from 'prop-types'
import classNames from 'classnames'
import logo from 'shared/assets/img/logo.png'
import { useParallax } from 'shared/customHooks'
import styles from './styles.module.scss'

const Header = ({ children, theme }) => {
  const transform = useParallax()
  const cx = classNames({
    [styles.header]: theme === 'primary',
    [styles.headerCustom]: theme === 'secondary',
  })
  return (
    <div className={cx} style={{ transform: transform }}>
      <img src={logo} alt="logo" />
      {children}
    </div>
  )
}

Header.defaultProps = {
  theme: 'primary',
}

Header.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.element,
}

export default Header
