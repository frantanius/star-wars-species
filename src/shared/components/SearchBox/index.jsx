import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchRequest } from 'shared/actions/search'
import { InputBase } from '@material-ui/core'
import GridContainer from 'shared/components/Grid/GridContainer'
import GridItem from 'shared/components/Grid/GridItem'
import styles from './styles.module.scss'

const SearchBox = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    setQuery(e.target.value)
    dispatch(searchRequest(e.target.value))
  }

  return (
    <GridContainer justify="center">
      <GridItem xs={10} sm={8} md={6}>
        <div style={{ paddingTop: '2rem' }}>
          <InputBase
            className={styles.searchBox}
            value={query}
            onChange={handleSearch}
            type="text"
            placeholder="Search species..."
          />
        </div>
      </GridItem>
    </GridContainer>
  )
}

export default SearchBox
