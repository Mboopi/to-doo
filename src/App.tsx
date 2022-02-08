import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import ConfigurationVariables from './utils/configuration';
import Router from './router/router';

// Connect Apollo Client to the app.
const client = new ApolloClient({
  link: new HttpLink({
    uri: ConfigurationVariables.GRAPHQL_ENDPOINT,
    headers: {
      'x-hasura-admin-secret': ConfigurationVariables.X_HASURA_ADMIN_SECRET,
    },
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
