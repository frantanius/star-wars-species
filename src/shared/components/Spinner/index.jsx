/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { Backdrop, CircularProgress } from '@material-ui/core'
import styles from './styles.module.scss'

const Spinner = ({ isOpen }) => (
  <Backdrop className={styles.backdrop} open={isOpen}>
    <CircularProgress className={styles.backdropIcon} />
  </Backdrop>
)

Spinner.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default Spinner
