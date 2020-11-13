import Typography from '@material-ui/core/Typography'
import Container from 'shared/components/Container'
import Favorite from '@material-ui/icons/Favorite'
import styles from './style.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Typography className={styles.typography} variant="overline" gutterBottom>
        &copy; {1900 + new Date().getYear()}, made with{' '}
        <Favorite className={styles.icon} /> by{' '}
        <a
          href="https://github.com/frantanius"
          target="_blank"
          rel="noreferrer"
        >
          Frantanius sinulingga
        </a>{' '}
        for a better web.
      </Typography>
    </Container>
  </footer>
)

export default Footer
