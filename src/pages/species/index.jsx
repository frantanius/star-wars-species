import React, { useEffect, useReducer, useRef } from 'react'
import { INIT_STATE_SPECIES, speciesReducer } from 'shared/reducers/species'
import { INIT_STATE_SEARCH, searchReducer } from 'shared/reducers/search'
import { species_types } from 'shared/constants'
import axios from 'axios'
import Header from 'shared/components/Header'
import Layout from 'shared/components/Layout'
import SearchBox from 'shared/components/SearchBox'
import SpeciesCard from 'shared/components/SpeciesCard'
import Grid from '@material-ui/core/Grid'
import BackToTop from 'shared/components/BackToTop'
import Spinner from 'shared/components/Spinner'
import useInfiniteScroll from 'shared/customHook/useInfiniteScroll'

const Species = () => {
  const loadMoreRef = useRef(null)
  const nextPage = useInfiniteScroll(loadMoreRef)
  const [state, dispatch] = useReducer(speciesReducer, INIT_STATE_SPECIES)
  const [stateSearch, dispatchSearch] = useReducer(
    searchReducer,
    INIT_STATE_SEARCH,
  )
  const { isLoading, isError, payload } = state
  const { isLoadingSearch, searchResults } = stateSearch

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

  const data = searchResults.length ? searchResults : payload
  const isDataLoading = isLoadingSearch ? isLoadingSearch : isLoading

  return (
    <>
      <Header title="STAR WARS">
        <SearchBox dispatch={dispatchSearch} />
      </Header>
      <div id="back-to-top-anchor" />
      <Layout>
        <Grid container spacing={3}>
          {data.map((item, key) => (
            <SpeciesCard key={key} {...item} />
          ))}
        </Grid>
        {isDataLoading && <Spinner />}
      </Layout>
      <BackToTop />
      <div ref={loadMoreRef} />
    </>
  )
}

export default Species
