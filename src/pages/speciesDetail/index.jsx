import { useSelector } from 'react-redux'
import { speciesDetail } from 'shared/reducers/speciesDetail'
import { findNWord } from 'shared/utils'
// Material UI component
import { List, ListItem, ListItemText } from '@material-ui/core'
import { MovieCreation, RecentActors, Info } from '@material-ui/icons'
// Component
import Title from 'shared/components/Title'
import Header from 'shared/components/Header'
import Container from 'shared/components/Container'
import ContentRaised from 'shared/components/ContentRaised'
import GridContainer from 'shared/components/Grid/GridContainer'
import GridItem from 'shared/components/Grid/GridItem'
import ImgRounded from 'shared/components/ImgRounded'
import Tabs from 'shared/components/Tabs'
import Footer from 'shared/components/Footer'

const SpeciesDetail = () => {
  const { payload } = useSelector(speciesDetail)
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
  } = payload
  const imgId = findNWord(url)

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
              <Title
                name={name}
                marginTop={-3}
                marginBottom={2}
                align="center"
              />
              <Tabs
                alignCenter
                color="warning"
                tabs={[
                  {
                    tabButton: 'Information',
                    tabIcon: Info,
                    tabContent: (
                      <GridContainer spacing={1} justify="center">
                        <GridItem xs={6} sm={4} md={4}>
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
                        <GridItem xs={6} sm={4} md={4}>
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
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: 'Films',
                    tabIcon: MovieCreation,
                    tabContent: (
                      <GridContainer spacing={1}>
                        {films &&
                          films.map((val, key) => {
                            let filmId = findNWord(val)
                            return (
                              <GridItem key={key} xs={6} sm={4} md={3}>
                                <ImgRounded
                                  src={`${process.env.PUBLIC_URL}/img/films/${filmId}.jpg`}
                                  type="gallery"
                                />
                              </GridItem>
                            )
                          })}
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: 'Characters',
                    tabIcon: RecentActors,
                    tabContent: (
                      <GridContainer spacing={1}>
                        {people &&
                          people.map((val, key) => {
                            let peopleId = findNWord(val)
                            return (
                              <GridItem key={key} xs={6} sm={4} md={3}>
                                <ImgRounded
                                  src={`${process.env.PUBLIC_URL}/img/characters/${peopleId}.jpg`}
                                  type="gallery"
                                />
                              </GridItem>
                            )
                          })}
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
