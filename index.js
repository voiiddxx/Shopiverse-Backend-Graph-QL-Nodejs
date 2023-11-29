const {ApolloServer} = require("apollo-server");
const typeDefs = require("./graphql/typedefs/typedef");
const resolvers = require("./graphql/resolvers/index");
require("dotenv").config();
const mongoose = require("mongoose");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) => ({req})
});

mongoose.connect(process.env.DATABASE).then((res)=>{
    console.log("Database Connected");
}).catch((e)=>{
    console.log(e);
})


server.listen({port:5000}).then((res)=>{
    console.log(`Server is live on ${res.url}`);
}).catch((error)=>{
    console.log(error);
})