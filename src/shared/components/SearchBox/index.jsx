import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { search_types } from 'shared/constants'
import { Grid, InputBase } from '@material-ui/core'
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
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={5}>
        <InputBase
          className={Styles.searchBox}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search species..."
        />
      </Grid>
    </Grid>
  )
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default SearchBox
