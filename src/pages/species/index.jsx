import Header from 'shared/components/Header'
import Layout from 'shared/components/Layout'
import SearchBox from 'shared/components/SearchBox'
import SpeciesCard from 'shared/components/SpeciesCard'
import Grid from '@material-ui/core/Grid'
import ScrollToTop from 'shared/components/ScrollToTop'

const Species = () => {
  return (
    <>
      <Header title="Species">
        <SearchBox />
      </Header>
      <Layout>
        <Grid container spacing={2}>
          <SpeciesCard />
          <SpeciesCard />
          <SpeciesCard />
          <SpeciesCard />
        </Grid>
      </Layout>
      <ScrollToTop />
    </>
  )
}

export default Species
