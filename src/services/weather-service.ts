import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const weatherApiClient = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com",
  cache: new InMemoryCache(),
});

const GET_CITY_BY_NAME_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          description
          icon
        }
        temperature {
          actual
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
      }
    }
  }
`;

export { weatherApiClient, GET_CITY_BY_NAME_QUERY };
