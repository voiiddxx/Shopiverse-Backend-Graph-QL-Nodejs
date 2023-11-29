const {ApolloServer} = require("apollo-server");
const typeDefs = require("./graphql/typedefs/typedef");
const resolvers = require("./graphql/resolvers/index");
require("dotenv").config();


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) => ({req})
});

server.listen({port:5000}).then((res)=>{
    console.log(`Server is live on ${res.url}`);
}).catch((error)=>{
    console.log(error);
})