import PropTypes from 'prop-types'
import cx from 'classnames'
import Grid from '@material-ui/core/Grid'
import styles from './style.module.scss'

const GridItem = ({ children, className, ...rest }) => (
  <Grid item className={cx(styles.gridItem, className)} {...rest}>
    {children}
  </Grid>
)

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default GridItem
