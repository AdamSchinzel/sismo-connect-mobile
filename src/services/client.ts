import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { GRAPHQL_ENDPOINT } from "../config/constants";

const errorLink = onError(({ graphQLErrors, networkError, operation, response }) => {
  if (networkError) {
    console.error(networkError);
  }
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.error(
        "GQL ERROR | Operation:",
        operation.operationName,
        "| Variables:",
        operation.variables,
        "| Error response:",
        err
      );
    }
  }
});

export const client = new ApolloClient({
  link: from([
    errorLink,
    new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
  ]),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: "none",
      notifyOnNetworkStatusChange: true,
    },
  },
});
