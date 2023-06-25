export const allFilmsQuery = gql`
  query allFilms {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`

export type AllFilms = {
  allFilms: {
    films: {
      title: string
      director: string
      releaseDate: string
      speciesConnection: {
        species: {
          name: string
          classification: string
          homeworld: {
            name: string
          }
        }
      }
    }[]
  }
}
