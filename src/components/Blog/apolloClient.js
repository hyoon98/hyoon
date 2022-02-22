import { ApolloClient, InMemoryCache } from "@apollo/client";

const client= new ApolloClient({
    uri:"https://api-us-west-2.graphcms.com/v2/ckzrgtwyl0xrw01z4gr8fec5h/master",
    cache:new InMemoryCache()
});

export default client;