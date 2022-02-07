import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ConfigurationVariables from './utils/configuration';

// Connect Apollo Client to the app.
const client = new ApolloClient({
  uri: ConfigurationVariables.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <p>Test page</p>
      </>
    </ApolloProvider>
  );
};

export default App;
