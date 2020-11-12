import PropTypes from 'prop-types'
import { Alert } from '@material-ui/lab'

const Notification = ({ type, message }) => (
  <Alert severity={type}>{message}</Alert>
)

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
}

export default Notification
