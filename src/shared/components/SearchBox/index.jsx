import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { search_types } from 'shared/constants'
import { InputBase } from '@material-ui/core'
// import Container from 'shared/components/Container'
import GridContainer from 'shared/components/Grid/GridContainer'
import GridItem from 'shared/components/Grid/GridItem'
import Styles from './styles.module.scss'

const SearchBox = ({ dispatch }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!query) return
    ;(async () => {
      dispatch({ type: search_types.SEARCH_REQUEST })
      try {
        const {
          data: { results },
        } = await axios.get(`${process.env.REACT_APP_API_URL}?search=${query}`)

        if (!results.length) {
          dispatch({ type: search_types.SEARCH_FAILURE })
        } else {
          dispatch({
            type: search_types.SEARCH_SUCCESS,
            searchResults: results,
          })
        }
      } catch (error) {
        dispatch({ type: search_types.SEARCH_FAILURE })
        return error
      }
    })()
  }, [query, dispatch])

  return (
    <GridContainer justify="center">
      <GridItem xs={10} sm={8} md={6}>
        <div style={{ paddingTop: '2rem' }}>
          <InputBase
            className={Styles.searchBox}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search species..."
          />
        </div>
      </GridItem>
    </GridContainer>
  )
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default SearchBox
