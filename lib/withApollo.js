import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(
    ({ ctx, headers, initialState }) =>
        new ApolloClient({
            uri: "http://134.209.81.47:1337/graphql",
            cache: new InMemoryCache().restore(initialState || {})
        })
);
