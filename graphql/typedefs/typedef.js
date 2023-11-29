const {gql} = require("apollo-server");


const typeDefs = gql`
type Query{
    sayhi: String!
}
`


module.exports = typeDefs;