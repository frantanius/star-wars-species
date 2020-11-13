import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import styles from './style.module.scss'

const GridContainer = ({ children, className, ...rest }) => (
  <Grid container {...rest} className={styles.gridContainer + ' ' + className}>
    {children}
  </Grid>
)

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default GridContainer
