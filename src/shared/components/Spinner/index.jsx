import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles.module.scss'

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}>
      <CircularProgress
        variant="determinate"
        className={styles.spinnerBottom}
        size={40}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={styles.spinnerTop}
        classes={{
          circle: styles.spinnerCircle,
        }}
        size={40}
        thickness={4}
      />
    </div>
  </div>
)

export default Spinner
