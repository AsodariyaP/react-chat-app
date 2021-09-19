import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import ChatList from './Components/ChatList';
import './App.css'


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphiql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return <ApolloProvider client={client}>
    <ChatList/>
  </ApolloProvider>;
}

export default App;
