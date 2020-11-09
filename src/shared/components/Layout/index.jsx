import PropTypes from 'prop-types'
import { CssBaseline, Container } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">{children}</Container>
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
