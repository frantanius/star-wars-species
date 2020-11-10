/* eslint-disable no-undef */
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import Styles from './styles.module.scss'

const SpeciesCard = ({ name, classification }) => (
  <Grid item xs={3}>
    <Card variant="outlined" className={Styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={classification}
          height="400"
          image={`${process.env.PUBLIC_URL}/img/${name}.jpg`}
          title={name}
        />
        <CardContent className={Styles.cardContent}>
          <Typography gutterBottom component="h6">
            {name}
          </Typography>
          <Typography component="p">Classification {classification}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
)

export default SpeciesCard

SpeciesCard.propTypes = {
  name: PropTypes.string.isRequired,
  classification: PropTypes.string,
}
