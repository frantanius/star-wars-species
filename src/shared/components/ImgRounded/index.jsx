import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './style.module.scss'

const ImgRounded = ({ src, type, ...rest }) => {
  const cx = classnames({
    [styles.imgRounded]: type === 'rounded',
    [styles.imgGallery]: type === 'gallery',
  })
  return (
    <div className={cx}>
      <img src={src} alt={src} {...rest} />
    </div>
  )
}

ImgRounded.defaultProps = {
  type: 'rounded',
}

ImgRounded.propTypes = {
  type: PropTypes.oneOf(['rounded', 'gallery']),
  src: PropTypes.string,
}

export default ImgRounded
