import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import Header from 'shared/components/Header'
import Layout from 'shared/components/Layout'
import SearchBox from 'shared/components/SearchBox'
import SpeciesCard from 'shared/components/SpeciesCard'
import Grid from '@material-ui/core/Grid'
import ScrollToTop from 'shared/components/ScrollToTop'

const INIT_STATE = {
  isLoading: false,
  isError: false,
  payload: {},
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
        payload,
      }
    case 'SPECIES_FAILURE':
      return {
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

const Species = () => {
  const [state, dispatch] = useReducer(speciesReducer, INIT_STATE)
  const {
    isLoading,
    payload: { results },
  } = state

  const getAllSpecies = async () => {
    dispatch({ type: 'SPECIES_REQUEST' })
    try {
      const response = await axios.get('https://swapi.dev/api/species/')
      dispatch({ type: 'SPECIES_SUCCESS', payload: response.data })
    } catch (error) {
      dispatch({ type: 'SPECIES_FAILURE' })
    }
  }

  useEffect(() => {
    getAllSpecies()
  }, [])

  if (isLoading || !results) {
    return 'Loading...'
  }

  return (
    <>
      <Header title="STAR WARS">
        <SearchBox />
      </Header>
      <Layout>
        <Grid container spacing={3}>
          {results.map((item, key) => (
            <SpeciesCard key={key} {...item} />
          ))}
        </Grid>
      </Layout>
      <ScrollToTop />
    </>
  )
}

export default Species
