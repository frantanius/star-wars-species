import { useState, useEffect } from 'react'
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField, CircularProgress, Grid } from '@material-ui/core'
import Styles from './styles.module.scss'

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

const SearchBox = () => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const isLoading = open && options.length === 0

  useEffect(() => {
    let active = true

    if (!isLoading) {
      return undefined
    }

    ;(async () => {
      const response = await axios(
        'https://country.register.gov.uk/records.json?page-size=5000',
      )

      await sleep(1e3) // For demo purposes.
      const { data } = response

      if (active) {
        setOptions(Object.keys(data).map((key) => data[key].item[0]))
      }
    })()

    return () => {
      active = false
    }
  }, [isLoading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={5}>
        <Autocomplete
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          getOptionSelected={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          options={options}
          loading={isLoading}
          renderInput={(params) => (
            <TextField
              {...params}
              className={Styles.searchBox}
              placeholder="Search species name..."
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading && (
                      <CircularProgress color="inherit" size={20} />
                    )}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  )
}

export default SearchBox
