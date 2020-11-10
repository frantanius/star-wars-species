import PropTypes from 'prop-types'
import { CssBaseline, Container } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
