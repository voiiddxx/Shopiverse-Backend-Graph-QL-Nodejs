const userResolvers = require("./userResolver")

module.exports = {
    Query:{
        ...userResolvers.Query
    }
}