import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Styles from './styles.module.scss'

const Spinner = () => (
  <div className={Styles.spinnerContainer}>
    <CircularProgress
      variant="determinate"
      className={Styles.spinnerBottom}
      size={40}
      thickness={4}
      value={100}
    />
    <CircularProgress
      variant="indeterminate"
      disableShrink
      className={Styles.spinnerTop}
      classes={{
        circle: Styles.spinnerCircle,
      }}
      size={40}
      thickness={4}
    />
  </div>
)

export default Spinner
