import { Grid, Card, CardContent, Typography } from '@material-ui/core'

const SpeciesCard = () => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be lent
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SpeciesCard
