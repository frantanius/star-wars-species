import React, { useReducer, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import Header from 'shared/components/Header'
import Layout from 'shared/components/Layout'
import SearchBox from 'shared/components/SearchBox'
import SpeciesCard from 'shared/components/SpeciesCard'
import Grid from '@material-ui/core/Grid'
import ScrollToTop from 'shared/components/ScrollToTop'
import Spinner from 'shared/components/Spinner'
import useInfiniteScroll from 'shared/customHook/useInfiniteScroll'

const INIT_STATE = {
  isLoading: false,
  isError: false,
  payload: [],
}

const speciesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SPECIES_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'SPECIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        payload: state.payload.concat(payload),
      }
    case 'SPECIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

const Species = () => {
  const [state, dispatch] = useReducer(speciesReducer, INIT_STATE)
  const { isLoading, isError, payload } = state

  const loadMoreRef = useRef(null)
  const nextPage = useInfiniteScroll(loadMoreRef)

  const requestSpecies = useCallback((page, isError) => {
    if (page === 0 || isError) return
    dispatch({ type: 'SPECIES_REQUEST' })
    axios
      .get(`https://swapi.dev/api/species/?page=${page}`)
      .then(({ data: { results } }) => {
        dispatch({ type: 'SPECIES_SUCCESS', payload: results })
      })
      .catch((e) => {
        dispatch({ type: 'SPECIES_FAILURE' })
        return e
      })
  }, [])

  useEffect(() => {
    requestSpecies(nextPage, isError)
  }, [requestSpecies, nextPage, isError])
  console.log('nextPage', nextPage)
  return (
    <>
      <Header title="STAR WARS">
        <SearchBox />
      </Header>
      <Layout>
        <Grid container spacing={3}>
          {payload.map((item, key) => (
            <SpeciesCard key={key} {...item} />
          ))}
        </Grid>
        {isLoading && <Spinner />}
      </Layout>
      <ScrollToTop />
      <div ref={loadMoreRef} />
    </>
  )
}

export default Species
