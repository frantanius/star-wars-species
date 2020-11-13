import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findNWord } from 'shared/utils'
import {
  GridList,
  GridListTile,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { MovieCreation, RecentActors, Info } from '@material-ui/icons'
import axios from 'axios'
import Header from 'shared/components/Header'
import Container from 'shared/components/Container'
import ContentRaised from 'shared/components/ContentRaised'
import GridContainer from 'shared/components/Grid/GridContainer'
import GridItem from 'shared/components/Grid/GridItem'
import ImgRounded from 'shared/components/ImgRounded'
import Tabs from 'shared/components/Tabs'
import Footer from 'shared/components/Footer'

const SpeciesDetail = () => {
  const { speciesId } = useParams()
  const [species, setSpecies] = useState({})
  const {
    name,
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    hair_colors,
    language,
    skin_colors,
    url,
    people,
    films,
  } = species
  const imgId = findNWord(url)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}${speciesId}`,
        )
        setSpecies(data)
      } catch (error) {
        return error
      }
    })()
  }, [speciesId])

  return (
    <>
      <Header />
      <ContentRaised>
        <Container>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <ImgRounded
                src={`${process.env.PUBLIC_URL}/img/species/${imgId}.jpg`}
                type="rounded"
              />
              <Typography
                variant="h3"
                component="h4"
                align="center"
                style={{ marginTop: '-4rem', marginBottom: '4rem' }}
              >
                {name}
              </Typography>
              <Tabs
                alignCenter
                color="warning"
                tabs={[
                  {
                    tabButton: 'Information',
                    tabIcon: Info,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <List>
                            <ListItem>
                              <ListItemText
                                primary="Average height"
                                secondary={average_height}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary="Average lifespan"
                                secondary={average_lifespan}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary="Classification"
                                secondary={classification}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary="Designation"
                                secondary={designation}
                              />
                            </ListItem>
                          </List>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <List>
                            <ListItem>
                              <ListItemText
                                primary="Eye colors"
                                secondary={eye_colors}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary="Hair colors"
                                secondary={hair_colors}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary="Skin colors"
                                secondary={skin_colors}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary="Language"
                                secondary={language}
                              />
                            </ListItem>
                          </List>
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: 'Films',
                    tabIcon: MovieCreation,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridList cols={4} cellHeight="auto" spacing="8">
                          {films &&
                            films.map((val, key) => {
                              let filmId = findNWord(val)
                              return (
                                <GridListTile key={key} cols={1}>
                                  <ImgRounded
                                    src={`${process.env.PUBLIC_URL}/img/films/${filmId}.jpg`}
                                    type="gallery"
                                  />
                                </GridListTile>
                              )
                            })}
                        </GridList>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: 'Characters',
                    tabIcon: RecentActors,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridList cols={4} cellHeight="auto" spacing="8">
                          {people &&
                            people.map((val, key) => {
                              let peopleId = findNWord(val)
                              return (
                                <GridListTile key={key} cols={1}>
                                  <ImgRounded
                                    src={`${process.env.PUBLIC_URL}/img/characters/${peopleId}.jpg`}
                                    type="gallery"
                                  />
                                </GridListTile>
                              )
                            })}
                        </GridList>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </Container>
      </ContentRaised>
      <Footer />
    </>
  )
}

export default SpeciesDetail
