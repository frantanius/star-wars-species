import PropTypes from 'prop-types'
import styles from './style.module.scss'

const ContentRaised = ({ children }) => (
  <div className={styles.contentRaised}>{children}</div>
)

export default ContentRaised

ContentRaised.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
