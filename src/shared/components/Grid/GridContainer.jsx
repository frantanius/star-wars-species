import PropTypes from 'prop-types'
import cx from 'classnames'
import Grid from '@material-ui/core/Grid'
import styles from './style.module.scss'

const GridContainer = ({ children, className, ...rest }) => (
  <Grid container className={cx(styles.gridContainer, className)} {...rest}>
    {children}
  </Grid>
)

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default GridContainer
