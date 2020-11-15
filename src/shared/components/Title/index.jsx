import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import styles from './style.module.scss'

const Title = ({ name, marginTop, marginBottom, ...restProps }) => {
  const style = {
    marginTop: `${marginTop}rem`,
    marginBottom: `${marginBottom}rem`,
  }
  return (
    <Typography
      variant="h3"
      className={styles.title}
      style={style}
      {...restProps}
    >
      {name}
    </Typography>
  )
}

Title.propTypes = {
  name: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  isLoading: PropTypes.bool,
}

export default Title
