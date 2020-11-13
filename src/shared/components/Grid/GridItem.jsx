import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import styles from './style.module.scss'

const GridItem = ({ children, className, ...rest }) => (
  <Grid item {...rest} className={styles.gridItem + ' ' + className}>
    {children}
  </Grid>
)

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default GridItem
