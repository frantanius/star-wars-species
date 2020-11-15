import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestSpecies } from 'shared/actions/species'
import { listSpecies } from 'shared/reducers/species'
import { useInfiniteScroll } from 'shared/customHooks'
//Component
import Header from 'shared/components/Header'
import Container from 'shared/components/Container'
import GridContainer from 'shared/components/Grid/GridContainer'
import GridItem from 'shared/components/Grid/GridItem'
import SearchBox from 'shared/components/SearchBox'
import SpeciesCard from 'shared/components/SpeciesCard'
import BackToTop from 'shared/components/BackToTop'
import Spinner from 'shared/components/Spinner'
import Footer from 'shared/components/Footer'

const Species = () => {
  const dispatch = useDispatch()
  const { isLoading, payload } = useSelector(listSpecies)
  const loadMoreRef = useRef(null)
  const page = useInfiniteScroll(loadMoreRef)

  useEffect(() => {
    dispatch(requestSpecies(page))
  }, [dispatch, page])

  return (
    <>
      <Header>
        <SearchBox />
      </Header>
      <div id="back-to-top-anchor" />
      <Container>
        <GridContainer spacing={1}>
          {payload.map((item, key) => (
            <GridItem key={key} xs={12} sm={4} md={3}>
              <SpeciesCard {...item} />
            </GridItem>
          ))}
        </GridContainer>
        {isLoading && <Spinner />}
      </Container>
      <BackToTop />
      <div id="loadMore" ref={loadMoreRef} />
      <Footer />
    </>
  )
}

export default Species
