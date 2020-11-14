import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { findNWord } from 'shared/utils'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import Styles from './styles.module.scss'

const SpeciesCard = ({ name, classification, url }) => {
  const history = useHistory()
  const urlId = findNWord(url)
  return (
    <Card onClick={() => history.push(urlId)} className={Styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={classification}
          src={`${process.env.PUBLIC_URL}/img/species/${urlId}.jpg`}
          title={name}
        />
        <CardContent className={Styles.cardContent}>
          <Typography gutterBottom component="h6">
            {name}
          </Typography>
          <Typography component="p">{classification}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default SpeciesCard

SpeciesCard.propTypes = {
  name: PropTypes.string.isRequired,
  classification: PropTypes.string,
}
