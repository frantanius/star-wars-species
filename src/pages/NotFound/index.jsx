import { Link } from 'react-router-dom'
import Container from 'shared/components/Container'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
// import Header from 'shared/components/Header'

const NotFound = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" display="block" align="center" gutterBottom>
            404 Page not found
          </Typography>
          <Typography
            variant="subtitle2"
            display="block"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            We are sorry but the page you are looking for does not exist.
          </Typography>
          <br />
          <Link to="/">
            <HomeIcon color="action" />
          </Link>
        </div>
      </Container>
    </>
  )
}

export default NotFound
