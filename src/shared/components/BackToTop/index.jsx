import PropTypes from 'prop-types'
import { Fab, Zoom, useScrollTrigger } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import styles from './styles.module.scss'

const BackToTop = ({ window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={styles.scrollToTop}
      >
        <Fab
          className={styles.scrollToTopIcon}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  )
}

BackToTop.propTypes = {
  window: PropTypes.func,
}

export default BackToTop
