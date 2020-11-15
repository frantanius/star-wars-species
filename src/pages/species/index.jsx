import { useEffect, useReducer, useRef } from 'react'
import { INIT_STATE_SPECIES, speciesReducer } from 'shared/reducers/species'
import { INIT_STATE_SEARCH, searchReducer } from 'shared/reducers/search'
import { species_types } from 'shared/constants'
import axios from 'axios'
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
  const loadMoreRef = useRef(null)
  const nextPage = useInfiniteScroll(loadMoreRef)
  const [state, dispatch] = useReducer(speciesReducer, INIT_STATE_SPECIES)
  const [stateSearch, dispatchSearch] = useReducer(
    searchReducer,
    INIT_STATE_SEARCH,
  )
  const { isError, payload, isLoading } = state
  const { searchResults, isLoadingSearch } = stateSearch

  useEffect(() => {
    if (nextPage === 0 || isError) return
    ;(async () => {
      dispatch({ type: species_types.SPECIES_REQUEST })
      try {
        const {
          data: { results },
        } = await axios.get(`${process.env.REACT_APP_API_URL}?page=${nextPage}`)
        dispatch({ type: species_types.SPECIES_SUCCESS, payload: results })
      } catch (error) {
        dispatch({ type: species_types.SPECIES_FAILURE })
        return error
      }
    })()
  }, [isError, nextPage, dispatch])

  const data = !searchResults.length ? payload : searchResults
  const isDataLoading = isLoading || isLoadingSearch

  return (
    <>
      <Header>
        <SearchBox dispatch={dispatchSearch} />
      </Header>
      <div id="back-to-top-anchor" />
      <Container>
        <GridContainer spacing={1}>
          {data.map((item, key) => (
            <GridItem key={key} xs={12} sm={4} md={3}>
              <SpeciesCard {...item} />
            </GridItem>
          ))}
        </GridContainer>
        {isDataLoading && <Spinner />}
      </Container>
      <BackToTop />
      <div id="loadMore" ref={loadMoreRef} />
      <Footer />
    </>
  )
}

export default Species
