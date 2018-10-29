const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString , 
    GraphQLInt
} = graphql

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        price: { type: GraphQLInt }
    })
})

module.exports = BookType;