import PropTypes from 'prop-types'
import styles from './style.module.scss'

const Container = ({ children }) => (
  <div className={styles.containerFluid}>{children}</div>
)

export default Container

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
